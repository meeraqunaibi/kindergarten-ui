import './note.css';
const Note = (props) => {
  return (
    <div>
      <div className='notes'>
        <span> الملاحظات </span>
      </div>
      {
        props.feedback?.map(p => (
          <div className="teacher-note"  key={p._id}>
            <span>{p.description}</span>
            < div className="write-note">
              <br />
              <span className='teacher'>لقد تم النشر بواسطة {p.staff.username}</span>
            </div>
          </div>
        ))
      }
    </div >
  )
};

export default Note;