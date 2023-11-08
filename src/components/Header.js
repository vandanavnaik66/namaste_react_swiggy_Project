import { headerLogo } from "../../utility/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utility/useOnlineStatus";
import { userContext } from "../../utility/userContex";
import { useContext } from "react";
import {BsFillCartFill} from 'react-icons/bs'
import { useSelector } from "react-redux";

const Header = () => {
const onlineStatus=useOnlineStatus();

const data=useContext(userContext);

const cartItems=useSelector((store)=>store.cart.items)
console.log(cartItems)


    return (
      <div className="flex justify-between items-center p-4 bg-green-100 shadow-md mt-4">
        <div >
          <img
          className="w-[120px] bg-transparent" alt=""
            src={headerLogo}
          />
        </div>
        <div  >
          <ul className="flex justify-between items-center">
          <li className="px-4">online status:{onlineStatus?"online":"ofline"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4" ><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/swiggyInstaMart">Swiggy Groceries</Link></li>
            <li className="px-4"> {data.loggedInName}-Logged In </li>
            <div className="relative"><Link to="/cart">
            <li className="px-4 "> <BsFillCartFill size={30} /></li> 
            <li className="px-4 ml-3 absolute  bottom-[20px]"> {cartItems.length}</li> 
            </Link>
            </div>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
