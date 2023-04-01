import React from "react";
import forgot from "../../assets/images/forgotPic.svg";
import Button542 from "../../component/button542/button542";
import "../forgot/forgot.css";
import { useNavigate } from "react-router-dom";
// import Rest from "../reset/reset.page"

const Verification = () => {
 
  const navigate = useNavigate();

  const handelVerify = (e) =>{
    e.preventDefault();
    const code = e.target.code.value.trim();
    //verify code need backend

    if(code==="kindergarten"){
      console.log(this)
      navigate("/reset")
    }
  }

  const handelGoBack=()=>{
    navigate(-1);
  }

  const cancel=()=>{
    navigate("/home-ppage");
  }
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
        <form onSubmit={handelVerify}>
          <label>الرمز</label>
          <input type="text" placeholder="أدخل الرمز" name="code"/>
        <Button542 content="تأكيد" type="submit" />
        </form>
        <div onClick={handelGoBack}>
          <span>هل أدخلت بريداً خاطئاً؟</span> <b>عودة</b>
        </div>
        <div onClick={cancel}>
          <span>هل تود إلغاء العملية؟</span> <b>إلغاء</b>
        </div>
      </div>
    </div>
  );
};

export default Verification;
