import { useState } from "react";
import Heading from "../shared/Heading";
import Button from "../ui/Button";
import Error from "../ui/Error";
import Input from "../ui/Input";
import InputBox from "../ui/InputBox";
import Label from "../ui/Label";

const SpaceInformation = ({ setActiveTab, spaceDetails, setSpaceDetails }) => {
  const [placeType, setPlaceType] = useState("");
  const [address, setAddress] = useState("");
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
      validationErrors.address = "Address is Required!";
    }

    if (offers?.length === 0) {
      validationErrors.offers = "Please Select Offers!";
    }

    if (rules?.length === 0) {
      validationErrors.rules = "Please Select Rules!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    setSpaceDetails({
      ...spaceDetails,
      // placeType,
      address,
      amenities: offers,
      rules,
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
              placeType === "entire-place"
                ? "border-primary"
                : "hover:border-primary"
            }`}
            onClick={() => setPlaceType("entire-place")}
          >
            <Label className="cursor-pointer" htmlFor="place">
              An entire place
            </Label>
            <span className="text-[19px] w-full placeholder:text-primary/70 text-primary/70 font-medium leading-[37px]">
              Guests have whole place to themselves.
            </span>
          </InputBox>
          <InputBox
            className={`cursor-pointer transition-all ${
              placeType === "room" ? "border-primary" : "hover:border-primary"
            }`}
            onClick={() => setPlaceType("room")}
          >
            <Label className="cursor-pointer" htmlFor="room">
              A room
            </Label>
            <span className="text-[19px] w-full placeholder:text-primary/70 text-primary/70 font-medium leading-[37px]">
              Guests have their own room in a home, plus access to shared
              spaces.
            </span>
          </InputBox>
          <InputBox
            className={`cursor-pointer transition-all ${
              placeType === "shared-room"
                ? "border-primary"
                : "hover:border-primary"
            }`}
            onClick={() => setPlaceType("shared-room")}
          >
            <Label className="cursor-pointer" htmlFor="shared-room">
              A shared room
            </Label>
            <span className="text-[19px] w-full placeholder:text-primary/70 text-primary/70 font-medium leading-[37px]">
              Guests sleep in a room or common area that may be shared with you
              or others.
            </span>
          </InputBox>
        </div>

        <div className="mt-[72px]">
          <Heading>Where’s your place located? </Heading>
          <p className="text-[22px] font-medium leading-[37px] mt-2">
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>

          <div className="mt-[70px] relative">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14771.99037376455!2d91.82208290000001!3d22.2401701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1707335722787!5m2!1sbn!2sbd"
              // width="600"
              // height="630"
              className="h-[400px] sm:h-[500px] md:h-[630px]"
              style={{ border: 0, width: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute top-11 left-0 right-0">
              <div className="w-[90%] sm:w-[80%] mx-auto py-9 px-11 bg-white rounded-full flex items-center gap-5 shadow-lg">
                <div>
                  <img src="/images/icons/map.png" alt="map" />
                </div>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Enter your address"
                />
              </div>
              <div className="mt-5 text-center">
                <Error>{errors?.address}</Error>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[72px]">
          <Heading>Tell guests what your place has to offer</Heading>
          <p className="text-[22px] font-medium leading-[37px] mt-2">
            You can add more after publish your listing
          </p>

          <div className="mt-11 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div
              className={`py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all ${
                offers?.includes("wifi")
                  ? "border-primary"
                  : "hover:border-primary"
              }`}
              onClick={() => handleSelectOffer("wifi")}
            >
              <div>
                <img src="/images/icons/wifi-lg.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Wifi</h3>
            </div>

            <div
              className={`py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all ${
                offers?.includes("tv")
                  ? "border-primary"
                  : "hover:border-primary"
              }`}
              onClick={() => handleSelectOffer("tv")}
            >
              <div>
                <img src="/images/icons/tv.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">TV</h3>
            </div>

            <div
              className={`py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all ${
                offers?.includes("kitchen")
                  ? "border-primary"
                  : "hover:border-primary"
              }`}
              onClick={() => handleSelectOffer("kitchen")}
            >
              <div>
                <img src="/images/icons/kitchen.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Kitchen</h3>
            </div>

            <div
              className={`py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all ${
                offers?.includes("printer")
                  ? "border-primary"
                  : "hover:border-primary"
              }`}
              onClick={() => handleSelectOffer("printer")}
            >
              <div>
                <img src="/images/icons/printer.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Printer</h3>
            </div>

            <div
              className={`py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all ${
                offers?.includes("parking")
                  ? "border-primary"
                  : "hover:border-primary"
              }`}
              onClick={() => handleSelectOffer("parking")}
            >
              <div>
                <img src="/images/icons/parking.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Parking</h3>
            </div>

            <div
              className={`py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all ${
                offers?.includes("air-conditioning")
                  ? "border-primary"
                  : "hover:border-primary"
              }`}
              onClick={() => handleSelectOffer("air-conditioning")}
            >
              <div>
                <img src="/images/icons/air-lg.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Air Conditioning</h3>
            </div>
          </div>

          <div className="mt-5">
            <Error>{errors?.offers}</Error>
          </div>
        </div>

        <div className="mt-20">
          <Heading>Workspace rules</Heading>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-5 flex-wrap">
              <label
                htmlFor="no-smoking"
                className="text-[22px] font-medium leading-[37px]"
              >
                No smoking
              </label>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-[10px] border border-gray"
                name=""
                id="no-smoking"
                value="no-smoking"
                onChange={selectRules}
                checked={rules?.includes("no-smoking")}
              />
            </div>
            <div className="flex items-center justify-between gap-5 flex-wrap">
              <label
                htmlFor="no-pets"
                className="text-[22px] font-medium leading-[37px]"
              >
                No pets
              </label>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-[10px] border border-gray"
                name=""
                id="no-pets"
                value="no-pets"
                onChange={selectRules}
                checked={rules?.includes("no-pets")}
              />
            </div>
            <div className="flex items-center justify-between gap-5 flex-wrap">
              <label
                htmlFor="workspace-clean"
                className="text-[22px] font-medium leading-[37px]"
              >
                Keep workspace clean
              </label>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-[10px] border border-gray"
                name=""
                checked={rules?.includes("workspace-clean")}
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

        <div className="mt-24 flex justify-end">
          <Button type="submit" className="px-14">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SpaceInformation;
