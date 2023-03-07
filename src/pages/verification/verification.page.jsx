import React from "react";
import forgot from "../../assets/images/forgotPic.svg";
import Button542 from "../../component/button542/button542";
import "../forgot/forgot.css";

const Verification = () => {
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
        <p> تأكيد الرمز</p>
        <form>
          <label>الرمز</label>
          <input type="text" placeholder="أدخل الرمز" />
        </form>
        <Button542 content="تأكيد" />
        <div>
          <span>هل أدخلت بريداً خاطئاً؟</span> <b>عودة</b>
        </div>
        <div>
          <span>هل تود إلغاء العملية؟</span> <b>إلغاء</b>
        </div>
      </div>
    </div>
  );
};

export default Verification;
