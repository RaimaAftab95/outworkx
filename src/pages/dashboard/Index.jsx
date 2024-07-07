import { PieChart } from 'react-minimal-pie-chart';

export default function Dashboard() {
  return (
    <>
      <h1>Insights</h1>

      <div className="mt-14 flex flex-col justify-between gap-6 lg:flex-row">
        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <h4 className="text-primary/70 text-xl leading-9">
              Complete booking
            </h4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <h2 className="text-5xl leading-6">03</h2>
              <img src="/images/icons/static.png" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <h4 className="text-primary/70 text-xl leading-9">No show off</h4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <h2 className="text-5xl leading-6">127</h2>
              <img src="/images/icons/static.png" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <h4 className="text-primary/70 text-xl leading-9">Total Revenue</h4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <h2 className="text-5xl leading-6">$127,000</h2>
              <img src="/images/icons/static.png" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <h4 className="text-primary/70 text-xl leading-9">Active Users</h4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <h2 className="text-5xl leading-6">60</h2>
              <img src="/images/icons/static.png" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <h4 className="text-primary/70 text-xl leading-9">
              Total Bookings
            </h4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <h2 className="text-5xl leading-6">127</h2>
              <img src="/images/icons/static.png" alt="static" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
            <h4 className="text-primary/70 text-xl leading-9">
              Pending Bookings
            </h4>
            <div className="mb-8 mt-8 flex items-center gap-6">
              <h2 className="text-5xl leading-6">03</h2>
              <img src="/images/icons/static.png" alt="static" />
            </div>
          </div>
        </div>
        <div className="h-fit w-full rounded-2xl bg-[#F2F2F2] px-5 py-4 sm:w-96">
          <h4 className="text-primary/70 text-xl leading-9">
            Bookings Breakdown
          </h4>

          <div className="mx-auto mt-4 h-36 w-36">
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
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-md bg-[#E6E6E6]" />
                <span className="font-nohemi text-primary/70 font-semibold">
                  confirmed
                </span>
              </div>
              <span>220 bookings</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-md bg-[#CBCBCB]" />
                <span className="font-nohemi text-primary/70 font-semibold">
                  Pending
                </span>
              </div>
              <span>48 bookings</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-md bg-[#919191]" />
                <span className="font-nohemi text-primary/70 font-semibold">
                  Cancelled
                </span>
              </div>
              <span>32 bookings</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
