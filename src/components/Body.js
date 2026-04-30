import { useState, useEffect } from "react";
import {resData} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("")
    let [imageSlider,setImageSlider]=useState([])
    let [startImageIndex,setStartImageIndex]=useState(0)
    let itemsPerPage=7;
    let visibilityItems=imageSlider.slice(startImageIndex,startImageIndex+itemsPerPage);

    let getData = () => {
        let imageArray=[];
        resData.data.cards[0].card.card.imageGridCards.info.map((element,index)=>{
            imageArray.push(element.imageId)
        })
        
        setImageSlider(imageArray)
        setListOfRestaurants(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    let prevImage=()=>{
        if(startImageIndex>0)
        {
            setStartImageIndex(startImageIndex-5)
        }
    }
    let nextImage=()=>{
        if(startImageIndex+5<imageSlider.length)
        {
            setStartImageIndex(startImageIndex+5)
        }
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

        <div className="sliderContainer">
            <div>{resData.data.cards[0].card.card.header.title}</div>
            <div className="slider" style={{display:"flex",flexWrap:"wrap"}}>
                {
                    visibilityItems.map((element,index)=>{
                        return (<div key={index}>
                            <img style={{width:"10vw"}} src={CDN_URL+element}></img>
                        </div>)
                    })
                }
            </div>
            <div>
                <button onClick={prevImage}>Prev</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>

        <div className="">
            <div>{resData.data.cards[1].card.card.header.title}</div>
            <div className="res_container">
                {
                    filteredRestaurants.map((element) => (<RestaurantCard key={element.info.id} resData={element} />))
                }
            </div>
            
        </div>
    </div>)
}

export default Body;