import './feature-name.css';

const FeatureName = (props) => {
  return (
    <div>
      <div className='block'>
        <img src={props.img} alt="" />
        <span className='feature-name'>{props.name}</span>
        <p className='feature-description'>{props.text}</p>
      </div>
    </div>
  )
}
export default FeatureName;