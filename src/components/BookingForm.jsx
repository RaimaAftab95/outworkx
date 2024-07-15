import React, { useState } from 'react';
import { useCreateBookingContext } from '../hooks/useCreateBookingContext';
import { useAuthContext } from '../hooks/useAuthContext';
import toast from 'react-hot-toast';

export default function BookingForm({ spaceId }) {
  const { createBooking } = useCreateBookingContext();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState(0);
  const [numberOfDesks, setNumberOfDesks] = useState(1);

  const { user, token } = useAuthContext();
  // Log user and token to debug
  console.log('User:', user);
  console.log('Token:', token);

  // Remove surrounding quotes from the token
  const cleanToken = token.replace(/^"(.*)"$/, '$1');

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingDetails = {
      spaceId,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      price,
      numberOfDesks,
      status: 'pending'
    };

    console.log('Request Booking Details:', bookingDetails);

    try {
      // Use the cleaned token
      await createBooking(bookingDetails, cleanToken);

      //   await createBooking(bookingDetails, user.token);
      toast.success('Booking created successfully');
    } catch (error) {
      toast.error('Failed to create booking');
    }
  };

  return (
    <form
      onSubmit={handleBooking}
      className="mx-auto mt-5 max-w-md rounded border border-gray-300 bg-gray-100 p-6 shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="mb-2 block font-bold text-gray-700"
        >
          Start Date:
        </label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="block w-full rounded border border-gray-300 p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="endDate" className="mb-2 block font-bold text-gray-700">
          End Date:
        </label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="block w-full rounded border border-gray-300 p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="mb-2 block font-bold text-gray-700">
          Price:
        </label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="block w-full rounded border border-gray-300 p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="numberOfDesks"
          className="mb-2 block font-bold text-gray-700"
        >
          Number of Desks:
        </label>
        <input
          id="numberOfDesks"
          type="number"
          value={numberOfDesks}
          onChange={(e) => setNumberOfDesks(Number(e.target.value))}
          className="block w-full rounded border border-gray-300 p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
      >
        Book
      </button>
    </form>
  );
}
