import { SignOut } from 'phosphor-react';
import Button from '../../page-components/hero-componetnt/button/button.component';
import './registration-ended.css';

const RegistrationEnded = () => {
  return (
    <div className="over">
      <div className='out'>
        <Button title={<SignOut size={32} color="#e7e8e9" />} link='/'></Button>
      </div>
      <div className='end'>
        <h1>انتهت فترة التسجيل</h1>
      </div>
    </div>
  )
}
export default RegistrationEnded;