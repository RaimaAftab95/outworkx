import { useAuthContext } from './useAuthContext';
import { useState } from 'react';

// const { VITE_BACKEND_API } = import.meta.env;

export function useRegister() {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  /**
   * Perform a register request to the server
   * @param {Object} payload Payload
   * @param {string} payload.firstName User first name
   * @param {string} payload.lastName User last name
   * @param {string} payload.email User email
   * @param {string} payload.password User password
   * @param {string} payload.dateOfBirth User date of birth
   * @param {string} payload.phoneNumber User phone number
   * @param {string} payload.gender User gender
   * @returns {Promise<void>}
   */
  async function register(payload) {
    setIsLoading(true);
    setError(null);

    // const response = await fetch(`${VITE_BACKEND_API}/v1/auth/register`, {
    const response = await fetch(
      'https://www.api.outworkx.com/v1/auth/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
          dateOfBirth: payload.dateOfBirth,
          phoneNumber: payload.phoneNumber,
          gender: payload.gender
        })
      }
    );

    const { data } = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.message);

      throw new Error(); // To reject the promise
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
      console.log('register user data', data.user);

      dispatch({ type: 'LOGIN', payload: data });

      setIsLoading(false);
    }
  }

  return { register, isLoading, error };
}
