import React, { useState } from "react";
const AddFeedback = props => {
  const [feedback, setFeedback] = useState({
    description: '',
    type: props.user?.role !== 'student' ? 'teacher' : 'student'
  });

  const handelPostSubmit = (e) => {
    e.preventDefault();
    props.add({...feedback, createDate: new Date()});
    props.close();
  }

  return (
    <div className="popup ">
      <div className="box">
        <div className="addpost">
          <form onSubmit={(e) => handelPostSubmit(e)}>
            <div className="post">
              <label>الملاحظات*</label>
              <textarea
                cols="60"
                rows="6"
                placeholder="اكتب شيء ما هنا....."
                className="textarea"
                value={feedback.description}
                onChange={(e) => setFeedback({ ...feedback, description: e.target.value })}
              />
            </div>
            <div>
              <button className="add-post-btn" onClick={(e) => props.close(e)}>الغاء</button>
              <button className="add-post-btn" >نشر</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
export default AddFeedback;