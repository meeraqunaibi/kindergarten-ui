import { TRAN, WATCH } from "../../../data/class-name";
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
          value={formData.transportation}
          onChange={(event) => setFormData({ ...formData, transportation: event.target.value })}
        >
          {
            TRAN.map(trans => {
              return <option key={trans} value={trans}>{trans}</option>;
            })
          }
        </Select>
        <Input className="half-row"
          label="عنوان البيت"
          type="text"
          value={formData.transportation[0]}
          onChange={(event) => setFormData({ ...formData, address: event.target.value })}

        />
        {
          formData.transportation !== "بدون مواصلات" &&
          <Input className="half-row"
            label="موعد المغادرة"
            type="time"
            value={formData.afterSchoolStudent}
            onChange={(event) => setFormData({ ...formData, afterSchoolStudent: event.target.value })}

          />
        }

        <Select
          name='sleep'
          label=' ينام في النهار'
          required
          value={formData.sleepDuringTheDay}
          onChange={(event) => setFormData({ ...formData, sleepDuringTheDay: event.target.value })}
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
          value={formData.hadAccident}
          onChange={(event) => setFormData({ ...formData, hadAccident: event.target.value })}
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
          value={formData.sleepTime}
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
          value={formData.telephoneNum}
          onChange={(event) => setFormData({ ...formData, motherPhone: event.target.value })}
        />
        <Input className="half-row"
          label="رقم هاتف الأب"
          max={10}
          min={0}
          value={formData.telephoneNum}
          onChange={(event) => setFormData({ ...formData, motherPhone: event.target.value })}
        />
        <Input className="half-row"
          label="رقم هاتف الاخر"
          type="number"
          max={10}
          min={0}
          value={formData.mobileNum}
          onChange={(event) => setFormData({ ...formData, mobileNum: event.target.value })}
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
          value={formData.levelOfEdu}
          onChange={(event) => setFormData({ ...formData, levelOfEdu: event.target.value })}
        />
        <Input className="half-row"
          label="مستوى التعليم للأب"
          type="text"
          value={formData.levelOfEdu}
          onChange={(event) => setFormData({ ...formData, levelOfEdu: event.target.value })}
        />
      </div>
    </div>
  )
}
export default ParentInfo;