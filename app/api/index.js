import axios from "axios";

const API_BASE_URL = "http://localhost:3000";
const STATS = "stats";
const PROGRAMS = "programs";

// GET Requests
export const fetchStats = () => axios.get(`${API_BASE_URL}/${STATS}`);
export const fetchPrograms = () => axios.get(`${API_BASE_URL}/${PROGRAMS}`);
