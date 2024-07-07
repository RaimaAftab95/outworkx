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
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <input
        type="text"
        placeholder="Title*"
        className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description*"
        className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Number of desks*"
        className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
        value={numberOfDesks}
        required
        onChange={(e) => setNumberOfDesks(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price per desk*"
        className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
        value={pricePerDesk}
        required
        onChange={(e) => setPricePerDesk(e.target.value)}
      />
      <input
        type="text"
        placeholder="Maximum number of nomads*"
        className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
        value={maximumNumberOfNomads}
        required
        onChange={(e) => setMaximumNumberOfNomads(e.target.value)}
      />

      <button type="submit" className="bg-primary rounded-lg px-9 py-4">
        Next
      </button>
    </form>
  );
}
