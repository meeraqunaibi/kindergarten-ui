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

      <Input label="رقم الهاتف" value={props.currentStudent.parent?.telephoneNum} />
      <Input label=" الاسم " value={props.currentStudent.fullName}  />
      <Input label=" تاريخ الميلاد" value={props.currentStudent.DOB}  />
    </div>
  )
}
export default PersonalInfo;