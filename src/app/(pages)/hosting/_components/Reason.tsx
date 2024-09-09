import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

const Reason = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-background-reason lg:px-28 px-4 pt-10 lg:pt-16 justify-between tracking-tight">
      <div className="pt-8 lg:pt-16 lg:w-[900px] w-full max-lg:px-20 max-md:px-2">
        <span className="font-900 font-roboto text-6xl max-2xl:text-4xl max-xl:text-2xl  leading-[60px] max-lg:text-center  tracking-tight text-white block">
          Reason For Choosing Our <br /> Strike Hosting Consultancy
        </span>
        <div className="pt-16 max-xl:pt-8 ml-24 max-2xl:ml-10 text-white">
          <span className="font-900 font-roboto text-4xl  max-2xl:text-3xl max-xl:text-2xl">
            15+ Years Web Hosting Company
          </span>
          <p className="font-roboto-serif text-3xl max-2xl:text-2xl py-4 lg:py-6 max-xl:text-xl">
            Traditional WordPress, you get all the features, tools, <br /> and guidance you need to build and launch.
          </p>
        </div>
        <div className="pt-4 ml-24 max-2xl:ml-10 text-white">
          <span className="font-900 font-roboto text-4xl  max-2xl:text-3xl max-xl:text-2xl">
            Safe and Secured
          </span>
          <p className="font-roboto-serif text-3xl max-2xl:text-2xl py-4 lg:py-6 max-xl:text-xl">
            Traditional WordPress, you get all the features, tools, <br /> and guidance you need to build and launch.
          </p>
        </div>
        <div className="pt-4 ml-24 max-2xl:ml-10 text-white">
          <span className="font-900 font-roboto text-4xl  max-2xl:text-3xl max-xl:text-2xl">
            24/7 Technical Support
          </span>
          <p className="font-roboto-serif text-3xl max-2xl:text-2xl py-4 lg:py-6 max-xl:text-xl">
            Traditional WordPress, you get all the features, tools, <br /> and guidance you need to build and launch.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-auto mb-8 max-xl:mb-4 lg:mb-0">
        <Image src={IMAGES.person} alt="person" className="w-full max-lg:px-40 max-md:px-3 object-cover" />
      </div>
    </div>
  );
};
export default Reason;
