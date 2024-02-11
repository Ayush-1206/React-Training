import {IMGCDN_URL} from '../utils/config';

const RestaurantCard = (props) =>{
    
    return(
        <div className="card">
             <img src={`${IMGCDN_URL}` + `${props?.resData?.info?.cloudinaryImageId}`}/>
            <div>
                <div>{props?.resData?.info?.aggregatedDiscountInfoV3?.header} {props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</div>
            </div>
            <div>{props?.resData?.info?.avgRating}</div>
            <div>{props?.resData?.info?.name}</div>
            <div>{props?.resData?.info?.locality}</div>
            <div>{props?.resData?.info?.sla?.slaString}</div>
            
        </div>
    )
}

export default RestaurantCard;