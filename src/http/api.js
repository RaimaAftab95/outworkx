import { api } from "./client";

// Auth
export const signUp = (user) => api.post("/v1/auth/register", user);
export const login = (user) => api.post("/v1/auth/login", user);

// space
export const createSpace = (space) => api.post("/v1/space", space);
