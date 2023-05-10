import React, { useState } from "react";
import "./cardStd.css";
import AddFeedback from "../add/feedback/feedback.component";
import useGetStudent from "../../data/user-data";
import { Spinner } from "phosphor-react";

const CardStd = () => {
  const [isClick, setIsClick] = useState(false);
  const { studentInfo, loading } = useGetStudent();

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
          {
            loading
              ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
              : (
                studentInfo?.length ? studentInfo.map((student, index) => {
                  <tr>
                    <td>
                      <input type="checkbox" />{student.fullName}</td>
                    <td>{student.DOB}</td>
                    <td>{student.address}</td>
                    <td>{student.fullName}</td>
                    <td>{student.class}</td>
                    <td>{student.gender}</td>
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
                })
                  :(
                    <div className="no-results">
                      <p>No results found</p>
                    </div>
                  )
              )}
        </tbody>
      </table>
    </div>
  );
};

export default CardStd;
