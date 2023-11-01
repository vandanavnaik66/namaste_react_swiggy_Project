import { headerLogo } from "../../utility/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utility/useOnlineStatus";

const Header = () => {
const onlineStatus=useOnlineStatus();

    return (
      <div className="flex justify-between items-center p-4 bg-green-100 shadow-md mt-4">
        <div >
          <img
          className="w-[120px] bg-transparent" alt=""
            src={headerLogo}
          />
        </div>
        <div >
          <ul className="flex justify-between">
          <li className="px-4">online status:{onlineStatus?"online":"ofline"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4" ><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/swiggyInstaMart">Swiggy Groceries</Link></li>
            <li className="px-4">Feed-Back</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
