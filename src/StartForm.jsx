import { useState } from "react";
import Header from "./components/Header";
import SignUpFormContent from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

function SignUpForm() {
  const [isSignUp, setIsSignUp] = useState(true); // This controls whether we show the sign-up or log-in form

  return (
    <>
      <div 
        className={`backdrop-blur-5xl bg-white/3 py-5 pr-4 pl-20 md:pr-10 xl:pl-100 rounded-r-4xl max-w-auto transition-transform duration-500 ${
          isSignUp ? "transform" : "-translate-x-full"
        }`}
      >
        <Header />
        <div className="text-center pb-3">
            <h1 className="text-5xl pb-3">Sign Up</h1>
        </div>
        <SignUpFormContent />
        <div className="text-center">
            <a href="#" onClick={() => setIsSignUp(false)}>
            Already a user?
            </a>
        </div>
      </div>

      <div
        className={`backdrop-blur-2xl bg-white/3 py-10 pr-20 pl-4 md:pl-10 xl:pr-100 rounded-l-4xl max-w-6xl fixed right-0 transform transition-transform duration-500 ${
          !isSignUp ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Header />
        <div className="text-center pb-3">
            <h1 className="text-5xl pb-3">Log In</h1>
        </div>
        <LoginForm />
        <div className="text-center">
            <a href="#" onClick={() => setIsSignUp(true)}>
            Need an Account?
            </a>
        </div>

      </div>
    </>
  );
}

export default SignUpForm;
