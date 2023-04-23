import React, { useState } from "react";
import forgot from "../../assets/images/forgotPic.svg";
import Button542 from "../../component/button542/button542";
import "./forgot.css";
import { useNavigate } from "react-router-dom";
// import Verification from "../verification/verification.page"

const Forgot = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState(" ");
  const handelLogin= (e)=>{
    e.preventDefault();
    navigate('/login');
  }
  const handleForgot= (e) =>{
  e.preventDefault();
  const userEmail = e.target.email.value.trim();
  if(userEmail){
    
    alert(userEmail)
    navigate('/verify')
  } 
  // setEmail(userEmail)
  }

  return (
    <div className="container">
      <div className="forgot-graphics">
        <img src={forgot} alt="logo" />
        <div className="ver-msg">
          <span>هل نسيت كلمة المرور</span>
          <p> لا تقلق يمكنك استرجاع حسابك</p>
        </div>
      </div>
      <div className="login-info">
        <p>استرجاع الحساب </p>
        <form onSubmit={handleForgot}>
          <label>الايميل</label>
          <input type="email" name="email" placeholder="أدخل الإيميل"/>
        <Button542 content="تأكيد" type="submit"/>
        </form>
        <div>
          <span>هل تذكرت كلمة المرور؟</span> <b onClick={handelLogin}>تسجيل الدخول</b>
        </div>
      </div>
        {/* <Verification email={email}/> */}
    </div>                                                                                  
  );
};

export default Forgot;
