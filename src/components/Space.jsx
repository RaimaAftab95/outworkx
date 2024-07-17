/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { H6, Small, Muted } from '../components/primitives/typography';

import { StarIcon } from '@heroicons/react/24/solid';

import {
  HeartIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';

export default function Space({ space }) {
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

  return (
    <div>
      <div className="group relative w-full overflow-hidden rounded-2xl">
        <Link to={`/space/${id}`}>
          <div className="aspect-h-3 aspect-w-3">
            <img
              src={gallery[activeImage]?.url}
              alt="space"
              className="h-full w-full object-cover object-center transition-all hover:scale-105"
            />
          </div>
        </Link>

        <div className="absolute right-2.5 top-2.5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black transition-all hover:opacity-60">
          <HeartIcon className="h-7 text-white" />
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
              <ChevronLeftIcon className="h-5" />
            </button>
            <button
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-all hover:opacity-60"
              onClick={() => changeImageHandler('right')}
            >
              <ChevronRightIcon className="h-5" />
            </button>
          </div>
        )}

        {gallery && gallery.length > 1 && (
          <div
            className="absolute bottom-5 flex w-full items-center justify-center gap-2.5"
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

      <div className="flex items-start justify-between gap-2 pt-3.5">
        <H6 className="text-left">
          <Link to={`/space/${id}`}>{name}</Link>
        </H6>
        <div className="flex items-center gap-2">
          <StarIcon className="h-5" />
          <Small>4.93</Small>
        </div>
      </div>

      <Muted className="py-1 !text-left">
        {description.substring(0, 60) + '...'}
      </Muted>
      <H6 className="text-left">Rs. {pricePerDesk}</H6>
    </div>
  );
}
