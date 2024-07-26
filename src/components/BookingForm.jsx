import React, { useState } from 'react';
import { useCreateBooking } from '../hooks/useCreateBooking';
import { useAuthContext } from '../hooks/useAuthContext';
import toast from 'react-hot-toast';
import { H6, Muted, Small } from '../components/primitives/typography';

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
      className="mx-auto mt-5 max-w-md rounded-3xl border border-gray-300 bg-white p-6 shadow-md"
    >
      <H6 className="">Coworking Space</H6>
      <Small className="">Access to shared workspace</Small>
      <hr className="my-4" />
      <div className="mb-4 flex justify-between text-sm">
        <span>1-20 People</span>
        <span>$19/person/day</span>
      </div>
      <hr className="my-4"></hr>
      <div className="mb-4 flex items-center justify-between">
        <Muted htmlFor="startDate" className="block font-bold text-gray-700">
          Check In:
        </Muted>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="ml-2 block w-1/2 border-b border-gray-300 p-2 text-sm focus:border-black focus:outline-none"
          required
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Muted htmlFor="endDate" className="block font-bold text-gray-700">
          Check Out:
        </Muted>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="ml-2 block w-1/2 border-b border-gray-300 p-2 text-sm focus:border-black focus:outline-none"
          required
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Muted htmlFor="price" className="block font-bold text-gray-700">
          Price:
        </Muted>
        <input
          id="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="ml-2 block w-1/2 border-b border-gray-300 p-2 text-sm focus:border-black focus:outline-none"
          required
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Muted
          htmlFor="numberOfDesks"
          className="block font-bold text-gray-700"
        >
          Number of Desks:
        </Muted>
        <input
          id="numberOfDesks"
          type="text"
          value={numberOfDesks}
          onChange={(e) => setNumberOfDesks(e.target.value)}
          className="ml-2 block w-1/2 border-b border-gray-300 p-2 text-sm focus:border-black focus:outline-none"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="rounded-full bg-black px-4 py-1.5 text-sm text-white transition-all hover:opacity-60"
        >
          Reserve Space
        </button>
      </div>
      <hr className="my-4" />
      <div className="mb-4 flex justify-between text-sm">
        <span>$19&times;5 days</span>
        <span className="font-bold">150$</span>
      </div>
    </form>
  );
}
