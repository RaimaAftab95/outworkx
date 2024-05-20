import { useEffect, useState } from 'react';
import { cn } from '../../lib/utills';
import Button from '../ui/Button';

const SelectPeople = ({
  setTotalPeople,
  openSelectPeople,
  setOpenSelectPeople,
  className
}) => {
  const [peopleCategory, setPeopleCategory] = useState({
    adult: 0,
    children: 0
  });

  // calculate total people
  useEffect(() => {
    let totalCount = 0;

    if (Object.keys(peopleCategory).length > 0) {
      Object.keys(peopleCategory).forEach(key => {
        totalCount += peopleCategory[key];
      });
    }

    setTotalPeople(totalCount);
  }, [peopleCategory, setTotalPeople]);
  return (
    <div
      className={cn(
        `transition-opacity duration-300 ${
          openSelectPeople ? 'visible opacity-100' : 'invisible opacity-0'
        } absolute left-0 right-0 top-full z-40  flex w-full flex-col gap-5 rounded-md border border-gray bg-white px-4 py-6 shadow-md`,
        className
      )}
      onClick={e => e.stopPropagation()}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">Adult</h3>
          <span className="text-sm">Age 13+</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-base font-semibold ${
              peopleCategory?.adult === 0
                ? 'cursor-not-allowed border-gray text-gray'
                : 'cursor-pointer border-black/55 text-black/55'
            }`}
            onClick={() => {
              peopleCategory?.adult !== 0 &&
                setPeopleCategory({
                  ...peopleCategory,
                  adult: peopleCategory?.adult - 1
                });
            }}
          >
            -
          </div>
          <span>{peopleCategory?.adult}</span>
          <div
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-black/55 text-base font-semibold text-black/55"
            onClick={() =>
              setPeopleCategory({
                ...peopleCategory,
                adult: peopleCategory?.adult + 1
              })
            }
          >
            +
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">Children</h3>
          <span className="text-sm">Ages 2-12</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-base font-semibold ${
              peopleCategory?.children === 0
                ? 'cursor-not-allowed border-gray text-gray'
                : 'cursor-pointer border-black/55 text-black/55'
            }`}
            onClick={() => {
              peopleCategory?.children !== 0 &&
                setPeopleCategory({
                  ...peopleCategory,
                  children: peopleCategory?.children - 1
                });
            }}
          >
            -
          </div>
          <span>{peopleCategory?.children}</span>
          <div
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-black/55 text-base font-semibold text-black/55"
            onClick={() =>
              setPeopleCategory({
                ...peopleCategory,
                children: peopleCategory?.children + 1
              })
            }
          >
            +
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="sm"
          className="rounded-lg px-4 py-1"
          onClick={() => setOpenSelectPeople(false)}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default SelectPeople;
