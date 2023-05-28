import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/navbar.component";
import ConfirmCard from "../../component/confirmCard/confirmCard.component";
import useGetStudent from "../../data/user-data";
import { Spinner } from "phosphor-react";
import { createUser, deleteStudent, getAllConfirm } from "../../data/integration";

const ConfirmRegister = () => {
  const [state, setState] = useState({ loading: false, students: [] });
  const getConfirmStudents = () => {
    setState({ loading: true, students: [] });
    getAllConfirm().then(students => {
      setState({ loading: false, students });
    });
  }
  useEffect(() => {
    getConfirmStudents();
  }, []);

  const onDelete = (studentId) => {
    deleteStudent(studentId).then(() => {
      getConfirmStudents();
    });
  }
  const onConfirm = (student) => {
    createUser(student).then(() => {
      getConfirmStudents();
    })
  };

  return (
    <div className="body">
      <Navbar />
      <div className="cards">
        {state.loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Spinner />
          </div>
        ) : state.students.length ? (
          state.students.map((student) => {
            return <ConfirmCard student={student} onConfirm={onConfirm} onDelete={onDelete} />;
          })
        ) : (
          <div className="no-results">
            <p>No results found</p>
            <img src="../../images/2953962.jpg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmRegister;
