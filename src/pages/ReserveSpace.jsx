import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../components/shared/Heading";
import Button from "../components/ui/Button";
import { bookingSpace } from "../http/api";

const ReserveSpace = () => {
  const [spaceDetails, setSpaceDetails] = useState({});

  const router = useNavigate();

  useEffect(() => {
    let reserveSpace = localStorage.getItem("reserveSpace");
    reserveSpace = JSON.parse(reserveSpace);

    if (!reserveSpace) {
      toast.error("Please select space!");
      router(`/`);
    } else {
      console.log("Reserved space", reserveSpace);
      setSpaceDetails(reserveSpace);
    }
  }, [router]);

  const {
    id,
    startDate,
    endDate,
    people,
    name,
    thumbnail,
    rating,
    totalReviews,
    pricePerDesk,
    totalPrice,
  } = spaceDetails || {};

  // confirm reserve function
  const confirmReserveHandler = async () => {
    const { data } = await bookingSpace({
      spaceId: id,
      startDate: "2024-03-18",
      endDate: "2024-03-20",
      price: totalPrice,
      numberOfDesks: people,
      status: "pending",
    });
    return data;
  };

  // create server request
  const { mutate, isPending } = useMutation({
    mutationKey: ["confirm-reserve"],
    mutationFn: confirmReserveHandler,
    onSuccess: async () => {
      router("/booking-history");
      toast.success("Space Booking Successfully.");
      localStorage.removeItem("reseverSpace");
    },
    onError: async (error) => {
      console.log("error", error);
    },
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

        <div className="mt-20 grid lg:grid-cols-2 gap-20 sm:gap-28">
          <div>
            <h3 className="text-[35px] leading-[42px]">Your trip</h3>

            <div className="text-[22px] leading-[32px] mt-14 flex flex-col gap-12">
              <div
                className="flex items-center justify-between 
              gap-5 flex-wrap"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-bold">People</span>
                  <span>{people}</span>
                </div>
                <button className="font-bold underline">Edit</button>
              </div>
              <div
                className="flex items-center justify-between 
              gap-5 flex-wrap"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Date</span>
                  <div className="flex items-center gap-5">
                    <span>{startDate}</span>
                    <span>{endDate}</span>
                  </div>
                </div>
                <button className="font-bold underline">Edit</button>
              </div>
            </div>

            <div className="mt-14">
              <Button onClick={mutate} loading={isPending} className="w-full">
                Confirm reservation
              </Button>
            </div>
          </div>

          <div className="bg-white px-10 py-12 border border-gray rounded-[25px] h-fit">
            <div className="flex flex-col sm:flex-row justify-between gap-6 pb-4 border-b border-gray">
              <div className="w-full sm:w-[40%]">
                <img
                  className="w-full rounded-[25px]"
                  src={thumbnail}
                  alt="space"
                />
              </div>
              <div className="w-full sm:w-[55%] flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-[32px]">
                  Reservation
                </h3>
                <p className="text-lg leading-[32px]">{name}</p>
                <div className="flex items-center flex-wrap gap-2 text-xl text-primary font-bold">
                  <div className="flex items-center gap-2">
                    <img src="/images/icons/star-lg.png" alt="" />
                    <span>{rating}</span>
                  </div>
                  <div className="w-[5px] h-[5px] rounded-full bg-primary" />
                  <span>{totalReviews} Reviews</span>
                </div>
              </div>
            </div>

            <div className="py-8 border-b border-gray">
              <h3 className="text-[25px] leading-[30px] font-normal">
                Price details
              </h3>
              <div className="mt-6 flex flex-col gap-4 text-xl font-medium leading-[32px]">
                <div className="flex items-center justify-between gap-5 flex-wrap">
                  <span className="underline">
                    ${pricePerDesk} X {people} People
                  </span>
                  <span>${totalPrice}.00</span>
                </div>
                <div className="flex items-center justify-between gap-5 flex-wrap">
                  <span className="underline">Our fee</span>
                  <span>$10.00</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-5 flex-wrap">
              <h3 className="text-[25px] mt-6 leading-[30px] font-normal">
                Total (USD)
              </h3>
              <h3 className="text-[20px] mt-6 leading-[30px] font-bold">
                ${Number(totalPrice) + 10}.00
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReserveSpace;
