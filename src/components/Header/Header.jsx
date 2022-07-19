import "./Header.css";
import { Link } from "react-router-dom";
import OMS from "./oms.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/" className="header__title">
          Обязательное медицинское страхование
        </Link>
      </div>
      <img className="header__logo" src={OMS} alt="#" />
    </div>
  );
};

export default Header;
