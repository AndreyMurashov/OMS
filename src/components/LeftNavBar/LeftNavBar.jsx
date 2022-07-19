import "./LeftNavBar.css";
import { Link } from "react-router-dom";

const LeftNavBar = () => {
  function handlerFZ() {
    document
      .querySelector(".leftNavBar__FZ")
      .classList.toggle("leftNavBar__FZ_open");
  }

  function handlerPP() {
    document
      .querySelector(".leftNavBar__PP")
      .classList.toggle("leftNavBar__PP_open");
  }

  function handlerPM() {
    document
      .querySelector(".leftNavBar__PM")
      .classList.toggle("leftNavBar__PM_open");
  }

  function handlerFF() {
    document
      .querySelector(".leftNavBar__FF")
      .classList.toggle("leftNavBar__FF_open");
  }

  return (
    <div className="leftNavBar">
      <h6 className="leftNavBar__title">Основные нормативные правовые акты</h6>
      <p className="leftNavBar__chart" onClick={handlerFZ}>
        Федеральные законы
      </p>
      <ul className="leftNavBar__FZ">
        <li>
          <Link to="/326" className="leftNavBar__link">
            Федеральный закон от 29.11.2010 N 326-ФЗ "Об обязательном
            медицинском страховании в Российской Федерации"
          </Link>
        </li>
        <li>
          <Link to="/323" className="leftNavBar__link">
            Федеральный закон от 21.11.2011 № 323-ФЗ "Об основах охраны здоровья
            граждан в Российской Федерации"
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>

      <p className="leftNavBar__chart" onClick={handlerPP}>
        Постановления Правительства Российской Федерации
      </p>
      <ul className="leftNavBar__PP">
        <li>
          <Link to="/326" className="leftNavBar__link">
            Федеральный закон от 29.11.2010 N 326-ФЗ "Об обязательном
            медицинском страховании в Российской Федерации"
          </Link>
        </li>
        <li>
          <Link to="/323" className="leftNavBar__link">
            Федеральный закон от 21.11.2011 № 323-ФЗ "Об основах охраны здоровья
            граждан в Российской Федерации"
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>

      <p className="leftNavBar__chart" onClick={handlerPM}>
        Приказы Минздрава России
      </p>
      <ul className="leftNavBar__PM">
        <li>
          <Link to="/326" className="leftNavBar__link">
            Федеральный закон от 29.11.2010 N 326-ФЗ "Об обязательном
            медицинском страховании в Российской Федерации"
          </Link>
        </li>
        <li>
          <Link to="/323" className="leftNavBar__link">
            Федеральный закон от 21.11.2011 № 323-ФЗ "Об основах охраны здоровья
            граждан в Российской Федерации"
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>

      <p className="leftNavBar__chart" onClick={handlerFF}>
        Документы ФФОМС
      </p>
      <ul className="leftNavBar__FF">
        <li>
          <Link to="/326" className="leftNavBar__link">
            Федеральный закон от 29.11.2010 N 326-ФЗ "Об обязательном
            медицинском страховании в Российской Федерации"
          </Link>
        </li>
        <li>
          <Link to="/323" className="leftNavBar__link">
            Федеральный закон от 21.11.2011 № 323-ФЗ "Об основах охраны здоровья
            граждан в Российской Федерации"
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default LeftNavBar;
