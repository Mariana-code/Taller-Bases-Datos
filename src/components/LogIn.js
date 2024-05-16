import React, { useState } from "react";
import { signIn, signUp } from "../Utils/Auth"; // Import signIn and signUp functions
import App from "../App";

const Login = () => {
  // State variables for email, password, error, login/signup mode, and login status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler function for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isLogin) {
        // Sign in user using the signIn function
        await signIn(email, password);
      } else {
        // Create new user using the signUp function
        await signUp(email, password);
      }
      setEmail("");
      setPassword("");
      setError(null);
      setIsLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  // If user is logged in, render the Home component
  if (isLoggedIn) {
    return <App />;
  }

  // Render login/signup form
  return (
    <div>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
      </p>
    </div>
  );
};

export default Login;
