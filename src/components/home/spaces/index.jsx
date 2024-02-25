import { useQuery } from "@tanstack/react-query";
import { spaceList } from "../../../http/api";
import Heading from "../../shared/Heading";
import Button from "../../ui/Button";
import Space from "./Space";

const Spaces = () => {
  // get all spaces
  // create new space
  const getAllSpaces = async () => {
    const { data } = await spaceList({
      pageNumber: 1,
      pageSize: 10,
    });

    return data;
  };

  const { data, isPending } = useQuery({
    queryKey: ["space"],
    queryFn: getAllSpaces,
  });

  const { spaces } = data?.data || {};
  return (
    <section className="py-14">
      <div className="container">
        <Heading>Newest Flexible Office Spaces</Heading>

        {isPending ? (
          <div className="flex items-center justify-center">
            <img src="/images/loading.gif" alt="" />
          </div>
        ) : (
          <div className="mt-[60px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {spaces?.slice(0, 8).map((space) => (
              <Space key={space?.id} space={space} />
            ))}
          </div>
        )}

        {spaces?.length > 8 && (
          <div className="mt-11 flex flex-col gap-9 justify-center items-center text-center">
            <h2 className="text-[25px] leading-[25px]">
              Continue exploring more trending places
            </h2>

            <Button to="/spaces">Show More</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Spaces;
