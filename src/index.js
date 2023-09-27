import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import "./Activities.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Link,
  //useNavigate,
} from "react-router-dom";
import {
  Activities,
  Home,
  Login,
  MyRoutines,
  Register,
  Routines,
  CreateActivity,
  CreateRoutine,
} from "./components";

//import { fetchUserData } from "./api";

export const TOKEN_STORAGE_KEY = "user-token";
export const USER_STORAGE_KEY = "user-username";
const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
const savedUser = localStorage.getItem(USER_STORAGE_KEY);

const App = () => {
  const [token, setToken] = useState(savedToken);
  const [username, setUsername] = useState(savedUser);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [password, setPassword] = useState("");
  const [goal, setGoal] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  // async function fetchUser() {
  //   const savedToken = localStorage.getItem(token)
  //   if (savedToken) {
  //       setToken(savedToken);
  //       setIsLoggedIn(true);
  //       const userData = await fetchUserData (savedToken);
  //       console.log(userData);
  //   };}

  // useEffect(() => {
  //   fetchUser();
  //   }, []);

  return (
    <BrowserRouter>
      <header className="headerContainer">
        <h1 className="fitnessTitle">Fitness Tracker</h1>
        <div className="headerLinks">
          <Link to="/Home">Home</Link>
          <Link to="/Activities">Activities</Link>
          <Link to="/Routines">Routines</Link>
          <Link to="/MyRoutines">My Routines</Link>
          {token ? (
            <button>Log Out</button>
          ) : (
            <div>
              <span>
                <button className="loginButton">
                  <Link to="/">Log In</Link>
                </button>
                <button className="loginButton">
                  <Link to="/Register">Sign Up</Link>
                </button>
              </span>
            </div>
          )}
        </div>
      </header>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route
          exact
          path="/"
          element={
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              token={token}
              setToken={setToken}
            />
          }
        />
        <Route
          exact
          path="/Register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              token={token}
              setToken={setToken}
            />
          }
        />
        <Route
          exact
          path="/Activities"
          element={
            <Activities
              activities={activities}
              setActivities={setActivities}
              token={token}
            />
          }
        />
        <Route
          exact
          path="/Routines"
          element={
            <Routines
              activities={activities}
              setActivities={setActivities}
              routines={routines}
              setRoutines={setRoutines}
              token={token}
            />
          }
        />

        <Route
          exact
          path="/MyRoutines"
          element={
            <MyRoutines
              activities={activities}
              setActivities={setActivities}
              routines={routines}
              setRoutines={setRoutines}
              token={token}
              setToken={setToken}
            />
          }
        />
        <Route
          exact
          path="/api/Activities/:activityid/Routines"
          element={
            <Routines
              activities={activities}
              setActivities={setActivities}
              routines={routines}
              setRoutines={setRoutines}
              token={token}
            />
          }
        />

        <Route
          exact
          path="/CreateActivity"
          element={
            <CreateActivity
              activities={activities}
              setActivities={setActivities}
              token={token}
              setToken={setToken}
            />
          }
        />

        <Route
          exact
          path="/CreateRoutine"
          element={
            <CreateRoutine
              activities={activities}
              setActivities={setActivities}
              token={token}
              setToken={setToken}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
