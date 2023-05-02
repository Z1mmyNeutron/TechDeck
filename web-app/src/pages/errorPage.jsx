import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Sorry, You Rolled A 404</h1>
      <img src={`${process.env.PUBLIC_URL}/error.jpg`} alt="404 Error" />
    </div>
  );
};

export default ErrorPage;
