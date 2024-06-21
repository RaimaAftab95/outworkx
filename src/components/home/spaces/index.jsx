import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import {
  list,
  incrementPageNumber,
  Status
} from '../../../features/space-slice';
import Heading from '../../shared/Heading';
import Button from '../../ui/Button';
import Space from './Space';

export default function Spaces() {
  const dispatch = useAppDispatch();

  const {
    entities: spaces,
    status,
    error,
    pageNumber,
    pageSize
  } = useAppSelector((state) => state.spaces);

  useEffect(() => {
    if (status === Status.IDLE) {
      dispatch(list());
    }
  }, [status, dispatch]);

  /**
   * Handle show more spaces
   * @returns {void}
   */
  const handleShowMore = () => {
    dispatch(incrementPageNumber());
    dispatch(list());
  };

  if (status === Status.LOADING && spaces.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <img src="/images/loading.gif" alt="Loading" />
      </div>
    );
  }

  if (status === Status.FAILED) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-14">
      <div className="container">
        <Heading>Newest Flexible Office Spaces</Heading>

        <div className="mt-11 grid gap-5 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {spaces.slice(0, pageNumber * pageSize).map((space) => (
            <Space key={space.id} space={space} />
          ))}
        </div>

        {spaces.length > pageNumber * pageSize && (
          <div className="mt-11 flex flex-col items-center justify-center gap-9 text-center">
            <h2 className="text-2xl leading-6">
              Continue exploring more trending places
            </h2>
            <Button onClick={handleShowMore}>Show More</Button>
          </div>
        )}
      </div>
    </section>
  );
}
