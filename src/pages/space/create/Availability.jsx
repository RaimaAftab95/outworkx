import { useState } from 'react';
import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const timeOptions = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return [`${hour}:00 AM`, `${hour}:30 AM`, `${hour}:00 PM`, `${hour}:30 PM`];
}).flat();

export default function Availability() {
  const [availability, setAvailability] = useState([]);
  const { dispatch } = useCreateSpaceContext();
  const navigate = useNavigate();

  const toggleAvailability = (day) => {
    const existingSlot = availability.find((slot) => slot.day === day);
    if (existingSlot) {
      removeAvailabilitySlot(day);
    } else {
      addAvailabilitySlot(day);
    }
  };

  const addAvailabilitySlot = (day) => {
    setAvailability([
      ...availability,
      { day, start: '09:00 AM', end: '05:00 PM' }
    ]);
  };

  const removeAvailabilitySlot = (day) => {
    const updatedAvailability = availability.filter((slot) => slot.day !== day);
    setAvailability(updatedAvailability);
  };

  const handleTimeChange = (day, field, value) => {
    const updatedAvailability = availability.map((slot) =>
      slot.day === day ? { ...slot, [field]: value } : slot
    );
    setAvailability(updatedAvailability);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'SET_AVAILABILITY',
      payload: {
        availability
      }
    });

    navigate('/space/create/highlights');
  };

  const renderTimeSelect = (day, field, value) => (
    <select
      value={value}
      onChange={(e) => handleTimeChange(day, field, e.target.value)}
      className="mt-1 block w-full rounded-lg border-gray p-2"
    >
      {timeOptions.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  );

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="mb-5 mt-5 text-2xl font-bold text-primary">
          Availability
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="flex items-center gap-4">
              <label className="block w-24 text-lg font-medium">{day}</label>
              <div
                className={`focus-within:bg-primary-500 relative inline-block h-4 w-12 rounded-full bg-black transition-all duration-200 ${availability.some((slot) => slot.day === day) ? 'bg-green-500' : ''}`}
                onClick={() => toggleAvailability(day)}
              >
                <div
                  className={`absolute h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${availability.some((slot) => slot.day === day) ? 'translate-x-6' : ''}`}
                />
              </div>
              {availability
                .filter((slot) => slot.day === day)
                .map((slot) => (
                  <div key={day} className="flex items-center gap-2">
                    {renderTimeSelect(day, 'start', slot.start)}
                    <span>to</span>
                    {renderTimeSelect(day, 'end', slot.end)}
                    <button
                      type="button"
                      onClick={() => removeAvailabilitySlot(day)}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
            </div>
          ))}
          <div className="flex justify-between">
            <button
              type="submit"
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Done
            </button>
            <button
              type="button"
              className="rounded-lg bg-black px-4 py-2 text-white"
              onClick={() => navigate('/space/create/highlights')}
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
