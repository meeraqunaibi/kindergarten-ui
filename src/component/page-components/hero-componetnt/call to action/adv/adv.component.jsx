import advbus from '../../../../../images/advbus.svg';
import Button from '../../button/button.component';
import './adv.css';
const CallToAction = () => {
  return (
    <div className='call-action'>
      <div className='adv'>
        <div className='call-active-text'>
          <span className='call-active-title'>نحن  بحاجة لموظفين</span><br/>
          <span className='call-active-subtext'>
            روضة الذكاء العقلي ..الروضة المتخصصة في تدريس مناهج مميزة وفعاله
            روضة الذكاء العقلي ..الروضة المتخصصة في تدريس مناهج مميزة وفعاله
            روضة الذكاء العقلي ..الروضة المتخصصة في تدريس مناهج مميزة وفعاله
          </span>
          <div className='read'>
          <Button title='قراءة المزيد' className='button fill ' />
          </div>
        </div>
        <img src={advbus} alt="bus" />
      </div>
    </div>
  )
}
export default CallToAction;
