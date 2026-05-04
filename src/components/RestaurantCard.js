import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";
import { GiAlliedStar } from "react-icons/gi";

const RestaurantCard = ({ resData }) => {

    let { cloudinaryImageId, name, cuisines, avgRating, areaName, id } = resData.info

    return (<Link to={"/restaurant/" + id}>
        <div className="w-[17vw]">
            <img className="w-full rounded-2xl h-40 object-cover" src={CDN_URL + cloudinaryImageId}></img>
            <h5 className="text-lg font-bold">{name}</h5>
            <div className="text-lg flex items-center gap-2"><GiAlliedStar /> {avgRating} stars</div>
            <div className="text-gray-500">{cuisines.join(", ")}</div>
        </div>
    </Link>)
}

export default RestaurantCard;