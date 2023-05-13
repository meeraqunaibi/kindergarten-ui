import React from "react";
// import './add-post.css';


const AddFeedback = props => {
  const handelPostSubmit = (e) => {
    console.log(props.post.type);
    e.preventDefault();
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
                onChange={(e) => props.handleInputChange(e.target.value, 'content')}
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