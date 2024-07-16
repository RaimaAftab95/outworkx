import { useState } from 'react';
import { toast } from 'react-hot-toast';

export function useCreateBooking() {
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBooking = async (bookingData, token) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/v1/booking/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(bookingData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create booking');
      }

      setBooking(data);
      toast.success('Booking created successfully');
    } catch (error) {
      setError(error.message);
      toast.error('Failed to create booking');
    } finally {
      setIsLoading(false);
    }
  };

  const clearBooking = () => {
    setBooking(null);
    setError(null);
  };

  return {
    booking,
    isLoading,
    error,
    createBooking,
    clearBooking
  };
}
