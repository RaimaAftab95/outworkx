import React from 'react';
import Button from '../../ui/Button';
import Review from './Review';

const Reviews = () => {
  return (
    <div className="border-b border-gray py-7">
      <div className="flex flex-wrap items-center gap-2 text-xl font-bold text-primary">
        <div className="flex items-center gap-2">
          <img src="/images/icons/star-lg.png" alt="" />
          <span>4.86</span>
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>300 Reviews</span>
      </div>

      <div className="mt-2">
        <h5 className="text-base leading-10">Overall rating</h5>
        <div className="flex">
          <div className="grid w-full grid-cols-2 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="border-r border-gray">
              <div className="flex items-center gap-2">
                <span className="text-base">5</span>
                <div className="h-1 w-4/5 rounded-full bg-primary" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">4</span>
                <div className="h-1 w-4/5 rounded-full bg-gray" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">3</span>
                <div className="h-1 w-4/5 rounded-full bg-gray" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">2</span>
                <div className="h-1 w-4/5 rounded-full bg-gray" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">1</span>
                <div className="h-1 w-4/5 rounded-full bg-gray" />
              </div>
            </div>

            <div className="flex flex-col gap-1 border-r border-gray px-6">
              <h5 className="text-base">Cleanliness</h5>
              <h5 className="text-base">5.0</h5>
              <div>
                <img src="/images/icons/cleaner.png" alt="icon" />
              </div>
            </div>

            <div className="flex flex-col gap-1 border-r border-gray px-6">
              <h5 className="text-base">Accuracy</h5>
              <h5 className="text-base">5.0</h5>
              <div>
                <img src="/images/icons/accuricy.png" alt="icon" />
              </div>
            </div>
            <div className="flex flex-col gap-1 border-r border-gray px-6">
              <h5 className="text-base">Check-in</h5>
              <h5 className="text-base">5.0</h5>
              <div>
                <img src="/images/icons/check-in.png" alt="icon" />
              </div>
            </div>
            <div className="flex flex-col gap-1 border-r border-gray px-6">
              <h5 className="text-base">Communication</h5>
              <h5 className="text-base">5.0</h5>
              <div>
                <img src="/images/icons/communication.png" alt="icon" />
              </div>
            </div>
            <div className="flex flex-col gap-1 px-6">
              <h5 className="text-base">Value</h5>
              <h5 className="text-base">5.0</h5>
              <div>
                <img src="/images/icons/value.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* all reviews */}
      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>

      <div className="mt-14 flex items-center justify-center">
        <Button variant="secondary">Show More Reviews</Button>
      </div>
    </div>
  );
};

export default Reviews;
