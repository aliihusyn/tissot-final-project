//logo
import footerLogo from "../assets/images/logo/footer-logo.svg";

//icons
import { AiOutlineGift, AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { RxTwitterLogo } from "react-icons/rx";
import { FiHeadphones } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="logo-row">
          <img src={footerLogo} alt="logo" />
        </div>
        <p>© TISSOT SA - SWISS WATCHES SINCE 1853 - ALL RIGHT RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
