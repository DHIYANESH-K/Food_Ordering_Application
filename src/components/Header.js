import { Link } from "react-router";
import logo from "url:../../assets/logo.png";
import { BiErrorCircle } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
    return (
        <div className="bg-white px-[10%] shadow-lg fixed w-full flex py-2 justify-between items-center z-5">
            <div className="w-18">
                <img className="w-full rounded-4xl" src={logo} alt="logo" />
            </div>
            <div className="flex gap-10 text-lg">
                <Link to="/about"><div className="flex items-center gap-1.5"><BiErrorCircle />About Us</div></Link>
                <Link to="/contact"><div className="flex items-center gap-1.5"><IoMdContact />Contact Us</div></Link>
                <Link to="/"><div className="flex items-center gap-1.5"><IoLogInOutline />Sign in</div></Link>
                <Link to="/cart"><div className="flex items-center gap-1.5"><MdOutlineShoppingCart />Cart</div></Link>
            </div>
        </div>
    );
};

export default Header;