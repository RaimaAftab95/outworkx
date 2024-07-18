import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const { VITE_BACKEND_API } = import.meta.env;

export function useCreateBooking() {
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Create a booking
   * @param {object} bookingData
   * @returns {Promise<void>}
   */
  async function createBooking(bookingData) {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${VITE_BACKEND_API}/v1/booking/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token || ''}`
      },
      body: JSON.stringify(bookingData)
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.message || 'Failed to create booking');
      setIsLoading(false);
      throw new Error(data.message || 'Failed to create booking');
    }

    const data = await response.json();
    setIsLoading(false);
    return data;
  }

  return { createBooking, isLoading, error };
}
