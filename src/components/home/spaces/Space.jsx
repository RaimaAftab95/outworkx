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
      <div className="overflow-hidden rounded-2xl relative w-full">
        <Link to={`/spaces/${id}`}>
          {loading ? (
            <Skeleton height={220} />
          ) : (
            <img
              src={gallery[activeImage]?.url}
              alt="space"
              className="w-full h-full sm:h-[220px] transition-all hover:scale-125 object-cover"
            />
          )}
        </Link>

        <div
          className={`absolute top-[10px] right-[10px] w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:opacity-60 ${!loading ? 'bg-primary' : 'bg-transparent'}`}
        >
          {loading ? (
            <Skeleton circle={true} width={30} height={30} />
          ) : (
            <img src="/images/icons/favorite.png" alt="favorite" />
          )}
        </div>

        {/* Slider navigator */}
        <div className="absolute left-[10px] right-[10px] top-[50%] transform translate-y-[-50%] flex items-center justify-between gap-5">
          <div
            className="cursor-pointer w-6 h-6 rounded-full bg-white transition-all hover:opacity-60 flex items-center justify-center"
            onClick={() => changeImageHandler('left')}
          >
            {loading ? (
              <Skeleton circle={true} width={30} height={30} />
            ) : (
              <img src="/images/icons/left.png" alt="left" />
            )}
          </div>
          <div
            className="cursor-pointer w-6 h-6 rounded-full bg-white transition-all hover:opacity-60 flex items-center justify-center"
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
        <div className="absolute bottom-5 w-full flex items-center justify-center gap-[10px]">
          {loading ? (
            <Skeleton count={gallery.length} width={8} height={8} />
          ) : (
            gallery.map((item, idx) => (
              <div
                key={item?.url}
                className={`transition-all ${
                  activeImage === idx ? 'w-[8px] h-[8px]' : 'w-[6px] h-[6px]'
                } rounded-full bg-white cursor-pointer`}
                onClick={() => setActiveImage(idx)}
              />
            ))
          )}
        </div>
      </div>

      <div className="py-[14px] text-lg">
        <div className="flex items-center gap-2 justify-between">
          <h3 className="font-bold">
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
        <p>
          {loading ? (
            <Skeleton count={2} />
          ) : description?.length > 50 ? (
            description.substring(0, 50) + '...'
          ) : (
            description
          )}
        </p>
        <h3 className="font-bold">
          {loading ? <Skeleton width={50} /> : `$${pricePerDesk}`}
        </h3>
      </div>
    </div>
  );
}
