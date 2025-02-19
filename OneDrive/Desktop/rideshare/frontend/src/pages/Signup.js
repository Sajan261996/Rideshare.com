import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button>Create Account</button>
        <p className="signup-message">Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;