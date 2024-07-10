import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function General() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfDesks, setNumberOfDesks] = useState('');
  const [pricePerDesk, setPricePerDesk] = useState('');
  const [maximumNumberOfNomads, setMaximumNumberOfNomads] = useState('');

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
      type: 'SET_GENERAL',
      payload: {
        space: {
          name,
          description,
          numberOfDesks,
          pricePerDesk,
          maximumNumberOfNomads
        }
      }
    });

    navigate('/space/create/location');
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary">General</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-8 py-4">
        <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-tight">
          Place Name*
        </h2>
        <input
          type="text"
          placeholder="What is the name of place"
          className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-tight">
          Discription*
        </h2>
        <input
          type="text"
          placeholder="Write description about the place"
          className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-tight">
              Number of Desks*
            </h2>
            <input
              type="text"
              placeholder="Write number of desks"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={numberOfDesks}
              required
              onChange={(e) => setNumberOfDesks(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-tight">
              Price Per desk*
            </h2>
            <input
              type="text"
              placeholder="Write price per desk"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={pricePerDesk}
              required
              onChange={(e) => setPricePerDesk(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-tight">
              Maximum number of nomads*
            </h2>
            <input
              type="text"
              placeholder="Write number of desks"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={numberOfDesks}
              required
              onChange={(e) => setNumberOfDesks(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-tight">
              Space owner*
            </h2>
            <input
              type="text"
              placeholder="Write Space owner name"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={pricePerDesk}
              required
              onChange={(e) => setPricePerDesk(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Next</button>
        {/* <div className="mt-12 flex justify-end">
          <button type="submit" className="bg-primary rounded-lg px-9 py-4">
            Next
          </button>
        </div> */}
      </form>
    </div>
  );
}
