import PersonalInfo from '../personal-info/personal-info.component';
import './student-info.css';

const StudentInformation = (props) => {
  return (
    <div >
      <div className="box-info">
            <div className='student-introduction'>
              <div className='student-form'>
            <img className='student-img' src={`http://localhost:3001/${props.student?.image?.replaceAll('\\', '/').replace('upload/', '')}`} alt="" />
                <div className='information'>
                  <span className='student-name'>{(props.student?.fullName)}</span>
                  <span className='student-class'>{props.student?.parent?.motherName}</span>
                </div>
              </div>
          <PersonalInfo currentStudent={props.student} />
            </div>
      </div>
    </div>
  )
}
export default StudentInformation;