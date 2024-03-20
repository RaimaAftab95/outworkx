import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parse,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../ui/Button";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ReserveCalender = ({
  open,
  setOpen,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}) => {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const [currentNextMonth, setCurrentNextMonth] = useState(
    format(add(currentMonth, { months: 1 }), "MMM-yyyy")
  );

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const currentNextMonthDays = eachDayOfInterval({
    start: currentNextMonth,
    end: endOfMonth(currentNextMonth),
  });

  function previousMonth() {
    setCurrentMonth(
      format(add(firstDayCurrentMonth, { months: -2 }), "MMM-yyyy")
    );

    setCurrentNextMonth(
      format(add(firstDayCurrentMonth, { months: -1 }), "MMM-yyyy")
    );
  }

  function nextMonth() {
    setCurrentMonth(
      format(add(firstDayCurrentMonth, { months: 2 }), "MMM-yyyy")
    );
    setCurrentNextMonth(
      format(add(firstDayCurrentMonth, { months: 3 }), "MMM-yyyy")
    );
  }

  return (
    <div
      className={`transition-all duration-200 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      } w-full sm:min-w-[660px] absolute top-[100%] right-0 bg-white shadow-xl border border-gray rounded-2xl`}
    >
      <div className="p-5">
        <div className="flex items-center flex-wrap justify-between gap-5">
          <h2>Select Dates</h2>
          <div className="text-[#222] text-sm flex items-center border rounded-xl border-black/20 p-2 px-3 gap-4">
            <div className="flex justify-between gap-6 items-center">
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
                onClick={() => setCheckInDate("")}
              >
                {checkInDate && <IoClose />}
              </button>
            </div>
            <div className="flex justify-between gap-6 items-center">
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
                onClick={() => setCheckOutDate("")}
              >
                {checkOutDate && <IoClose />}
              </button>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mt-10">
          <div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <h2 className="flex-auto text-center font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
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
                    className={`w-10 h-10 rounded-full transition-all ${
                      checkInDate === day.toISOString() ||
                      checkOutDate === day.toISOString()
                        ? "border border-primary bg-primary text-white"
                        : "hover:border border-gray"
                    } ${
                      day?.toISOString() > checkInDate &&
                      day?.toISOString() < checkOutDate &&
                      "bg-gray/50"
                    } ${
                      day?.toISOString() < today?.toISOString() &&
                      "text-gray hover:border-transparent cursor-not-allowed"
                    }`}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="flex-auto text-center font-semibold text-gray-900">
                {format(currentNextMonth, "MMMM yyyy")}
              </h2>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {currentNextMonthDays.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
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
                    className={`w-10 h-10 rounded-full transition-all ${
                      checkInDate === day.toISOString() ||
                      checkOutDate === day.toISOString()
                        ? "border border-primary bg-primary text-white"
                        : "hover:border border-gray"
                    }  ${
                      day?.toISOString() > checkInDate &&
                      day?.toISOString() < checkOutDate &&
                      "bg-gray/50"
                    } ${
                      day?.toISOString() < today?.toISOString() &&
                      "text-gray hover:border-transparent cursor-not-allowed"
                    }`}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
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
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default ReserveCalender;
