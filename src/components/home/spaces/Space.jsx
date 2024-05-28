import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SpaceSkeleton from './SpaceSkeleton';

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

  if (loading) {
    return <SpaceSkeleton />;
  }

  return (
    <div>
      <div className="group relative w-full overflow-hidden rounded-2xl">
        <Link to={`/spaces/${id}`}>
          <img
            src={gallery[activeImage]?.url}
            alt="space"
            className="w-full object-cover transition-all hover:scale-125 sm:h-56 md:h-64 lg:h-72 xl:h-80"
          />
        </Link>

        <div className="absolute right-2.5 top-2.5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary transition-all hover:opacity-60">
          <img src="/images/icons/favorite.png" alt="favorite" />
        </div>
        {gallery && gallery.length > 1 && (
          <div className="absolute left-2.5 right-2.5 top-1/2 flex translate-y-1/2 transform items-center justify-between gap-5 opacity-0 transition-opacity group-hover:opacity-100">
            <div
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition-all hover:opacity-60"
              onClick={() => changeImageHandler('left')}
            >
              <img src="/images/icons/left.png" alt="left" />
            </div>
            <div
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition-all hover:opacity-60"
              onClick={() => changeImageHandler('right')}
            >
              <img src="/images/icons/right.png" alt="right" />
            </div>
          </div>
        )}

        {/* Slider dots */}
        {gallery && gallery.length > 1 && (
          <div className="absolute bottom-5 flex w-full items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100">
            {gallery.map((item, idx) => (
              <div
                key={item?.url}
                className={`transition-all ${
                  activeImage === idx ? 'h-2 w-2' : 'h-1.5 w-1.5'
                } cursor-pointer rounded-full bg-white`}
                onClick={() => setActiveImage(idx)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="text-lg">
        <div className="flex items-center justify-between gap-2">
          <h3 className="mt-3.5 text-left font-bold">
            <Link to={`/spaces/${id}`}>{name}</Link>
          </h3>
          <div className="flex items-center gap-2">
            <img src="/images/icons/star.png" alt="star" />
            <span className="text-base text-primary">4.93</span>
          </div>
        </div>
      </div>
      <p className="text-left">
        {description?.length > 50
          ? description.substring(0, 50) + '...'
          : description}
      </p>
      <h3 className="text-left font-bold">${pricePerDesk}</h3>
    </div>
  );
}
