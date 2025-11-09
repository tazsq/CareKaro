import React, { useState } from "react";

import Navbar from "@/components/Navbar";

// Single static image URL for the sidebar
const STATIC_IMAGE_URL =
  "https://i.ibb.co/6JmtDfz4/Gemini-Generated-Image-flb9qdflb9qdflb9.png";

function Signup() {
  // State for multi-step form (Starts at Step 1)
  const [step, setStep] = useState(1);

  // State to hold all form data
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    bloodGroup: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Validation check for Step 1
  const isStepOneValid =
    formData.fullname.trim() !== "" &&
    formData.phone.trim().length >= 10 &&
    formData.email.includes("@");

  // Move from Step 1 to Step 2
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isStepOneValid) {
      setStep(2);
    } else {
      console.error("Please fill in all required fields correctly for Step 1.");
    }
  };

  // Final form submission (only on Step 2)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }

    console.log("Form Submitted:", formData);
    console.log("SUCCESS: Account Created Successfully! Data sent to console.");
  };

  // Base classes for inputs
  const inputClasses =
    "w-full px-4 py-2.5 my-2 text-base text-gray-800 bg-gray-100 rounded-lg border-none transition-all duration-300 ease-in-out placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#73cfb8]";

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full min-h-screen font-sans bg-gradient-to-r from-[#d9e2d9] to-[#f2f7f5] py-10 px-4">
        <div className="flex w-full max-w-5xl bg-white/90 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* LEFT - Static Image (Replaced Slideshow) */}
          <div className="relative flex-1 hidden md:block">
            <img
              src={STATIC_IMAGE_URL}
              alt="Medical Healthcare Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT - form: Conditional rendering based on step */}
          <form
            className="flex-1 flex flex-col justify-start p-8 md:p-10 text-gray-800 overflow-y-auto max-h-[90vh]"
            onSubmit={step === 2 ? handleSubmit : (e) => e.preventDefault()}
          >
            <h2 className="mb-5 text-3xl font-bold text-center text-[#2b6777]">
              Create Account
            </h2>

            {/* --- STEP 1: Personal Info (First 3 Questions) --- */}
            {step === 1 && (
              <>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Enter your full name"
                    required
                    className={inputClasses}
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                    className={inputClasses}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Continue Button */}
                <button
                  type="button" // Use type="button" to prevent form submission
                  onClick={handleNext}
                  // Button enabled/disabled based on validation
                  disabled={!isStepOneValid}
                  className={`w-full p-3 mt-6 text-base text-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                    isStepOneValid
                      ? "bg-gradient-to-r from-[#73cfb8] to-[#4cb69c] hover:from-[#4cb69c] hover:to-[#73cfb8]"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue
                </button>
              </>
            )}

            {/* --- STEP 2: Security & Health Info (Remaining Questions) --- */}
            {step === 2 && (
              <>
                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Set Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    required
                    className={inputClasses}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Re-enter password"
                    required
                    className={inputClasses}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>

                {/* Blood Group */}
                <div>
                  <label
                    htmlFor="bloodGroup"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Blood Group
                  </label>
                  <select
                    id="bloodGroup"
                    className={inputClasses}
                    required
                    value={formData.bloodGroup}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select your blood group
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                {/* Back and Submit Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 p-3 text-base text-[#2b6777] rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all duration-300 ease-in-out"
                  >
                    &larr; Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 p-3 text-base text-white rounded-lg cursor-pointer bg-gradient-to-r from-[#73cfb8] to-[#4cb69c] hover:from-[#4cb69c] hover:to-[#73cfb8] transition-all duration-300 ease-in-out"
                  >
                    Submit Account
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
