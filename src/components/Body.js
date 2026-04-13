import { useState, useEffect } from "react";
import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("")

    let getData = () => {
        setListOfRestaurants(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    useEffect(() => {
        setTimeout(() => getData(), 2000);
    }, [])

    if (listOfRestaurants.length === 0) {
        return (<Shimmer />)
    }

    return (<div>
        <div className="filter">
            <input className="search_input" type="text" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }}></input>
            <button className="search_btn" onClick={() => {
                let filteredRes = listOfRestaurants.filter((element, index) => {
                    return element.info.name.toLowerCase().includes(searchText.toLowerCase())
                })
                setFilteredRestaurants(filteredRes);
            }}>Search</button>
            <button className="search"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4.5
                    );
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
        </div>
        <div className="res_container">
            {
                filteredRestaurants.map((element) => (<RestaurantCard key={element.info.id} resData={element} />))
            }
        </div>
    </div>)
}

export default Body;