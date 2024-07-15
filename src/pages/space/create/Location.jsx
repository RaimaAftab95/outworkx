import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Location() {
  const [address, setAddress] = useState('');
  const [addressHint, setAddressHint] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const { dispatch } = useCreateSpaceContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }

    return function () {
      setLatitude('');
      setLongitude('');
    };
  }, []);

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
        address,
        addressHint,
        city,
        state,
        postalCode: parseInt(postalCode, 10),
        country,
        latitude: parseFloat(latitude, 10),
        longitude: parseFloat(longitude, 10)
      }
    });

    navigate('/space/create/gallery');
  }

  return (
    <div className="p-2">
      <div className="mb-6 flex w-full items-center justify-between">
        <h2 className="text-primary text-2xl font-bold">Location</h2>
        <button
          className="bg-primary rounded-full border px-6 py-2 
        font-medium transition-all"
        >
          Save & Exit
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-8 py-4">
        <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
          Address*
        </h2>
        <input
          type="text"
          placeholder="What is the address of the place"
          className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
          Address Hint*
        </h2>
        <input
          type="text"
          placeholder="Give some hint about the address of the place"
          className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
          value={addressHint}
          required
          onChange={(e) => setAddressHint(e.target.value)}
        />
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
              City*
            </h2>
            <input
              type="text"
              placeholder="City name"
              className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
              State*
            </h2>
            <input
              type="text"
              placeholder="State name"
              className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
              value={state}
              required
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
              Postal Code*
            </h2>
            <input
              type="number"
              placeholder="Please provide the Zip code"
              className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
              Country*
            </h2>
            <input
              type="text"
              placeholder="Country*"
              className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <div className="relative mt-16">MAP</div>

        <div className="mt-12 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate('/space/create')}
            className="bg-primary rounded-full border px-6 py-2 font-medium transition-all"
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-primary rounded-full border px-6 py-2 font-medium transition-all"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
