import React from "react";
import Heading from "../shared/Heading";
import Button from "../ui/Button";
import InputBox from "../ui/InputBox";

const SpaceMoreInformation = ({ setActiveTab }) => {
  return (
    <div>
      <Heading>Add some photos of your place</Heading>
      <p className="text-[22px] font-medium leading-[37px] mt-2">
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </p>

      <form action="" className="mt-14">
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
              placeholder="Add your title."
              className="text-[19px] w-full placeholder:text-primary/70 text-primary/70 font-medium leading-[37px] outline-none h-[130px]"
            ></textarea>
          </InputBox>
          <span className="block mt-8 text-[22px] leading-[37px] font-bold">
            0/40
          </span>
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
              placeholder="Take it easy and write your description."
              className="text-[19px] w-full placeholder:text-primary/70 text-primary/70 font-medium leading-[37px] outline-none h-[230px]"
            ></textarea>
          </InputBox>
          <span className="block mt-8 text-[22px] leading-[37px] font-bold">
            0/500
          </span>
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
          <Button className="px-14">Publish</Button>
        </div>
      </form>
    </div>
  );
};

export default SpaceMoreInformation;
