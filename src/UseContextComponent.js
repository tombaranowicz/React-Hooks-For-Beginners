import React, { useState, useContext, createContext } from "react";

const CounterContext = createContext({ count: 1 });

const AwareComponent = () => {
  const counter = useContext(CounterContext);

  return (
    <div>
      <p>You clicked {counter} times</p>
    </div>
  );
};

const UnAwareComponent = () => (
  <div className="p-3">
    <p>Unaware Component</p>
    <AwareComponent />
  </div>
);

const UseContextComponent = () => {
  const [count, updateState] = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <div className="container">
        <div className="p-3">
          <p>Provider</p>
          <button
            className="btn btn-primary"
            onClick={() => updateState(count + 1)}
          >
            Increment
          </button>
        </div>
        <UnAwareComponent />
      </div>
    </CounterContext.Provider>
  );
};

export default UseContextComponent;
