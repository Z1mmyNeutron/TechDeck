import logo from "./logo.svg";
import { postData } from "./serverApi/server.js";
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

//pages
import { Art } from "./pages/art";
import { Code } from "./pages/code";
import { Login } from "./pages/login";
import About from "./pages/about";
import { Science } from "./pages/science";
import { Business } from "./pages/business";
import { Technology } from "./pages/technology";
import Results from "./pages/results";

import Legal from "./pages/legal";
import Privacy from "./pages/privacy";
import SingleArticle from "./pages/singleArticle";
//components
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import { CreateUser } from "./pages/createUser";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ThemeProvider from "./components/Theme";
import ThemeContext from "./components/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <MainContent />
        <Footer />
      </>
    ),
  },
  {
    path: "/article/:id",
    element: (
      <>
        <SingleArticle />
      </>
    ),
  },
  {
    path: "/art",
    element: (
      <>
        <Header />
        <Art />
        <Footer />
      </>
    ),
  },
  {
    path: "/code",
    element: (
      <>
        <Header />
        <Code />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/createUser",
    element: (
      <>
        <Header />
        <CreateUser />
        <Footer />
      </>
    ),
  },
  {
    path: "/science",
    element: (
      <>
        <Science />
      </>
    ),
  },
  {
    path: "/business",
    element: (
      <>
        <Business />
      </>
    ),
  },
  {
    path: "/technology",
    element: (
      <>
        <Technology />
      </>
    ),
  },
  {
    path: "/results",
    element: (
      <>
        <Header />
        <Results />
        <Footer />
      </>
    ),
  },
  {
    path: "/legal",
    element: (
      <>
        <Header />
        <Legal />
        <Footer />
      </>
    ),
  },
  {
    path: "/privacy",
    element: (
      <>
        <Header />
        <Privacy />
        <Footer />
      </>
    ),
  },
]);

{
  postData("http://localhost:4000", "");
}
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className="App">
        <div className="content-wrapper">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
