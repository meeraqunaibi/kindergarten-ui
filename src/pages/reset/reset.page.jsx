import React from "react";
import reset from "../../assets/images/reset.svg";
import Button542 from "../../component/button542/button542";
import "../forgot/forgot.css";
import "./reset.css";
import { useNavigate } from "react-router-dom";

const Reset = (props) => {
  const navigate = useNavigate();

  const handelLogin= (e)=>{
    e.preventDefault();
    
    const newpass = e.target.newpass.value.trim();
    //reset need backend and data base
    if(newpass){
      alert({newpass})
      navigate('/login');
    } 
  }

  const cancel=()=>{
    navigate("/home-ppage");
  }
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
        <form onSubmit={handelLogin}>
          <label>كلمة المرور </label>
          <input type="password" placeholder="أدخل كلمة المرور" name="newpass"/>
        <Button542 content="تأكيد" type="submit"/>
        </form>
        <div onClick={cancel}>
          <span>هل تود إلغاء العملية؟</span> <b>إلغاء</b>
        </div>
      </div>
    </div>
  );
};

export default Reset;
