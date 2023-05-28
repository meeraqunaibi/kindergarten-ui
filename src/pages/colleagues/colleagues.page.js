import React from "react";
import ColleagueCard from "../../component/colleaguesCard/colleagueCard.component";
import Navbar from "../../component/navbar/navbar.component";
import useGetStudent from "../../data/user-data";
import { Spinner } from "phosphor-react";

const Colleagues = () => {
  const { studentInfo, loading } = useGetStudent();

  return (
    <div>
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
            studentInfo.map((student) => {
              return <ColleagueCard student={student} />;
            })
          ) : (
            <div className="no-results">
              <p>No results found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Colleagues;
