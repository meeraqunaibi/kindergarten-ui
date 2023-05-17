import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/navbar.component";
import ConfirmCard from "../../component/confirmCard/confirmCard.component";
import useGetStudent from "../../data/user-data";
import { Spinner } from "phosphor-react";
import { createUser, deleteStudent } from "../../data/integration";

const ConfirmRegister = () => {
  const { studentInfo, loading, getStudents ,setState} = useGetStudent();

  const onDelete = (studentId) =>{
   deleteStudent(studentId).then(() => {
     getStudents();
   });
 }
  const onConfirm = (student)=>{
   createUser(student).then(()=>{
    getStudents()
   }).then(()=>{
     setState(studentInfo?.confirm === true); 
   });  
    
 }
console.log(studentInfo?.length);
  return (
    <div className="body">
      <Navbar />
      <div className="cards">
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
          studentInfo
            .filter((student) => student.confirm === false)
            .map((student) => {
              return <ConfirmCard student={student} onConfirm={onConfirm} onDelete={onDelete} />;
            })
        ) : (
          <div className="no-results">
            <p>No results found</p>
            <img src="../../../images/2953962.jpg" alt=""/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmRegister;
