import { Link, Outlet } from 'react-router-dom';
import { CreateSpaceContextProvider } from '../../../context/CreateSpaceContext';

export default function CreateSpaceLayout() {
  return (
    <CreateSpaceContextProvider>
      <ul className="flex items-center justify-center gap-5 text-lg font-bold">
        <li>
          <Link to="/space/create">General</Link>
        </li>
        <li>
          <Link to="/space/create/location">Location</Link>
        </li>
        <li>
          <Link to="/space/create/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/space/create/availability">Availability</Link>
        </li>
        <li>
          <Link to="/space/create/highlights">Highlights</Link>
        </li>
      </ul>

      <Outlet />
    </CreateSpaceContextProvider>
  );
}
