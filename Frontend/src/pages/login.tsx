import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

// Define the images for the slideshow
const slideImages = [
  "https://static.vecteezy.com/system/resources/previews/024/644/487/non_2x/medical-shield-on-hand-icon-related-to-health-care-two-tone-icon-style-design-simple-design-editable-vector.jpg",
  "https://static.vecteezy.com/system/resources/previews/007/813/447/non_2x/health-insurance-concept-big-clipboard-with-document-on-it-under-the-umbrella-illustration-vector.jpg",
  "https://img.freepik.com/free-vector/cardio-exercising-healthy-lifestyle-heart-disease-prevention-healthcare-cardiology-healthy-eating-workout-health-diagnostics_335657-3457.jpg?semt=ais_hybrid&w=740&q=80",
];

function Login() {
  // Line 11: useState call - the source of the hook error
  const [current, setCurrent] = useState(0);

  // Effect for handling the slideshow interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slideImages.length);
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  // Base classes for inputs, DRY up the code
  const inputClasses =
    "w-full px-4 py-3 my-2 text-base text-gray-800 bg-gray-100 rounded-lg border-none transition-all duration-300 ease-in-out placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a18cd1]";

  return (
    // This div replaces the <body> styling for centering the component
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full h-screen font-sans bg-white">
        <div className="flex w-full max-w-4xl h-[500px] bg-black/60 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* LEFT - slideshow image */}
          <div className="relative flex-1 hidden md:block">
            {" "}
            {/* 'hidden md:block' hides on mobile */}
            {slideImages.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt="Slideshow"
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* RIGHT - form */}
          <form className="flex-1 flex flex-col justify-center p-10 bg-[#181818] text-white">
            <h2 className="mb-5 text-3xl font-bold text-center">Welcome</h2>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your Password"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-white"
              >
                Select Role
              </label>
              <select id="role" className={inputClasses}>
                <option value="patient">Patient</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-4 text-base text-white rounded-lg cursor-pointer bg-[#73cfb8] hover:bg-[#4cb69c] transition-all duration-300 ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
