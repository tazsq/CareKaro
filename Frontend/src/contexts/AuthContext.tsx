import { signInWithPopup, signOut as firebaseSignOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../services/firebase.ts";
const AuthContext = createContext(null);
export function useAuthContext() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Firebase auth state changed:", user);
      setUser(user);
    });
    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     console.log(user);
  //     setUser(user);
  //   });
  //   return unsubscribe;
  // }, []);
  // useEffect(() => {
  //   getRedirectResult();
  // }, []);
  // const getRedirectResult = async () => {
  //   try {
  //     const result = await getRedirectResult(auth);
  //     console.log(result);
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = googleAuthProvider.credentialFromError(error);
  //   }
  // };
  const signinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      console.log("✅ Logged in user:", user);
      setUser(user);
      // You can access user.displayName, user.email, user.photoURL
    } catch (error) {
      setUser(null);
      console.error("❌ Login error:", error);
    }
  };
  async function signOut() {
    try {
      await firebaseSignOut(auth);
      console.log("🚪 User signed out");
      setUser(null);
    } catch (error) {
      console.error("❌ Sign-out error:", error);
    }
  }
  const value = {
    user,
    signinWithGoogle,
    setUser,
    signOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
