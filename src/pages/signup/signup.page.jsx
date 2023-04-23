// import "./login.css";
import React,{ useState, useEffect } from 'react'
import loginLogo from "../../assets/images/loginLogo.svg";
import graphics from "../../assets/images/signupPic.svg";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(()=>{
    if(localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null){
        navigate("/home-ppage");
    }
},[])

const handelLogin= (e)=>{
  e.preventDefault();
  navigate('/login');
}

const registerAction = (e) => {
  e.preventDefault();
  setName(e.target.name.value.trim())
  setEmail(e.target.email.value.trim())
  setPassword(e.target.password.value.trim())
  setIsSubmitting(true)
  let regload = {
      name:name,
      email:email,
      password:password,
  }
  axios.post('api/register', regload)
  .then((r) => {
      setIsSubmitting(false)
      localStorage.setItem('token', r.data.token)
      navigate("/home-ppage");
  })
  .catch((e) => {
      setIsSubmitting(false)
      if (e.response.data.errors !== undefined) {
          setValidationErrors(e.response.data.errors);
      }
  });
}
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
        <form onSubmit={(e)=>registerAction(e)}>
          <label>اسم المستخدم</label>
          <input type="text" placeholder="أدخل اسم المستخدم " />
          <label>الايميل</label>
          <input type="email" placeholder="أدخل الايميل " />
          <label>كلمة المرور</label>
          <input type="password" placeholder="كلمة المرور "/>
        </form>
        <button disabled={isSubmitting} type="submit" >تسجيل الحساب</button>
        <span onClick={handelLogin}>لديك حساب بالفعل؟ تسجيل الدخول</span>
      </div>
    </div>
  );
};

export default Signup;
