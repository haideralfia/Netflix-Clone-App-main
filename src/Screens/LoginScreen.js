import React, { useState } from "react";
import Footer from "../Footer";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="black">
      <div className="loginScreen">
        <div className="loginScreen__background">
          <img
            className="loginScreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <button
            onClick={() => setSignIn(true)}
            className="loginScreen__button"
          >
            Sign In
          </button>
          <div className="loginScreen__gradient"></div>
        </div>
        <div>
          <div className="loginScreen__body">
            {signIn ? (
              <SignUpScreen />
            ) : (
              <>
                <h1>Unlimited films, TV Programmes and more.</h1>
                <h3>Watch anywhere. Cancle at any time.</h3>
                <h4>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h4>
                <h4>
                  This is a fake App. Please don't put your real mail and
                  password.
                </h4>
                <div className="loginScreen__input">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button
                      onClick={() => setSignIn(true)}
                      className="loginScreen__getStarted"
                    >
                      GET STARTED
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginScreen;
