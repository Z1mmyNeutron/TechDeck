import logo from './logo.svg';
import './App.css';
import {postData} from './serverApi/server.js';
import React from "react";

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
      <div>
        <h1>Router is working</h1>
        <Link to="/about"> About Us</Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
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
