import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2]">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 border-b border-gray py-16 md:flex-row">
          <div className="w-1/3">
            <img src="/images/logo.svg" alt="logo" />
            <p className="w-1/2 py-5">
              Coworkspaces offer a collaborative work environment for
              individuals from various professions to share and work together.
            </p>
            <div className="flex w-3/5 items-center gap-6">
              <Link to="#">
                <img src="/images/call-to-action/apple.png" alt="apple" />
              </Link>
              <Link to="#">
                <img
                  src="/images/call-to-action/play-store.png"
                  alt="play-store"
                />
              </Link>
            </div>
          </div>
          <div className="grid w-2/3 gap-5 sm:grid-cols-3">
            <div>
              <h4 className="mb-6">Company</h4>
              <ul className="flex flex-col gap-5">
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
              </ul>
            </div>
            <div>
              <h4 className="mb-6">Support</h4>
              <ul className="flex flex-col gap-5">
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
              <ul className="flex flex-col gap-5">
                <li>
                  <Link to="#">Email: support@domain.com</Link>
                </li>
                <li>
                  <Link to="#">Phone: 1 (00) 832 2342</Link>
                </li>
                <div className="flex flex-wrap items-center gap-5">
                  <Link to="#">
                    <img src="/images/icons/facebook.png" alt="social" />
                  </Link>
                  <Link to="#">
                    <img src="/images/icons/twitter.png" alt="social" />
                  </Link>
                  <Link to="#">
                    <img src="/images/icons/linkedin.png" alt="social" />
                  </Link>
                  <Link to="#">
                    <img src="/images/icons/youtube.png" alt="social" />
                  </Link>
                  <Link to="#">
                    <img src="/images/icons/instagram.png" alt="social" />
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-10 text-center">
          <p>2024 © outworkx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
