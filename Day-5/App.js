import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from "./src/Header.js";
import Body from "./src/Body.js";

const RootContainer = () => {
    return (
      <div className="container">
        <Header/>
        <Body/>
      </div>
    )
  };
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RootContainer />);