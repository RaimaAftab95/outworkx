import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parse,
  startOfToday
} from 'date-fns';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { cn } from '../../lib/utills';
import Button from '../ui/Button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ReserveCalender = ({
  open,
  setOpen,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  className = ''
}) => {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const [currentNextMonth, setCurrentNextMonth] = useState(
    format(add(currentMonth, { months: 1 }), 'MMM-yyyy')
  );

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth)
  });

  const currentNextMonthDays = eachDayOfInterval({
    start: currentNextMonth,
    end: endOfMonth(currentNextMonth)
  });

  function previousMonth() {
    setCurrentMonth(
      format(add(firstDayCurrentMonth, { months: -2 }), 'MMM-yyyy')
    );

    setCurrentNextMonth(
      format(add(firstDayCurrentMonth, { months: -1 }), 'MMM-yyyy')
    );
  }

  function nextMonth() {
    setCurrentMonth(
      format(add(firstDayCurrentMonth, { months: 2 }), 'MMM-yyyy')
    );
    setCurrentNextMonth(
      format(add(firstDayCurrentMonth, { months: 3 }), 'MMM-yyyy')
    );
  }

  return (
    <div
      className={cn(
        `transition-all duration-200 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        } absolute right-0 top-full w-full rounded-2xl border border-gray bg-white shadow-xl sm:min-w-custom`,
        className
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2>Select Dates</h2>
          <div className="flex items-center gap-4 rounded-xl border border-black/20 p-2 px-3 text-sm text-[#222]">
            <div className="flex items-center justify-between gap-6">
              {/* {const date = new Date(dateString);} */}
              <div className="flex flex-col gap-1">
                <span className="text-xs">CHECK IN</span>
                {checkInDate ? (
                  <span className="text-xs">
                    {new Date(checkInDate)?.getDate()}/
                    {new Date(checkInDate)?.getMonth() + 1}/
                    {new Date(checkInDate)?.getFullYear()}
                  </span>
                ) : (
                  <span className="text-xs">Select Date</span>
                )}
              </div>
              <button
                className="cursor-pointer"
                onClick={() => setCheckInDate('')}
              >
                {checkInDate && <IoClose />}
              </button>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs">CHECK OUT</span>
                {checkOutDate ? (
                  <span className="text-xs">
                    {new Date(checkOutDate)?.getDate()}/
                    {new Date(checkOutDate)?.getMonth() + 1}/
                    {new Date(checkOutDate)?.getFullYear()}
                  </span>
                ) : (
                  <span className="text-xs">Select Date</span>
                )}
              </div>
              <button
                className="cursor-pointer"
                onClick={() => setCheckOutDate('')}
              >
                {checkOutDate && <IoClose />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={previousMonth}
                className="text-gray-400 hover:text-gray-500 -my-1.5 flex flex-none items-center justify-center p-1.5"
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <h2 className="text-gray-900 flex-auto text-center font-semibold">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
            </div>
            <div className="text-gray-500 mt-10 grid grid-cols-7 text-center text-xs leading-6">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() =>
                      day?.toISOString() < today?.toISOString()
                        ? {}
                        : checkInDate && day?.toISOString() > checkInDate
                          ? setCheckOutDate(day?.toISOString())
                          : setCheckInDate(day?.toISOString())
                    }
                    className={`h-10 w-10 rounded-full transition-all ${
                      checkInDate === day.toISOString() ||
                      checkOutDate === day.toISOString()
                        ? 'border border-primary bg-primary text-white'
                        : 'border-gray hover:border'
                    } ${
                      day?.toISOString() > checkInDate &&
                      day?.toISOString() < checkOutDate &&
                      'bg-gray/50'
                    } ${
                      day?.toISOString() < today?.toISOString() &&
                      'cursor-not-allowed text-gray hover:border-transparent'
                    }`}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-gray-900 flex-auto text-center font-semibold">
                {format(currentNextMonth, 'MMMM yyyy')}
              </h2>
              <button
                onClick={nextMonth}
                type="button"
                className="text-gray-400 hover:text-gray-500 -my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5"
              >
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="text-gray-500 mt-10 grid grid-cols-7 text-center text-xs leading-6">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm">
              {currentNextMonthDays.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() =>
                      day?.toISOString() < today?.toISOString()
                        ? {}
                        : checkInDate && day?.toISOString() > checkInDate
                          ? setCheckOutDate(day?.toISOString())
                          : setCheckInDate(day?.toISOString())
                    }
                    className={`h-10 w-10 rounded-full transition-all ${
                      checkInDate === day.toISOString() ||
                      checkOutDate === day.toISOString()
                        ? 'border border-primary bg-primary text-white'
                        : 'border-gray hover:border'
                    }  ${
                      day?.toISOString() > checkInDate &&
                      day?.toISOString() < checkOutDate &&
                      'bg-gray/50'
                    } ${
                      day?.toISOString() < today?.toISOString() &&
                      'cursor-not-allowed text-gray hover:border-transparent'
                    }`}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Button
            size="sm"
            className="rounded-md py-1"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7'
];

export default ReserveCalender;
