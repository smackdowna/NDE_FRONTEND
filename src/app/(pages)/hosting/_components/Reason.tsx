import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

const Reason = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-background-reason lg:pl-28 px-4 pt-10 lg:pt-16 justify-between tracking-tight h-fit">
      
      <div className="pt-8 lg:pt-16 lg:w-[900px] w-full max-lg:px-20 max-md:px-2   max-xl:px-10 h-fit max-sm:text-center">
        <div className='max-md:m-auto max-md:w-full'>
          <span className="font-900 font-roboto text-[21px] sm:text-[25px] md:text-[31px] xl:text-[43px] 2xl:text-[63px]  md:leading-[40px] xl:leading-[60px]   tracking-tight text-white block max-md:text-center">
            Reason For Choosing Our <br /> Strike Hosting Consultancy
          </span>
        </div>

        <div className="pt-16 max-xl:pt-8 2xl:h-[16.625rem] xl:h-[13rem]   text-white flex items-start gap-[40px] max-lg:h-[10rem]
        ">
          <div className='flex flex-col justify-center'>
            <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex items-center justify-center  '>
              <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
            </div>
            <div className='w-[3px] h-[8rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'>
              
            </div>
          </div>
          <div>
            <span className="font-900 font-roboto text-[17px] lg:text-[24px] xl:text-[26px] 2xl:text-[38px] max-md:block max-md:text-start ">
              15+ Years Web Hosting Company
            </span>
            <p className="font-roboto-serif lg:py-6 text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[22px] font-400  sm:w-[300px] xl:w-[320px] 2xl:w-[445px] max-md:text-start">
            Traditional WordPress, you get all the features, tools, and guidance you need to build and launch.
            </p>
          </div>
        </div>

        <div className=" 2xl:h-[16.625rem] xl:h-[13rem]   text-white flex items-start gap-[40px] max-sm:h-[6.5rem] max-sm:overflow-hidden">
          
          <div className='flex flex-col justify-center'>
            <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex justify-center items-center'>
            <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
            </div>
            <div className='w-[3px] h-[8rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'></div>
          </div>
          <div>
            <span className="font-900 font-roboto text-[17px] lg:text-[24px] xl:text-[26px] 2xl:text-[38px] max-md:block max-md:text-start">
              Safe and Secured
            </span>
            <p className="font-roboto-serif  lg:py-6 text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[22px] font-400 sm:w-[300px] xl:w-[320px] 2xl:w-[445px] max-md:text-start">
            Worried you won't get help when you most need it? You shouldn't be. Our professional and hands-on support
            </p>
          </div>
        </div>


        <div className="xl:mt-[-4rem]  2xl:h-[16.625rem] xl:h-[13rem]   text-white flex items-start gap-[40px] md:mb-[40px]">
          <div className='flex flex-col justify-center'>
            <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex items-center justify-center '>
            <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
            </div>
            <div className='w-[3px] h-[8rem] md:h-[5rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'></div>
          </div>
          <div>
            <span className="font-900 font-roboto text-[17px] lg:text-[24px] xl:text-[26px] 2xl:text-[38px] max-md:block max-md:text-start">
              24/7 Technical Support
            </span>
            <p className="font-roboto-serif lg:py-6 text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[22px] font-400 sm:w-[300px] xl:w-[320px] 2xl:w-[445px] max-md:text-start">
            Don't just take our word for it. We're the web hosting provider of choice for thousands of happy customers.
            </p>
          </div>
        </div>



      </div>
      <div className="w-full lg:w-auto flex items-end  ">
        <Image src={IMAGES.person} alt="person" className="w-full max-lg:px-40 max-md:px-3 object-cover xl:object-contain" />
      </div>
    </div>
  );
};
export default Reason;
