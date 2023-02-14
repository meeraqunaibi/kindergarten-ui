import React from 'react'
import "./login.css"
import loginLogo from "../../assets/images/loginLogo.png"
import graphics from "../../assets/images/loginPic.png"


const Login = () => {
  return (
    <div className='container'>
      <div className='graphics'>
        <img src={loginLogo} width={329} height={121} alt='logo' className='login-logo'/>
        <p>هيا لنمرح سويا مع روضة الذكاء العقلي</p>
        <img src={graphics} width={550} height={381} alt='logo' />

      </div>
      <div className='login-info'>
        <p>تسجيل حساب</p>
        <form>
          <label>الايميل</label>
          <input type="email" placeholder='أدخل اسم المستخدم ' />
          <label>كلمة المرور</label>
          <input type="password" placeholder='كلمة المرور ' />
        </form>
        <button>تسجيل الحساب</button>
        <span>لديك حساب بالفعل؟  تسجيل الدخول</span>
      </div>
    </div>
  )
}

export default Login