import { useEffect, useState, useCallback, useMemo } from 'react';
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
      const response = await fetch(`${VITE_BACKEND_API}/v1/space/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pageNumber: pageNumber,
          pageSize: pageSize
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      return {
        spaces: data.data.spaces,
        metadata: data.data.metadata
      };
    } catch (error) {
      console.error('Error fetching spaces:', error);
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

      setSpaces((prevSpaces) => [...prevSpaces, ...spaces]);
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
