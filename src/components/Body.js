import { useState, useEffect } from "react";
import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("")
    let [imageSlider, setImageSlider] = useState([])
    let [startImageIndex, setStartImageIndex] = useState(0)
    let itemsPerPage = 7;
    let visibilityItems = imageSlider.slice(startImageIndex, startImageIndex + itemsPerPage);

    let getData = () => {
        let imageArray = [];
        resData.data.cards[0].card.card.imageGridCards.info.map((element, index) => {
            imageArray.push(element.imageId)
        })

        setImageSlider(imageArray)
        setListOfRestaurants(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    let prevImage = () => {
        if (startImageIndex > 0) {
            setStartImageIndex(startImageIndex - 5)
        }
    }
    let nextImage = () => {
        if (startImageIndex + 5 < imageSlider.length) {
            setStartImageIndex(startImageIndex + 5)
        }
    }

    useEffect(() => {
        setTimeout(() => getData(), 2000);
    }, [])

    if (listOfRestaurants.length === 0) {
        return (<Shimmer />)
    }

    return (<div className="px-[10%] pt-20 pb-10">
        <div className="mt-10 mb-10">
            <div className="flex justify-between">
                <div className="text-2xl font-bold mb-10">{resData.data.cards[0].card.card.header.title}</div>
                <div className="flex gap-4  text-gray-500">
                    <button onClick={prevImage} className="flex items-center border border-gray-500 rounded-lg h-8 px-4 gap-1"><IoArrowBackCircleOutline />Prev</button>
                    <button onClick={nextImage} className="flex items-center border border-gray-500 rounded-lg h-8 px-4 gap-1">Next<IoArrowForwardCircleOutline /></button>
                </div>
            </div>
            <div className="flex justify-evenly">
                {
                    visibilityItems.map((element, index) => {
                        return (<div className="w-[12%]" key={index}>
                            <img className="w-full" src={CDN_URL + element}></img>
                        </div>)
                    })
                }
            </div>
        </div>

        <div className="bg-gray-400 h-0.5"></div>

        <div className="mt-10">
            <div className="flex justify-between">
                <div className="text-2xl font-bold mb-10">{resData.data.cards[1].card.card.header.title}</div>
                <div className="flex gap-4">
                    <input className="border border-gray-500 rounded-md h-9 w-[20vw] indent-4" placeholder="Search Restaurant Name" type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                        let filteredRes = listOfRestaurants.filter((element, index) => {
                            return element.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredRestaurants(filteredRes);
                    }}></input>
                    <button className="border h-9 rounded-md px-6 bg-gray-600 text-white"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating >= 4.5
                            );
                            setFilteredRestaurants(filteredList);
                        }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-y-8">
                {
                    filteredRestaurants.map((element) => (<RestaurantCard key={element.info.id} resData={element} />))
                }
            </div>

        </div>
    </div>)
}

export default Body;