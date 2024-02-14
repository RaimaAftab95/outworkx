import React from "react";
import Footer from "../components/shared/Footer";
import Heading from "../components/shared/Heading";
import Reviews from "../components/space-details/reviews";
import Button from "../components/ui/Button";

const SpaceDetails = () => {
  return (
    <main>
      {/* details */}
      <section className="text-black/70 mb-32">
        <div className="container">
          {/* space images */}
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="w-full lg:w-[65%] relative">
              <img
                className="w-full h-full rounded-3xl"
                src="/images/spaces/5.jpg"
                alt="space"
              />

              <div className="absolute bottom-10 right-7">
                <Button size="sm">Show All Photos</Button>
              </div>
            </div>
            <div className="w-full lg:w-[35%] flex flex-col gap-4 h-full">
              <img
                src="/images/spaces/6.jpg"
                className="w-full h-full rounded-3xl"
                alt="space"
              />
              <img
                src="/images/spaces/7.jpg"
                className="w-full h-full rounded-3xl"
                alt="space"
              />
            </div>
          </div>

          {/* space details */}
          <div>
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-16 mt-[60px]">
              {/* space content */}
              <div className="w-full lg:w-[65%]">
                <div>
                  <Heading>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </Heading>

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
                    <div className="flex items-center gap-3">
                      <img src="/images/icons/wifi.png" alt="icon" />
                      <span>High-Speed WiFi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/images/icons/air.png" alt="icon" />
                      <span>Air Conditioning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/images/icons/area.png" alt="icon" />
                      <span>Lounge / Chill-out Area</span>
                    </div>
                  </div>
                </div>

                <div className="py-7">
                  <h4 className="text-2xl leading-[47px]">Workspace Rules</h4>
                  <div className="mt-5 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-3">
                      <img src="/images/icons/smoke.png" alt="icon" />
                      <span>No Smoking</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <img src="/images/icons/pets.png" alt="icon" />
                      <span>No Pets Allowed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/images/icons/boundaries.png" alt="icon" />
                      <span>Respect Boundaries</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/images/icons/clean.png" alt="icon" />
                      <span>Keep Workspace Clean</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* space reverse section */}
              <div className="w-full sm:w-[380px] lg:w-[35%] h-fit border border-gray rounded-2xl shadow py-4 px-6">
                <div className="border-b border-gray pb-4">
                  <h3 className="text-[25px] leading-[50px]">
                    Coworking Space
                  </h3>
                  <span className="text-[15px]">
                    Access to shared workspace
                  </span>
                </div>

                <div className="py-4 border-b border-gray text-primary text-lg flex items-center gap-2 justify-between flex-wrap">
                  <span>1 - 20 People</span>
                  <span>
                    <span className="font-bold">$19</span> / person / day
                  </span>
                </div>

                <div className="py-4 border-b border-gray text-primary text-lg flex items-center gap-2 justify-between flex-wrap">
                  <span>Check In</span>
                  <div className="flex items-center gap-3">
                    <span className="underline">12/7/2023</span>
                    <div>
                      <img src="/images/icons/calendar.png" alt="icon" />
                    </div>
                  </div>
                </div>

                <div className="my-8">
                  <Button className="w-full">Reserve Space</Button>
                </div>

                <div className="text-primary text-lg flex items-center gap-2 justify-between flex-wrap mb-3">
                  <span>$19 x 5 days</span>
                  <span>
                    <span className="font-bold">150$</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="py-7 border-y border-gray">
              <h4 className="text-xl leading-[47px]">About Place</h4>
              <p className="text-lg leading-[37px] text-black/70">
                1180 Avenue of the Americas at 46th Street is a world class
                location and prominent business address with fantastic
                amenities, including 24/7 access and security, lobby attendants,
                imposing on-the-avenue entrance and modern lobby with multiple
                high speed elevators. It is easily accessible from all major
                transportation hubs, including Penn Station.
              </p>
              <button className="text-lg font-bold leading-[47px] text-primary cursor-pointer underline">
                Show more
              </button>
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
                style={{ border: 0, width: "100%", height: "720px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SpaceDetails;
