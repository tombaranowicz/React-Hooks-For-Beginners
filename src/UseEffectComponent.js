import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    document.title = `You clicked count2 ${count2} times.`;
  }, [count2]);

  useEffect(() => {
    document.title = `You clicked count1 ${count1} times.`;
    // console.log("execute count 1 update");

    return () => {
      console.log("clean up");
    };
  }, [count1]);

  return (
    <div className="container">
      <p>You clicked {count1} times</p>
      <button className="btn btn-primary" onClick={() => setCount1(count1 + 1)}>
        Increment Count 1
      </button>
      <hr />
      <p>You clicked {count2} times</p>
      <button className="btn btn-primary" onClick={() => setCount2(count2 + 1)}>
        Increment Count 2
      </button>
    </div>
  );
};

export default UseEffectComponent;
