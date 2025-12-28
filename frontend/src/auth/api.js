import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3002",
  withCredentials: true, // ✅ important for httpOnly cookie auth
});

export default api;
