import React from "react";
import ReactDOM from "react-dom";
import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";

const App = () => {
  return (
    <div>
      {/* <UseStateComponent /> */}
      <UseEffectComponent />
      {/* <UseContextComponent /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
