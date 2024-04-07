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
          openSelectPeople ? 'opacity-100 visible' : 'opacity-0 invisible'
        } w-full absolute top-[110%] left-0 right-0  z-40 bg-white rounded-md border shadow-md py-6 px-4 border-gray flex flex-col gap-5`,
        className
      )}
      onClick={e => e.stopPropagation()}
    >
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-base font-semibold">Adult</h3>
          <span className="text-sm">Age 13+</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div
            className={`w-8 h-8 rounded-full border flex items-center justify-center text-base font-semibold ${
              peopleCategory?.adult === 0
                ? 'text-gray cursor-not-allowed border-gray'
                : 'text-black/55 cursor-pointer border-black/55'
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
            className="w-8 h-8 rounded-full border border-black/55 flex items-center justify-center text-base font-semibold text-black/55 cursor-pointer"
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
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-base font-semibold">Children</h3>
          <span className="text-sm">Ages 2-12</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div
            className={`w-8 h-8 rounded-full border flex items-center justify-center text-base font-semibold ${
              peopleCategory?.children === 0
                ? 'text-gray cursor-not-allowed border-gray'
                : 'text-black/55 cursor-pointer border-black/55'
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
            className="w-8 h-8 rounded-full border border-black/55 flex items-center justify-center text-base font-semibold text-black/55 cursor-pointer"
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
          className="px-4 py-1 rounded-lg"
          onClick={() => setOpenSelectPeople(false)}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default SelectPeople;
