//Router
import { Link, useLocation } from "react-router-dom";

//react
import { useState } from "react";

//images
import logo_white from "../assets/images/logo/tissot-white.svg";
import logo_black from "../assets/images/logo/tissot-black.svg";

//Icons
import { FiSearch, FiWatch, FiUser, FiShoppingBag } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

//Images
import categoriesBg from "../assets/images/home/bg-cover/navigation_menu_img.webp";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [isActiveMen, setIsActiveMen] = useState(false);
  const [isActiveWomen, setIsActiveWomen] = useState(false);
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const location = useLocation();

  return (
    <header>
      <nav
        className={location.pathname === "/" ? "navBar" : "navDef"}
        id={showCategories ? "show" : ""}
      >
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
        <div className="nav-container">
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
              <div
                className="hamburger-menu"
                onClick={() => setIsHamburgerActive(!isHamburgerActive)}
              >
                <RxHamburgerMenu />
              </div>
            </div>
            <Link
              to="/"
              className={"logo"}
              onClick={() => setShowCategories(false)}
            >
              <img
                src={
                  showCategories || location.pathname !== "/"
                    ? logo_black
                    : logo_white
                }
                alt=""
              />
            </Link>
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
                </Link>
                <span className="item-hover">International</span>
              </li>
              <li className="list-item location">
                <Link to="#">
                  <GoLocation />
                </Link>
                <span className="item-hover-2">Fins Stores</span>
              </li>
              <li className="list-item watch">
                <Link to="#">
                  <FiWatch />
                </Link>
                <span className="item-hover-3">Register Watch</span>
              </li>
              <li className="list-item user">
                <Link to="/login">
                  <FiUser />
                </Link>
                <span className="item-hover-4">My Account</span>
              </li>
              <li className="list-item cart">
                <Link to="/cart">
                  <FiShoppingBag />
                </Link>
                <span className="item-hover-5">My cart</span>
              </li>
            </ul>
          </div>
          <div className="nav-below">
            <ul className="nav-list">
              <li
                className="list-item"
                onClick={() => setShowCategories(!showCategories)}
              >
                <Link>Men</Link>
              </li>
              <li
                className="list-item"
                onClick={() => setShowCategories(!showCategories)}
              >
                <Link>Women</Link>
              </li>
              <li
                className="list-item"
                onClick={() => setShowCategories(!showCategories)}
              >
                <Link>Collections</Link>
              </li>
              <li className="list-item">
                <Link to="#">News</Link>
              </li>
              <li className="list-item">
                <Link to="#">Straps</Link>
              </li>
            </ul>
          </div>
          <div
            className="categories-menu"
            onClick={() => setShowCategories(false)}
          >
            <div className="all-categories">
              <h2 className="title">
                <Link>View all</Link>
              </h2>
              <ul className="categories">
                <h3 className="sub-title">Categories</h3>
                <li className="category-title">
                  <Link to="/products">T-Touch</Link>
                </li>
                <li className="category-title">
                  <Link to="/products">Classic</Link>
                </li>
                <li className="category-title">
                  <Link to="/products">Sport</Link>
                </li>
                <li className="category-title">
                  <Link to="/products">Heritage</Link>
                </li>
                <li className="category-title">
                  <Link to="/products">Pocket</Link>
                </li>
                <li className="category-title">
                  <Link to="/products">Gold</Link>
                </li>
              </ul>
            </div>
            <div className="selections">
              <h3 className="sub-title">Selections</h3>
              <ul className="category-selections">
                <li className="selection-title">
                  <Link to="/products">New</Link>
                </li>
                <li className="selection-title">
                  <Link to="/products">Gift-ideas</Link>
                </li>
                <li className="selection-title">
                  <Link to="/products">Special collections</Link>
                </li>
                <li className="selection-title">
                  <Link to="/products">Iconics</Link>
                </li>
                <li className="selection-title">
                  <Link to="/products">Powermatic 80 movement</Link>
                </li>
                <li className="selection-title">
                  <Link to="/products">Diamonds</Link>
                </li>
                <li className="selection-title">
                  <Link to="/products">Nba watches</Link>
                </li>
                <li className="selection-title">
                  <Link to="/products">Motogp watches</Link>
                </li>
              </ul>
            </div>
            <div className="main-collections">
              <h3 className="sub-title">Main collection</h3>
              <ul className="collections">
                <li className="collection-title">
                  <Link to="/products">Tissot prx</Link>
                </li>
                <li className="collection-title">
                  <Link to="/products">tissot seastar</Link>
                </li>
                <li className="collection-title">
                  <Link to="/products">Tissot supersport chrono</Link>
                </li>
                <li className="collection-title">
                  <Link to="/products">Tissot gentleman</Link>
                </li>
                <li className="collection-title">
                  <Link to="/products">Tissot chrono xl</Link>
                </li>
                <li className="collection-title">
                  <Link to="/products">Tissot chemin des tourelles</Link>
                </li>
                <li className="collection-title">
                  <Link to="/products">Tissot le locle</Link>
                </li>
                <li className="collection-title">
                  <Link to="/products">Tissot couturier</Link>
                </li>
                <li className="collection-title">
                  <Link to="/products">Tissot tradition</Link>
                </li>
              </ul>
            </div>
            <div className="image-part">
              <Link>
                <img src={categoriesBg} alt="tissot prx 35mm" />
                <h4 className="img-title">TISSOT PRX 35 MM.</h4>
              </Link>
            </div>
          </div>

          <div
            className={
              isHamburgerActive ? "categories-nondesktop" : "nondesktop-disabed"
            }
          >
            <div className="non-desktop-row">
              <div className="top-bar">
                <GrClose
                  onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                />
                <Link to="/" className="top-bar-logo">
                  <img src={logo_black} alt="" />
                </Link>
              </div>
              <ul className="categories">
                <li className="category-item">
                  <div
                    className="item-title"
                    onClick={() => setIsActiveMen(!isActiveMen)}
                  >
                    <span className="title">MEN</span>
                    <RiArrowDownSLine
                      className={isActiveMen ? "arrow" : "def-arrow"}
                    />
                  </div>
                  <div
                    className={
                      isActiveMen ? "category-content" : "category-close"
                    }
                    onClick={() => {
                      setIsHamburgerActive(!isHamburgerActive);
                      setIsActiveMen(!isActiveMen);
                    }}
                  >
                    <div className="all-categories">
                      <h2 className="title">
                        <Link>View all</Link>
                      </h2>
                      <ul className="categories">
                        <h3 className="sub-title">Categories</h3>
                        <li className="category-title">
                          <Link>T-Touch</Link>
                        </li>
                        <li className="category-title">
                          <Link to="/products">Classic</Link>
                        </li>
                        <li className="category-title">
                          <Link>Sport</Link>
                        </li>
                        <li className="category-title">
                          <Link>Heritage</Link>
                        </li>
                        <li className="category-title">
                          <Link>Pocket</Link>
                        </li>
                        <li className="category-title">
                          <Link>Gold</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="selections">
                      <h3 className="sub-title">Selections</h3>
                      <ul className="category-selections">
                        <li className="selection-title">
                          <Link>New</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Gift-ideas</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Special collections</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Iconics</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Powermatic 80 movement</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Diamonds</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Nba watches</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Motogp watches</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="main-collections">
                      <h3 className="sub-title">Main collection</h3>
                      <ul className="collections">
                        <li className="collection-title">
                          <Link>Tissot prx</Link>
                        </li>
                        <li className="collection-title">
                          <Link>tissot seastar</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot supersport chrono</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot gentleman</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot chrono xl</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot chemin des tourelles</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot le locle</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot couturier</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot tradition</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  className="category-item"
                  onClick={() => setIsActiveWomen(!isActiveWomen)}
                >
                  <div className="item-title">
                    <span className="title">WOMEN</span>
                    <span>
                      <RiArrowDownSLine
                        className={isActiveWomen ? "arrow" : "def-arrow"}
                      />
                    </span>
                  </div>
                  <div
                    className={
                      isActiveWomen ? "category-content" : "category-close"
                    }
                    onClick={() => {
                      setIsHamburgerActive(!isHamburgerActive);
                      setIsActiveMen(!isActiveMen);
                    }}
                  >
                    <div className="all-categories">
                      <h2 className="title">
                        <Link>View all</Link>
                      </h2>
                      <ul className="categories">
                        <h3 className="sub-title">Categories</h3>
                        <li className="category-title">
                          <Link>T-Touch</Link>
                        </li>
                        <li className="category-title">
                          <Link to="/products">Classic</Link>
                        </li>
                        <li className="category-title">
                          <Link>Sport</Link>
                        </li>
                        <li className="category-title">
                          <Link>Heritage</Link>
                        </li>
                        <li className="category-title">
                          <Link>Pocket</Link>
                        </li>
                        <li className="category-title">
                          <Link>Gold</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="selections">
                      <h3 className="sub-title">Selections</h3>
                      <ul className="category-selections">
                        <li className="selection-title">
                          <Link>New</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Gift-ideas</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Special collections</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Iconics</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Powermatic 80 movement</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Diamonds</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Nba watches</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Motogp watches</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="main-collections">
                      <h3 className="sub-title">Main collection</h3>
                      <ul className="collections">
                        <li className="collection-title">
                          <Link>Tissot prx</Link>
                        </li>
                        <li className="collection-title">
                          <Link>tissot seastar</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot supersport chrono</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot gentleman</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot chrono xl</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot chemin des tourelles</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot le locle</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot couturier</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot tradition</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  className="category-item"
                  onClick={() => setIsActiveCategory(!isActiveCategory)}
                >
                  <div className="item-title">
                    <span className="title">COLLECTIONS</span>
                    <span>
                      <RiArrowDownSLine
                        className={isActiveCategory ? "arrow" : "def-arrow"}
                      />
                    </span>
                  </div>
                  <div
                    className={
                      isActiveCategory ? "category-content" : "category-close"
                    }
                    onClick={() => {
                      setIsHamburgerActive(!isHamburgerActive);
                      setIsActiveMen(!isActiveMen);
                    }}
                  >
                    <div className="all-categories">
                      <h2 className="title">
                        <Link>View all</Link>
                      </h2>
                      <ul className="categories">
                        <h3 className="sub-title">Categories</h3>
                        <li className="category-title">
                          <Link>T-Touch</Link>
                        </li>
                        <li className="category-title">
                          <Link to="/products">Classic</Link>
                        </li>
                        <li className="category-title">
                          <Link>Sport</Link>
                        </li>
                        <li className="category-title">
                          <Link>Heritage</Link>
                        </li>
                        <li className="category-title">
                          <Link>Pocket</Link>
                        </li>
                        <li className="category-title">
                          <Link>Gold</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="selections">
                      <h3 className="sub-title">Selections</h3>
                      <ul className="category-selections">
                        <li className="selection-title">
                          <Link>New</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Gift-ideas</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Special collections</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Iconics</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Powermatic 80 movement</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Diamonds</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Nba watches</Link>
                        </li>
                        <li className="selection-title">
                          <Link>Motogp watches</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="main-collections">
                      <h3 className="sub-title">Main collection</h3>
                      <ul className="collections">
                        <li className="collection-title">
                          <Link>Tissot prx</Link>
                        </li>
                        <li className="collection-title">
                          <Link>tissot seastar</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot supersport chrono</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot gentleman</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot chrono xl</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot chemin des tourelles</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot le locle</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot couturier</Link>
                        </li>
                        <li className="collection-title">
                          <Link>Tissot tradition</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="category-item">NEW STYLES</li>
                <li className="category-item">BRACELETS</li>
              </ul>
              <hr />
              <div className="tools">
                <ul className="tool-list">
                  <li className="tool-item">
                    <GoLocation />
                    <span>find stores</span>
                  </li>
                  <li className="tool-item">
                    <FiWatch />
                    <span>register watches</span>
                  </li>
                  <li className="tool-item">
                    <TbWorld />
                    <span>international</span>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="brand-tool">
                <p className="brand">brand</p>
                <p className="services">customer services</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
