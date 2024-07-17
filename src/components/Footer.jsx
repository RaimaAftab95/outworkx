import { Link } from 'react-router-dom';
import { H6, Muted } from './primitives/typography';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container">
        <div className="flex flex-col justify-between border-b py-16 sm:gap-10 md:flex-row">
          <div className="sm:w-1/3">
            <img src="/images/logo.svg" alt="logo" />
            <Muted className="py-4 sm:pr-14">
              Coworkspaces offer a collaborative work environment for
              individuals from various professions to share and work together.
            </Muted>
          </div>
          <div className="grid w-2/3 gap-5 sm:grid-cols-3">
            <div>
              <H6 className="sb:mb-6 mb-2 mt-3">Company</H6>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="#">
                    <Muted>About Us</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>Blog</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>FAQs</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>Contact</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>Privacy Policy</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>Terms and Conditions</Muted>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <H6 className="sb:mb-6 mb-2 mt-3">Support</H6>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="#">
                    <Muted>Get in Touch</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>Help Center</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>Live Chat</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>How it Works</Muted>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <H6 className="sb:mb-6 mb-2 mt-3">Contact Us</H6>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="#">
                    <Muted>Email: support@domain.com</Muted>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Muted>Phone: 1 (00) 832 2342</Muted>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-10 text-center">
          <Muted>2024 © Outworkx. All rights reserved.</Muted>
        </div>
      </div>
    </footer>
  );
}
