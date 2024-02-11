import { useState } from "react";


const Header = () =>{
    const [isLogIn, setLogIn] = useState("login");
    return(
      <div className="header">
        <div >
          <img className="logo" src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"></img>
        </div>
        <div className="navbar">
              <div>Contact Us</div>
              <div>About Us</div>
              <div>Cart</div>
              <button onClick={()=>((isLogIn == "login") ? setLogIn("logout") : setLogIn("login") )}>{isLogIn}</button> 
        </div>
       </div>
    )
};

export default Header;