import './feature.css';
import comfort from '../../../../images/comfort.svg';
import fun from '../../../../images/fun.svg';
import modern from '../../../../images/modern.svg';
import FeatureName from '../feature-name/feature-name.component';
const Feature = () => {
  return (
    <div className='feature'>
      <div className="into">
        <p>تهتم روضة الذكاء العقلي حول العديد من الجوانب لنمو طفلك <br />: مثل</p>
      </div>
      <div className='feature-title'>
        <FeatureName img={comfort} name='راحة لطفلك' />
        <FeatureName img={fun} name='تعليم مرح' />
        <FeatureName img={modern} name='تعليم حديث' />
      </div>
    </div>
  )
}
export default Feature;