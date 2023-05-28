import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../page-components/hero-componetnt/button/button.component";
import navImg from "../../assets/images/navLogo.svg";
import "./navbar.css"
import { UserContext } from "../providers/user-provider.component";

const Navbar = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="navbar">
      <Button title="تسجيل الخروج" className="button headerb" link='/login' />
      <div className="nav-button">
        <Link to="/feed" >الرئيسية</Link>
        <Link to="/game">ألعاب</Link>
        <Link to="/students">الزملاء</Link>
        <Link to={`/student-page/${userContext?.user?.profile}`}>حسابي</Link>
        <Link to="/confirm-register">تأكيد التسجيل</Link>
      </div>
      <div className="nav-icon">
        <img src={navImg} alt="icon" />
      </div>
    </div>
  );
};

export default Navbar;
