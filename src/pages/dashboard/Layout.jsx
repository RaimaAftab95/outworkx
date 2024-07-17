import { Link, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <>
      <div className="bg-red-100 py-5">
        <div className="container">
          <ul className="flex items-center justify-center gap-5 text-lg font-bold">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/spaces">My Places</Link>
            </li>
            <li>
              <Link to="/dashboard/bookings">Booking</Link>
            </li>
            <li>
              <Link to="/dashboard/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/dashboard/my-bookings">My Bookings</Link>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
