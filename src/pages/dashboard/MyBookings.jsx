import { H6, P } from '../../components/primitives/typography';

export default function MyBookings() {
  return (
    <div className="text-primary/70 mt-20 overflow-x-auto pb-5">
      <table className="min-w-[1020px] lg:w-full">
        <thead className="!rounded-2xl bg-[#F2F2F2]">
          <tr>
            <th className="px-8 py-8 text-left align-middle">
              <H6>Space</H6>
            </th>
            <th className="px-8 py-8 text-left align-middle">
              <H6>Location</H6>
            </th>
            <th className="px-8 py-8 text-left align-middle">
              <H6>Access Hours</H6>
            </th>
            <th className="px-8 py-8 text-left align-middle">
              <H6>Reservation Date</H6>
            </th>
            <th className="px-8 py-8 text-left align-middle">
              <H6>No of People</H6>
            </th>
            <th className="px-8 py-8 text-left align-middle">
              <H6>Price</H6>
            </th>
            <th className="px-8 py-8 text-left align-middle">
              <H6>Table</H6>
            </th>
            <th className="px-8 py-8 pr-5 text-left align-middle">
              <H6>Guests</H6>
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <tr key={index} className="align-middle">
              <td className="flex items-center gap-7 py-7">
                <img
                  className="h-20 w-20 rounded-2xl px-5 py-2"
                  src="/images/spaces/1.jpg"
                  alt="space"
                />
                <P>
                  Coworking Space: Corporate Suites Rockefeller Center in New
                  York City
                </P>
              </td>
              <td className="px-5 py-2">
                <P>234 Hickle Heights</P>
              </td>
              <td className="px-5 py-2">
                <P>09:00 AM - 06:00 PM</P>
              </td>
              <td className="px-5 py-2">
                <P>12/7/2023</P>
              </td>
              <td className="px-5 py-2">
                <P>05</P>
              </td>
              <td className="px-5 py-2">
                <P>$140</P>
              </td>
              <td className="px-5 py-2">
                <P>01</P>
              </td>
              <td className="px-5 py-2">
                <P>01</P>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
