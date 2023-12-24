import axios from "axios";
import { useState } from "react";

export default function LoginForm({ setIsLoggedIn, showToast }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://tarmeezacademy.com/api/v1/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        showToast("You logged in Successfully!");
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.clear();
        showToast(err.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="shadow">
      <input
        className="border"
        type="text"
        placeholder="Enter UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        // style={{ borderColor: "#e7e7e7" }}
        className="border"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-btn text-white">Log in</button>
      <a href="#">Forgotten password?</a>

      <hr />

      <a className="new-acc-btn text-white my-0">Create new Account</a>
    </form>
  );
}
