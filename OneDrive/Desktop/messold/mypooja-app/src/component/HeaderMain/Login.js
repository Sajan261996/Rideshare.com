import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form className="login-form">
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="EMAIL" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="PASSWORD" required />
        </div>
        <a href="#" className="forgot-password">Forgot your password?</a><br></br>
        <button type="submit" className="login-button">SIGN IN</button><br></br>
        <a href="#" className="create-account">Create account</a>
      </form>
    </div>
  );
}

export default Login;
