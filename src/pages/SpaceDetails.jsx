import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useAuthStore } from '../../store';
import Footer from '../components/shared/Footer';
import Heading from '../components/shared/Heading';
import ReserveCalender from '../components/space-details/ReserveCalender';
import Reviews from '../components/space-details/reviews';
import SelectPeople from '../components/space-details/SelectPeople';
import Button from '../components/ui/Button';
import Loading from '../components/ui/Loading';
import { getSpace } from '../http/api';

const SpaceDetails = () => {
  const [spaceDetails, setSpaceDetails] = useState({});
  const [openCheckInCalender, setOpenCheckInCalender] = useState(false);
  const [totalPeople, setTotalPeople] = useState(0);
  const [openSelectPeople, setOpenSelectPeople] = useState(false);
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [totalDays, setTotalDays] = useState(0);
  const router = useNavigate();
  const { id } = useParams();
  const [reserverSpaceErrors, setReserverSpaceErrors] = useState({});

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

  // calculate total days
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const startTime = new Date('2024-03-20T18:00:00.000Z');
      const endTime = new Date('2024-03-28T18:00:00.000Z');

      // Convert both dates to milliseconds
      const startTimeMs = startTime.getTime();
      const endTimeMs = endTime.getTime();

      // Calculate the difference in milliseconds
      const differenceMs = endTimeMs - startTimeMs;

      // Convert the difference to days
      const differenceDays = differenceMs / (1000 * 60 * 60 * 24);

      setTotalDays(differenceDays + 1);
    }
  }, [checkInDate, checkOutDate]);

  // get user data
  const { auth } = useAuthStore();
  const { user } = auth || {};

  // when check in date and check out date is set callender modal is closed
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      setOpenCheckInCalender(false);
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    scroll.scrollToTop({
      duration: 500, // specify the duration of the scroll animation
      smooth: 'easeInOutQuart' // specify the easing function
    });
  }, []);

  // get space details function
  const getSpaceDetails = async () => {
    const { data } = await getSpace(id);

    return data;
  };

  // create server request
  const { mutate, isPending } = useMutation({
    mutationKey: ['space-details'],
    mutationFn: getSpaceDetails,
    onSuccess: async data => {
      setSpaceDetails(data?.data?.space);
    },
    onError: async () => {
      toast.error('Something went wrong, please try again.');
      router('/');
    }
  });

  useEffect(() => {
    if (id) {
      mutate();
    }
  }, [id, mutate]);

  const {
    // address,
    // addressHint,
    amenities,
    // city,
    description,
    gallery,
    // maximumNumberOfNomads,
    name,
    // numberOfDesks,
    // postalCode,
    // pricePerDesk,
    rules
    // state,
    // timings,
  } = spaceDetails || {};

  // reserve space
  const reserveSpace = () => {
    // check validation
    const validationErrors = {};

    if (!checkInDate) {
      validationErrors.checkInDate = 'Please Select Check In Date!';
    }

    if (!checkOutDate) {
      validationErrors.checkOutDate = 'Please Select Check Out Date!';
    }

    if (!totalPeople) {
      validationErrors.totalPeople = 'Please Select People!';
    }

    if (Object.keys(validationErrors).length > 0) {
      return setReserverSpaceErrors(validationErrors);
    }

    const reserveSpaceDetails = {
      id,
      name,
      thumbnail: gallery[0].url,
      pricePerDesk: spaceDetails?.pricePerDesk,
      rating: 4.86,
      totalReviews: 300,
      startDate: checkInDate,
      endDate: checkOutDate,
      people: totalPeople,
      totalPrice: Number(totalDays) * Number(spaceDetails?.pricePerDesk)
    };

    localStorage.setItem('reserveSpace', JSON.stringify(reserveSpaceDetails));

    if (!user) {
      router('/sign-in?redirect=reserve-space');

      toast.success('Please login for confirm reserve space.');
    } else {
      router('/reserve-space');
    }
  };
  return isPending ? (
    <Loading />
  ) : (
    <main>
      {/* details */}
      <section className="text-black/70 mb-32">
        <div className="container">
          {/* space images */}
          {gallery?.length > 0 && (
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div
                className={`w-full ${
                  gallery?.length > 1 && 'lg:w-[65%]'
                } relative`}
              >
                <img
                  className="w-full h-full rounded-3xl"
                  src={gallery[0]?.url}
                  alt="space"
                />

                <div className="absolute bottom-10 right-7">
                  <Button size="sm">Show All Photos</Button>
                </div>
              </div>
              {gallery?.length > 1 && (
                <div className="w-full lg:w-[35%] flex flex-col gap-4 h-full">
                  {gallery?.slice(1, 3)?.map(item => (
                    <img
                      key={item?.url}
                      src={item?.url}
                      className="w-full h-full rounded-3xl"
                      alt="space"
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* space details */}
          <div>
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-16 mt-[60px]">
              {/* space content */}
              <div className="w-full lg:w-[65%]">
                <div>
                  <Heading>{name}</Heading>

                  <div className="flex items-center flex-wrap gap-2 text-xl text-primary font-bold py-7 border-b border-gray">
                    <div className="flex items-center gap-2">
                      <img src="/images/icons/star-lg.png" alt="" />
                      <span>4.86</span>
                    </div>
                    <div className="w-[5px] h-[5px] rounded-full bg-primary" />
                    <span>300 Reviews</span>
                  </div>
                </div>

                <div className="flex sm:items-center justify-between gap-5 flex-wrap py-7 flex-col sm:flex-row border-b border-gray">
                  <div className="flex items-center gap-2 text-[25px] text-primary font-semibold flex-1">
                    <span>1 Guest </span>
                    <div className="w-[5px] h-[5px] rounded-full bg-primary" />
                    <span>1 Table </span>
                  </div>
                  <span className="flex-1 text-primary">
                    Access Hours : 9:00am - 6:00pm
                  </span>
                </div>

                <div className="py-7 border-b border-gray">
                  <h4 className="text-2xl leading-[47px]">
                    Coworking Space Amenities
                  </h4>
                  <div className="mt-5 flex flex-wrap items-center gap-6">
                    {amenities?.map(item => {
                      return item?.toLowerCase()?.includes('wifi') ? (
                        <div className="flex items-center gap-3">
                          <img src="/images/icons/wifi.png" alt="icon" />
                          <span>High-Speed WiFi</span>
                        </div>
                      ) : item?.toLowerCase()?.includes('air-conditioning') ? (
                        <div className="flex items-center gap-3">
                          <img src="/images/icons/air.png" alt="icon" />
                          <span>Air Conditioning</span>
                        </div>
                      ) : item?.toLowerCase()?.includes('parking') ? (
                        <div className="flex items-center gap-3">
                          <img src="/images/icons/parking.png" alt="icon" />
                          <span>Parking</span>
                        </div>
                      ) : item?.toLowerCase()?.includes('printer') ? (
                        <div className="flex items-center gap-3">
                          <img src="/images/icons/printer.png" alt="icon" />
                          <span>Printer</span>
                        </div>
                      ) : item?.toLowerCase()?.includes('kitchen') ? (
                        <div className="flex items-center gap-3">
                          <img src="/images/icons/kitchen.png" alt="icon" />
                          <span>Kitchen</span>
                        </div>
                      ) : item?.toLowerCase()?.includes('tv') ? (
                        <div className="flex items-center gap-3">
                          <img src="/images/icons/tv.png" alt="icon" />
                          <span>TV</span>
                        </div>
                      ) : (
                        <span>No Space Amenities Found!</span>
                      );
                    })}
                  </div>
                </div>

                <div className="py-7">
                  <h4 className="text-2xl leading-[47px]">Workspace Rules</h4>
                  <div className="mt-5 flex flex-wrap items-center gap-6">
                    {rules?.map(rule => {
                      return rule?.toLowerCase()?.includes('no-smoking') ? (
                        <div className="flex items-center gap-3">
                          <img src="/images/icons/smoke.png" alt="icon" />
                          <span>No Smoking</span>
                        </div>
                      ) : rule?.toLowerCase()?.includes('no-pets') ? (
                        <div className="flex flex-wrap items-center gap-3">
                          <img src="/images/icons/pets.png" alt="icon" />
                          <span>No Pets Allowed</span>
                        </div>
                      ) : rule?.toLowerCase()?.includes('workspace-clean') ? (
                        <div className="flex items-center gap-3">
                          <img src="/images/icons/clean.png" alt="icon" />
                          <span>Keep Workspace Clean</span>
                        </div>
                      ) : (
                        <span>No Rules Found!</span>
                      );
                    })}

                    {/* <div className="flex items-center gap-3">
                      <img src="/images/icons/boundaries.png" alt="icon" />
                      <span>Respect Boundaries</span>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* space reverse section */}
              <div className="w-full sm:w-full lg:w-[35%] h-fit border border-gray rounded-2xl shadow py-4 px-6">
                <div className="border-b border-gray pb-4">
                  <h3 className="text-[25px] leading-[50px]">
                    Coworking Space
                  </h3>
                  <span className="text-[15px]">
                    Access to shared workspace
                  </span>
                </div>

                <div className="py-4 border-b border-gray text-primary text-lg flex items-center gap-2 justify-between flex-wrap relative">
                  <span
                    className="cursor-pointer"
                    onClick={() => setOpenSelectPeople(!openSelectPeople)}
                    ref={selectPeopleRef}
                  >
                    {totalPeople ? totalPeople + ' People' : 'Select People'} -{' '}
                    {spaceDetails?.numberOfDesks} People
                  </span>
                  <span>
                    <span className="font-bold">
                      ${spaceDetails?.pricePerDesk}
                    </span>{' '}
                    / person / day
                  </span>

                  <SelectPeople
                    openSelectPeople={openSelectPeople}
                    setOpenSelectPeople={setOpenSelectPeople}
                    setTotalPeople={setTotalPeople}
                  />
                </div>

                {reserverSpaceErrors?.totalPeople && (
                  <div className="mt-4 text-red-600">
                    <p>{reserverSpaceErrors?.totalPeople}</p>
                  </div>
                )}

                <div className="py-4 border-b border-gray text-primary text-lg flex items-center gap-2 justify-between flex-wrap relative">
                  <span>Check In</span>
                  <div
                    className="flex items-center gap-3"
                    onClick={() => setOpenCheckInCalender(!openCheckInCalender)}
                    ref={reserveCalenderRef}
                  >
                    <div className="flex items-center gap-3 cursor-pointer">
                      {checkInDate ? (
                        <span className="underline">
                          {new Date(checkInDate)?.getDate()}/
                          {new Date(checkInDate)?.getMonth() + 1}/
                          {new Date(checkInDate)?.getFullYear()}
                        </span>
                      ) : (
                        <span>Select Date</span>
                      )}
                    </div>{' '}
                    /
                    <div className="flex items-center gap-3 cursor-pointer">
                      {checkOutDate ? (
                        <span className="underline">
                          {new Date(checkOutDate)?.getDate()}/
                          {new Date(checkOutDate)?.getMonth() + 1}/
                          {new Date(checkOutDate)?.getFullYear()}
                        </span>
                      ) : (
                        <span>Select Date</span>
                      )}
                      <div>
                        <img src="/images/icons/calendar.png" alt="icon" />
                      </div>
                    </div>
                  </div>
                  <ReserveCalender
                    setOpen={setOpenCheckInCalender}
                    open={openCheckInCalender}
                    checkInDate={checkInDate}
                    setCheckInDate={setCheckInDate}
                    checkOutDate={checkOutDate}
                    setCheckOutDate={setCheckOutDate}
                  />
                </div>

                <div className="mt-4 text-red-600">
                  {reserverSpaceErrors?.checkInDate && (
                    <p>{reserverSpaceErrors?.checkInDate}</p>
                  )}
                  {reserverSpaceErrors?.checkOutDate && (
                    <p>{reserverSpaceErrors?.checkOutDate}</p>
                  )}
                </div>

                <div className="my-8">
                  <Button onClick={reserveSpace} className="w-full">
                    Reserve Space
                  </Button>
                </div>

                {totalDays !== 0 && totalPeople !== 0 && (
                  <div className="text-primary text-lg flex items-center gap-2 justify-between flex-wrap mb-3">
                    <span>
                      ${spaceDetails?.pricePerDesk} x {totalDays} days
                    </span>
                    <span>
                      <span className="font-bold">
                        {Number(totalDays) * Number(spaceDetails?.pricePerDesk)}
                        $
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="py-7 border-y border-gray">
              <h4 className="text-xl leading-[47px]">About Place</h4>
              <p className="text-lg leading-[37px] text-black/70">
                {description?.length > 404
                  ? description?.substr(0, 404)
                  : description}
              </p>
              {description?.length > 404 && (
                <button className="text-lg font-bold leading-[47px] text-primary cursor-pointer underline">
                  Show more
                </button>
              )}
            </div>

            {/* reviews */}
            <Reviews />

            <div className="py-7">
              <h4 className="text-lg leading-[47px] mb-6">Map</h4>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14771.99037376455!2d91.82208290000001!3d22.2401701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1707335722787!5m2!1sbn!2sbd"
                // width="600"
                // height="720"
                style={{ border: 0, width: '100%', height: '720px' }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* <ReserveCalender /> */}

      <Footer />
    </main>
  );
};

export default SpaceDetails;
