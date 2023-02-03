import logo from './logo.svg';
import './App.css';
import {postData} from './serverApi/server.js';
import React from "react";

import {Art} from './pages/art'
import {Code} from './pages/code'
import {Login} from './pages/login'
import {About} from './pages/about'

import {CreateUser} from './pages/createUser'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <> 
        <h1>Home Page</h1>
        <div class = "Navbar" id="Navbar">
          <Link to="/art"> Art </Link>
          <Link to="/code"> Code</Link>
          <Link to="/about"> About Me</Link>
          <Link to="/login"> Login</Link>
          <Link to="/createUser">Create User</Link>
        </div>

        <div>
          <p>This is going to be where i put content</p>
        </div>

        <div>
          <p>This is going to be where i put my footer</p>
        </div>
      </>
    ),
  },
  {
    path: "/art",
    element: <Art/>
  },
  {
    path: "/code",
    element: <Code/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/createUser",
    element: <CreateUser/>
  }
]);

{postData("http://localhost:4000", "")};
function App() {
  return (
      <div className="App">
      { <RouterProvider router={router} />}
   
    </div>
  );
}

export default App;
