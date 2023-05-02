import React, { useState } from "react";
import { postData } from "../serverApi/server";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";
<h1>Proof that login works</h1>;

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [serverData, setServerData] = useState(undefined);

  return (
    <div className="about-page">
      <Header />
      <div className="about-page">
        <div class="username">
          <label>username:</label>
          <input
            type="text"
            name="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <p>username text: {username}</p>
        </div>

        <div class="password">
          <label>password: </label>
          <input
            type="text"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <p>password: {password}</p>

        <input
          type="button"
          value="save"
          onClick={async (event) => {
            let result = await postData("http://localhost:4000/login/", {
              username: username,
              password: password,
            });
            setServerData(result.body.data);
          }}
        />
        {serverData && <p>{JSON.stringify(serverData)}</p>}
      </div>
      <Footer />
    </div>
  );
}
export default Login;
