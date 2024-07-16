import { useEffect, useState, useCallback, useMemo } from 'react';
// import axios from '../client/http.client';
import axios from 'axios';

import Space from '../components/Space';
import Hero from './../components/Hero';

const { VITE_BACKEND_API } = import.meta.env;

export default function Home() {
  const [pagination, setPagination] = useState({});
  const [spaces, setSpaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSpaces = useCallback(async (pagination) => {
    const { pageNumber = 1, pageSize = 10 } = pagination;

    try {
      const { data } = await axios.post(`${VITE_BACKEND_API}/v1/space/list`, {
        pageNumber: pageNumber,
        pageSize: pageSize
      });

      return {
        spaces: data.data.spaces,
        metadata: data.data.metadata
      };
    } catch (error) {
      return {
        spaces: [],
        metadata: {}
      };
    }
  }, []);

  const handleShowMore = useCallback(
    async (event) => {
      event.preventDefault();

      const { spaces, metadata } = await getSpaces({
        pageNumber: pagination.pageNumber + 1
      });

      setPagination(metadata);

      for (const space of spaces) {
        setSpaces((prevSpaces) => [...prevSpaces, space]);
      }
    },
    [getSpaces, pagination]
  );

  useEffect(() => {
    let isMounted = true;

    getSpaces({ pageNumber: 1 }).then((response) => {
      if (!isMounted) {
        return;
      }

      setSpaces(response.spaces);
      setPagination(response.metadata);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [getSpaces]);

  const memoizedIsLoading = useMemo(() => isLoading, [isLoading]);
  const memoizedSpaces = useMemo(() => spaces, [spaces]);

  return (
    <>
      <Hero />

      <section className="py-14">
        <div className="container mx-auto">
          <h1 className="text-3xl leading-6">Newest Flexible Office Spaces</h1>

          {memoizedSpaces.length === 0 && memoizedIsLoading === true && (
            <div className="mt-11 flex flex-col items-center justify-center gap-9 text-center">
              <h2 className="text-2xl leading-6">Loading...</h2>
            </div>
          )}

          {memoizedSpaces.length === 0 && memoizedIsLoading === false && (
            <div className="mt-11 flex flex-col items-center justify-center gap-9 text-center">
              <h2 className="text-2xl leading-6">
                No spaces found. Please try again later.
              </h2>
            </div>
          )}

          <div className="mt-11 grid gap-5 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {memoizedSpaces.map((space) => (
              <Space key={space.id} space={space} />
            ))}
          </div>

          {pagination?.totalPages > pagination?.pageNumber && (
            <div className="mt-11 flex flex-col items-center justify-center gap-9 text-center">
              <h2 className="text-2xl leading-6">
                Continue exploring more trending places
              </h2>
              <button onClick={handleShowMore}>Show More</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
