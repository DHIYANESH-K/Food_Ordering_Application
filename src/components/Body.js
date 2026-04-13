import { useState, useEffect } from "react";
import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    let [listOfRestaurants,setListOfRestaurants]=useState([]);

    let getData=()=>{
        setListOfRestaurants(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    
    useEffect(()=>{
        setTimeout(()=>getData(),2000);
    },[])

    if(listOfRestaurants.length===0)
    {
        return(<Shimmer/>)
    }

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