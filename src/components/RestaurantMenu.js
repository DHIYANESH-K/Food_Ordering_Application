import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants.js";
import RestaurantMenuList from "./RestaurantMenuList.js";

let RestaurantMenu = () => {

    let { resId } = useParams();
    let [resMenuData, setResMenuData] = useState(null);

    let getData=async()=>{
        let result=await fetch("http://localhost:5000/all")
        let data=await result.json();
        let resMenu = data.filter((value,index) =>
                value.data.cards[2].card.card.info.id == resId
            );
        setResMenuData(resMenu[0])
    }

    useEffect(()=>{getData()},[])

    if (!resMenuData) return <div>Loading...</div>;

    let menuList = resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((value) => value.card.card.title);

    return (
        <div>
            <h2>{resMenuData.data.cards[2].card.card.info.name}</h2>
            <div>
                <div>{resMenuData.data.cards[2].card.card.info.avgRating}</div>
                <div>{resMenuData.data.cards[2].card.card.info.totalRatingsString}</div>
                <div>{resMenuData.data.cards[2].card.card.info.areaName}</div>
                <div>{resMenuData.data.cards[2].card.card.info.cuisines}</div>
                <div>{resMenuData.data.cards[2].card.card.info.sla.slaString}</div>
            </div>
            <img src={CDN_URL+resMenuData.data.cards[2].card.card.info.cloudinaryImageId}></img>
            <div>Menu</div>
            <RestaurantMenuList data={menuList}></RestaurantMenuList>
        </div>
    );
};

export default RestaurantMenu;