import { useState } from 'react';
import './register.css';
import StudentInfo from "../../form/student-form/student-form.component.jsx";
import ParentInfo from "../../form/parent-form/parent-form.component.jsx";
import HomeHeader from '../../page-components/hero-componetnt/home_header/header.component';
import { useNavigate } from 'react-router-dom';
import { createStudent } from '../../../data/integration';

const RegisterStudent = () => {
  const address ="";
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    DOB:"",
    bloodType:"",
    copyOfIdCard:"",
    hadAccident:"",
    sleepDuringTheDay:"",
    withWhomChildLive:"",
    likeWatchingTV:"",
    description:"",
    transportation: [address],
    levelOfEducation:"",
    image:"",
    strength:"",
    weakness: "",
    motherName: "",
    fatherName: "",
    fathermMobileNum: "",
    motherMobileNum: "",
    motherLevelOfEdu: "",
    fatherLevelOfEdu:"",
    facebookProfileLink: ""

  });
  const formTitle = ["معلومات عن الطالب", "معلومات عن الأهل"];
  const PageDisplay = () => {
    if (page === 0) {
      return <StudentInfo formData={formData} setFormData={setFormData} />
    }
    else {
      return <ParentInfo formData={formData} setFormData={setFormData} />
    }
  }
  const navigate = useNavigate();

  /**
 * Handler function for the form onSubmit event.
 * @param {React.FormEvent<HTMLFormElement>} e Event object.
 */
  const submitHandler = async e => {
    e.preventDefault();
    const res = await createStudent(formData)
    console.log(res);
    if (res) {
      alert("Item added successfully");
      navigate('/home-page');
    } else {
      alert("Error adding the item!");
    }
  }
  return (
    <div className='form'>
      <HomeHeader />
      <dir className="body">{PageDisplay()}</dir>
      <div>
        <button
          className='b'
          onClick={() => {
            setPage(currpage => currpage - 1)
          }}
          disabled={page === 0}
        >السابق</button>
        <button
          className='b'
          onClick={(e) => {
            if (page === formTitle.length - 1) {
              alert("يرجى الذهاب للروضة من أجل تأكيد عملية التسجيل")
              submitHandler(e);
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