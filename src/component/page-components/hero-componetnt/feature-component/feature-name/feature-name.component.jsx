import './feature-name.css';

const FeatureName = (props) => {
  return (
    <div>
      <div className='block'>
        <img src={props.img} alt="" />
        <span className='feature-name'>{props.name}</span>
        <p className='feature-description'>يتم اتباع نطام دمج اللعب مع الندريس</p>
      </div>
    </div>
  )
}
export default FeatureName;