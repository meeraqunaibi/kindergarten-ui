import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../page-components/hero-componetnt/button/button.component";
import navImg from "../../assets/images/navLogo.svg";
import "./navbar.css";
import { UserContext } from "../providers/user-provider.component";

const Navbar = () => {
  const userContext = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <Button title="تسجيل الخروج" className="button headerb" link="/login" />
      <div className="nav-button">
        <Link to="/feed">الرئيسية</Link>
        <div className="dropdown">
          <Link onClick={() => handleOpen()}>ألعاب</Link>
          {isOpen ? (
            <ul className="menu">
              <li className="menu-item">
                <Link to="/memory-game">لعبة الذاكرة</Link>
              </li>
              <li className="menu-item">
                <Link to="/sound-game">أصوات الحيوانات</Link>
              </li>
            </ul>
          ) : null}
        </div>
        {userContext.user?.role === "admin" ? (
          <>
            <Link to="/students">الطلاب</Link>
            <Link to="/confirm-register">تأكيد التسجيل</Link>
          </>
        ) : (
          <>
            <Link to={`/student-page/${userContext?.user?.profile}`}>
              حسابي
            </Link>
            <Link to={`/colleagues`}>الزملاء</Link>
          </>
        )}
      </div>
      <div className="nav-icon">
        <img src={navImg} alt="icon" />
      </div>
    </div>
  );
};

export default Navbar;
