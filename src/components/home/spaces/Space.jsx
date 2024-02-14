import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    image: "1.jpg",
  },
  {
    id: 2,
    image: "2.jpg",
  },
];

const Space = () => {
  const [activeImage, setActiveImage] = useState(0);

  const changeImageHandler = (navigate) => {
    if (navigate === "left") {
      activeImage !== 0
        ? setActiveImage(activeImage - 1)
        : setActiveImage(images?.length - 1);
    }

    if (navigate === "right") {
      activeImage !== images?.length - 1
        ? setActiveImage(activeImage + 1)
        : setActiveImage(0);
    }
  };

  // useEffect(() => {})
  return (
    <div>
      <div className="overflow-hidden rounded-2xl relative w-full">
        <img
          src={`/images/spaces/${images[activeImage].image}`}
          alt="space"
          className={`w-full transition-all hover:scale-125 `}
        />

        <div className="absolute top-[10px] right-[10px] w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all hover:opacity-60">
          <img src="/images/icons/favorite.png" alt="favorite" />
        </div>

        {/* slider navigator */}
        <div className="absolute left-[10px] right-[10px] top-[50%] transform translate-y-[-50%] flex items-center justify-between gap-5">
          <div
            className="cursor-pointer w-6 h-6 rounded-full bg-white transition-all hover:opacity-60 flex items-center justify-center"
            onClick={() => changeImageHandler("left")}
          >
            <img src="/images/icons/left.png" alt="left" />
          </div>
          <div
            className="cursor-pointer w-6 h-6 rounded-full bg-white transition-all hover:opacity-60 flex items-center justify-center"
            onClick={() => changeImageHandler("right")}
          >
            <img src="/images/icons/right.png" alt="right" />
          </div>
        </div>

        {/* slider dots */}
        <div className="absolute bottom-5 w-full flex items-center justify-center gap-[10px]">
          <div
            className={`transition-all ${
              activeImage === 0 ? "w-[8px] h-[8px]" : "w-[6px] h-[6px]"
            } rounded-full bg-white cursor-pointer`}
            onClick={() => setActiveImage(0)}
          />
          <div
            className={`transition-all ${
              activeImage === 1 ? "w-[8px] h-[8px]" : "w-[6px] h-[6px]"
            } rounded-full bg-white cursor-pointer`}
            onClick={() => setActiveImage(1)}
          />
        </div>
      </div>

      <div className="py-[14px] text-lg">
        <div className="flex items-center gap-2 justify-between">
          <h3 className="font-bold">
            <Link to="#">Lorem ipsum dolor sit </Link>
          </h3>
          <div className="flex items-center gap-2">
            <img src="/images/icons/star.png" alt="star" />
            <span className="text-base text-primary">4.93</span>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet</p>
        <h3 className="font-bold">$102</h3>
      </div>
    </div>
  );
};

export default Space;
