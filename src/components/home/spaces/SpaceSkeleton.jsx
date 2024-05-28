import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SpaceSkeleton() {
  return (
    <div>
      <div className="group relative w-full overflow-hidden rounded-2xl">
        <Skeleton height={256} />
        <div className="absolute right-2.5 top-2.5 flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
          <Skeleton circle={true} width={30} height={30} />
        </div>
        <div className="absolute left-2.5 right-2.5 top-1/2 flex items-center justify-between gap-5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <Skeleton circle={true} width={30} height={30} />
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <Skeleton circle={true} width={30} height={30} />
          </div>
        </div>
        <div className="absolute bottom-5 flex w-full items-center justify-center gap-2.5">
          <Skeleton count={3} width={8} height={8} />
        </div>
      </div>

      <div className="text-lg">
        <div className="flex items-center justify-between gap-2">
          <h3 className="mt-3.5 text-left font-bold">
            <Skeleton width={150} />
          </h3>
          <div className="flex items-center gap-2">
            <Skeleton circle={true} width={20} height={20} />
            <Skeleton width={30} />
          </div>
        </div>
      </div>
      <p className="text-left">
        <Skeleton count={2} />
      </p>
      <h3 className="text-left font-bold">
        <Skeleton width={50} />
      </h3>
    </div>
  );
}
