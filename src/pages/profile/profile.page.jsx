import StudentHeader from "../../component/page-components/student-component/header/stu-header.component";
import StudentInformation from "../../component/page-components/student-component/info/student-info.component";
import Note from "../../component/page-components/student-component/note/note.component";
import './profile.css';
const Profile = (props) => {
  console.log(props.feedback);
  return (
    <div className="student">
      <StudentHeader />
      <div className="note">
        <StudentInformation />
        <Note feedback={props.feedback}/>
      </div>
    </div>
  )
}
export default Profile;