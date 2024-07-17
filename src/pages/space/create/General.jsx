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
        name,
        description,
        numberOfDesks: parseInt(numberOfDesks, 10),
        pricePerDesk: parseInt(pricePerDesk, 10),
        maximumNumberOfNomads: parseInt(maximumNumberOfNomads, 10)
      }
    });

    navigate('/space/create/location');
  }

  return (
    <div className="container p-2">
      <div className="mb-6 flex w-full items-center justify-between">
        <h2 className="text-primary text-2xl font-bold">General</h2>
        <button className="rounded-full border px-6 py-2 font-medium transition-all">
          Save & Exit
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-8 py-4">
        <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
          Place Name*
        </h2>
        <input
          type="text"
          placeholder="What is the name of place"
          className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
          Description*
        </h2>
        <input
          type="text"
          placeholder="Write description about the place"
          className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
              Number of Desks*
            </h2>
            <input
              type="number"
              placeholder="Write number of desks"
              className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
              value={numberOfDesks}
              required
              onChange={(e) => setNumberOfDesks(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
              Price Per Desk*
            </h2>
            <input
              type="number"
              placeholder="Write price per desk"
              className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
              value={pricePerDesk}
              required
              onChange={(e) => setPricePerDesk(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h2 className="md:leading-custom72px text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl">
              Maximum Number of Nomads*
            </h2>
            <input
              type="number"
              placeholder="Write maximum number of nomads"
              className="border-primary text-primary/70 placeholder:text-primary/70 block w-full border-b px-9 py-4 outline-none focus:border-b-2"
              value={maximumNumberOfNomads}
              required
              onChange={(e) => setMaximumNumberOfNomads(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-12 flex justify-end">
          <button
            type="submit"
            className="rounded-full border px-6 py-2 font-medium transition-all"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
