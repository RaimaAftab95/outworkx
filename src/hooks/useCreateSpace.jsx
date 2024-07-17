import { useAuthContext } from './useAuthContext';
import { useState } from 'react';

const { VITE_BACKEND_API } = import.meta.env;

export function useCreateSpace() {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { token } = useAuthContext();

  /**
   * Create a space
   * @returns {Promise<void>}
   */
  async function createSpace(space) {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${VITE_BACKEND_API}/v1/space/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token || ''}`
      },
      body: JSON.stringify(space)
    });

    const { data } = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.message);
      throw new Error(); // To reject the promise
    }

    if (response.ok) {
      setIsLoading(false);
    }
  }

  return { createSpace, isLoading, error };
}
