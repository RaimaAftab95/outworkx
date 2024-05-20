import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-between gap-8 rounded-3xl bg-primary p-5 md:flex-row md:p-10">
          <div className="ml-10 text-white">
            <h2 className="text-4xl text-white sm:text-5xl md:text-6xl md:leading-10">
              Get the App
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl md:leading-8">
              Download the app and explore the workspaces
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
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
          <div>
            <img src="/images/call-to-action/app-mockup.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
