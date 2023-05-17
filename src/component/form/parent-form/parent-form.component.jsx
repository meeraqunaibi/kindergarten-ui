import { ACC, SLEEP, TRAN, WATCH } from "../../../data/class-name";
import Input from "../../input/input.component";
import Select from "../../select/select.component";

const ParentInfo = ({ formData, setFormData, setTransportation }) => {

  return (
    <div className="reg-form">
      <div className="student-detail">
        <Select
          name='tran'
          label='المواصلات'
          required
          value={formData.transportation.time_period}
          onChange={(event) => setFormData(
            {
              ...formData, transportation: {
                ...formData.transportation,
                time_period: event.target.value
              }
            }
          )}
        >
          {
            TRAN.map(trans => {
              return <option key={trans.value} value={trans.value}>{trans.label}</option>;
            })
          }
        </Select>
        <Input className="half-row"
          label="عنوان البيت"
          type="text"
          value={formData.transportation.address}
          onChange={(event) => setFormData(
            {
              ...formData, transportation: {
                ...formData.transportation,
                address: event.target.value
              }
            }
          )}
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
            SLEEP.map(live => {
              return <option key={live.value} value={live.value}>{live.lable}</option>;
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
            ACC.map(live => {
              return <option key={live.value} value={live.value}>{live.lable}</option>;
            })
          }
        </Select>
        <Input className="half-row"
          label="وقت النوم"
          type="time"
          value={formData.sleepTime}
          onChange={(event) => setFormData({ ...formData, sleepTime: event.target.value })}
        />
        <Input className="half-row"
          label="اسم الأب "
          value={formData.fatherName}
          onChange={(event) => setFormData(
            {
              ...formData, parent: {
                ...formData.parent,
                fatherName: event.target.value
              }
            }
          )} />
        <Input className="half-row"
          label="اسم الأم"
          value={formData.motherName}
          onChange={(event) => setFormData(
            {
              ...formData, parent: {
                ...formData.parent,
                motherName: event.target.value
              }
            }
          )} />
        <Input className="half-row"
          label="رقم هاتف الأم"
          max={10}
          min={0}
          value={formData.motherMobileNum}
          onChange={(event) => setFormData(
            {
              ...formData, parent: {
                ...formData.parent,
                motherMobileNum: event.target.value
              }
            }
          )} />
        <Input className="half-row"
          label="رقم هاتف الأب"
          max={10}
          min={0}
          value={formData.fathermMobileNum}
          onChange={(event) => setFormData(
            {
              ...formData, parent: {
                ...formData.parent,
                fathermMobileNum: event.target.value
              }
            }
          )} />
        <Input className="half-row"
          label="رقم هاتف الاخر"
          type="number"
          max={10}
          min={0}
          value={formData.telephoneNum}
          onChange={(event) => setFormData(
            {
              ...formData, parent: {
                ...formData.parent,
                telephoneNum: event.target.value
              }
            }
          )} />
        <Input className="half-row"
          label="رابط صفحة الفيس بوك"
          type="link"
          value={formData.facebookProfileLink}
          onChange={(event) => setFormData(
            {
              ...formData, parent: {
                ...formData.parent,
                facebookProfileLink: event.target.value
              }
            }
          )} />
        <Input className="half-row"
          label="مستوى التعليم للأم"
          type="text"
          value={formData.fatherLevelOfEdu}
          onChange={(event) => setFormData(
            {
              ...formData, parent: {
                ...formData.parent,
                fatherLevelOfEdu: event.target.value
              }
            }
          )} />
        <Input className="half-row"
          label="مستوى التعليم للأب"
          type="text"
          value={formData.motherLevelOfEdu}
          onChange={(event) => setFormData(
            {
              ...formData, parent: {
                ...formData.parent,
                motherLevelOfEdu: event.target.value
              }
            }
          )} />
      </div>
    </div>
  )
}
export default ParentInfo;