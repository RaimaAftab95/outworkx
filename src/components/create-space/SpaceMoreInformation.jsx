import { useState } from "react";
import { useAuthStore } from "../../../store";
import Heading from "../shared/Heading";
import Button from "../ui/Button";
import Error from "../ui/Error";
import InputBox from "../ui/InputBox";

const SpaceMoreInformation = ({
  setActiveTab,
  setSpaceDetails,
  spaceDetails,
  isPending,
  createSpace,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  // get user details
  const { auth } = useAuthStore();
  const { user } = auth || {};

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Title is Required!";
    }

    if (!description) {
      validationErrors.description = "Description is Required!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    setSpaceDetails({
      ...spaceDetails,
      name,
      description,
      addressHint: "test address hint",
      city: "Noakhali",
      state: "Chattogram",
      country: "Bangladesh",
      postalCode: 3860,
      gallery: [
        {
          type: "image",
          url: "https://as2.ftcdn.net/v2/jpg/05/58/82/83/1000_F_558828328_Uhd1O0Qo77cZ9gjaWBaasoZ8qHBuKRNt.jpg",
        },
      ],
      numberOfDesks: 5, // Replace with an actual number
      pricePerDesk: 100, // Replace with an actual price
      maximumNumberOfNomads: 10, // Replace with an actual number
      spaceOwner: user?.id, // Replace with an actual ID
      timings: [
        {
          day: 0,
          start: 480, // 8:00 AM
          end: 1020, // 5:00 PM
        },
        {
          day: 1,
          start: 480,
          end: 1020,
        },
        {
          day: 2,
          start: 480,
          end: 1020,
        },
        {
          day: 3,
          start: 480,
          end: 1020,
        },
        {
          day: 4,
          start: 480,
          end: 1020,
        },
        {
          day: 5,
          start: 480,
          end: 1020,
        },
      ],
    });

    createSpace();
  };
  return (
    <div>
      <Heading>Add some photos of your place</Heading>
      <p className="text-[22px] font-medium leading-[37px] mt-2">
        {`You'll`} need 5 photos to get started. You can add more or make
        changes later.
      </p>

      <form onSubmit={submitHandler} className="mt-14">
        <div className="py-28 bg-[#F2F2F2] flex flex-col justify-center items-center text-center">
          <div className="flex justify-center w-full">
            <img src="/images/icons/image.png" alt="icon" />
          </div>
          <h4 className="mt-20 text-[30px] leading-[47px]">
            Drag your photos here
          </h4>
          <span className="text-[22px] leading-[37px] font-medium">
            Choose at least 5 photos
          </span>
          <label
            htmlFor="images"
            className="mt-8 text-[22px] leading-[37px] font-bold cursor-pointer underline"
          >
            Upload from your device
          </label>
          <input type="file" multiple id="images" className="hidden" />
        </div>

        <div className="mt-20">
          <Heading>Let’s give title to your place</Heading>
          <p className="text-[22px] font-medium leading-[37px] mt-2">
            Short titles work best.Have fun with it! You can always change it
            later
          </p>

          <InputBox className="mt-8">
            <textarea
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Add your title."
              className="text-[19px] w-full placeholder:text-primary/70 text-primary/70 font-medium leading-[37px] outline-none h-[130px]"
            ></textarea>
          </InputBox>
          <span className="block mt-8 text-[22px] leading-[37px] font-bold">
            {name?.length}/40
          </span>
          {name?.length > 40 && (
            <Error>Title should not exceed 40 characters.</Error>
          )}
          <Error>{errors?.name}</Error>
        </div>

        <div className="mt-14">
          <Heading>Create your description</Heading>
          <p className="text-[22px] font-medium leading-[37px] mt-2">
            Share what makes your place special.
          </p>

          <InputBox className="mt-8">
            <textarea
              name=""
              id=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Take it easy and write your description."
              className="text-[19px] w-full placeholder:text-primary/70 text-primary/70 font-medium leading-[37px] outline-none h-[230px]"
            ></textarea>
          </InputBox>
          <span className="block mt-8 text-[22px] leading-[37px] font-bold">
            {description?.length}/500
          </span>
          {description?.length > 500 && (
            <Error>Description should not exceed 500 characters.</Error>
          )}
          <Error>{errors?.description}</Error>
        </div>

        <div className="mt-14">
          <Heading>Set your price</Heading>
          <p className="text-[22px] font-medium leading-[37px] mt-2">
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>

          <div className="mt-14">
            <input
              type="text"
              placeholder="Price"
              className="outline-none bg-transparent border-none placeholder:text-primary text-primary text-center w-full font-bold font-nohemi text-[100px]"
            />
          </div>

          <div className="mt-12 border border-gray rounded-[25px] px-8 py-12">
            <div className="flex flex-col gap-2 pb-5 border-b border-gray">
              <div className="flex items-center gap-5 justify-between flex-wrap">
                <span className="text-[22px] leadig-[37px] font-medium">
                  Best Price
                </span>
                <span className="text-[22px] leadig-[37px] font-medium">
                  $35/Per Person
                </span>
              </div>
              <div className="flex items-center gap-5 justify-between flex-wrap">
                <span className="text-[22px] leadig-[37px] font-medium">
                  Guest service fee
                </span>
                <span className="text-[22px] leadig-[37px] font-medium">
                  $5
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 justify-between flex-wrap mt-6">
              <span className="text-[22px] leadig-[37px] font-extrabold">
                Guest service fee
              </span>
              <span className="text-[22px] leadig-[37px] font-medium">$40</span>
            </div>
          </div>

          <div className="border border-gray rounded-[25px] p-7 mt-6">
            <div className="flex items-center gap-5 justify-between flex-wrap">
              <span className="text-[22px] leadig-[37px] font-extrabold">
                You earn
              </span>
              <span className="text-[22px] leadig-[37px] font-extrabold">
                $34
              </span>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-end gap-5">
          <Button
            className="px-14"
            variant="secondary"
            onClick={() => setActiveTab(1)}
          >
            Back
          </Button>
          <Button className="px-14" type="submit" loading={isPending}>
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SpaceMoreInformation;
