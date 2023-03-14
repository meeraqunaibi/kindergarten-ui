import './header.css';
import logo from '../../../../images/logo.svg';
import Button from "../button/button.component";
import { HashLink } from "react-router-hash-link";


const HomeHeader = (props) => {
  const x = new Date('2023-02-19');
  const y = new Date('2023-05-17');
  const getRegisterLink = () => {
    if (new Date() > x || new Date() < y) {
      return '/register-student';
    } else {
      return '/registration-ended';
    }
  }
console.log(props.id);
  return (
    <header className="header ">
      <nav>
        <div>
          <img src={logo} alt="روضة الذكاء العقلي" />
        </div>
        <div className="content">
          <HashLink to={'/#home-page'}>الرئيسية</HashLink>
          <HashLink to={'/#contents'}>من نحن</HashLink>
          <HashLink to={`/#feature`}> ماذا نقدم</HashLink> 
          <HashLink to={`/#evaluation`}> اراء الأهالي</HashLink>
          <HashLink to={`/#call-action`}> الاعلانات</HashLink>
          <HashLink to={`/#footer`}> نواصل معنا</HashLink>

        </div>
        <div className="register">
          <Button title='تسجيل الدخول' className='button headerb' link="/login" />
          <Button title='تسجيل الطالب' className='button headerb' link={getRegisterLink()} />
        </div>
      </nav >
    </header>
  )
}
export default HomeHeader;