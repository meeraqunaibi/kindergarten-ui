import React from "react";
import reset from "../../assets/images/reset.svg";
import Button542 from "../../component/button542/button542";
import "../forgot/forgot.css";
import "./reset.css";

const Reset = () => {
  return (
    <div className="container">
      <div className="forgot-graphics">
        <div className="reset-msg">
          <span>نحن سعداء بعودتك مجدداً</span>
        </div>
        <img src={reset} alt="logo" />
      </div>
      <div className="login-info">
        <p> كلمة مرور جديدة</p>
        <form>
          <label>كلمة المرور </label>
          <input type="password" placeholder="أدخل كلمة المرور" />
        </form>
        <Button542 content="تأكيد" />
        <div>
          <span>هل تود إلغاء العملية؟</span> <b>إلغاء</b>
        </div>
      </div>
    </div>
  );
};

export default Reset;
