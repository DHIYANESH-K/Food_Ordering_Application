import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    let [listOfRestaurants,setListOfRestaurants]=useState(resList);

    useEffect(()=>{
        console.log("UseEffect called ");
    },[])

    console.log("Rendered");

    return (<div>
        <button className="search"
        onClick={()=>{
            const filteredList=listOfRestaurants.filter(
                (res)=>res.info.avgRating>=4.5
            );
            setListOfRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
        <div className="res_container">
            {
                listOfRestaurants.map((element)=>(<RestaurantCard key={element.info.id} resData={element}/>))
            }
        </div>
    </div>)
}

export default Body;