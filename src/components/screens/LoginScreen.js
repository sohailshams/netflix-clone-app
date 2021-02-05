import React from 'react';
import logo from '../../images/netflix-image.png';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className="loginScreen">
        <div className="loginScreen__background">
            <img className="loginScreen__logo" src={logo} alt="image"/>
            <button className="loginScreen__button">Sign In</button>
            <div className="loginScreen__gradient" />
        </div>
        <div className="loginScreen__body">
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready ro watch? Enter Your email to create or
              restart membership.
          </h3>
          <div className="loginScreen__input">
              <form>
                  <input type="email" placeholder="Email Address"/>
                    <button className="loginScreen__getStarted">
                        GET STARTED
                    </button>
              </form>
          </div>
        </div>
    </div>
  );
}

export default LoginScreen;
