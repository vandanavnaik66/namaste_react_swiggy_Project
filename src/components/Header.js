import { headerLogo } from "../../utility/constant";

const Header = () => {
    return (
      <div className="navMainContainer">
        <div className="logoContainer">
          <img
            alt=""
            className="imgCls"
            src={headerLogo}
          />
        </div>
        <div className="navContainer">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Feed-Back</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
