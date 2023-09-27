import React from "react";
import { Link } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const CreateActivity = (props) => {
  const { token, name, setName, description, setDescription } = props;

  async function createActivity() {
    try {
      const response = await fetch(`${BASE_URL}/api/activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });

      const result = await response.json();
      if (result.error) {
        alert(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      className="inputformcontainer"
      onSubmit={(event) => {
        setName("");
        setDescription("");
        event.preventDefault();
      }}
    >
      <div className="inputForm">
        <input
          className="inputfield"
          placeholder="enter new activity here"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="inputfield"
          placeholder="enter activity description here"
          onChange={(event) => setDescription(event.target.value)}
        />

        <Link to="/activities">
          <button className="activitybutton" onClick={createActivity}>
            Create
          </button>
        </Link>
      </div>
    </form>
  );
};

export default CreateActivity;
