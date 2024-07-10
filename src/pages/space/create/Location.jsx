import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Location() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const { dispatch } = useCreateSpaceContext();
  const navigate = useNavigate();

  /**
   * Handle general form submission
   * @param {import('react').SyntheticEvent} e Event
   * @returns {void}
   */
  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: 'SET_LOCATION',
      payload: {
        space: {
          address,
          city,
          state,
          zipCode,
          country
        }
      }
    });

    // navigate('/space/create/location');
    navigate('/space/create/gallery');
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary">Location</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Address*"
          className="block w-full rounded-lg border border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City*"
          className="block w-full rounded-lg border border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State*"
          className="block w-full rounded-lg border border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70"
          value={state}
          required
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zip code*"
          className="block w-full rounded-lg border border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70"
          value={zipCode}
          required
          onChange={(e) => setZipCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country*"
          className="block w-full rounded-lg border border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70"
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
        />
        <button
          type="submit"
          // className="bg-primary rounded-lg py-4 text-lg font-bold"
        >
          Next
        </button>
      </form>
    </div>
  );
}
