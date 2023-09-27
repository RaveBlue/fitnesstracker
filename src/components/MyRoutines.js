import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const MyRoutines = (props) => {
  const { routines, setRoutines, token, setToken, user } = props;
  async function fetchMyRoutines() {
    try {
      const response = await fetch(`${BASE_URL}/api/users/${user}/routines`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      setRoutines(result);
      console.log(result);
    } catch (error) {
      console.log("failed to get user's routines");
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMyRoutines();
  }, []);

  return (
    <>
      <h1>My Routines</h1>
      {token ? (
        <div>
          <Link to="/CreateRoutine">
            <button className="inputButton">Create Routine</button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default MyRoutines;
