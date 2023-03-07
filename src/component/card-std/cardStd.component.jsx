import React from "react";
import "./cardStd.css";
import profPic from "../../assets/images/default-avatar.png";

const CardStd = () => {
  return (
    <div className="card">
      <img src={profPic} alt="profilePic" />
      <span>أحمد علي</span>
      <span>صف الفراشات</span>
    </div>
  );
};

export default CardStd;
