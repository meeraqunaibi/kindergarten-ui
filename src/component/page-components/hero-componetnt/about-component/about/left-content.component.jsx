import abc from '../../../../../images/abc.svg';
import Content from '../content/conten.component';
import './left-content.css';
const LeftContent = () => {
  return (
    <div className='left-contant'>
      <div className='contents'>
        <Content
          title='الوصف'
          description='روضة الذكاء العقلي ..الروضة المتخصصة في تدريس مناهج مميزة وفعاله'
        />
        <br />
        <Content
          title='خدماتنا '
          description='روضة الذكاء العقلي .. الروضة المتخصصة في تدريس مناهج مميزة وفعاله'
        />
        <br />
        <Content
          title='رؤيتنا'
          description='روضة الذكاء العقلي .. الروضة المتخصصة في تدريس مناهج مميزة وفعاله'
        />
      </div>
      <div>
        <img src={abc} alt="" />
      </div>
    </div>
  )
}
export default LeftContent;