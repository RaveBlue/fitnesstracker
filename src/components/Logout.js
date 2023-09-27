import React from "react";
import { Link } from "react-router-dom";

function Logout(props) {
  const { setToken, setUsername } = props;

  function deleteUserData() {
    setToken("");
    localStorage.setItem("user-token", "");
    localStorage.setItem("user-username", "");
    setUsername("");
  }

  deleteUserData();

  return (
    <>
      <Link to={"/Home"} />
    </>
  );
}

export default Logout;
