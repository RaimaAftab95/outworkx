import Skeleton from 'react-loading-skeleton';

export default function SpaceSkeleton() {
  return (
    <div>
      <div className="group relative w-full overflow-hidden rounded-2xl">
        <Skeleton height={256} />
        <div className="absolute bottom-5 flex w-full items-center justify-center gap-2.5">
          <Skeleton count={3} width={8} height={8} />
        </div>
      </div>
      <p className="pt-2 text-left">
        <Skeleton count={2} />
      </p>
      <h3 className="text-left font-bold">
        <Skeleton width={50} />
      </h3>
    </div>
  );
}
