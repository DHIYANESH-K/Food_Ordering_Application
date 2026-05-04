import { CDN_URL } from "../utils/constants"
import RestaurantMenuListItems from "./RestaurantMenuListItems"
import { IoIosArrowDown } from "react-icons/io";

let RestaurantMenuList = ({ data }) => {
    return (<div>
        {
            data.map((value, index) => {
                return (<div key={index}>
                    <div className="flex justify-between p-3 items-center rounded-lg bg-gray-200">
                        <div className="text-xl font-bold">{value.card.card.title}</div>
                        <IoIosArrowDown />
                    </div>
                    <RestaurantMenuListItems data={value}></RestaurantMenuListItems>
                    {/* <div className="bg-gray-300 h-4"></div> */}
                </div>
                )
            }
            )
        }
    </div>)
}

export default RestaurantMenuList;