import { useEffect, useState } from 'react';
import PersonalInfo from '../personal-info/personal-info.component';
import './student-info.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent } from '../../../../data/integration';
const StudentInformation = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentStudent, setCurrentStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    setLoading(true);
    const student = getStudent(params.id);
    if (student === null) {
      navigate('/404');
    }
    student
      .then((students) => {
        setCurrentStudent(students);
      });
    setCurrentStudent(student);
    setLoading(false);
  }, []);  

  return (
    <div >
      <div className="box-info">
        {
          !loading && currentStudent !== null
            ? <div className='student-introduction'>
              <div className='student-form'>
                <img className='student-img' src={currentStudent?.image} alt="" />
                <div className='information'>
                  <span className='student-name'>{(currentStudent?.fullName)}</span>
                  <span className='student-class'>{currentStudent?.parent?.motherName}</span>
                </div>
              </div>
            <PersonalInfo currentStudent={currentStudent} />

            </div>
            : null
        }

      </div>
    </div>
  )
}
export default StudentInformation;