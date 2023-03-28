
import './feed-cart.css';
const TaskCard = (props)=>{
return(
  <div className="task-cards">
    <div className="cardt">
      <input id="cb1" type="checkbox" />
      <label for="cb1"></label>
      <span className="task-title">مشاهدة فيديو الأرنب</span>
      <span className="task-date">22-2-2023</span>
      <span className="expand-task">رؤية المنشور</span>
    </div>
  </div>
)
}
export default TaskCard;