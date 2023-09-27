import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchLoginResults } from "../api";
import "./Login.css";

const Login = (props) => {
  const { token, setToken, username, setUsername, password, setPassword } =
    props;

  const navigate = useNavigate();

  const userSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await fetchLoginResults(username, password);
      console.log(result);
      if (result.message === "you're logged in!") {
        // localStorage.setItem("user-token", result.token);
        // localStorage.setItem("user-username", username);
        setToken(result.token);
        // setIsLoggedIn(true);
        navigate("/Home");
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form className="login-form" id="userQuery" onSubmit={userSubmit}>
        <input
          className="usernameLogin"
          type="text"
          reqiuired
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          className="passwordLogin"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button className="loginbttn" type="submit">
          Login!
        </button>
      </form>
    </div>
  );
};

export default Login;
