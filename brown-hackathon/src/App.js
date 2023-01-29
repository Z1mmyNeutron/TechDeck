import logo from './logo.svg';
import './App.css';
import {postData} from './serverApi/server.js';
import React from "react";

import {Filler} from './pages/filler'
import {About} from './pages/about'
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
        <Link to="/filler"> Filler</Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/filler",
    element: <Filler/>
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
