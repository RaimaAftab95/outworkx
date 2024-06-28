import axios from 'axios';

// get auth token
let auth = localStorage.getItem('auth');
auth = JSON.parse(auth);

export const api = axios.create({
  // baseURL: import.meta.VITE_BACKEND_API_URL,
  baseURL: 'https://www.api.outworkx.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${auth?.token || ''}`
  }
});

// additional code
// a response interceptor to handle unauthorized errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Attempt to refresh the token
      try {
        const refreshToken = auth?.refreshToken;
        const response = await axios.post(
          'https://www.api.outworkx.com/v1/auth/refresh',
          { refreshToken }
        );

        // Update the token in localStorage
        localStorage.setItem('auth', JSON.stringify(response.data));
        api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
        originalRequest.headers['Authorization'] =
          `Bearer ${response.data.token}`;

        return api(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
