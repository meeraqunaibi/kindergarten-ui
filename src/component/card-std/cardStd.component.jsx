import React, { useContext, useEffect, useState } from "react";
import "./cardStd.css";
import AddFeedback from "../add/feedback/feedback.component";
import useGetStudent from "../../data/user-data";
import { Spinner } from "phosphor-react";
import { UserContext } from "../providers/user-provider.component";
import { createFeedback, getStudent } from "../../data/integration";
import { useNavigate } from "react-router-dom";

const CardStd = () => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  const { studentInfo, loading } = useGetStudent();
  const userContext = useContext(UserContext);

  const onClick = (e) => {
    e.preventDefault();
    setIsClick(!isClick);
  };

  const addFeed = (feedback) => {
    createFeedback({ ...feedback, staff: userContext.user.id });
  };

  const getStudentById = (studentId) => {
    navigate(`/student-page/${studentId}`);
  };
  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>اسم الطالب</th>
            <th>تاريخ الميلاد</th>
            <th>العنوان</th>
            <th>رقم هاتف</th>
            <th>الجنس</th>
            <th>زمرة الدم</th>
            <th> الملف الشخصي</th>
            <th> ملاحظات </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Spinner />
            </div>
          ) : studentInfo?.length ? (
            studentInfo.map((student) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" />
                    {student.fullName}
                  </td>
                  <td>{student.DOB}</td>
                  <td>{student.transportation.address}</td>
                  <td>{student.parent?.telephoneNum}</td>
                  <td>{student.gender === true ? "أنثى" : "ذكر"}</td>
                  <td>{student.bloodType}</td>
                  <td>
                    <button onClick={() => getStudentById(student._id)}>
                      عرض الملف
                    </button>
                  </td>
                  <td >
                    <button onClick={(e) => onClick(e)} >
                      اضافة تعليق
                    </button>
                  </td>
                  {isClick && (
                    <AddFeedback
                      close={() => setIsClick(false)}
                      user={userContext?.user}
                      add={(feedback) => addFeed(feedback)}
                    />
                  )}
                </tr>
              );
            })
          ) : (
            <div className="no-results">
              <p>No results found</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CardStd;
