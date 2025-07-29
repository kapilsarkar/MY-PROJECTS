import Header from "./Header";
import bgImg from "../images/netFlixBg.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-full">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Netflix background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form className="w-11/12 sm:w-2/3 md:w-1/3 lg:w-1/4 p-8 sm:p-10 text-white bg-black bg-opacity-80 rounded-lg">
          <h1 className="font-bold text-2xl sm:text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <input
            type="email"
            placeholder="Email address"
            className="p-3 my-3 w-full bg-gray-700 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-700 rounded-sm"
          />

          <button className="p-3 my-4 bg-red-600 hover:bg-red-700 transition font-semibold w-full rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-2 text-gray-300 text-sm sm:text-base">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}
            <span
              className="text-white font-bold ml-1 cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in."}
            </span>
          </p>

          <p className="py-2 text-gray-400 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login