
import './feed-cart.css';
const TaskCard = (props) => {
  return (
    <div className="task-cards">
      {
        // props.data.map(task=> (
        <div className="cardt">

          <input id={props.title} type="checkbox" />
          <label for={props.title}></label>
          <span className="task-title">{props.title}</span>
          <span className="task-date">{props.content}</span>
          <span className="expand-task">{props.content}</span>
        </div>
        //  ))    

      }

    </div>
  )
}
export default TaskCard;