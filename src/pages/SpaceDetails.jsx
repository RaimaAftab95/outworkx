import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from '../client/http.client';

export default function SpaceDetails() {
  const [space, setSpace] = useState(null);
  const params = useParams();

  useEffect(
    function () {
      axios
        .post('http://localhost:1100/v1/space/get', {
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
