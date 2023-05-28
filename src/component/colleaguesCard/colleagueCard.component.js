import React from "react";
import "./colleagueCard.css";

const ColleagueCard = (props) => {
  return (
    <div className="coll-card">
      <img
        className="student-img"
        src={`http://localhost:3001/${props.student?.image
          ?.replaceAll("\\", "/")
          .replace("upload/", "")}`}
        alt=""
      />
      <div className="information">
        <span className="student-name">{props.student?.fullName}</span>
        <span className="student-class">
          {props.student?.parent?.copyOfIdCard}
        </span>
      </div>
    </div>
  );
};

export default ColleagueCard;
