// import React from "react";

const RestaurantCard = (props) =>{
    const {imgURL, resName, cuisins, rating, price, time } = props.data; 
    console.log(props);
    return(
        <div className="card">
            <img src={imgURL}></img>
            <div>{resName}</div>
            <div>{cuisins}</div>
            <div>{price}₹</div>
            <div>{time} </div>
            <div>{rating}</div>
            
        </div>
    )
}

export default RestaurantCard;