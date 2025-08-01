import Header from "./Header";
import bgImg from "../images/netFlixBg.jpg";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const mobile = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the Form data
    const emailVal = email.current?.value || "";
    const passwordVal = password.current?.value || "";
    const nameVal = name.current?.value || "";
    const mobileVal = mobile.current?.value || "";

    const message = checkValidateData(
      emailVal,
      passwordVal,
      nameVal,
      mobileVal
    );
    setErrorMessage(message);

    if (message) return;

    // Sign In / Sign Up Logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 sm:w-2/3 md:w-1/3 lg:w-1/4 p-8 sm:p-10 text-white bg-black bg-opacity-80 rounded-lg"
        >
          <h1 className="font-bold text-2xl sm:text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 w-full bg-gray-700 rounded-sm"
            />
          )}
          {!isSignInForm && (
            <input
              ref={mobile}
              type="number"
              placeholder="Mobile Number"
              className="p-3 my-3 w-full bg-gray-700 rounded-sm"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="p-3 my-3 w-full bg-gray-700 rounded-sm"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-700 rounded-sm"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-3 my-4 bg-red-600 hover:bg-red-700 transition font-semibold w-full rounded-sm"
            onClick={handleButtonClick}
          >
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
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
