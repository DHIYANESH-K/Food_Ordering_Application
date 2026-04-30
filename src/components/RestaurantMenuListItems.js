import { CDN_URL } from "../utils/constants"

let RestaurantMenuListItems = ({ data }) => {
    let value = data.card.card.itemCards ? data.card.card.itemCards : data.card.card.categories;
    console.log(value)
    return (<div>
        {
            value.map((element, index) => {
                console.log(element)
                return (element.card?
                    <div key={element.card.info.id}>
                        <img src={CDN_URL + element.card.info.imageId}></img>
                        <div>{element.card.info.name}</div>
                        <div>{element.card.info.price?element.card.info.price/100:"Null"}</div>
                        <div>{element.card.info.ratings.aggregatedRating.rating}({element.card.info.ratings.aggregatedRating.ratingCount})</div>
                        <div>{element.card.info.description}</div>
                    </div>
                    :
                    <div key={index}>
                        {
                            element.itemCards.map((value) => {
                                return (<div key={value.card.info.id}>
                                    <img src={CDN_URL + value.card.info.imageId}></img>
                                    <div>{value.card.info.name}</div>
                                    <div>{value.card.info.defaultPrice?value.card.info.defaultPrice/100:"Null"}</div>
                                    <div>{value.card.info.ratings.aggregatedRating.rating}({value.card.info.ratings.aggregatedRating.ratingCount})</div>
                                    <div>{value.card.info.description}</div>
                                </div>)
                            })
                        }
                    </div> )
            })
        }
    </div>)
}

export default RestaurantMenuListItems;