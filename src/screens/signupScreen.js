import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import "./signupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = function (e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const SignIn = function (e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup_screen">
      <form>
        <h1>sign In</h1>
        <input ref={emailRef} type={"email"} placeholder="Email" />
        <input ref={passwordRef} type={"password"} placeholder="Password" />
        <button type="submit" onClick={register}>
          Sign In
        </button>
        <h4>
          {" "}
          <span className="signupScreen_grey">New to Netflix</span>
          <span className="signupScreen_link" onClick={SignIn}>
            {" "}
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}
export default SignupScreen;
