import react from "react";
import Card from "./Card";


const Body = (props) => {
    let cardData = props.cardData;
    return(
        <div className="body-container">
            {
                cardData.map((data)=>{
                    return <Card {...data}/>
                })
            }
           
        </div>
    )
}

export default Body;