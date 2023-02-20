import { Link } from "react-router-dom";
import './header.css';
import logo from '../../../../images/logo.svg';
import Button from "../button/button.component";


const HomeHeader = () => {
  const x = new Date('2023-02-19');
  const y = new Date('2023-05-17');
  const getRegisterLink = () => {
    if (new Date() > x || new Date() < y) {
      return '/register-student';
    } else {
      return '/registration-ended';
    }
  }

  return (
    <header className="header">
      <nav>
        <div>
          <img src={logo} alt="روضة الذكاء العقلي" />
        </div>
        <div className="content">
          <Link to={'/'}>الرئيسية</Link>
          <Link> من نحن</Link>
          <Link> ماذا نقدم</Link>
          <Link> الاعلانات</Link>
          <Link> نواصل معنا</Link>
        </div>
        <div className="register">
          <Button title='تسجيل الدخول' className='button headerb' />
          <Button title='تسجيل الطالب' className='button headerb' link={getRegisterLink()} />
        </div>
      </nav >
    </header>
  )
}
export default HomeHeader;