import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from '../client/http.client';

const { VITE_BACKEND_API } = import.meta.env;

export default function SpaceDetails() {
  const [space, setSpace] = useState(null);
  const params = useParams();

  useEffect(
    function () {
      axios
        .post(`${VITE_BACKEND_API}/v1/space/get`, {
          spaceId: params.id
        })
        .then(function (response) {
          setSpace(response.data.data.space);
        });
    },
    [params.id]
  );

  return <>{JSON.stringify(space)}</>;
}
