import React from "react";
import { Link } from "react-router-dom";
import Button from "../page-components/hero-componetnt/button/button.component";
import navImg from "../../assets/images/navLogo.svg";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <Button title="تسجيل الخروج" className="button headerb" link='/login' />
      <div className="nav-button">
        <Link to="/feed" >الرئيسية</Link>
        <Link>ألعاب</Link>
        <Link to="/students">الزملاء</Link>
        <Link to="/student-page">حسابي</Link>
      </div>
      <div className="nav-icon">
        <img src={navImg} alt="icon" />
      </div>
    </div>
  );
};

export default Navbar;
