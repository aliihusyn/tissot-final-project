//Router
import { Link } from "react-router-dom";

//images
import logo from "../assets/images/home/tissotlogo.png";

//Icons
import { FiSearch } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { AiFillCaretDown } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FiWatch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <nav className="navBar">
      <div className="watch-register">
        <p className="watch-register-content">
          <strong>
            REGISTER YOUR WATCH&nbsp;
            <Link className="watch-register-title" to="#">
              HERE
            </Link>
          </strong>
          &nbsp;TO ACCESS YOUR WARRANTY INFORMATION AND MORE
        </p>
      </div>
      <div className="container">
        <div className="nav-above">
          <div className="brand-service">
            <ul className="service">
              <li>
                <Link to="#">BRAND</Link>
              </li>
              <li>
                <Link to="#" className="customer-service">
                  CUSTOMER SERVICE
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="utils-list">
            <li className="list-item search">
              <Link>
                <FiSearch />
                <span className="icon-title">Search</span>
              </Link>
            </li>
            <li className="list-item world">
              <Link to="#">
                <TbWorld />
                <AiFillCaretDown />
              </Link>
              <span className="item-hover">International</span>

            </li>
            <li className="list-item location">
              <Link to="#">
                <GrLocation />
              </Link>
            </li>
            <li className="list-item watch">
              <Link to="#">
                <FiWatch />
              </Link>
            </li>
            <li className="list-item user">
              <Link to="#">
                <FiUser />
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-below">
          <ul className="nav-list">
            <li className="list-item">
              <Link to="#">Men</Link>
            </li>
            <li className="list-item">
              <Link to="#">Women</Link>
            </li>
            <li className="list-item">
              <Link to="#">Collections</Link>
            </li>
            <li className="list-item">
              <Link to="#">News</Link>
            </li>
            <li className="list-item">
              <Link to="#">Straps</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
