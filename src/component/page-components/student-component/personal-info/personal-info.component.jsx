import { PencilSimpleLine } from "phosphor-react";
import Input from "../../../input/input.component"
import './personal-info.css';
const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <div className="person">
        <span>المعلومات الشخصية </span>
        <div className="edit">
          <div>
            <span>تعديل</span>
            <button className="edit-btn"><PencilSimpleLine size={18} color="#8C6DFD" weight="thin" /></button>
          </div>
          
        </div>
      </div>
      <Input label="رقم الهاتف" placeholder="+972 5595 855" type='number' />
      <Input label=" الاسم " placeholder="Khaleed Ahmad" type='text' />
      <Input label=" تاريخ الميلاد" placeholder="15/05/2018" type='date' />
    </div>
  )
}
export default PersonalInfo;