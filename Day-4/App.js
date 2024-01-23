import React from 'react';
import ReactDOM from 'react-dom';

//const jsx = <h1>Hello JSX!</h1>

const RootContainer = () => {
    return (
      <div id="container">
        <p>Hey! What's up?</p>
      </div>
    );
  };
// const heading = React.createElement("h1", { id: "heading" }, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RootContainer />);