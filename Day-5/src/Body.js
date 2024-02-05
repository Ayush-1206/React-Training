import RestaurantCard from "./RestaurantCard";
import resData from "../utils/data";

const Body = ()=>{
    return (
        <div className="body">
            <div>

            </div>
            <div className="res-container">
                {
                resData.map((restaurant)=>{
                    return <RestaurantCard data={restaurant}/>
                })
            }
            </div>
           
        </div>
    )

}

export default Body;