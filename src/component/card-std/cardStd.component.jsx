import React, { useState } from "react";
import "./cardStd.css";
import AddFeedback from "../add/feedback/feedback.component";

const CardStd = () => {
  const [isClick, setIsClick] = useState(false);

  const onClick = () => {
    setIsClick(!isClick);
  }
  return (
    <div className="card">
      <table>
        <tr>
          <th>اسم الطالب</th>
          <th>تاريخ الميلاد</th>
          <th>العنوان</th>
          <th>رقم هاتف</th>
          <th>الصف</th>
          <th>الجنس</th>
          <th> </th>
        </tr>

        <tbody>
          <tr>
            <td><input type="checkbox" />ruba sameer</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>
              <div className="pro-com ">
                <a href="http://">عرض الملف</a>
                <button onClick={onClick} className="add-feed"> اضافة تعليق</button>
              </div>
            </td>
            {
              isClick && <AddFeedback 
              close={() => setIsClick(false)} />
            }

          </tr>
          <tr>
            <td><input type="checkbox" />ali ahmad</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>
              <div className="pro-com ">
                <a href="http://">عرض الملف</a>
                <button onClick={onClick} className="add-feed"> اضافة تعليق</button>
              </div>
            </td>


          </tr>
          <tr>
            <td><input type="checkbox" />khaleed waleed</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td> 
              <div className="pro-com ">
                <a href="http://">عرض الملف</a>
                <button onClick={onClick} className="add-feed"> اضافة تعليق</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardStd;
