import axios from "axios";

const API_BASE_URL = "http://localhost:3000";
const STATS = "stats";
const COURSES = "courses";
const INSTRUCTORS = "instructors";


// Requests
export const fetchStats = () => axios.get(`${API_BASE_URL}/${STATS}`)
  .then(({ data }) => data);

export const fetchCourses = () => axios.get(`${API_BASE_URL}/${COURSES}`)
  .then(({ data }) => data);

export const fetchCourse = (id) => axios.get(`${API_BASE_URL}/${COURSES}/${id}`)
  .then(({ data }) => data);

export const fetchInstructors = (ids) => {
  const query = ids.map((id) => `id=${id}&`).join("").slice(0, -1);

  return axios.get(`${API_BASE_URL}/${INSTRUCTORS}?${query}`).then(({ data }) => data);
};

export const deleteCourse = (id) => axios.delete(`${API_BASE_URL}/${COURSES}/${id}`)
  .then(({ data }) => data);
