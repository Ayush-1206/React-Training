import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import cardData from "./Data";
import "./styles.css";


const RootContainer = () => {
    return (
      <div className="container">
        <div className="header"><Header/></div>
        <div className="body"> <Body cardData={cardData} /> </div>
        <div><Footer/></div>
      </div>
    )
  };
  
//const jsx = <h1>Hello JSX!</h1>
// const heading = React.createElement("h1", { id: "heading" }, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RootContainer />);