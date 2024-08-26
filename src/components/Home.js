import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const githubLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  // Style object for centering content
  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // This takes the full height of the viewport
  };

  return (
    <div style={centerStyle}>
      <h2>Welcome to the OAuth Demo</h2>
      <button
        onClick={googleLogin}
        style={{ margin: "10px", fontSize: "16px", padding: "10px" }}
      >
        <div>
          <FcGoogle />
          Login with Google
        </div>
      </button>
      <button
        onClick={githubLogin}
        style={{ margin: "10px", fontSize: "16px", padding: "10px" }}
      >
        <div>
          <FaGithub />
          Login with GitHub
        </div>
      </button>
    </div>
  );
};

export default Home;
