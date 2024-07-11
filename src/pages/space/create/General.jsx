import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function General() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfDesks, setNumberOfDesks] = useState('');
  const [pricePerDesk, setPricePerDesk] = useState('');
  const [maximumNumberOfNomads, setMaximumNumberOfNomads] = useState('');
  const [spaceOwner, setSpaceOwner] = useState('');

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
          maximumNumberOfNomads,
          spaceOwner
        }
      }
    });

    navigate('/space/create/location');
  }

  return (
    <div className="p-2">
      <div className="mb-6 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">General</h2>
        <button
          className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
        >
          Save & Exit
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-8 py-4">
        <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
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
        <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
          Description*
        </h2>
        <input
          type="text"
          placeholder="Write description about the place"
          className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
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

          <div className="flex-1">
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
              Price Per Desk*
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

        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
              Maximum Number of Nomads*
            </h2>
            <input
              type="text"
              placeholder="Write maximum number of nomads"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={maximumNumberOfNomads}
              required
              onChange={(e) => setMaximumNumberOfNomads(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl leading-7 sm:text-2xl sm:leading-8 md:text-3xl md:leading-custom72px">
              Space Owner*
            </h2>
            <input
              type="text"
              placeholder="Write space owner name"
              className="block w-full border-b border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70 focus:border-b-2"
              value={spaceOwner}
              required
              onChange={(e) => setSpaceOwner(e.target.value)}
            />
          </div>
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
