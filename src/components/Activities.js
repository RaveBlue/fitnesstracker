import React, { useEffect } from "react";
//import { ReactDOM } from "react-dom";
import "./Activities.css";
import { Link } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const Activities = (props) => {
  const { activities, setActivities, token, setToken } = props;

  async function fetchActivities() {
    try {
      const response = await fetch(`${BASE_URL}/api/activities`, {});
      const result = await response.json();
      if (result.error) throw result.error;
      setActivities(result);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      <h1 className="pageTitle">Activities List</h1>
      <div>
        {token ? (
          <div>
            <Link to="/CreateActivity">
              <button className="inputButton">Create Activity</button>
            </Link>
          </div>
        ) : null}
        <ul className="activityContainer">
          {activities.map((activity) => {
            return (
              <li className="singleActivity" key={activity.name}>
                <b>{activity.name}</b>
                <p>{activity.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Activities;
