import { PieChart } from 'react-minimal-pie-chart';
import {
  H1,
  H4,
  H2,
  Small,
  Muted,
  Large
} from '../../components/primitives/typography';

export default function Dashboard() {
  return (
    <>
      <H2 className="mt-10">Insights</H2>

      <div className="mb-8 mt-8 flex flex-col justify-between gap-6 lg:flex-row">
        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <H4>Complete booking</H4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <H1>03</H1>
              <img src="/images/icon/vector-up.svg" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <H4>No show off</H4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <H1>127</H1>
              <img src="/images/icon/vector-up.svg" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <H4>Total Revenue</H4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <H1>$127,000</H1>
              <img src="/images/icon/vector-up.svg" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <H4>Active Users</H4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <H1>60</H1>
              <img src="/images/icon/vector-down.svg" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <H4>Total Bookings</H4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <H1>127</H1>
              <img src="/images/icon/vector-up.svg" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <H4>Pending Bookings</H4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <H1>03</H1>
              <img src="/images/icon/vector-up.svg" alt="static" />
            </div>
          </div>
        </div>
        <div className="h-fit w-full rounded-2xl bg-[#F2F2F2] px-5 py-4 sm:w-96">
          <H4>Bookings Breakdown</H4>

          <div className="h-42 w-42 relative mx-auto mt-4">
            <PieChart
              data={[
                { title: 'confirmed', value: 220, color: '#E6E6E6' },
                { title: 'pending', value: 48, color: '#CBCBCB' },
                { title: 'cancelled', value: 32, color: '#919191' }
              ]}
              lineWidth={25}
              rounded
              animate
              background="#ddd"
            />
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Large>TOTAL</Large>
              <H1>300</H1>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-md bg-[#E6E6E6]" />
                <Small>confirmed</Small>
              </div>
              <Muted>220 bookings</Muted>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-md bg-[#919191]" />
                <Small>Pending</Small>
              </div>
              <Muted>48 bookings</Muted>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-md bg-[#919191]" />
                <Small>Cancelled</Small>
              </div>
              <Muted>32 bookings</Muted>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
