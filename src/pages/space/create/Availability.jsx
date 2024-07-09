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

export default function Availability() {
  const [availability, setAvailability] = useState([]);
  const { dispatch } = useCreateSpaceContext();
  const navigate = useNavigate();

  const addAvailabilitySlot = () => {
    setAvailability([...availability, { day: '', start: 0, end: 60 }]);
  };

  const removeAvailabilitySlot = (index) => {
    const updatedAvailability = [...availability];
    updatedAvailability.splice(index, 1);
    setAvailability(updatedAvailability);
  };

  const handleDayChange = (index, day) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].day = day;
    setAvailability(updatedAvailability);
  };

  const handleTimeChange = (index, field, value) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index][field] = value;
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

  return (
    <div>
      <h2 className="text-primary text-2xl font-bold">Availability</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {availability.map((slot, index) => (
          <div key={index} className="mt-4">
            <label className="block text-lg font-medium">Day:</label>
            <select
              value={slot.day}
              onChange={(e) => handleDayChange(index, e.target.value)}
              className="border-gray mt-1 block w-full rounded-lg p-2"
            >
              <option value="">Select a day</option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <div className="mt-2">
              <label className="block text-lg font-medium">
                From (minutes since midnight):
              </label>
              <input
                type="number"
                value={slot.start}
                onChange={(e) =>
                  handleTimeChange(index, 'start', parseInt(e.target.value))
                }
                className="border-gray mt-1 block w-full rounded-lg p-2"
              />
            </div>
            <div className="mt-2">
              <label className="block text-lg font-medium">
                To (minutes since midnight):
              </label>
              <input
                type="number"
                value={slot.end}
                onChange={(e) =>
                  handleTimeChange(index, 'end', parseInt(e.target.value))
                }
                className="border-gray mt-1 block w-full rounded-lg p-2"
              />
            </div>
            <button
              type="button"
              onClick={() => removeAvailabilitySlot(index)}
              className="mt-2 rounded-lg bg-red-500 px-4 py-2 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addAvailabilitySlot}
          className="bg-primary mt-4 rounded-lg py-4 text-lg font-bold"
        >
          Add Availability Slot
        </button>
        {/* <button type="submit" className="mt-4 bg-primary rounded-lg py-4 text-lg font-bold">
          Finish
        </button> */}
        <button
          type="submit"
          className="bg-primary rounded-lg py-4 text-lg font-bold"
        >
          Next
        </button>
      </form>
    </div>
  );
}
