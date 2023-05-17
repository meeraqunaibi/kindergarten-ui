import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/navbar.component";
import ConfirmCard from "../../component/confirmCard/confirmCard.component";
import useGetStudent from "../../data/user-data";
import { Spinner } from "phosphor-react";
import { getAllStudent } from "../../data/integration";

const ConfirmRegister = () => {
  const { studentInfo, loading } = useGetStudent();


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
              return <ConfirmCard student={student} />;
            })
        ) : (
          <div className="no-results">
            <p>No results found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmRegister;
