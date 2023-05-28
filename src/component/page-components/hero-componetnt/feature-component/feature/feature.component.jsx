import './feature.css';
import comfort from '../../../../../images/comfort.svg';
import fun from '../../../../../images/fun.svg';
import modern from '../../../../../images/modern.svg';
import FeatureName from '../feature-name/feature-name.component';
const Feature = () => {
  return (
    <div className='feature' id='feature'>
      <div className="into">
        <p>تهتم روضة الذكاء العقلي حول العديد من الجوانب لنمو طفلك <br />: مثل</p>
      </div>
      <div className='feature-title'>
        <FeatureName img={comfort} name='راحة لطفلك' text="تنويع الطرق التعليمية واستخدام التكنولوجيا لتحقيق تجارب تعلم متفاعلة وشاملة تعزز التفكير النقدي والابتكار وتمكن الطلاب من اكتساب المهارات اللازمة لمواجهة التحديات المستقبل" />
        <FeatureName img={fun} name='تعليم مرح' text="عزز الحماس والاندماج في عملية التعلم، حيث يتم توظيف الأنشطة اللعبية والتفاعلية لجعل التعلم ممتعًا ومثيرًا للاهتمام، مما يساهم في تعزيز التفاعل الإيجابي وتحقيق نتائج أفضل للطلاب" />
        <FeatureName img={modern} name='تعليم حديث' text="توفير بيئة مريحة ومحببة، وتقديم الرعاية الشخصية والاهتمام الفردي لكل طفل، وتوفير فرص للتفاعل الاجتماعي واللعب الهادف، مما يساهم في إشباع احتياجاته الجسدية والعاطفية وتعزيز شعوره بالأمان والانتماء في بيئة روضة سعيدة ومحفزة" />
      </div>
    </div>
  )
}
export default Feature;