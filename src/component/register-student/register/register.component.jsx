import { useState } from 'react';
import './register.css';
import StudentInfo from "../../form/student-form/student-form.component.jsx";
import ParentInfo from "../../form/parent-form/parent-form.component.jsx";
import HomeHeader from '../../page-components/hero-componetnt/home_header/header.component';

const RegisterStudent = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    studentName:"",
    studentID:"",
    DOB:"",
    studentImg:"",
    gender:"",
    live: "",
    blood: "",
    watch: "",
    strength: "",
    Weaknesses: "",
    motherName:"",
    fatherName:"",
    motherPhone:"",
    fatherPhone:"",
    mobile_num:"",
    motherEdu:"",
    fatherEdu:"",
    facebookLink:""

  });
  const formTitle = ["معلومات عن الطالب", "معلومات عن الأهل"];
  const PageDisplay = () => {
    if (page === 0 ) {
      return <StudentInfo formData={formData} setFormData={setFormData} />
    }
    else {
      return <ParentInfo formData={formData} setFormData={setFormData} />
    }
  }
  return (
    <div className='form'>
      {/* <dir className="progressbar"></dir> */}
      {/* <div className="header">
        <h1>{formTitle[page]}</h1>
      </div> */}
      <HomeHeader />
      <dir className="body">{PageDisplay()}</dir>
      <div>
        <button
       className='b'
          onClick={() => {
            setPage(currpage => currpage - 1)}}
          disabled={page === 0}
        >السابق</button>
        <button
          className='b'
          onClick={() => {
            if (page === formTitle.length - 1) {
              alert("يرجى الذهاب للروضة من أجل تأكيد عملية التسجيل")
              console.log(formData);
            } else {
              setPage(currpage => currpage + 1)
            }
          }
          }>
          {page === formTitle.length - 1 ? "ارسال" : "التالي"}
        </button>
      </div>
    </div>

  )
}
export default RegisterStudent;