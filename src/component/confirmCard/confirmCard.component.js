import React from "react";
import "./confirm.css";

const ConfirmCard = (props) => {
  const { student } = props;
  return (
    <div className="card-con">
      <span> {student.fullName}</span>
      <span> {student.copyOfIdCard}</span>
      <div className="action-con">
        <button onClick={() => props.onConfirm(student)}>تأكيد</button>
        <button onClick={() => props.onDelete(student._id)}>حذف</button>
      </div>
    </div>
  );
};

export default ConfirmCard;
