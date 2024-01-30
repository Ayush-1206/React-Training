import React from "react";

const Card = ({headline, imageUrl, description}) => {
    
    return (
        <div className="card">
            <img src={imageUrl} className="image"></img>
            <div>
                <h2>{headline}</h2>
                <div className="description">{description}</div>
            </div>
        </div>
    )
};
export default Card;