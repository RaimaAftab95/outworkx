import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../components/shared/Heading';
import ReserveCalender from '../components/space-details/ReserveCalender';
import SelectPeople from '../components/space-details/SelectPeople';
import Button from '../components/ui/Button';
import { bookingSpace } from '../http/api';

const ReserveSpace = () => {
  const [spaceDetails, setSpaceDetails] = useState({});
  const [openCheckInCalender, setOpenCheckInCalender] = useState(false);
  const [totalPeople, setTotalPeople] = useState(0);
  const [openSelectPeople, setOpenSelectPeople] = useState(false);
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const reserveCalenderRef = useRef(null);
  const selectPeopleRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', hideClickOnOutSide);
    document.addEventListener('click', hideClickOnOutSide2);
  }, []);

  const hideClickOnOutSide = e => {
    if (
      reserveCalenderRef.current &&
      !reserveCalenderRef.current.contains(e.target)
    ) {
      setOpenCheckInCalender(false);
    }
  };

  const hideClickOnOutSide2 = e => {
    if (
      selectPeopleRef.current &&
      !selectPeopleRef.current.contains(e.target)
    ) {
      setOpenSelectPeople(false);
    }
  };

  const router = useNavigate();

  useEffect(() => {
    let reserveSpace = localStorage.getItem('reserveSpace');
    reserveSpace = JSON.parse(reserveSpace);

    if (!reserveSpace) {
      toast.error('Please select space!');
      router(`/`);
    } else {
      setSpaceDetails(reserveSpace);
      setCheckInDate(reserveSpace?.startDate);
      setCheckOutDate(reserveSpace?.endDate);
      setTotalPeople(reserveSpace?.people);
    }
  }, [router]);

  const { id, people, name, thumbnail, rating, totalReviews, pricePerDesk } =
    spaceDetails || {};

  // confirm reserve function
  const confirmReserveHandler = async () => {
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    const { data } = await bookingSpace({
      spaceId: id,
      startDate: `${startDate.getFullYear()}-${
        String(startDate.getUTCMonth() + 1).length === 1
          ? '0' + (startDate.getUTCMonth() + 1)
          : startDate.getUTCMonth() + 1
      }-${
        String(endDate.getDay()).length === 1
          ? '0' + endDate.getDay()
          : endDate.getDay()
      }`,
      endDate: `${endDate.getFullYear()}-${
        String(endDate.getUTCMonth() + 1).length === 1
          ? '0' + (endDate.getUTCMonth() + 1)
          : endDate.getUTCMonth() + 1
      }-${
        String(endDate.getDay()).length === 1
          ? '0' + endDate.getDay()
          : endDate.getDay()
      }`,
      price: pricePerDesk * Number(totalPeople) + 10,
      numberOfDesks: people,
      status: 'pending'
    });
    return data;
  };

  // create server request
  const { mutate, isPending } = useMutation({
    mutationKey: ['confirm-reserve'],
    mutationFn: confirmReserveHandler,
    onSuccess: async () => {
      router('/booking-history');
      toast.success('Space Booking Successfully.');
      localStorage.removeItem('reseverSpace');
    },
    onError: async error => {
      console.log('error', error);
    }
  });
  return (
    <main className="py-10 text-primary/70">
      <div className="container">
        <div className="flex items-center gap-7">
          <Link href="/spaces/single-space">
            <img src="/images/icons/right-arrow-lg.png" alt="icon" />
          </Link>
          <Heading>Reserve space</Heading>
        </div>

        <div className="mt-20 grid gap-20 sm:gap-28 lg:grid-cols-2">
          <div>
            <h3 className="text-4xl leading-10">Your trip</h3>

            <div className="mt-14 flex flex-col gap-12 text-2xl leading-8">
              <div
                className="flex flex-wrap items-center 
              justify-between gap-5"
              >
                <div className="flex flex-col gap-1">
                  <span className="cursor-pointer font-bold">People</span>
                  <span>{totalPeople}</span>
                </div>
                <button
                  className="font-bold underline"
                  onClick={() => setOpenSelectPeople(true)}
                >
                  Edit
                </button>
              </div>
              <div
                className="flex flex-wrap items-center 
              justify-between gap-5"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Date</span>
                  <div className="flex items-center gap-5">
                    <span>
                      {new Date(checkInDate).getDate()} /{' '}
                      {new Date(checkInDate).getUTCMonth() + 1} /
                      {new Date(checkInDate).getFullYear()}
                    </span>
                    <span>-</span>
                    <span>
                      {new Date(checkOutDate).getDate()} /{' '}
                      {new Date(checkOutDate).getUTCMonth() + 1} /
                      {new Date(checkOutDate).getFullYear()}
                    </span>
                  </div>
                </div>
                <button
                  className="font-bold underline"
                  onClick={() => setOpenCheckInCalender(true)}
                  ref={reserveCalenderRef}
                >
                  Edit
                </button>
              </div>
            </div>

            <div className="mt-14">
              <Button onClick={mutate} loading={isPending} className="w-full">
                Confirm reservation
              </Button>
            </div>
          </div>

          <div className="h-fit rounded-3xl border border-gray bg-white px-10 py-12">
            <div className="flex flex-col justify-between gap-6 border-b border-gray pb-4 sm:flex-row">
              <div className="w-full sm:w-2/5">
                <img
                  className="w-full rounded-3xl"
                  src={thumbnail}
                  alt="space"
                />
              </div>
              <div className="flex w-full flex-col gap-2 sm:w-1/2">
                <h3 className="text-xl font-bold leading-8">Reservation</h3>
                <p className="text-lg leading-8">{name}</p>
                <div className="flex flex-wrap items-center gap-2 text-xl font-bold text-primary">
                  <div className="flex items-center gap-2">
                    <img src="/images/icons/star-lg.png" alt="" />
                    <span>{rating}</span>
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{totalReviews} Reviews</span>
                </div>
              </div>
            </div>

            <div className="border-b border-gray py-8">
              <h3 className="text-2xl font-normal leading-7">Price details</h3>
              <div className="mt-6 flex flex-col gap-4 text-xl font-medium leading-8">
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <span className="underline">
                    ${pricePerDesk} X {totalPeople} People
                  </span>
                  <span>${pricePerDesk * Number(totalPeople)}.00</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <span className="underline">Our fee</span>
                  <span>$10.00</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-5">
              <h3 className="mt-6 text-2xl font-normal leading-7">
                Total (USD)
              </h3>
              <h3 className="mt-6 text-xl font-bold leading-7">
                ${pricePerDesk * Number(totalPeople) + 10}.00
              </h3>
            </div>
          </div>
        </div>
      </div>

      {openCheckInCalender && (
        <div
          className="fixed inset-0 z-50 h-full w-full bg-black/40"
          onClick={() => setOpenCheckInCalender(false)}
        >
          <ReserveCalender
            setOpen={setOpenCheckInCalender}
            className="fixed left-1/2 top-1/2 z-50 h-fit w-custom -translate-x-1/2 -translate-y-1/2"
            open={openCheckInCalender}
            // open={true}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
          />
        </div>
      )}

      {openSelectPeople && (
        <div
          className="fixed inset-0 z-50 h-full w-full bg-black/40"
          onClick={() => setOpenSelectPeople(false)}
        >
          <SelectPeople
            openSelectPeople={openSelectPeople}
            className="fixed left-1/2 top-1/2 z-50 h-fit w-custom -translate-x-1/2 -translate-y-1/2"
            setOpenSelectPeople={setOpenSelectPeople}
            setTotalPeople={setTotalPeople}
          />
        </div>
      )}
    </main>
  );
};

export default ReserveSpace;
