import React from "react";

const SSR = () => {
  const theCurrentTime = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>SSR Time Check</h1>
      <p>Time on the server: {theCurrentTime}</p>
    </div>
  );
};

export default SSR;
