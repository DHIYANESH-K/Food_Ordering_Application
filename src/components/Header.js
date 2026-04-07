import logo from "url:../../assets/logo.png";

const Header = () => {
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

export default Header;