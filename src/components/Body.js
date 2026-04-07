import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (<div>
        <div className="search">Search</div>
        <div className="res_container">
            {
                resList.map((element)=>(<RestaurantCard key={element.info.id} resData={element}/>))
            }
        </div>
    </div>)
}

export default Body;