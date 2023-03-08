import Input from "../../../input/input.component"
import './personal-info.css';
const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <div className="person">
        <span>المعلومات الشخصية </span>
        <div className="edit">
        </div>
      </div>
      <Input label="رقم الهاتف" value="+972 5595 855" />
      <Input label=" الاسم " value="Khaleed Ahmad"  />
      <Input label=" تاريخ الميلاد" value="15/05/2018"  />
    </div>
  )
}
export default PersonalInfo;