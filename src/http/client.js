import axios from "axios";

// get auth token
let auth = localStorage.getItem("auth");
auth = JSON.parse(auth);

export const api = axios.create({
  // baseURL: import.meta.VITE_BACKEND_API_URL,
  baseURL: "https://www.api.outworkx.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${auth?.token || ""}`,
  },
});
