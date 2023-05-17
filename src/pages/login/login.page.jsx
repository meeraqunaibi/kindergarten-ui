import React, { useEffect, useState } from "react";
import "./login.css";
import loginLogo from "../../assets/images/loginLogo.svg";
import graphics from "../../assets/images/loginPic.svg";
import Button542 from "../../component/button542/button542";
import Text917 from "../../component/text917/text917.component";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../data/user";
// import { createFeedback } from "../../data/integration";
import { UserContext } from "../../component/providers/user-provider.component";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const singIn = async (e) => {
    const user = await userContext.handleLogin(e);
    console.log(user.profile);
    if (user && user.role === "admin") {
      navigate("/students");
    } else if (user && user.role === "student") {
      navigate(`/student-page/${user.profile}`);
    } else {
      alert("Email or Password are not correct! Please try again.");
    }
  };
  return (
    <div className="container">
      <div className="graphics">
        <img
          src={loginLogo}
          width={329}
          height={121}
          alt="logo"
          className="login-logo"
        />
        <p>هيا لنتعلم سويا مع روضة الذكاء العقلي</p>
        <img src={graphics} alt="logo" />
      </div>
      <div className="login-info">
        <Text917 title="تسجيل الدخول" />
        <form onSubmit={singIn}>
          <label>الايميل</label>
          <input type="text" placeholder="أدخل اسم المستخدم" name="email" />
          <label>كلمة المرور</label>
          <input type="password" placeholder="كلمة المرور " name="password" />
          <Button542 content="تسجيل الدخول" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
