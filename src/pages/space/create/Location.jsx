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
    navigate('/space/create/gallery');
  }

  return (
    <div className="p-2">
      <div className="mb-6 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">Location</h2>
        <button
          className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
        >
          Save & Exit
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-8 py-4">
        <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
          Address*
        </h2>
        <input
          type="text"
          placeholder="What is the address of the place"
          className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
              City*
            </h2>
            <input
              type="text"
              placeholder="City name"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
              State*
            </h2>
            <input
              type="text"
              placeholder="State name"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={state}
              required
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
              Postal Code*
            </h2>
            <input
              type="text"
              placeholder="Please provide the Zip code"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={zipCode}
              required
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
              Country*
            </h2>
            <input
              type="text"
              placeholder="Country*"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <div className="relative mt-16">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14771.99037376455!2d91.82208290000001!3d22.2401701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1707335722787!5m2!1sbn!2sbd"
            className="h-64 w-full border-0 sm:h-smCustom md:h-mdCustom"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-12 flex justify-end">
          <button
            type="submit"
            className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
