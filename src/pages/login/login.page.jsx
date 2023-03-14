import React from "react";
import "./login.css";
import loginLogo from "../../assets/images/loginLogo.svg";
import graphics from "../../assets/images/loginPic.svg";
import Button542 from "../../component/button542/button542";
import Text917 from "../../component/text917/text917.component";

const Login = () => {
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
        <Text917 title="تسجيل الدخول"/>
        <form>
          <label>الايميل</label>
          <input type="email" placeholder="أدخل اسم المستخدم " />
          <label>كلمة المرور</label>
          <input type="password" placeholder="كلمة المرور " />
        </form>
        <Button542 content="تسجيل الدخول" />
      </div>
    </div>
  );
};

export default Login;
