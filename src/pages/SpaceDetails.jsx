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
    return () => {
      document.removeEventListener('click', hideClickOnOutSide);
      document.removeEventListener('click', hideClickOnOutSide2);
    };
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

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const startTime = new Date(checkInDate);
      const endTime = new Date(checkOutDate);

      const startTimeMs = startTime.getTime();
      const endTimeMs = endTime.getTime();

      const differenceMs = endTimeMs - startTimeMs;
      const differenceDays = differenceMs / (1000 * 60 * 60 * 24);

      setTotalDays(differenceDays + 1);
    }
  }, [checkInDate, checkOutDate]);

  const { auth } = useAuthStore();
  const { user } = auth || {};

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      setOpenCheckInCalender(false);
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart'
    });
  }, []);

  // const getSpaceDetails = async () => {
  //   const { data } = await getSpace(id);
  //   return data;
  // };

  const getSpaceDetails = async () => {
    try {
      const { data } = await getSpace(id);
      return data;
    } catch (error) {
      console.error('Error fetching space details:', error);
      throw error;
    }
  };

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

  // to find why images not loading properly
  useEffect(() => {
    console.log('Space Details:', spaceDetails);
    if (spaceDetails?.gallery) {
      spaceDetails.gallery.forEach((image, index) => {
        console.log(`Image ${index + 1}: ${image.url}`);
      });
    }
  }, [spaceDetails]);

  const { amenities, description, gallery, name, rules } = spaceDetails || {};

  const reserveSpace = () => {
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
      <section className="text-black/70">
        <div className="container">
          <div className="p-5 py-5">
            <Heading>{name}</Heading>
          </div>
          {gallery && (
            <>
              {gallery.length > 1 ? (
                <div className="flex flex-col justify-between gap-5 lg:flex-row">
                  <div
                    className={`w-full ${gallery.length > 1 && 'lg:w-2/3'} relative`}
                  >
                    <img
                      className="h-full w-full rounded-3xl"
                      src={gallery[0]?.url}
                      alt="space"
                      // onError={(e) => {
                      //   e.target.onerror = null;
                      //   e.target.src = '/images/fallback.png';
                      //   console.error(`Image failed to load: ${item?.url}`);
                      // }}
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = '/images/fallback.png';
                        console.error(
                          `Image failed to load: ${gallery[0]?.url}`
                        );
                      }}
                    />
                    <div className="absolute bottom-10 right-7">
                      <Button size="sm">Show All Photos</Button>
                    </div>
                  </div>
                  {gallery.length > 1 && (
                    <div className="flex h-full w-full flex-col gap-4 lg:w-1/3">
                      {gallery.slice(1, 3).map((item, index) => (
                        <img
                          key={index}
                          src={item?.url}
                          className="h-full w-full rounded-3xl"
                          alt="space"
                          // onError={(e) => {
                          //   e.target.onerror = null;
                          //   e.target.src = '/images/fallback.png';
                          //   console.error(`Image failed to load: ${item?.url}`);
                          // }}
                          onError={e => {
                            e.target.onerror = null;
                            e.target.src = '/images/fallback.png';
                            console.error(
                              `Image failed to load: ${gallery[0]?.url}`
                            );
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="max-h-screen w-full overflow-hidden">
                  <img
                    className="max-h-screen min-w-full rounded-3xl"
                    src={gallery[0]?.url}
                    alt="space"
                  />
                </div>
              )}
            </>
          )}
          <div>
            <div className="mt-16 flex flex-col-reverse justify-between gap-16 lg:flex-row">
              <div className="w-full lg:w-2/3">
                <div>
                  <Heading>{name}</Heading>
                  <div className="flex flex-wrap items-center gap-2 border-b border-gray py-7 text-xl font-bold text-primary">
                    <div className="flex items-center gap-2">
                      <img src="/images/icons/star-lg.png" alt="" />
                      <span>4.86</span>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>300 Reviews</span>
                  </div>
                </div>
                <div className="flex flex-col flex-wrap justify-between gap-5 border-b border-gray py-7 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-2 text-2xl font-semibold text-primary">
                    <span>1 Guest </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>1 Table </span>
                  </div>
                  <span className="flex-1 text-primary">
                    Access Hours : 9:00am - 6:00pm
                  </span>
                </div>
                <div className="border-b border-gray py-7">
                  <h4 className="text-2xl leading-10">
                    Coworking Space Amenities
                  </h4>
                  <div className="mt-5 flex flex-wrap items-center gap-6">
                    {amenities?.length > 0 ? (
                      amenities.map((item, index) => {
                        if (item.toLowerCase().includes('wifi')) {
                          return (
                            <div
                              className="flex items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/wifi.png" alt="icon" />
                              <span>High-Speed WiFi</span>
                            </div>
                          );
                        } else if (
                          item.toLowerCase().includes('air-conditioning')
                        ) {
                          return (
                            <div
                              className="flex items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/air.png" alt="icon" />
                              <span>Air Conditioning</span>
                            </div>
                          );
                        } else if (item.toLowerCase().includes('parking')) {
                          return (
                            <div
                              className="flex items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/parking.png" alt="icon" />
                              <span>Parking</span>
                            </div>
                          );
                        } else if (item.toLowerCase().includes('printer')) {
                          return (
                            <div
                              className="flex items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/printer.png" alt="icon" />
                              <span>Printer</span>
                            </div>
                          );
                        } else if (item.toLowerCase().includes('kitchen')) {
                          return (
                            <div
                              className="flex items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/kitchen.png" alt="icon" />
                              <span>Kitchen</span>
                            </div>
                          );
                        } else if (item.toLowerCase().includes('tv')) {
                          return (
                            <div
                              className="flex items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/tv.png" alt="icon" />
                              <span>TV</span>
                            </div>
                          );
                        } else {
                          return (
                            <span key={index}>No Space Amenities Found!</span>
                          );
                        }
                      })
                    ) : (
                      <span>No Space Amenities Found!</span>
                    )}
                  </div>
                </div>
                <div className="border-b border-gray py-7">
                  <h4 className="text-2xl leading-10">Space Rules</h4>
                  <div className="mt-5 flex flex-wrap items-center gap-6">
                    {rules?.length > 0 ? (
                      rules.map((rule, index) => {
                        if (rule.toLowerCase().includes('no-smoking')) {
                          return (
                            <div
                              className="flex items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/smoke.png" alt="icon" />
                              <span>No Smoking</span>
                            </div>
                          );
                        } else if (rule.toLowerCase().includes('no-pets')) {
                          return (
                            <div
                              className="flex flex-wrap items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/pets.png" alt="icon" />
                              <span>No Pets Allowed</span>
                            </div>
                          );
                        } else if (
                          rule.toLowerCase().includes('workspace-clean')
                        ) {
                          return (
                            <div
                              className="flex items-center gap-3"
                              key={index}
                            >
                              <img src="/images/icons/clean.png" alt="icon" />
                              <span>Keep Workspace Clean</span>
                            </div>
                          );
                        } else {
                          return <span key={index}>No Rules Found!</span>;
                        }
                      })
                    ) : (
                      <span>No Rules Found!</span>
                    )}
                  </div>
                </div>
                <div className="py-7">
                  <h4 className="text-2xl leading-10">About the Space</h4>
                  <p className="mt-5 text-lg font-medium">{description}</p>
                </div>
                <div className="border-b border-gray py-7">
                  <Reviews />
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="mb-8 rounded-xl bg-white p-7 shadow-lg">
                  <div className="flex flex-col flex-wrap justify-between gap-5 border-b border-gray pb-7 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-1 text-3xl font-semibold">
                      ${spaceDetails?.pricePerDesk}
                      <span className="text-xl font-medium">/ desk</span>
                    </div>
                    <div className="flex items-center gap-2 text-xl font-medium">
                      <img src="/images/icons/star-lg.png" alt="" />
                      <span>4.86</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>300 Reviews</span>
                    </div>
                  </div>
                  <div className="my-5 space-y-5">
                    <div
                      className="flex cursor-pointer flex-col gap-2"
                      onClick={() =>
                        setOpenCheckInCalender(!openCheckInCalender)
                      }
                    >
                      <span className="text-xl font-medium">Check In</span>
                      <span className="text-lg font-semibold">
                        {checkInDate || 'Select Date'}
                      </span>
                    </div>
                    {openCheckInCalender && (
                      <div ref={reserveCalenderRef}>
                        <ReserveCalender
                          selectDate={checkInDate}
                          setSelectDate={setCheckInDate}
                          checkOutDate={checkOutDate}
                          setCheckOutDate={setCheckOutDate}
                        />
                      </div>
                    )}
                    <div
                      className="flex cursor-pointer flex-col gap-2"
                      onClick={() => setOpenSelectPeople(!openSelectPeople)}
                    >
                      <span className="text-xl font-medium">People</span>
                      <span className="text-lg font-semibold">
                        {totalPeople || 'Select People'}
                      </span>
                    </div>
                    {openSelectPeople && (
                      <div ref={selectPeopleRef}>
                        <SelectPeople setTotalPeople={setTotalPeople} />
                      </div>
                    )}
                  </div>
                  <Button size="lg" className="w-full" onClick={reserveSpace}>
                    Reserve
                  </Button>
                  {reserverSpaceErrors && (
                    <div className="mt-5 text-red-500">
                      {Object.values(reserverSpaceErrors).map((error, idx) => (
                        <div key={idx}>{error}</div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="rounded-xl bg-white p-7 shadow-lg">
                  <div className="flex items-center justify-between border-b border-gray pb-5">
                    <h5 className="text-2xl font-medium">Price Details</h5>
                    <Button size="sm">View Full Details</Button>
                  </div>
                  <div className="my-5 space-y-5">
                    <div className="flex justify-between text-lg font-medium">
                      <span>
                        ${spaceDetails?.pricePerDesk} x {totalDays} Days
                      </span>
                      <span>
                        ${(spaceDetails?.pricePerDesk * totalDays).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                      <span>Cleaning Fee</span>
                      <span>$50</span>
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                      <span>Service Fee</span>
                      <span>$30</span>
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                      <span>Total (USD)</span>
                      <span>
                        $
                        {(
                          spaceDetails?.pricePerDesk * totalDays +
                          50 +
                          30
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SpaceDetails;
