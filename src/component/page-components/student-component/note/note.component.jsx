import './note.css';
const Note = (props) =>{
return(
  <div>
 <div className='notes'>
  <span> الملاحظات </span>
 </div>
 <div className="write-note">
      <span className='teacher-note'>{props.feedback}</span>
      <br/>
      <span className='teacher'>لقد تم النشر بواسطة نادين الجعبة   </span>
 </div>
  </div>
)};

export default Note;