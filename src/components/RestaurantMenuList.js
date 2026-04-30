import { CDN_URL } from "../utils/constants"
import RestaurantMenuListItems from "./RestaurantMenuListItems"

let RestaurantMenuList = ({ data }) => {
    return (<div>
        {
            data.map((value, index) => {
                return (<div key={index}>
                    <div>{value.card.card.title}</div>
                    <RestaurantMenuListItems data={value}></RestaurantMenuListItems>
                </div>
                )
            }
            )
        }
    </div>)
}

export default RestaurantMenuList;