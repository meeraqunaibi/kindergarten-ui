import Input from "../../../input/input.component"
import './personal-info.css';
const PersonalInfo = (props) => {
  return (
    <div className="personal-info">
      <div className="person">
        <span>المعلومات الشخصية </span>
        <div className="edit">
        </div>
      </div>
      <Input label="رقم الهاتف" value={props.fathermMobileNum} />
      <Input label=" الاسم " value={props.fullName}  />
      <Input label=" تاريخ الميلاد" value={props.DOB}  />
    </div>
  )
}
export default PersonalInfo;