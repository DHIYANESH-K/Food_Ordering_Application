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

let styleCard={
    backgroundColor:"lightgray",
};

const RestaurantCard=()=>{
    return(<div className="res_card" style={styleCard}>
        <h3>Restaurant</h3>
    </div>)
}

const Body=()=>{
    return (<div>
        <div className="search">Search</div>
        <div className="res_container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>)
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);