import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    let styleCard = {
        backgroundColor: "lightgray"
    };

    let {cloudinaryImageId,name,cuisines,avgRating,areaName}=resData.info
    
    return (<div className="res_card" style={styleCard}>
        <img className="res_img" src={CDN_URL  +cloudinaryImageId}></img>
        <h5>{name}</h5>
        <div>{cuisines.join(", ")}</div>
        <div>{avgRating} stars</div>
        <div>{areaName}</div>
    </div>)
}

export default RestaurantCard;