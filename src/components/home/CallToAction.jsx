import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="bg-primary p-5 md:p-10 rounded-[35px] flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="text-white ml-10">
            <h2 className="text-white text-[40px] sm:text-[48px] md:text-[58px] md:leading-[58px]">
              Get the App
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl md:leading-[30px] mt-4">
              Download the app and explore the workspaces
            </p>
            <div className="flex items-center flex-wrap gap-6 mt-9">
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
