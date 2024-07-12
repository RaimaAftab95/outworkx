import { useState, useEffect } from 'react';
import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Highlights() {
  const [amenities, setAmenities] = useState([]);
  const [rules, setRules] = useState([]);
  const { dispatch, space, createSpace } = useCreateSpaceContext();
  const navigate = useNavigate();

  const handleSelectAmenity = (amenity) => {
    setAmenities((prevAmenities) =>
      prevAmenities.includes(amenity)
        ? prevAmenities.filter((item) => item !== amenity)
        : [...prevAmenities, amenity]
    );
  };

  const handleSelectRule = (rule) => {
    setRules((prevRules) =>
      prevRules.includes(rule)
        ? prevRules.filter((item) => item !== rule)
        : [...prevRules, rule]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'SET_AMENITIES_AND_RULES',
      payload: {
        amenities,
        rules
      }
    });
    handleCreateSpace();
  };

  const handleCreateSpace = async () => {
    try {
      await createSpace();
      // If successful, nevigate to home
      navigate('/');
    } catch (error) {
      // If unsuccessful, show error message
      console.error('Create space error:', error);
      toast.error('Failed to create space');
    }
  };

  useEffect(() => {
    const {
      name,
      description,
      numberOfDesks,
      pricePerDesk,
      maximumNumberOfNomads,
      address,
      addresshint,
      city,
      state,
      zipCode,
      country,
      gallery,
      amenities = [],
      rules = [],
      availability = []
    } = space;

    if (
      name &&
      description &&
      numberOfDesks &&
      pricePerDesk &&
      maximumNumberOfNomads &&
      address &&
      addresshint &&
      city &&
      state &&
      zipCode &&
      country &&
      gallery.length > 0 &&
      amenities.length > 0 &&
      rules.length > 0 &&
      availability.length > 0
    ) {
      // Data is complete, proceed with space creation
      handleCreateSpace();
    } else {
      toast.error(
        'Please fill in all required fields before creating the space.'
      );
    }
  }, [space]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-primary">Highlights</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            What amenities does your space offer?
          </h3>
          <p className="mt-2 text-lg">
            You can add more after publishing your listing.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Wifi',
              'Kitchen',
              'Breakout Area',
              'Coffee',
              'Pets Allowed',
              'Fitness'
            ].map((amenity) => (
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
            {[
              'No smoking',
              'No waste of electricity',
              'Keep workspace clean'
            ].map((rule) => (
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
            className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
            onClick={() => navigate('/space/create/availability')}
          >
            Previous
          </button>
          <button
            type="submit"
            className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
