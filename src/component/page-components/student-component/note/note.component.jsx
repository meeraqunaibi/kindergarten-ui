import './note.css';
const Note = () =>{
return(
  <div>
 <div className='notes'>
  <span> الملاحظات </span>
 </div>
 <div className="write-note">
      <span className='teacher-note'>احمد طالب خلوق ومهذب لكنه ينقصه بعض المتابعة ارجو من والديه الاهتمام به قليلا</span>
      <br/>
      <span className='teacher'>لقد تم النشر بواسطة نادين الجعبة   </span>
 </div>
  </div>
)};

export default Note;