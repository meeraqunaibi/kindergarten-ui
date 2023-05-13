import { useEffect, useState } from "react";
import { getAllStudent } from "./integration";


const useGetStudent = () => {
  const [state, setState] = useState({ studentInfo: [], loading: true });
  const getStudents = async () => {
    setState({ ...state, loading: true });
    const data = await getAllStudent();
    setState({ loading: false, menuItems: data });
  };
  useEffect(() => {
    getStudents();
  }, []);
  return { ...state, getStudents };
};
export default useGetStudent;