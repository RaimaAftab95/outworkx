import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { XMarkIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import { H1, P } from '../components/primitives/typography';

const { VITE_BACKEND_API } = import.meta.env;

export default function SpaceDetails() {
  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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

  return (
    <div className="relative">
      {space ? (
        <>
          <div className="container mx-auto p-4">
            {/* Main Swiper displaying 3 images per slide*/}
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
                      className={`h-60 w-20 object-cover ${index === 1 ? 'h-60 w-full' : 'opacity-75'}`}
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

            {/*second Swiper for single image view per slide */}
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
            <H1 className="my-4 text-3xl font-bold">{space.name}</H1>
            <P className="text-lg">{space.description}</P>
            <BookingForm spaceId={id} />
          </div>
        </>
      ) : (
        <P>Loading...</P>
      )}
    </div>
  );
}
