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

// Day to number mapping
const dayToNumber = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};

// Convert time string to minutes past midnight
const timeStringToMinutes = (time) => {
  const [hour, minute, period] = time.match(/(\d+):(\d+) (AM|PM)/).slice(1);
  let hoursInMinutes = (parseInt(hour) % 12) * 60;
  if (period === 'PM') hoursInMinutes += 12 * 60;
  return hoursInMinutes + parseInt(minute);
};

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

    const formattedAvailability = availability.map((slot) => ({
      day: dayToNumber[slot.day],
      start: timeStringToMinutes(slot.start),
      end: timeStringToMinutes(slot.end)
    }));

    dispatch({
      type: 'SET_AVAILABILITY',
      payload: {
        availability: formattedAvailability
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
          <div className="flex justify-between gap-2">
            <button
              type="button"
              className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
              onClick={() => navigate('/space/create/highlights')}
            >
              Skip
            </button>
            <button
              type="submit"
              className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
