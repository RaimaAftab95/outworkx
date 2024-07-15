import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateSpace } from '../../../hooks/useCreateSpace';
import toast from 'react-hot-toast';

export default function Highlights() {
  const [amenities, setAmenities] = useState([]);
  const [rules, setRules] = useState([]);
  const { createSpace, isLoading } = useCreateSpace();

  const { space, dispatch } = useCreateSpaceContext();
  const navigate = useNavigate();

  function handleSelectAmenity(amenity) {
    setAmenities((prevAmenities) =>
      prevAmenities.includes(amenity)
        ? prevAmenities.filter((item) => item !== amenity)
        : [...prevAmenities, amenity]
    );
  }

  function handleSelectRule(rule) {
    setRules((prevRules) =>
      prevRules.includes(rule)
        ? prevRules.filter((item) => item !== rule)
        : [...prevRules, rule]
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: 'SET_AMENITIES_AND_RULES',
      payload: {
        amenities,
        rules
      }
    });

    await toast.promise(createSpace(space), {
      loading: 'Creating space...',
      success: 'Space created successfully!',
      error: 'Failed to create space. Please try again'
    });

    navigate('/dashboard');
  }

  return (
    <div className="p-10">
      <h2 className="text-primary text-2xl font-bold">Highlights</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            What amenities does your space offer?
          </h3>
          <p className="mt-2 text-lg">
            You can add more after publishing your listing.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {['Wifi', 'AirCon'].map((amenity) => (
              <div key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  className="h-6 w-6 appearance-none rounded border-2 border-green-500 checked:border-transparent checked:bg-green-500 focus:outline-none"
                  checked={amenities.includes(amenity.toLowerCase())}
                  onChange={() => handleSelectAmenity(amenity.toLowerCase())}
                />
                <label className="ml-2 text-lg">{amenity}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold">Rules</h3>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            {['no-smoking', 'no-pets'].map((rule) => (
              <div key={rule} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-6 w-6 appearance-none rounded border-2 border-green-500 checked:border-transparent checked:bg-green-500 focus:outline-none"
                  checked={rules.includes(rule.toLowerCase())}
                  onChange={() => handleSelectRule(rule.toLowerCase())}
                />
                <label className="text-lg font-medium">{rule}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-end gap-3">
          <button
            type="button"
            className="bg-primary rounded-full border border-transparent px-6 py-2 font-medium transition-all"
            onClick={() => navigate('/space/create/availability')}
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-primary rounded-full border px-6 py-2 font-medium transition-all"
            disabled={isLoading}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
