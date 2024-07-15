import { useContext } from 'react';
import { CreateBookingContext } from '../context/CreateBookingContext';
import { toast } from 'react-hot-toast';

export function useCreateBookingContext() {
  const { state, dispatch } = useContext(CreateBookingContext);

  const createBooking = async (bookingData, token) => {
    dispatch({ type: 'BOOKING_REQUEST' });

    try {
      //booking request data and token to the console
      console.log('Sending Booking Request:', bookingData);
      console.log('Authorization Token:', token);

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

      dispatch({ type: 'BOOKING_SUCCESS', payload: { booking: data } });
      toast.success('Booking created successfully');
    } catch (error) {
      dispatch({ type: 'BOOKING_FAILURE', payload: { error } });
      toast.error('Failed to create booking');
    }
  };

  const clearBooking = () => {
    dispatch({ type: 'CLEAR_BOOKING' });
  };

  return {
    booking: state.booking,
    isLoading: state.isLoading,
    error: state.error,
    createBooking,
    clearBooking
  };
}
