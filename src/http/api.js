import { api } from "./client";

// get auth token
let auth = localStorage.getItem("auth");
auth = JSON.parse(auth);

// Auth
export const signUp = (user) => api.post("/v1/auth/register", user);
export const login = (user) => api.post("/v1/auth/login", user);

// space
export const createSpace = (space) => api.post("/v1/space", space);

// upload images
export const uploadImages = (data) =>
  api.post("/v1/media/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data", // Change the content-type here
      Accept: "application/json",
      Authorization: `Bearer ${auth?.token || ""}`,
    },
  });
