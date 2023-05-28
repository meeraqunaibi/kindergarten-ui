import { useEffect, useState } from "react";
import { getAllStudent, getAllPost } from "./integration";


const useGetStudent = () => {
  const [state, setState] = useState({ studentInfo: [], loading: true });
  const getStudents = async () => {
    setState({ ...state, loading: true });
    const data = await getAllStudent();
    console.log(data);
    setState({ loading: false, studentInfo: data });
  };
  useEffect(() => {
    getStudents();
  }, []);
  return { ...state, getStudents };
};

const useGetPosts = () => {
  const [state, setState] = useState({ posts: [], loading: true });
  const getPosts = async () => {
    setState({ ...state, loading: true });
    const data = await getAllPost();
    console.log(data);
    setState({ loading: false, posts: data });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return { ...state, getPosts };
};
export default {useGetStudent, useGetPosts};