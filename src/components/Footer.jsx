import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="border-gray flex flex-col justify-between gap-10 border-b py-16 md:flex-row">
        <div className="w-1/3">
          <img src="/images/logo.svg" alt="logo" />
          <p className="w-1/2 py-5">
            Coworkspaces offer a collaborative work environment for individuals
            from various professions to share and work together.
          </p>
        </div>
        <div className="grid w-2/3 gap-5 sm:grid-cols-3">
          <div>
            <h4 className="mb-6">Company</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6">Support</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="#">Get in Touch</Link>
              </li>
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">Live Chat</Link>
              </li>
              <li>
                <Link to="#">How it Works</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="#">Email: support@domain.com</Link>
              </li>
              <li>
                <Link to="#">Phone: 1 (00) 832 2342</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-10 text-center">
        <p>2024 © Outworkx. All rights reserved.</p>
      </div>
    </footer>
  );
}
