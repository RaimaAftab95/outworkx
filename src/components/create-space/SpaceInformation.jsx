import { useState } from 'react';
import Heading from '../shared/Heading';
import Button from '../ui/Button';
import Error from '../ui/Error';
import Input from '../ui/Input';
import InputBox from '../ui/InputBox';
import Label from '../ui/Label';

export default function SpaceInformation({
  setActiveTab,
  spaceDetails,
  setSpaceDetails
}) {
  const [placeType, setPlaceType] = useState('');
  const [address, setAddress] = useState('');
  const [offers, setOffers] = useState([]);
  const [rules, setRules] = useState([]);
  const [errors, setErrors] = useState({});

  // handle select offer
  const handleSelectOffer = (offer) => {
    if (offers?.includes(offer)) {
      const updatedOffers = offers?.filter((item) => item !== offer);
      setOffers(updatedOffers);
    } else {
      setOffers([...offers, offer]);
    }
  };

  // select rules
  const selectRules = (e) => {
    const rule = e.target.value;
    if (rules?.includes(rule)) {
      const updatedRules = rules?.filter((item) => item !== rule);
      setRules(updatedRules);
    } else {
      setRules([...rules, rule]);
    }
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!address) {
      validationErrors.address = 'Address is Required!';
    }

    if (offers?.length === 0) {
      validationErrors.offers = 'Please Select Offers!';
    }

    if (rules?.length === 0) {
      validationErrors.rules = 'Please Select Rules!';
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    setSpaceDetails({
      ...spaceDetails,
      // placeType,
      address,
      amenities: offers,
      rules
    });

    setActiveTab(2);
  };
  return (
    <div>
      <Heading>What type of place will guests have?</Heading>

      <form onSubmit={submitHandler} className="mt-9">
        <div className="flex flex-col gap-7">
          <InputBox
            className={`cursor-pointer transition-all ${
              placeType === 'entire-place'
                ? 'border-primary'
                : 'hover:border-primary'
            }`}
            onClick={() => setPlaceType('entire-place')}
          >
            <Label className="cursor-pointer" htmlFor="place">
              An entire place
            </Label>
            <span className="w-full text-lg font-medium text-primary/70 placeholder:text-primary/70">
              Guests have whole place to themselves.
            </span>
          </InputBox>
          <InputBox
            className={`cursor-pointer transition-all ${
              placeType === 'room' ? 'border-primary' : 'hover:border-primary'
            }`}
            onClick={() => setPlaceType('room')}
          >
            <Label className="cursor-pointer" htmlFor="room">
              A room
            </Label>
            <span className="w-full text-lg font-medium text-primary/70 placeholder:text-primary/70">
              Guests have their own room in a home, plus access to shared
              spaces.
            </span>
          </InputBox>
          <InputBox
            className={`cursor-pointer transition-all ${
              placeType === 'shared-room'
                ? 'border-primary'
                : 'hover:border-primary'
            }`}
            onClick={() => setPlaceType('shared-room')}
          >
            <Label className="cursor-pointer" htmlFor="shared-room">
              A shared room
            </Label>
            <span className="w-full text-lg font-medium text-primary/70 placeholder:text-primary/70">
              Guests sleep in a room or common area that may be shared with you
              or others.
            </span>
          </InputBox>
        </div>

        <div className="mt-20">
          <Heading>Where’s your place located? </Heading>
          <p className="mt-2 text-xl font-medium ">
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>

          <div className="relative mt-16">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14771.99037376455!2d91.82208290000001!3d22.2401701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1707335722787!5m2!1sbn!2sbd"
              className="h-64 sm:h-smCustom md:h-mdCustom"
              style={{ border: 0, width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute left-0 right-0 top-24">
              <div className="mx-auto flex w-11/12 items-center gap-5 rounded-full bg-white px-6 py-3 shadow-lg sm:w-4/5">
                <div>
                  <img src="/images/icons/map.png" alt="map" />
                </div>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Enter your address"
                  className="text-lg"
                />
              </div>
              <div className="mt-5 text-center">
                <Error>{errors?.address}</Error>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Heading>Tell guests what your place has to offer</Heading>
          <p className="mt-2 text-xl font-medium">
            You can add more after publish your listing
          </p>

          <div className="mx-auto mt-11 grid max-w-screen-md gap-8 px-4 text-center sm:grid-cols-2 md:grid-cols-3">
            <div
              className={`w-50 flex cursor-pointer flex-col items-center justify-center gap-5 rounded-3xl border border-gray px-5 py-10 transition-all ${
                offers?.includes('wifi')
                  ? 'border-primary'
                  : 'hover:border-primary'
              }`}
              onClick={() => handleSelectOffer('wifi')}
            >
              <div>
                <img
                  src="/images/icons/wifi-lg.png"
                  alt="icon"
                  style={{ width: '50px', height: '50px' }}
                />
              </div>
              <h3 className="text-xl">Wifi</h3>
            </div>

            <div
              className={`w-50 flex cursor-pointer flex-col items-center justify-center gap-5  rounded-3xl border border-gray px-5 py-10 transition-all ${
                offers?.includes('tv')
                  ? 'border-primary'
                  : 'hover:border-primary'
              }`}
              onClick={() => handleSelectOffer('tv')}
            >
              <div>
                <img
                  src="/images/icons/tv.png"
                  alt="icon"
                  style={{ width: '50px', height: '50px' }}
                />
              </div>
              <h3 className="text-xl">TV</h3>
            </div>

            <div
              className={`w-50 flex cursor-pointer flex-col items-center justify-center gap-5 rounded-3xl border border-gray px-5 py-10 transition-all ${
                offers?.includes('kitchen')
                  ? 'border-primary'
                  : 'hover:border-primary'
              }`}
              onClick={() => handleSelectOffer('kitchen')}
            >
              <div>
                <img
                  src="/images/icons/kitchen.png"
                  alt="icon"
                  style={{ width: '50px', height: '50px' }}
                />
              </div>
              <h3 className="text-xl">Kitchen</h3>
            </div>

            <div
              className={`w-50 flex cursor-pointer flex-col items-center justify-center gap-5 rounded-3xl border border-gray px-5 py-10 transition-all ${
                offers?.includes('printer')
                  ? 'border-primary'
                  : 'hover:border-primary'
              }`}
              onClick={() => handleSelectOffer('printer')}
            >
              <div>
                <img
                  src="/images/icons/printer.png"
                  alt="icon"
                  style={{ width: '50px', height: '50px' }}
                />
              </div>
              <h3 className="text-xl">Printer</h3>
            </div>

            <div
              className={`w-50 flex cursor-pointer flex-col items-center justify-center gap-5 rounded-3xl border border-gray px-5 py-10 transition-all ${
                offers?.includes('parking')
                  ? 'border-primary'
                  : 'hover:border-primary'
              }`}
              onClick={() => handleSelectOffer('parking')}
            >
              <div>
                <img
                  src="/images/icons/parking.png"
                  alt="icon"
                  style={{ width: '50px', height: '50px' }}
                />
              </div>
              <h3 className="text-xl">Parking</h3>
            </div>

            <div
              className={`w-50 flex cursor-pointer flex-col items-center justify-center gap-5 rounded-3xl border border-gray px-5 py-10 transition-all ${
                offers?.includes('air-conditioning')
                  ? 'border-primary'
                  : 'hover:border-primary'
              }`}
              onClick={() => handleSelectOffer('air-conditioning')}
            >
              <div>
                <img
                  src="/images/icons/air-lg.png"
                  alt="icon"
                  style={{ width: '50px', height: '50px' }}
                />
              </div>
              <h3 className="text-xl">Air Conditioning</h3>
            </div>
          </div>

          <div className="mt-5">
            <Error>{errors?.offers}</Error>
          </div>
        </div>

        <div className="mt-20">
          <Heading>Workspace rules</Heading>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <label htmlFor="no-smoking" className="text-xl font-medium">
                No smoking
              </label>
              <input
                type="checkbox"
                className="h-4 w-4 rounded-xl border border-gray"
                name=""
                id="no-smoking"
                value="no-smoking"
                onChange={selectRules}
                checked={rules?.includes('no-smoking')}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5">
              <label htmlFor="no-pets" className="text-xl font-medium">
                No pets
              </label>
              <input
                type="checkbox"
                className="h-4 w-4 rounded-xl border border-gray"
                name=""
                id="no-pets"
                value="no-pets"
                onChange={selectRules}
                checked={rules?.includes('no-pets')}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5">
              <label htmlFor="workspace-clean" className="text-xl font-medium">
                Keep workspace clean
              </label>
              <input
                type="checkbox"
                className="h-4 w-4 rounded-xl border border-gray"
                name=""
                checked={rules?.includes('workspace-clean')}
                id="workspace-clean"
                value="workspace-clean"
                onChange={selectRules}
              />
            </div>
          </div>

          <div className="mt-5">
            <Error>{errors?.rules}</Error>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <Button type="submit" className="px-10">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
