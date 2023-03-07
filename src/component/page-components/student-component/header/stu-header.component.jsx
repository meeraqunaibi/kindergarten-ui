import { Link } from "react-router-dom";
import logo from '../../../../images/logo.svg';
import Button from "../../hero-componetnt/button/button.component";



const StudentHeader = () => {
  return (
    <header className="header">
      <nav>
        <div>
          <img src={logo} alt="روضة الذكاء العقلي" />
        </div>
        <div className="content">
          <Link to={'/home-page'}>الرئيسية</Link>
          <Link>الألعاب </Link>
          <Link>حسابي</Link>
        </div>
        <div className="register">
          <Button title='تسجيل الخروج' className='button headerb' link='/home-page' />
        </div>
      </nav >
    </header>
  )
}
export default StudentHeader;