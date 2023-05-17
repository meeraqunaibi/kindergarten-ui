import Navbar from "../../component/navbar/navbar.component";
import StudentInformation from "../../component/page-components/student-component/info/student-info.component";
import Note from "../../component/page-components/student-component/note/note.component";
import "./profile.css";
const Profile = (props) => {
  return (
    <div className="student">
      <Navbar />
      <div className="note">
        <StudentInformation />
        <Note feedback={props.feedback} />
      </div>
    </div>
  );
};
export default Profile;
