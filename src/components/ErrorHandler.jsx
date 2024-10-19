import React from "react";

const ErrorHandler = ({ error }) => {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          marginTop: "8rem",
          color: "red",
          fontWeight: "bold",
          backdropFilter: "blur",
          fontSize: "3rem",
        }}
      >
        {error}
      </div>
    </div>
  );
};

export default ErrorHandler;
