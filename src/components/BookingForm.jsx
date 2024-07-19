import React, { useState } from 'react';
import { useCreateBooking } from '../hooks/useCreateBooking';
import { useAuthContext } from '../hooks/useAuthContext';
import toast from 'react-hot-toast';

export default function BookingForm({ spaceId }) {
  const { createBooking } = useCreateBooking();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');
  const [numberOfDesks, setNumberOfDesks] = useState(1);
  const { token } = useAuthContext();

  /**
   * Handles booking submission.
   * @param {React.SyntheticEvent} e - The synthetic event object.
   * @returns {Promise<void>}
   */
  async function handleBooking(e) {
    e.preventDefault();

    const bookingDetails = {
      spaceId,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      price: parseInt(price, 10),
      numberOfDesks: parseInt(numberOfDesks, 10),
      status: 'pending'
    };

    toast.promise(createBooking(bookingDetails, token), {
      loading: 'Creating booking...',
      success: 'Booking created successfully',
      error: 'Failed to create booking'
    });
  }

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
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
          type="text"
          value={numberOfDesks}
          onChange={(e) => setNumberOfDesks(e.target.value)}
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
