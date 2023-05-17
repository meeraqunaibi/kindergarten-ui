import React from "react";
import "./confirm.css";
import { createUser, deleteStudent } from "../../data/integration";
const ConfirmCard = (props) => {
  const deleteStudentById = (studentId) => {
    deleteStudent(studentId);
  };
  const confirmStudent = (student) => {
    createUser(student);
  };

  const { student } = props;
  return (
    <div className="card-con">
      <span> {student.fullName}</span>
      <span> {student.copyOfIdCard}</span>
      <div className="action-con">
        <button onClick={() => confirmStudent(student)}>تأكيد</button>
        <button onClick={() => deleteStudentById(student._id)}>حذف</button>
      </div>
    </div>
  );
};

export default ConfirmCard;
