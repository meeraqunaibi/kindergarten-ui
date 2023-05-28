import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../component/navbar/navbar.component";
import StudentInformation from "../../component/page-components/student-component/info/student-info.component";
import Note from "../../component/page-components/student-component/note/note.component";
import "./profile.css";
import { useEffect, useState } from "react";
import { getStudent } from "../../data/integration";
const Profile = () => {
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
  }, [navigate, params.id]);

  return (
    <div className="student">
      <Navbar />
      {!loading && currentStudent &&
        < div className="note">
          <StudentInformation student={currentStudent} />
          <Note feedback={currentStudent.feedback || []}/>
        </div>
      }
    </div >
  );
};
export default Profile;
