import axios from "axios";

const api = axios.create({
  baseURL: "https://student-submission-projects-3.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

