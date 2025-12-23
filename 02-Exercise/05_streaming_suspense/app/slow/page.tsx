import React from "react";

const SlowsDown = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const data = "This content is loaded after 5 seconds!";

  return (
    <div>
      <h2>Slow Component</h2>
      <p>{data}</p>
      <p>Time loaded: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default SlowsDown;
