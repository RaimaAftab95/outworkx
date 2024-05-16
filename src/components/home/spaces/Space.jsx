import { useState } from 'react';
import { Link } from 'react-router-dom';

const Space = ({ space }) => {
  const [activeImage, setActiveImage] = useState(0);

  // extract space data
  const { id, name, description, pricePerDesk, gallery } = space || {};

  const changeImageHandler = navigate => {
    if (navigate === 'left') {
      activeImage !== 0
        ? setActiveImage(activeImage - 1)
        : setActiveImage(gallery?.length - 1);
    }

    if (navigate === 'right') {
      activeImage !== gallery?.length - 1
        ? setActiveImage(activeImage + 1)
        : setActiveImage(0);
    }
  };
  return (
    <div>
      <div className="overflow-hidden rounded-2xl relative w-full">
        <Link to={`/spaces/${id}`}>
          <img
            src={gallery[activeImage].url}
            alt="space"
            className={`w-full h-full sm:h-[220px] transition-all hover:scale-125 object-cover`}
          />
        </Link>

        <div className="absolute top-[10px] right-[10px] w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all hover:opacity-60">
          <img src="/images/icons/favorite.png" alt="favorite" />
        </div>

        {gallery?.length > 0 && (
          <>
            {/* slider navigator */}
            <div className="absolute left-[10px] right-[10px] top-[50%] transform translate-y-[-50%] flex items-center justify-between gap-5">
              <div
                className="cursor-pointer w-6 h-6 rounded-full bg-white transition-all hover:opacity-60 flex items-center justify-center"
                onClick={() => changeImageHandler('left')}
              >
                <img src="/images/icons/left.png" alt="left" />
              </div>
              <div
                className="cursor-pointer w-6 h-6 rounded-full bg-white transition-all hover:opacity-60 flex items-center justify-center"
                onClick={() => changeImageHandler('right')}
              >
                <img src="/images/icons/right.png" alt="right" />
              </div>
            </div>

            {/* slider dots */}
            <div className="absolute bottom-5 w-full flex items-center justify-center gap-[10px]">
              {gallery?.map((item, idx) => (
                <div
                  key={item?.url}
                  className={`transition-all ${
                    activeImage === idx ? 'w-[8px] h-[8px]' : 'w-[6px] h-[6px]'
                  } rounded-full bg-white cursor-pointer`}
                  onClick={() => setActiveImage(idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="py-[14px] text-lg">
        <div className="flex items-center gap-2 justify-between">
          <h3 className="font-bold">
            <Link to={`/spaces/${id}`}>{name}</Link>
          </h3>
          <div className="flex items-center gap-2">
            <img src="/images/icons/star.png" alt="star" />
            <span className="text-base text-primary">4.93</span>
          </div>
        </div>
        <p>
          {description?.length > 50
            ? description?.substring(0, 50) + '...'
            : description}
        </p>
        <h3 className="font-bold">${pricePerDesk}</h3>
      </div>
    </div>
  );
};

export default Space;
