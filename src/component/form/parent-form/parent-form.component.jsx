import {   TRAN, WATCH } from "../../../data/class-name";
import Input from "../../input/input.component";
import Select from "../../select/select.component";

const ParentInfo = ({ formData, setFormData }) => {
  return (
    <div className="reg-form">
      <div className="student-detail">
        <Select
          name='tran'
          label='المواصلات'
          required
          value={formData.live}
          onChange={(event) => setFormData({ ...formData, live: event.target.value })}
        >
          {
            TRAN.map(trans => {
              return <option key={trans} value={trans}>{trans}</option>;
            })
          }
        </Select>
        <Select
          name='sleep'
          label=' ينام في النهار'
          required
          value={formData.live}
          onChange={(event) => setFormData({ ...formData, live: event.target.value })}
        >
          {
            WATCH.map(live => {
              return <option key={live} value={live}>{live}</option>;
            })
          }          </Select>

          <Select
            name='acc'
            label='تعرض لحادث'
            required
            value={formData.live}
            onChange={(event) => setFormData({ ...formData, live: event.target.value })}
          >
            {
              WATCH.map(live => {
                return <option key={live} value={live}>{live}</option>;
              })
            }
        </Select>
        <Input className="half-row"
          label="وقت النوم"
          type="time"
        />
        <Input className="half-row"
          label="اسم الأب "
          value={formData.fatherName}
          onChange={(event) => setFormData({ ...formData, fatherName: event.target.value })}
        />
        <Input className="half-row"
          label="اسم الأم"
          value={formData.motherName}
          onChange={(event) => setFormData({ ...formData, motherName: event.target.value })}
        />
        <Input className="half-row"
          label="رقم هاتف الأم"
          max={10}
          min={0}
          value={formData.motherPhone}
          onChange={(event) => setFormData({ ...formData, motherPhone: event.target.value })}
        />
        <Input className="half-row"
          label="رقم هاتف الأب"
          max={10}
          min={0}
          value={formData.fatherPhone}
          onChange={(event) => setFormData({ ...formData, fatherPhone: event.target.value })}
        />
        <Input className="half-row"
          label="رقم هاتف الاخر"
          type="number"
          max={10}
          min={0}
          value={formData.mobile_num}
          onChange={(event) => setFormData({ ...formData, mobile_num: event.target.value })}
        />
        <Input className="half-row"
          label="رابط صفحة الفيس بوك"
          type="link"
          value={formData.facebookLink}
          onChange={(event) => setFormData({ ...formData, facebookLink: event.target.value })}
        />
        <Input className="half-row"
          label="مستوى التعليم للأم"
          type="text"
          value={formData.motherEdu}
          onChange={(event) => setFormData({ ...formData, motherEdu: event.target.value })}
        />
        <Input className="half-row"
          label="مستوى التعليم للأب"
          type="text"
          value={formData.fatherEdu}
          onChange={(event) => setFormData({ ...formData, fatherEdu: event.target.value })}
        />
      </div>
    </div>
  )
}
export default ParentInfo;