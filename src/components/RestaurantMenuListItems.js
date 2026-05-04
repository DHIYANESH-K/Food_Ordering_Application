import { CDN_URL } from "../utils/constants"
import { FaStar } from "react-icons/fa6";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import defaultFoodImage from "url:../../assets/defaultFoodImage.png"

let RestaurantMenuListItems = ({ data }) => {
    let value = data.card.card.itemCards ? data.card.card.itemCards : data.card.card.categories;
    console.log(value)
    return (<div>
        {
            value.map((element, index) => {
                return (element.card ?
                    <div key={element.card.info.id}>
                        <div className="flex justify-between items-center gap-8">
                        <div className="text-gray-700 flex flex-col gap-1">
                            <div className="text-lg font-semibold">{element.card.info.name}</div>
                            <div className="flex items-center gap-2"><HiMiniCurrencyRupee /><div>{element.card.info.price ? element.card.info.price / 100 : element.card.info.defaultPrice / 100}</div></div>
                            <div className="flex items-center gap-2 text-sm"><FaStar /><div>{element.card.info.ratings.aggregatedRating.rating} ( {element.card.info.ratings.aggregatedRating.ratingCount})</div></div>
                            <div className="text-justify indent-6">{element.card.info.description}</div>
                        </div>
                        <div className="min-w-[12vw] max-w-[12vw] h-[18vh] flex justify-center items-end">
                            <img className="w-full h-[18vh] rounded-lg" src={element.card.info.imageId?(CDN_URL +element.card.info.imageId):defaultFoodImage}></img>
                            <button className="absolute bg-white px-3 py-1.5 rounded-lg border border-gray-500 text-sm font-semibold text-gray-500">ADD+</button>
                        </div>
                    </div>
                    <div className="bg-gray-400 h-0.5 my-4"></div>
                    </div>
                    :
                    <div key={index}>
                        {
                            element.itemCards.map((value) => {
                                return (<div  key={value.card.info.id}>
                                    <div className="flex justify-between items-center gap-8">
                                    <div className="text-gray-700 flex flex-col gap-1">
                                        <div className="text-lg font-semibold">{value.card.info.name}</div>
                                        <div className="flex items-center gap-2"><HiMiniCurrencyRupee /><div>{value.card.info.defaultPrice ? value.card.info.defaultPrice / 100 :  value.card.info.price / 100}</div></div>
                                        <div className="flex items-center gap-2 text-sm"><FaStar /><div>{value.card.info.ratings.aggregatedRating.rating} ( {value.card.info.ratings.aggregatedRating.ratingCount})</div></div>
                                        <div  className="text-justify indent-6">{value.card.info.description}</div>
                                    </div>
                                    <div className="min-w-[12vw] max-w-[12vw] h-[18vh] flex justify-center items-end">
                                        <img  className="w-full h-[18vh] rounded-lg" src={value.card.info.imageId?(CDN_URL + value.card.info.imageId):defaultFoodImage}></img>
                                        <button className="absolute  bg-white px-3 py-1.5 rounded-lg border border-gray-500 text-sm font-semibold text-gray-500">ADD+</button>
                                    </div>
                                </div>
                                <div className="bg-gray-400 h-0.5 my-4"></div>
                                </div>)
                            })
                        }
                    </div>)
            })
        }
    </div>)
}

export default RestaurantMenuListItems;