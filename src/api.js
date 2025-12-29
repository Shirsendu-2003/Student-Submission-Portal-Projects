import axios from "axios";

const api = axios.create({
  baseURL: "https://proactive-dedication-production-c4d4.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

