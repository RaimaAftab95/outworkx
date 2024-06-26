import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Heading from '../../shared/Heading';
import Button from '../../ui/Button';
import Space from './Space';

import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import {
  list,
  incrementPageNumber,
  Status
} from '../../../features/space-slice';

export default function Spaces() {
  const dispatch = useAppDispatch();

  const {
    entities: spaces,
    status,
    pageNumber,
    pageSize
  } = useAppSelector((state) => state.spaces);

  useEffect(() => {
    if (status !== Status.Idle) {
      return;
    }

    dispatch(list());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handle show more spaces
   * @returns {void}
   */
  function handleShowMore() {
    dispatch(incrementPageNumber());
    dispatch(list());
  }

  if (status === Status.Failed) {
    return (
      <div className="mt-11 flex flex-col items-center justify-center gap-9 text-center">
        <h2 className="text-2xl leading-6">Failed to load spaces</h2>
        <Button>
          <Link to="/">Reload</Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="py-14">
      <div className="container">
        <Heading>Newest Flexible Office Spaces</Heading>

        <div className="mt-11 grid gap-5 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {spaces.slice(0, pageNumber * pageSize).map((space) => (
            <Space
              key={space.id}
              space={space}
              isLoading={status === Status.Loading}
            />
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
