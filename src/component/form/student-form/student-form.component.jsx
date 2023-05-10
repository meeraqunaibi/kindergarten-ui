import './student-form.css';
import Input from './../../input/input.component';
import Textarea from '../../textarea/textarea.component';
import {BLOOD, GENDER, LIVE, WATCH}  from '../../../data/class-name';
import Select from "../../select/select.component";


const StudentInfo = ({ formData, setFormData }) => {
  return (
    <div className="reg-form">
      <div className="student-detail">
        <Input className="half-row" 
        label="الاسم الرباعي" 
        value={formData.fullName} 
        onChange={(event) => setFormData({...formData,fullName:event.target.value})} />
        <Input className="half-row" label="رقم الهوية" 
          value={formData.copyOfIdCard}
          onChange={(event) => setFormData({ ...formData, copyOfIdCard: event.target.value })}
        />
        <Input className="half-row" label="تاريخ الميلاد" type="date" 
          value={formData.DOB}
          onChange={(event) => setFormData({ ...formData, DOB: event.target.value })}
        />
        <Input className="half-row" label="صورة للطفل" type='file'
          value={formData.image}
          onChange={(event) => setFormData({ ...formData, image: event.target.value })}
        />
        <Select
          name='live'
          label='مع من يعيش الطفل'
          required 
          value={formData.withWhomChildLive}
          onChange={(event) => setFormData({ ...formData, withWhomChildLive: event.target.value })}
          >
          {
            LIVE.map(live=>{
              return <option key={live} value={live}>{live}</option>;
            })
          }
        </Select>
        <Select
          name='gender'
          label='الجنس'
          required
          value={formData.gender}
          onChange={(event) => setFormData({ ...formData, gender: event.target.value })}
          >
          {
            GENDER.map(gender => {
              return <option key={gender} value={gender}>{gender}</option>;
            })
          }
        </Select>
        <Select
          name='blood'
          label='زمرة الدم'
          required 
          value={formData.bloodType}
          onChange={(event) => setFormData({ ...formData, bloodType: event.target.value })}
          >
          {
            BLOOD.map(blood => {
              return <option key={blood} value={blood}>{blood}</option>;
            })
          }
        </Select>
        <Select
          name='watch'
          label= 'يشاهد التلفاز'
          required
          value={formData.likeWatchingTV}
          onChange={(event) => setFormData({ ...formData, likeWatchingTV: event.target.value })}
          >
          {
            WATCH.map(watch => {
              return <option key={watch} value={watch}>{watch}</option>;
            })
          }
          
        </Select>
        <Textarea className="full-row" rows={3} cols={35} label="نقاط القوة" 
          value={formData.strength}
          onChange={(event) => setFormData({ ...formData, strength: event.target.value })}
        />
        <Textarea className="full-row" rows={3} cols={35} label="نقاط الضعف" 
          value={formData.weakness}
          onChange={(event) => setFormData({ ...formData, weakness: event.target.value })}
        />
      </div>
    </div>

  )
}
export default StudentInfo;