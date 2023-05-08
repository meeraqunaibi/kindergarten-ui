import React from "react";
import Select from "react-select";
import { CLASS, TYPE } from "../../../data/class-name";
import Input from "../../input/input.component";
import './add-post.css';


const AddPost = props => {
  const handelPostSubmit = (e) => {
    console.log(props.post.type);
    e.preventDefault();
    if (props.post.type === 1) {
      props.onAddpost();    
      console.log(props.onAddpost);

    } else if(props.post.type === 2) {
      props.onAddtask();
    }
    //props.onAddpost();
    props.close();
  }

  return (
    <div className="popup ">
      <div className="box">
        <div className="addpost">
          <h3>اضافة منشور</h3>
          <form onSubmit={(e) => handelPostSubmit(e)}>
            <Input
              label="العنوان *"
              placeholder="ما هو عنوان المنشور "
              className="title"
              value={props.post.title}
              onChange={(e) => props.handleInputChange(e.target.value, 'title')}
            />
            <div className="select-post">
              <div className="select-margin">
                <label>الفئة المستهدفة*</label>
                <Select
                  className="select"
                  options={CLASS}
                  placeholder="الجميع"
                  onChange={(item) => props.handleInputChange(item.value, 'class')}
                  value={props.post.type}
                />

              </div>

              <div className="select-margin">
                <label>نوع المنشور*</label>
                <Select
                  className="select margin"
                  options={TYPE}
                  placeholder="اعلان"
                  onChange={(item) => props.handleInputChange(item.value, 'type')}
                />
              </div>

            </div>

            <div className="post">
              <label>المنشور*</label>
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
export default AddPost;