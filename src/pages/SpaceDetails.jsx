import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';
import axios from 'axios';

const { VITE_BACKEND_API } = import.meta.env;

export default function SpaceDetails() {
  const { id } = useParams();
  const [space, setSpace] = useState(null);

  useEffect(() => {
    const fetchSpaceDetails = async () => {
      try {
        const response = await axios.post(`${VITE_BACKEND_API}/v1/space/get`, {
          spaceId: id
        });

        setSpace(response.data.data.space);
      } catch (error) {
        console.error('Error fetching space details:', error);
      }
    };

    fetchSpaceDetails();
  }, [id]);

  return (
    <div>
      {space ? (
        <>
          <h1>{space.name}</h1>
          <p>{space.description}</p>
          <BookingForm spaceId={id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
