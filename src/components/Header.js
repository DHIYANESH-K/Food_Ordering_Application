import { Link } from "react-router";
import logo from "url:../../assets/logo.png";

const Header = () => {
    return (<div className="header">
        <div className="logo_container">
            <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav_item">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/cart">Cart</Link>
            </ul>
        </div>
    </div>
    );
};

export default Header;