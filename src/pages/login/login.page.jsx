import React from "react";
import "./login.css";
import loginLogo from "../../assets/images/loginLogo.svg";
import graphics from "../../assets/images/loginPic.svg";

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
        <p>تسجيل الدخول</p>
        <form>
          <label>الايميل</label>
          <input type="email" placeholder="أدخل اسم المستخدم " />
          <label>كلمة المرور</label>
          <input type="password" placeholder="كلمة المرور " />
        </form>
        <button>تسجيل الدخول</button>
      </div>
    </div>
  );
};

export default Login;