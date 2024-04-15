import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2]">
      <div className="container">
        <div className="py-16 flex flex-col md:flex-row justify-between gap-10 border-b border-gray">
          <div className="w-[35%]">
            <img src="/images/logo.svg" alt="logo" />
            <p className="py-5 w-[50%]">
              Coworkspaces offer a collaborative work environment for
              individuals from various professions to share and work together.
            </p>
            <div className="flex items-center gap-6 w-[60%]">
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
          <div className="w-[65%] grid sm:grid-cols-3 gap-5">
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
                <div className="flex items-center flex-wrap gap-5">
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
