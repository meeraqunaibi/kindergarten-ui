import React from "react";
import forgot from "../../assets/images/forgotPic.svg";
import Button542 from "../../component/button542/button542";
import "./forgot.css";

const Forgot = () => {
  return (
    <div className="container">
      <div className="forgot-graphics">
        <img src={forgot} alt="logo" />
        <div className="ver-msg">
          <span>هل نسيت كلمة المرور</span>
          <p> لا تقلق يمكنك استرحاع حسابك</p>
        </div>
      </div>
      <div className="login-info">
        <p>استرجاع الحساب </p>
        <form>
          <label>الايميل</label>
          <input type="email" placeholder="أدخل الإيميل" />
        </form>
        <Button542 content="تأكيد" />
        <div>
          <span>هل تذكرت كلمة المرور؟</span> <b>تسجيل الدخول</b>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
