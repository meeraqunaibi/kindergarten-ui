import React from "react";
import CardStd from "../../component/card-std/cardStd.component";
import Navbar from "../../component/navbar/navbar.component";
import "./students.css";

const Students = (props) => {
  return (
    <div className="body">
      <Navbar />
      <div className="cards">
        <h1>{props.d}</h1>
        <CardStd />
      </div>
    </div>
  );
};

export default Students;
