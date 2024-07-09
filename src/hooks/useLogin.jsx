import { useAuthContext } from './useAuthContext';
import { useState } from 'react';

// const { VITE_BACKEND_API } = import.meta.env;

export function useLogin() {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  /**
   * Perform a login request to the server
   * @param {Object} param Parameters
   * @param {string} param.email User email
   * @param {string} param.password User password
   * @returns {Promise<void>}
   */
  async function login({ email, password }) {
    setIsLoading(true);
    setError(null);

    try {
      //const response = await fetch(`${VITE_BACKEND_API}/v1/auth/login`, {
      const response = await fetch(
        'https:/www.api.outworkx.com/v1/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        }
      );

      const { data } = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(data.message);
        // added code
        console.error('Login error:', data.message);
        setIsLoading(false);
        // throw new Error(data.message);

        throw new Error(data.message); // To reject the promise
      }

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', JSON.stringify(data.token));

        dispatch({ type: 'LOGIN', payload: data });
        console.log('payload data:', { payload: data });

        setIsLoading(false);
      }
    } catch (error) {
      //aded try block
      // added code
      setError(error.message || 'An unexpected error occurred.');
      console.error('Unexpected error during login:', error);
      setIsLoading(false);
    }
  }

  return { login, isLoading, error };
}
