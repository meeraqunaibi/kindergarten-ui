import './hero.css';
import bus from '../../../../images/bus.svg';
import Button from '../button/button.component';
const Hero = () => {
  return (
    <div className="welcome">
      <div className="definition">
        <div className='hero-text'>روضة الذكاء العقلي </div>
        <div className='hero-subtext'>الروضة المتخصصة في تدريس مناهج مميزة وفعاله </div>
        <div className='hero-subtext'>توصال معنا او سجل الدخول بحساب طفلك للاطلاع على مزيد من التفاصيل </div>
        <div className='buttons-group'>
          <Button title='تسجيل الدخول' className='button fill' />
          <Button title='تواصل معنا' className='button empty' />
        </div>
      </div>
      <div className="bus">
        <img src={bus} alt="bus" />
      </div>
      <div>
      </div>
    </div>
  )
}
export default Hero;