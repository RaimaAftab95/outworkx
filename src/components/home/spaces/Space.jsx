/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Link } from 'react-router-dom';
import { useState } from 'react';

import SpaceSkeleton from './SpaceSkeleton';

export default function Space({ space, isLoading }) {
  const [activeImage, setActiveImage] = useState(0);

  const { id, name, description, pricePerDesk, gallery } = space || {};

  /**
   * Image navigation handler
   * @param {("left"|"right")} navigate Direction to navigate
   * @returns {void}
   */
  function changeImageHandler(navigate) {
    if (navigate === 'left') {
      setActiveImage((prevImage) =>
        prevImage === 0 ? gallery?.length - 1 : prevImage - 1
      );
    } else if (navigate === 'right') {
      setActiveImage((prevImage) =>
        prevImage === gallery?.length - 1 ? 0 : prevImage + 1
      );
    }
  }

  if (isLoading) {
    return <SpaceSkeleton />;
  }

  return (
    <div>
      <div className="group relative w-full overflow-hidden rounded-2xl">
        <Link to={`/spaces/${id}`}>
          <div className="aspect-h-3 aspect-w-3">
            <img
              src={gallery[activeImage]?.url}
              alt="space"
              className="h-full w-full object-cover object-center transition-all hover:scale-105"
            />
          </div>
        </Link>

        <div className="absolute right-2.5 top-2.5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary transition-all hover:opacity-60">
          <img src="/images/icons/favorite.png" alt="favorite" />
        </div>
        {gallery && gallery.length > 1 && (
          <div
            className="top-14/30 absolute left-2.5 right-2.5 flex transform items-center justify-between gap-5 opacity-0 transition-opacity group-hover:opacity-100"
            role="button"
            tabIndex={0}
          >
            <button
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-all hover:opacity-60"
              onClick={() => changeImageHandler('left')}
            >
              <img src="/images/icons/left.png" alt="left" />
            </button>
            <button
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-all hover:opacity-60"
              onClick={() => changeImageHandler('right')}
            >
              <img src="/images/icons/right.png" alt="right" />
            </button>
          </div>
        )}

        {gallery && gallery.length > 1 && (
          <div
            className="absolute bottom-5 flex w-full items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100"
            role="button"
            tabIndex={0}
          >
            {gallery.map((item, idx) => (
              <div
                key={item?.url}
                className={`transition-all ${
                  activeImage === idx ? 'h-2 w-2' : 'h-1.5 w-1.5'
                } cursor-pointer rounded-full bg-white`}
                role="button"
                tabIndex={-1}
                onClick={() => setActiveImage(idx)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="text-lg">
        <div className="flex items-center justify-between gap-2 pt-3.5">
          <h3 className="text-left font-bold">
            <Link to={`/space/${id}`}>{name}</Link>
          </h3>
          <div className="flex items-center gap-2">
            <img src="/images/icons/star.png" alt="star" />
            <span className="text-base text-primary">4.93</span>
          </div>
        </div>
      </div>

      <p className="pb-2 text-left">{description.substring(0, 50) + '...'}</p>
      <h3 className="text-left font-bold">Rs. {pricePerDesk}</h3>
    </div>
  );
}
