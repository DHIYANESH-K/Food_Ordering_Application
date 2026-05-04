import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants.js";
import RestaurantMenuList from "./RestaurantMenuList.js";
import { MdStars } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { FiMoreHorizontal } from "react-icons/fi";

let RestaurantMenu = () => {

    let { resId } = useParams();
    let [resMenuData, setResMenuData] = useState(null);

    let getData = async () => {
        let result = await fetch("http://localhost:5000/all")
        let data = await result.json();
        let resMenu = data.filter((value, index) =>
            value.data.cards[2].card.card.info.id == resId
        );
        setResMenuData(resMenu[0])
    }

    useEffect(() => { getData() }, [])

    if (!resMenuData) return <div>Loading...</div>;

    let menuList = resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((value) => value.card.card.title);

    return (
        <div className="pt-20 mx-[22vw]">
            <div className="font-bold text-2xl pt-12">{resMenuData.data.cards[2].card.card.info.name}</div>
            <div className="mt-4 flex justify-between border shadow-xl shadow-gray-300 border-gray-300 py-4 px-6 rounded-4xl bg-gray-50">
                <div className="flex flex-col justify-evenly">
                    <div className="flex gap-4 text-lg font-semibold">
                        <div className="flex gap-1 items-center"><MdStars /><div>{resMenuData.data.cards[2].card.card.info.avgRating}</div></div>
                        <div className="flex gap-1 items-center"><GoDot /><div>{resMenuData.data.cards[2].card.card.info.totalRatingsString}</div></div>
                    </div>
                    <div className="text-amber-600 underline underline-offset-2">{resMenuData.data.cards[2].card.card.info.cuisines.join(", ")}</div>
                    <div>{resMenuData.data.cards[2].card.card.info.areaName}</div>
                    <div>{resMenuData.data.cards[2].card.card.info.sla.slaString}</div>
                </div>
                <img className="w-[18vw] h-[22vh] object-cover rounded-3xl" src={CDN_URL + resMenuData.data.cards[2].card.card.info.cloudinaryImageId}></img>
            </div>
            <div className="bg-gray-400 h-0.5 my-8"></div>
            <div className="flex justify-center items-center gap-4"><FiMoreHorizontal /><div className="text-lg font-semibold">Menu</div><FiMoreHorizontal /></div>
            <RestaurantMenuList data={menuList}></RestaurantMenuList>
        </div>
    );
};

export default RestaurantMenu;