import { useState } from 'react';
import './register.css';
import StudentInfo from "../../form/student-form/student-form.component.jsx";
import ParentInfo from "../../form/parent-form/parent-form.component.jsx";
import HomeHeader from '../../page-components/hero-componetnt/home_header/header.component';
import { useNavigate } from 'react-router-dom';
import { createStudent } from '../../../data/integration';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const RegisterStudent = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    DOB: "",
    bloodType: "A+",
    copyOfIdCard: "",
    hadAccident: 0,
    sleepDuringTheDay: 0,
    withWhomChildLive: 0,
    likeWatchingTV: 0,
    transportation: {
      address: "",
      time_period: "",
    },
    afterSchoolStudent: "",
    image: "",
    strength: "",
    weakness: "",
    parent:{
    motherName: "",
    fatherName: "",
    fathermMobileNum: "",
    motherMobileNum: "",
    motherLevelOfEdu: "",
    fatherLevelOfEdu: "",
    facebookProfileLink: "",
    telephoneNum: "" 
    },
    gender: 0

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
    console.log(formData);
    const res = await createStudent(formData)
    if (!res) {
           alert("Error adding the item!");
    } else {
      alert("Item added successfully");
      navigate('/home-page');
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
              return submitHandler(e);
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