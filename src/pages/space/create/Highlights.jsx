import { useState, useEffect } from 'react';
import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
// import { useNavigate } from 'react-router-dom';

export default function Highlights() {
  const [highlights, setHighlights] = useState('');
  const { dispatch, space } = useCreateSpaceContext();
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: 'SET_HIGHLIGHTS',
      payload: {
        highlights: highlights.split(',').map((highlight) => highlight.trim())
      }
    });

    // navigate('/space/create/summary');
  }

  useEffect(() => {
    if (
      space.name &&
      space.description &&
      space.numberOfDesks &&
      space.pricePerDesk &&
      space.maximumNumberOfNomads &&
      space.address &&
      space.city &&
      space.state &&
      space.zipCode &&
      space.country &&
      space.gallery.length > 0 &&
      space.highlights.length > 0
    ) {
      // All data is present, space is created
      console.log('Space created:', space);
      alert('Space created successfully!');
    }
  }, [space]);

  return (
    <div>
      <h2 className="text-primary text-2xl font-bold">Highlights</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Enter highlights, separated by commas"
          className="border-primary text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
          value={highlights}
          required
          onChange={(e) => setHighlights(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary rounded-lg py-4 text-lg font-bold"
        >
          Finish
        </button>
      </form>
    </div>
  );
}
