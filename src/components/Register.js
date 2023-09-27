import React, { useState } from "react";
import { fetchRegisterResults } from "../api";

const Register = (props) => {
  const { token, setToken, username, setUsername, password, setPassword } =
    props;

  const userSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetchRegisterResults(username, password);
      if (result.message === "you're signed up!") {
        localStorage.setItem("token", result.token);

        console.log(result);
        setToken(result.token);
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <form id="newUser" onSubmit={userSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default Register;
