import React, { useState } from "react";
import { postData } from "../serverApi/server";
import {
  Container,
  Form,
  Button,
  FormGroup,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";
import {Routes, Route, useNavigate} from 'react-router-dom';

export function Login() {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [serverData, setServerData] = useState(undefined);

  return (
    <div className="about-page">
      <Header />
      <Container className="content">
        <Form className="login-form">
          <h1 className="text-center">Login</h1>

          <FormGroup>
            <Form.Label>Username</Form.Label>
            <FormControl
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </FormGroup>

          <ButtonGroup className="mt-3">
            <Button
              variant="primary"
              type="submit"
              onClick={async (event) => {
                event.preventDefault(); // Prevent page reload
                let result = await postData("http://localhost:3005/login", {
                  username: username,
                  password: password,
                });
                setServerData(result.body.data);
              }}
            >
              Login
            </Button>
            <a href="/createUser">
            <Button
              variant="secondary"
              type="button">
              Register
            </Button></a>
          </ButtonGroup>

          {serverData && <p>{JSON.stringify(serverData)}</p>}
        </Form>
      </Container>
      <Footer />
    </div>
  );
}
export default Login;
