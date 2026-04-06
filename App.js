import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./assets/logo.png";

const Header = () => {
    console.log(logo)
    return (<div className="header">
        <div className="logo_container">
            <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav_item">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

let styleCard = {
    backgroundColor: "lightgray"
};

let resList = [
    {
        "info": {
            "id": "492041",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/2/0caa62ae-2237-499d-816d-5174787acf23_492041.JPG",
            "locality": "Avinash Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "721",
            "avgRatingString": "4.3",
            "totalRatingsString": "5.7K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-07 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                        "description": "Best in Pizza"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in Pizza",
                                    "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.8",
                    "ratingCount": "2.0K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/pizza-hut-avinash-road-peelamedu-rest492041",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "60958",
            "name": "Denmarrk Restaurant",
            "cloudinaryImageId": "kotlytcyvkm5c5sl86mk",
            "locality": "Ganapathy",
            "areaName": "Ganapathy",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "South Indian",
                "Chinese",
                "Rolls & Wraps",
                "Tandoor"
            ],
            "avgRating": 4.4,
            "parentId": "598516",
            "avgRatingString": "4.4",
            "totalRatingsString": "25K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "6.4K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/denmarrk-restaurant-ganapathy-rest60958",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "737927",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/13d683f4-2c1f-4475-b494-423948c47f21_737927.JPG",
            "locality": "Cross cut Road",
            "areaName": "Gandhipuram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 4.5,
            "parentId": "547",
            "avgRatingString": "4.5",
            "totalRatingsString": "4.7K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-07 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                        "description": "Best in Bolt"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                        "description": "Best in Burger"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                        "description": "Best in Corporate"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in Bolt",
                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                    "theme": "light"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Best in Burger",
                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                    "theme": "light"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Best in Corporate",
                                    "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/kfc-cross-cut-road-gandhipuram-rest737927",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "53332",
            "name": "Sree Aksshayam",
            "cloudinaryImageId": "bc2eb057b8474efce6932bb4335d950e",
            "locality": "Peelamedu",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian",
                "Biryani",
                "Chaat",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "671577",
            "avgRatingString": "4.6",
            "totalRatingsString": "99K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹25"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "12K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/sree-aksshayam-peelamedu-rest53332",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "707835",
            "name": "Amote Patisserie",
            "cloudinaryImageId": "92adaa33bff5ad86325d760d822f787d",
            "locality": "Avinashi road",
            "areaName": "Nava India",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Desserts",
                "Bakery",
                "Ice Cream Cakes",
                "Beverages"
            ],
            "avgRating": 4.7,
            "parentId": "348047",
            "avgRatingString": "4.7",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "182"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/amote-patisserie-avinashi-road-nava-india-rest707835",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "56657",
            "name": "Cock Ra Co",
            "cloudinaryImageId": "zzyjeunkvjwfcpxnyidm",
            "locality": "Sivanandhapuram",
            "areaName": "Sivanandhapuram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "South Indian",
                "Chettinad",
                "Chinese",
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "4851",
            "avgRatingString": "4.5",
            "totalRatingsString": "12K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/101_Best%20in%20South%20Indian%20Non%20Veg2026.png",
                        "description": "Best in South Indian Non Veg"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/84_Best%20in%20Arabic2026.png",
                        "description": "Best in Arabic"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in South Indian Non Veg",
                                    "imageId": "brand_cards/Badges%202026/101_Best%20in%20South%20Indian%20Non%20Veg2026.png",
                                    "theme": "light"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Best in Arabic",
                                    "imageId": "brand_cards/Badges%202026/84_Best%20in%20Arabic2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "4.1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/cock-ra-co-sivanandhapuram-rest56657",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "614321",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/81102a79-899f-4a88-aee5-c7fa6c9f60a4_614321.jpg",
            "locality": "Bharathi Park Road",
            "areaName": "Saibaba Colony",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            "avgRating": 4.5,
            "parentId": "2",
            "avgRatingString": "4.5",
            "totalRatingsString": "5.9K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-07 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "High%20Protein/rx%20tag%205.png",
                        "description": "High Protein"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                        "description": "Best in Subs & Sandwiches"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "High Protein",
                                    "imageId": "High%20Protein/rx%20tag%205.png",
                                    "theme": "light"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Best in Subs & Sandwiches",
                                    "imageId": "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹69"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/subway-bharathi-park-road-saibaba-colony-rest614321",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "722815",
            "name": "FNP Cakes By Ferns N Petals",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/12/ec024e99-79ef-4996-8d81-d156f8e17987_722815.jpg",
            "locality": "Sai Baba Colony",
            "areaName": "PARK ROAD1",
            "costForTwo": "₹499 for two",
            "cuisines": [
                "Desserts",
                "Bakery",
                "Sweets",
                "Ice Cream",
                "Beverages",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "339638",
            "avgRatingString": "4.4",
            "totalRatingsString": "809",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 20:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/fnp-cakes-by-ferns-n-petals-sai-baba-colony-park-road1-rest722815",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "51024",
            "name": "CakeBee",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/cd41d2bc-4e6b-460b-a6bb-392740e3e589_51024.jpg",
            "locality": "SaiBaba Colony",
            "areaName": "Sai Baba Colony",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Desserts",
                "Bakery",
                "Ice Cream Cakes",
                "Beverages"
            ],
            "avgRating": 4.6,
            "parentId": "22417",
            "avgRatingString": "4.6",
            "totalRatingsString": "4.0K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "1.2K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/cakebee-saibaba-colony-sai-baba-colony-rest51024",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "51014",
            "name": "A2B - Adyar Ananda Bhavan",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/02ddccce-cb0e-450e-aca1-c14df7c4289b_51014.JPG",
            "locality": "Gandhipuram",
            "areaName": "Gandhipuram",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Sweets",
                "Chinese"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "22",
            "avgRatingString": "4.6",
            "totalRatingsString": "46K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-40 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/102_Best%20in%20South%20Indian%20Veg2026.png",
                        "description": "Best in South Indian Veg"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/103_Best%20in%20Sweets%20&%20Savouries2026.png",
                        "description": "Best in Sweets & Savouries"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in South Indian Veg",
                                    "imageId": "brand_cards/Badges%202026/102_Best%20in%20South%20Indian%20Veg2026.png",
                                    "theme": "light"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Best in Sweets & Savouries",
                                    "imageId": "brand_cards/Badges%202026/103_Best%20in%20Sweets%20&%20Savouries2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "11K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/a2b-adyar-ananda-bhavan-gandhipuram-rest51014",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "379905",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/85a90fe4-cdf3-4c36-84ed-1d12219157c1_379905.JPG",
            "locality": "Sir Shanmugam Road",
            "areaName": "RS Puram",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.5",
            "totalRatingsString": "872",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                        "description": "Best in Ice Cream"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in Ice Cream",
                                    "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                    "theme": "light"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹15"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/baskin-robbins-ice-cream-desserts-sir-shanmugam-road-rs-puram-rest379905",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "50374",
            "name": "Dindigul Thalappakatti - Since 1957\n",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/0de18a05-b14c-4c80-b60c-cf629e66f42f_50374.JPG",
            "locality": "Ram Nagar",
            "areaName": "Ram Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese"
            ],
            "avgRating": 4.4,
            "parentId": "641506",
            "avgRatingString": "4.4",
            "totalRatingsString": "14K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-07 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹209"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "8.4K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/dindigul-thalappakatti-since-1957-ram-nagar-rest50374",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "50456",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f73fffdc-9c14-42ed-8477-9a17eccb400a_50456.jpg",
            "locality": "RS Puram",
            "areaName": "Ram Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.4,
            "parentId": "166",
            "avgRatingString": "4.4",
            "totalRatingsString": "35K+",
            "sla": {
                "deliveryTime": 44,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-07 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                        "description": "Best in Burger"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in Burger",
                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "2.2K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/burger-king-rs-puram-ram-nagar-rest50456",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "56506",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/81c66cb4-f134-4f26-be71-8109b0a5f6d1_56506.JPG",
            "locality": "Fun Republic Mall",
            "areaName": "Avinashi Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "31K+",
            "sla": {
                "deliveryTime": 44,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                        "description": "Best in Burger"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in Burger",
                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹549",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/mcdonalds-fun-republic-mall-avinashi-road-rest56506",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "51202",
            "name": "Sree Annapoorna",
            "cloudinaryImageId": "xkwvikmgv7usbbddqlmn",
            "locality": "Gandhipuram",
            "areaName": "Gandhipuram",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian",
                "Indian",
                "North Indian",
                "Chinese",
                "Beverages",
                "Juices"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "4732",
            "avgRatingString": "4.7",
            "totalRatingsString": "38K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/102_Best%20in%20South%20Indian%20Veg2026.png",
                        "description": "Best in South Indian Veg"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                        "description": "Best in Local Gems"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in South Indian Veg",
                                    "imageId": "brand_cards/Badges%202026/102_Best%20in%20South%20Indian%20Veg2026.png",
                                    "theme": "light"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Best in Local Gems",
                                    "imageId": "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "16K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/sree-annapoorna-gandhipuram-rest51202",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "50261",
            "name": "HMR Hotel",
            "cloudinaryImageId": "ngrkti6g5uh6adiwr37o",
            "locality": "RS Puram",
            "areaName": "RS Puram",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Biryani",
                "South Indian",
                "Chinese",
                "Indian",
                "North Indian"
            ],
            "avgRating": 4.4,
            "parentId": "96264",
            "avgRatingString": "4.4",
            "totalRatingsString": "86K+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "8.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/hmr-hotel-rs-puram-rest50261",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "60959",
            "name": "Denmarrk Drive-Inn Restaurant",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/4/656cdfc7-e59f-4ef3-b28a-69497e62aae8_60959.jpg",
            "locality": "Nehru Nagar",
            "areaName": "Nehru Stadium",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "South Indian",
                "Chinese",
                "Rolls & Wraps",
                "Tandoor"
            ],
            "avgRating": 4.6,
            "parentId": "4907",
            "avgRatingString": "4.6",
            "totalRatingsString": "23K+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/84_Best%20in%20Arabic2026.png",
                        "description": "Best in Arabic"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Best in Arabic",
                                    "imageId": "brand_cards/Badges%202026/84_Best%20in%20Arabic2026.png",
                                    "theme": "light"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "6.4K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/denmarrk-drive-inn-restaurant-nehru-nagar-nehru-stadium-rest60959",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "105009",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/91334bbc-6559-45f0-9633-55e4ea47b2e9_105009.JPG",
            "locality": "Mettupalayam road",
            "areaName": "Ranganathapuram",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Bakery",
                "Beverages"
            ],
            "avgRating": 4.6,
            "parentId": "4444",
            "avgRatingString": "4.6",
            "totalRatingsString": "3.5K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/sweet-truth-cake-and-desserts-mettupalayam-road-ranganathapuram-rest105009",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "104996",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/986f52d0-df9f-4ba7-a890-1cfa364db28a_104996.JPG",
            "locality": "Mettupalayam road",
            "areaName": "Ranganathapuram",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "21809",
            "avgRatingString": "4.5",
            "totalRatingsString": "12K+",
            "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "45-55 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/faasos-wraps-rolls-and-shawarma-mettupalayam-road-ranganathapuram-rest104996",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "181141",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/1969e45c-18e8-42fc-b724-9e59741be2d9_181141.JPG",
            "locality": "Brookefields Mall",
            "areaName": "RS Puram",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.5",
            "totalRatingsString": "2.7K+",
            "sla": {
                "deliveryTime": 57,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-04-06 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-56771d6e-c2c6-4f30-8e58-2070afc36709"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/coimbatore/the-belgian-waffle-co-brookefields-mall-rs-puram-rest181141",
            "type": "WEBLINK"
        }
    }
]

const RestaurantCard = ({resData}) => {
    let {cloudinaryImageId,name,cuisines,avgRating,areaName}=resData.info
    return (<div className="res_card" style={styleCard}>
        <img className="res_img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+cloudinaryImageId}></img>
        <h5>{name}</h5>
        <div>{cuisines.join(", ")}</div>
        <div>{avgRating} stars</div>
        <div>{areaName}</div>
    </div>)
}

const Body = () => {
    return (<div>
        <div className="search">Search</div>
        <div className="res_container">
            {
                resList.map((element)=>(<RestaurantCard key={element.info.id} resData={element}/>))
            }
        </div>
    </div>)
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);