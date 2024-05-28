import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

export default function Space({ space }) {
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true); // Initially true to show skeleton

  // Extract space data
  const { id, name, description, pricePerDesk, gallery } = space || {};

  // Simulate loading data after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const changeImageHandler = navigate => {
    if (navigate === 'left') {
      activeImage !== 0
        ? setActiveImage(activeImage - 1)
        : setActiveImage(gallery?.length - 1);
    } else if (navigate === 'right') {
      activeImage !== gallery?.length - 1
        ? setActiveImage(activeImage + 1)
        : setActiveImage(0);
    }
  };

  return (
    <div>
      <div className="group relative w-full overflow-hidden rounded-2xl">
        <Link to={`/spaces/${id}`}>
          {loading ? (
            <Skeleton height={256} />
          ) : (
            <img
              src={gallery[activeImage]?.url}
              alt="space"
              className="h-auto max-h-96 w-full object-cover transition-all hover:scale-125"
            />
          )}
        </Link>

        <div
          className={`absolute right-2.5 top-2.5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all hover:opacity-60 ${!loading ? 'bg-primary' : 'bg-transparent'}`}
        >
          {loading ? (
            <Skeleton circle={true} width={30} height={30} />
          ) : (
            <img src="/images/icons/favorite.png" alt="favorite" />
          )}
        </div>

        {/* Slider navigator */}
        <div className="absolute left-2.5 right-2.5 top-1/2 flex translate-y-1/2 transform items-center justify-between gap-5 opacity-0 transition-opacity group-hover:opacity-100">
          <div
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition-all hover:opacity-60"
            onClick={() => changeImageHandler('left')}
          >
            {loading ? (
              <Skeleton circle={true} width={30} height={30} />
            ) : (
              <img src="/images/icons/left.png" alt="left" />
            )}
          </div>
          <div
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition-all hover:opacity-60"
            onClick={() => changeImageHandler('right')}
          >
            {loading ? (
              <Skeleton circle={true} width={30} height={30} />
            ) : (
              <img src="/images/icons/right.png" alt="right" />
            )}
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-5 flex w-full items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100">
          {loading ? (
            <Skeleton count={gallery.length} width={8} height={8} />
          ) : (
            gallery.map((item, idx) => (
              <div
                key={item?.url}
                className={`transition-all ${
                  activeImage === idx ? 'h-2 w-2' : 'h-1.5 w-1.5'
                } cursor-pointer rounded-full bg-white`}
                onClick={() => setActiveImage(idx)}
              />
            ))
          )}
        </div>
      </div>

      <div className="text-lg">
        <div className="flex items-center justify-between gap-2">
          <h3 className="mt-3.5 text-left font-bold">
            <Link to={`/spaces/${id}`}>
              {loading ? <Skeleton width={150} /> : name}
            </Link>
          </h3>
          <div className="flex items-center gap-2">
            {loading ? (
              <Skeleton circle={true} width={20} height={20} />
            ) : (
              <img src="/images/icons/star.png" alt="star" />
            )}
            {loading ? (
              <Skeleton width={30} />
            ) : (
              <span className="text-base text-primary">4.93</span>
            )}
          </div>
        </div>
      </div>
      <p className="text-left">
        {loading ? (
          <Skeleton count={2} />
        ) : description?.length > 50 ? (
          description.substring(0, 50) + '...'
        ) : (
          description
        )}
      </p>
      <h3 className="text-left font-bold">
        {loading ? <Skeleton width={50} /> : `$${pricePerDesk}`}
      </h3>
    </div>
  );
}
