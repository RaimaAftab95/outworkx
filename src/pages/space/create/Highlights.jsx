import { useState, useEffect } from 'react';
import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';

export default function Highlights() {
  const [amenities, setAmenities] = useState([]);
  const [rules, setRules] = useState([]);
  const { dispatch, space } = useCreateSpaceContext();
  const navigate = useNavigate();

  const handleCreateSpace = () => {
    dispatch({ type: 'CREATE_SPACE' });
  };

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

    console.log('Selected amenities:', amenities);
    console.log('Selected rules:', rules);

    // navigate('/space/create/summary');
  };

  useEffect(() => {
    const {
      name,
      description,
      numberOfDesks,
      pricePerDesk,
      maximumNumberOfNomads,
      address,
      city,
      state,
      zipCode,
      country,
      gallery,
      amenities = [],
      rules = []
      // availability.length > 0 // Check for availability as well
      // highlights: { amenities, rules },
    } = space;

    if (
      name &&
      description &&
      numberOfDesks &&
      pricePerDesk &&
      maximumNumberOfNomads &&
      address &&
      city &&
      state &&
      zipCode &&
      country &&
      gallery.length > 0 &&
      amenities.length > 0 &&
      rules.length > 0
    ) {
      console.log('Space created:', space);
      alert('Space created successfully!');
    }
  }, [space]);

  return (
    <div>
      <h2 className="text-primary text-2xl font-bold">Highlights</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="scale-85 mt-10 origin-center transform">
          <h3 className="text-xl font-bold">
            Tell guests what your place has to offer
          </h3>
          <p className="mt-2 text-lg">
            You can add more after publishing your listing
          </p>
          <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              'Wifi',
              'Kitchen',
              'Breakout Area',
              'Coffee',
              'Pets Allowed',
              'Fitness'
            ].map((amenity) => (
              <div
                key={amenity}
                className={`cursor-pointer rounded-lg border p-4 ${
                  amenities.includes(amenity.toLowerCase())
                    ? 'border-primary'
                    : 'border-gray'
                }`}
                onClick={() => handleSelectAmenity(amenity.toLowerCase())}
              >
                <h4 className="text-center">{amenity}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold">Workspace rules</h3>
          <div className="mt-4 space-y-4">
            {[
              'No smoking',
              'No waste of electricity',
              'Keep workspace clean'
            ].map((rule) => (
              <div key={rule} className="flex items-center justify-between">
                <label className="text-lg font-medium">{rule}</label>
                <input
                  type="checkbox"
                  className="border-gray h-4 w-4 rounded"
                  checked={rules.includes(rule.toLowerCase())}
                  onChange={() => handleSelectRule(rule.toLowerCase())}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary rounded-lg py-4 text-lg font-bold"
        >
          Finish
        </button>
        <button onClick={handleCreateSpace}>Create Space</button>
      </form>
    </div>
  );
}
