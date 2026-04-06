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
    backgroundColor: "lightgray",
    textAlign: "center",
};

const RestaurantCard = (props) => {
    let { resName, cuisine } = props
    return (<div className="res_card" style={styleCard}>
        <h3>Restaurant</h3>
        <h5>{resName}</h5>
        <div>{cuisine}</div>
    </div>)
}

const Body = () => {
    return (<div>
        <div className="search">Search</div>
        <div className="res_container">
            <RestaurantCard
                resName="Meghana Foods"
                cuisine="Biryani, North Indian, Asian" />
            <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
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