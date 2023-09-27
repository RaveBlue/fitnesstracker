export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

export async function fetchRegisterResults(username, password) {
  console.log(username, password);
  try {
    const response = await fetch(`${BASE_URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const results = await response.json();
    if (results.token) {
      localStorage.setItem("user-token", results.token);
      return localStorage.getItem("user-token");
    }
    alert(password);
  } catch (error) {
    throw ("error", error);
  }
}

export async function fetchLoginResults(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const results = await response.json();
    console.log(results);
    if (results.token) {
      const data = {
        token: results.token,
        username: results.username,
      };
      localStorage.setItem("user-token", results.token);
      localStorage.setItem("user-username", results.user.username);
      console.log(data);
      return data;
    }
  } catch (error) {
    throw ("error", error);
  }
}

export async function fetchUserData(token) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    throw ("error", error);
  }
}
