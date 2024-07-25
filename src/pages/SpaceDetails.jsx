import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
  XMarkIcon,
  ArrowsPointingOutIcon,
  PhoneIcon,
  GlobeAltIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { H3, Lead, P } from '../components/primitives/typography';

const { VITE_BACKEND_API } = import.meta.env;

// Define amenities with images
const amenitiesData = [
  { name: 'Wifi', image: '../images/wifi.png' },
  { name: 'Coffee', image: '../images/coffee.png' },
  { name: 'Fitness', image: '../images/fitness.png' },
  { name: 'Kitchen', image: '../images/kitchen.png' }
];

const extraAmenitiesData = [
  { name: 'Tea', image: '../images/tea.png' },
  { name: 'AirCondition', image: '../images/aircond.png' },
  { name: 'Pets Allowed', image: '../images/pets-allowed.png' }
];

export default function SpaceDetails() {
  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchSpaceDetails = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_API}/v1/space/get`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ spaceId: id })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSpace(data.data.space);
        console.log('Fetched space details:', data.data.space);
      } catch (error) {
        console.error('Error fetching space details:', error);
      }
    };

    fetchSpaceDetails();
  }, [id]);

  const handleOverlayClick = (event) => {
    event.stopPropagation();
    setSelectedImageIndex(null);
  };

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log('Space amenities:', space?.amenities);
  return (
    <div className="relative">
      {space ? (
        <>
          <section className="container mx-auto p-4">
            {/* Main Swiper displaying 3 images per slide */}
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {space.gallery.map((item, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <div className="flex items-center justify-center">
                    <img
                      className={`h-60 w-full object-cover ${index === 1 ? 'h-60' : 'opacity-75'}`}
                      style={{
                        width: 'calc(100% - 2px)',
                        height: 'calc(100% - 2px)'
                      }}
                      src={item.url}
                      alt={`space-${index}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Second Swiper for single image view per slide */}
            {selectedImageIndex !== null && (
              <div
                className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-70"
                onClick={handleOverlayClick}
              >
                <div className="max-h-3xl relative h-full w-full max-w-4xl">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    initialSlide={selectedImageIndex}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Navigation]}
                    className="h-full w-full"
                  >
                    {space.gallery.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img
                          className="h-full w-full object-cover"
                          src={item.url}
                          alt={`selected-space-${index}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button
                    className="absolute right-4 top-4 z-50 rounded-full bg-gray-800 bg-opacity-75 p-2 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(null);
                    }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  <button
                    className="absolute left-4 top-4 z-50 rounded-full bg-gray-800 bg-opacity-75 p-2 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ArrowsPointingOutIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Space details */}
            <section className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <H3 className="my-4 text-3xl font-bold">{space.name}</H3>
                <div className="mb-4 flex items-center space-x-4">
                  <div className="text-black-500 flex items-center">
                    <span className="ml-1 text-lg">5.0</span>
                    <span className="text-2xl"> &#9733;</span>
                  </div>
                  <span className="text-sm text-gray-500">(1 Review)</span>
                  <span className="relative rounded px-2 py-1 text-sm text-gray-700 before:absolute before:left-[-8px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-gray-400">
                    210$/Month
                  </span>
                  <span className="relative rounded px-2 py-1 text-sm text-gray-700 before:absolute before:left-[-8px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-gray-400">
                    Coworking, Office Space
                  </span>
                </div>

                {/* Amenities Section */}
                <section className="mt-4 w-full">
                  <hr className="my-4" />
                  <div className="flex flex-wrap gap-6">
                    {amenitiesData.map((amenity) => (
                      <div
                        key={amenity.name}
                        className={`flex flex-col items-center ${space.amenities.includes(amenity.name.toLowerCase()) ? 'text-green-600' : 'text-gray-500'}`}
                      >
                        <img
                          className="mb-2 h-12 w-12"
                          src={amenity.image}
                          alt={amenity.name}
                        />
                        <span className="text-lg">{amenity.name}</span>
                      </div>
                    ))}
                    <div
                      className="flex cursor-pointer flex-col items-center text-green-500"
                      onClick={openModal}
                    >
                      <span className="text-lg">(+2)</span>
                    </div>
                  </div>
                  <hr className="my-4" />
                </section>

                <P className="text-lg">
                  {showFullDescription
                    ? space.description
                    : `${space.description.slice(0, 100)}...`}
                </P>
                <button className="mt-2 font-bold" onClick={toggleDescription}>
                  {showFullDescription ? 'Show Less' : 'Show More'}
                </button>

                {/* Contact Section */}
                <section className="mt-4 w-full">
                  <hr className="my-4" />
                  <Lead className="mb-4 text-xl font-semibold">Contact</Lead>
                  <div className="mb-2 flex items-center">
                    <PhoneIcon className="mr-2 h-6 w-6 text-gray-500" />
                    <span className="text-lg text-gray-700">18664580333</span>
                  </div>
                  <div className="flex items-center">
                    <GlobeAltIcon className="mr-2 h-6 w-6 text-gray-500" />
                    <span className="text-lg text-gray-700">
                      vangoghmuseum.nl
                    </span>
                  </div>
                  <hr className="my-4" />
                </section>

                {/* Moreinfo  Section */}
                <section className="mt-4 w-full">
                  <Lead className="mb-4 text-xl font-semibold">
                    More Information
                  </Lead>
                  <P>Coworking desks84 (From $27 per person per day)</P>
                  <P>Private office20 (From $410 per person per month)</P>
                  <P>Meeting rooms4 (From $49 per hour)</P>
                  <P>Virtual Offices6 (From $ 112 per month)</P>
                  <hr className="my-4" />
                </section>

                <section name="map">
                  <Lead>Map</Lead>
                  <div className="py-7">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14771.99037376455!2d91.82208290000001!3d22.2401701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1707335722787!5m2!1sbn!2sbd"
                      className="h-96 w-full max-w-5xl border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <hr className="my-4" />
                </section>
                {/* Agent  Section */}
                <section>
                  <Lead className="mb-5">Agent</Lead>
                  <div className="rounded-lg border border-gray-200 bg-white shadow-lg">
                    <div className="flex flex-col">
                      <div className="mt-2 flex gap-6">
                        <div className="mt-2 flex w-1/4 flex-col items-center">
                          <div className="h-24 w-24 rounded-full bg-gray-400"></div>
                          {/* Small Gray Circle */}
                        </div>

                        <div className="mb-4 mt-2 flex-1">
                          <h2 className="mb-2 text-2xl font-bold">Kelin</h2>
                          <p className="mb-2 text-gray-700">
                            Hello!, My name is Kelvin, also known as @Uxper.I am
                            a Chef, a Traveler, and a Digital Enterpreneure.
                          </p>
                          <div className="mb-4 flex items-center">
                            <PhoneIcon className="mr-2 h-6 w-6 text-gray-500" />
                            <span className="text-lg text-gray-700">
                              (415) 550-81149
                            </span>
                          </div>
                          <div className="flex items-center">
                            <EnvelopeIcon className="mr-2 h-6 w-6 text-gray-500" />
                            <span className="text-lg text-gray-700">
                              hello@uxper.co
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="rounded-lg  bg-white px-4 py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-4">
                            <a
                              href="https://facebook.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="../images/facebook.png"
                                alt="Facebook"
                                className="h-6 w-6"
                              />
                            </a>
                            <a
                              href="https://instagram.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="../images/instagram.png"
                                alt="Instagram"
                                className="h-6 w-6"
                              />
                            </a>
                          </div>
                          <button className="rounded-full bg-black px-4 py-1.5 text-sm text-white transition-all hover:opacity-60">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-10" />
                </section>
                {/* Review  Section */}
                <section>
                  <Lead className="mb-5">
                    Review
                    <span className="text-2xl"> &#9733;</span>
                    <span className="text-sm">5.0 Based on 1 Review</span>
                  </Lead>
                  <div className="rounded-lg border border-gray-200 bg-white shadow-lg">
                    <div className="p-6">
                      <div className="mb-4 flex">
                        <div className="flex w-1/2 items-center pr-2">
                          <div className="flex-1">
                            <h3 className="mb-1 text-lg font-bold">Service</h3>
                            <div className="h-2 w-full rounded-full bg-green-500"></div>
                          </div>
                          <button className="ml-2 mt-5 rounded-3xl bg-gray-200 px-2 py-1 text-gray-800">
                            5.00
                          </button>
                        </div>
                        <div className="flex w-1/2 items-center pl-2">
                          <div className="flex-1">
                            <h3 className="mb-1 text-lg font-bold">
                              Value for Money
                            </h3>
                            <div className="h-2 w-full rounded-full bg-green-500"></div>
                          </div>
                          <button className="ml-2 mt-5 rounded-3xl bg-gray-200 px-2 py-1 text-gray-800">
                            5.00
                          </button>
                        </div>
                      </div>

                      <div className="mb-4 flex">
                        <div className="flex w-1/2 items-center pr-2">
                          <div className="flex-1">
                            <h3 className="mb-1 text-lg font-bold">Location</h3>
                            <div className="h-2 w-full rounded-full bg-green-500"></div>
                          </div>
                          <button className="ml-2 mt-5 rounded-3xl bg-gray-200 px-2 py-1 text-gray-800">
                            5.00
                          </button>
                        </div>
                        <div className="flex w-1/2 items-center pl-2">
                          <div className="flex-1">
                            <h3 className="mb-1 text-lg font-bold">
                              Cleanliness
                            </h3>
                            <div className="h-2 w-full rounded-full bg-green-500"></div>
                          </div>
                          <button className="ml-2 mt-5 rounded-3xl bg-gray-200 px-2 py-1 text-gray-800">
                            5.00
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-10" />
                </section>
              </div>

              {/* Booking Form */}
              <section>
                <BookingForm spaceId={id} />
              </section>
            </section>
          </section>
          <section name="modal">
            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-75">
                <div className="relative rounded-lg bg-white p-6 shadow-lg">
                  <button
                    onClick={closeModal}
                    className="absolute right-5 top-4 text-gray-700"
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-700" />
                  </button>
                  <Lead className="mb-4 text-xl font-semibold">Highlight</Lead>
                  <div className="flex flex-wrap gap-6">
                    {extraAmenitiesData.map((amenity) => (
                      <div
                        key={amenity.name}
                        className={`flex flex-col items-center text-gray-500`}
                      >
                        <img
                          className="mb-2 h-12 w-12"
                          src={amenity.image}
                          alt={amenity.name}
                        />
                        <span className="text-lg">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
