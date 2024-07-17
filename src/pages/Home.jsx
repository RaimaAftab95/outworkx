import { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';

import { H3, Lead } from '../components/primitives/typography';

import Space from '../components/Space';
import Hero from './../components/Hero';

const { VITE_BACKEND_API } = import.meta.env;

export default function Home() {
  const [pagination, setPagination] = useState({});
  const [spaces, setSpaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSpaces = useCallback(async (pagination) => {
    const { pageNumber = 1, pageSize = 12 } = pagination;

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

      <section className="container py-14">
        <H3>Newest Flexible Office Spaces</H3>

        {memoizedSpaces.length === 0 && memoizedIsLoading === true && (
          <div className="mt-11 flex flex-col items-center justify-center gap-9 text-center">
            <h2 className="text-2xl leading-6">Loading...</h2>
          </div>
        )}

        {memoizedSpaces.length === 0 && memoizedIsLoading === false && (
          <div className="mt-11 flex flex-col items-center justify-center gap-9 text-center">
            <Lead>No spaces found. Please try again later.</Lead>
          </div>
        )}

        <div className="mt-11 grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4">
          {memoizedSpaces.map((space) => (
            <Space key={space.id} space={space} />
          ))}
        </div>

        {pagination?.totalPages > pagination?.pageNumber && (
          <div className="mt-20 flex flex-col items-center justify-center gap-9 text-center">
            <Lead>Continue exploring more trending places</Lead>
            <button onClick={handleShowMore}>Show More</button>
          </div>
        )}
      </section>
    </>
  );
}
