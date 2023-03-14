import React from "react";
// import "./login.css";
import loginLogo from "../../assets/images/loginLogo.svg";
import graphics from "../../assets/images/signupPic.svg";

const Signup = () => {
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
        <p>تسجيل حساب</p>
        <form>
          <label>اسم المستخدم</label>
          <input type="name" placeholder="أدخل اسم المستخدم " />
          <label>الايميل</label>
          <input type="email" placeholder="أدخل الايميل " />
          <label>كلمة المرور</label>
          <input type="password" placeholder="كلمة المرور " />
        </form>
        <button>تسجيل الحساب</button>
        <span>لديك حساب بالفعل؟ تسجيل الدخول</span>
      </div>
    </div>
  );
};

export default Signup;
