import React, { Fragment, useState } from "react";
import "./loginScreen.css";
import SignupScreen from "./signupScreen";

function LoginScreen() {
  const [SignIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen_logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign in
        </button>
        <div className="loginScreen-gradient" />
        <div className="loginScreen_body">
          {SignIn ? (
            <SignupScreen />
          ) : (
            <Fragment>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen_getstarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
