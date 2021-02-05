import React from 'react';
import logo from '../../images/netflix-image.png';
import './LoginScreen.css';

function LoginScreen() {
  return (
  <div className="loginScreen">
      <div className="loginScreen__background">
          <img className="loginScreen__logo" src={logo} alt="image"/>
      </div>

  </div>
  );
}

export default LoginScreen;
