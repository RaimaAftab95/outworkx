import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/shared/Heading';
import Loading from '../components/ui/Loading';
import { bookingList } from '../http/api';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  // get booking list function
  const getBookingList = async () => {
    const { data } = await bookingList({
      pageNumber: 1,
      pageSize: 10
    });

    return data;
  };

  // create server request
  const { mutate, isPending } = useMutation({
    mutationKey: ['booking-list'],
    mutationFn: getBookingList,
    onSuccess: async data => {
      setBookings(data?.data?.bookings);
    },
    onError: async error => {
      console.log('error', error);
    }
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  return isPending ? (
    <Loading />
  ) : (
    <main className="py-10 text-primary/70">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-7">
            <Link href="/spaces/single-space">
              <img src="/images/icons/right-arrow-lg.png" alt="icon" />
            </Link>
            <Heading>Booking history</Heading>
          </div>

          <div className="flex flex-wrap items-center gap-10">
            <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-primary px-5 sm:w-72">
              <input
                type="date"
                className="w-full text-xl leading-10 outline-none"
                placeholder="Choose"
              />
            </div>
            <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-primary px-5 sm:w-72">
              <input
                type="text"
                className="w-full text-xl leading-10 outline-none"
                placeholder="Search"
              />
              <img src="/images/icons/search-dark.png" alt="icon" />
            </div>
          </div>
        </div>

        {bookings?.length > 0 && (
          <div className="mt-10 overflow-x-auto pb-5 text-primary/70">
            <table className="min-w-[1050px] lg:w-full">
              <thead className="!rounded-[15px] bg-[#F2F2F2]">
                <th className="py-8 pl-[30px] text-left font-bold leading-[36px] text-primary">
                  Space
                </th>
                <th className="py-8 text-left font-bold leading-[36px] text-primary">
                  Location
                </th>
                <th className="py-8 text-left font-bold leading-[36px] text-primary">
                  Access Hours
                </th>
                <th className="py-8 text-left font-bold leading-[36px] text-primary">
                  Reservation Date
                </th>
                <th className="py-8 text-left font-bold leading-[36px] text-primary">
                  No of People
                </th>
                <th className="py-8 text-left font-bold leading-[36px] text-primary">
                  Price
                </th>
                <th className="py-8 text-left font-bold leading-[36px] text-primary">
                  Table
                </th>
                <th className="py-8 pr-5 text-left font-bold leading-[36px] text-primary">
                  Guests
                </th>
              </thead>
              <tbody>
                {bookings?.map(booking => {
                  const checkIn = new Date(booking?.startDate);

                  return (
                    <tr key={booking?.id}>
                      <td className="flex items-center gap-[30px] pt-[30px]">
                        <img
                          className="h-[72px] w-[72px] rounded-[20px]"
                          src="/images/spaces/1.jpg"
                          alt="space"
                        />
                        <p>
                          Coworking Space: Corporate Suites Rockefeller Center
                          in New York City
                        </p>
                      </td>
                      <td className="pt-[30px]">234 Hickle Heights</td>
                      <td className="pt-[30px]">09:00 AM- 06:00 PM</td>
                      <td className="pt-[30px]">
                        {checkIn.getFullYear() +
                          '-' +
                          checkIn.getDay() +
                          '-' +
                          checkIn.getMonth() +
                          1}
                      </td>
                      <td className="pt-[30px]">{booking?.numberOfDesks}</td>
                      <td className="pt-[30px]">${booking?.price}</td>
                      <td className="pt-[30px] text-center">
                        {booking?.numberOfDesks}
                      </td>
                      <td className="pt-[30px]">01</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {bookings?.length === 0 && (
          <span className="mt-10 block text-center text-xl font-semibold">
            No Bookings Found!
          </span>
        )}
      </div>
    </main>
  );
};

export default BookingHistory;
