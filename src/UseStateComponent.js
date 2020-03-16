import React, { useState } from "react";

const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="container">
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default UseStateComponent;
