import React from "react";
import Select from "react-select";
import { CLASS, TYPE } from "../../../data/class-name";
import Input from "../../input/input.component";
import './add-post.css';

const AddPost = props => {
  return (
    <div className="popup ">
      <div className="box">
        <div className="addpost">
          <h3>اضافة منشور</h3>
          <form >
            <Input label="العنوان *" placeholder="ما هو عنوان المنشور " className="title" />
            <div className="select-post">
              <div className="select-margin">
                <label>الفئة المستهدفة*</label>
                <Select
                  className="select"
                  options={CLASS}
                  placeholder="الجميع"
                />
              </div>

              <div className="select-margin">
                <label>نوع المنشور*</label>
                <Select
                  className="select"
                  options={TYPE}
                  placeholder="اعلان"
                />
              </div>

            </div>
            
            <div className="post">
              <label>المنشور*</label>
              <textarea cols="70" rows="6" placeholder="اكتب شيء ما هنا....."></textarea>
            </div>
            <div>              
              <button className="add-post-btn" onClick={(e) => props.close(e)}>الغاء</button>
              <button className="add-post-btn">نشر</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
export default AddPost;