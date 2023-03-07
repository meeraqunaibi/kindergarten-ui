import StudentHeader from "../../component/page-components/student-component/header/stu-header.component";
import StudentInformation from "../../component/page-components/student-component/info/student-info.component";
import Note from "../../component/page-components/student-component/note/note.component";
import './student.css';
const StudenPage = () => {
  return (
    <div className="student">
      <StudentHeader />
      <div className="note">
        <StudentInformation />
        <Note/>
      </div>
    </div>
  )
}
export default StudenPage;