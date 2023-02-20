import { FacebookLogo, TelegramLogo, WhatsappLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.svg';
import map from '../../../../images/map.svg';

import './footer.css';
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <div className='footer-content'>
           <span >معلومات التواصل</span>
          </div>
          <li className='li email '>الايميل : smart-kids@gmail.com</li>
          <li className='li phone'>رقم الهاتف : 022-322-5421</li>
          <li className='li location'>الموقع : الخليل - رأس الجورة</li>
        </div>
        <div>
          <img src={map} alt="" />
        </div>
      </div> 
       <hr /><nav>
      <div className='light'>
      
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <Link ><FacebookLogo size={32} color="#6335f8" /></Link>
          <Link><WhatsappLogo size={32} color="#6335f8" /></Link>
          <Link><TelegramLogo size={32} color="#6335f8" /></Link>
        </div>
          
      </div>        </nav>

    </div>
  )
}
export default Footer;