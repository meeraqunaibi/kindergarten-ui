import React, { useEffect, useState } from "react";
import "./login.css";
import loginLogo from "../../assets/images/loginLogo.svg";
import graphics from "../../assets/images/loginPic.svg";
import Button542 from "../../component/button542/button542";
import Text917 from "../../component/text917/text917.component";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../data/user";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const user = await loginUser(email, password);
      if (user && user.role === 'admin') {
        setUser(user);
        navigate('/students');
      } else if (user && user.role === 'student') {
        setUser(user);
        navigate('/student-page');
      } else {
        alert("Email or Password are not correct! Please try again.");
      }
    }
  useEffect(() => {
    if (user?.id) {
      navigate('/student');
    }
  }, []);
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
        <form onSubmit={handleLogin}>
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
