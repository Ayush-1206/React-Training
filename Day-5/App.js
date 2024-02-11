import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from "./src/Header.js";
import Body from "./src/Body.js";

const AppLayout = () => {
    return (
      <div className="container">
        <Header/>
        <Body/>
      </div>
    )
  };

const appRouter = create
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout />);