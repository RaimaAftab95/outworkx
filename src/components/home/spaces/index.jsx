import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpaces, incrementPageNumber } from '../../../features/SpaceSlice';
import Heading from '../../shared/Heading';
import Button from '../../ui/Button';
import Space from './Space';
import SpaceSkeleton from './SpaceSkeleton';

const Spaces = () => {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.spaces.spacesList);
  const status = useSelector((state) => state.spaces.status);
  const error = useSelector((state) => state.spaces.error);
  const pageNumber = useSelector((state) => state.spaces.pageNumber);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSpaces({ pageSize: 10 }));
    }
  }, [status, dispatch]);

  const handleShowMore = () => {
    dispatch(incrementPageNumber());
    dispatch(fetchSpaces({ pageSize: 10 }));
  };

  if (status === 'loading' && spaces.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <img src="/images/loading.gif" alt="Loading" />
      </div>
    );
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const spacesArray = Array.isArray(spaces) ? spaces : [];

  return (
    <section className="py-14">
      <div className="container">
        <Heading>Newest Flexible Office Spaces</Heading>

        <div className="mt-11 grid gap-5 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {spacesArray.slice(0, pageNumber * 5).map((space) => (
            <Space key={space.id} space={space} />
          ))}
        </div>

        {spacesArray.length > pageNumber * 5 && (
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
};

export default Spaces;
