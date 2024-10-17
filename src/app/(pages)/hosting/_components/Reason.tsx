import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';
import './style.css'

const Reason = () => {
  return (
    <section className="reason flex bg-background-reason justify-between tracking-tight h-fit">
      
      <div className="reason-content">
        <div className='max-md:m-auto max-md:w-full'>
          <h2 className="tracking-tight text-white block text-left">
            Reason For Choosing Our <br /> Strike Hosting Consultancy
          </h2>
        </div>

        <div className="pt-16 max-xl:pt-8 2xl:h-[16.625rem] xl:h-[13rem]   text-white flex items-start lg:gap-[40px] md:gap-[20px] gap-[10px] max-lg:h-[10rem]
        ">
          <div className='flex flex-col justify-center'>
            <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex items-center justify-center  '>
              <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
            </div>
            <div className='w-[3px] h-[8rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'>
              
            </div>
          </div>
          <div>
            <h4 className="text-left text-white">
              15+ Years Web Hosting Company
            </h4>
            <p className='text-left sm:max-w-[400px]'>
            Traditional WordPress, you get all the features, tools, and guidance you need to build and launch.
            </p>
          </div>
        </div>

        <div className=" 2xl:h-[16.625rem] xl:h-[13rem]   text-white flex items-start lg:gap-[40px] md:gap-[20px] gap-[10px] max-sm:h-[6.5rem] max-sm:overflow-hidden">
          
          <div className='flex flex-col justify-center'>
            <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex justify-center items-center'>
            <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
            </div>
            <div className='w-[3px] h-[8rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'></div>
          </div>
          <div>
            <h4 className="text-left text-white">
              Safe and Secured
            </h4>
            <p className="text-left sm:max-w-[400px]">
            Worried you won&#39;t get help when you most need it? You shouldn&#39;t be. Our professional and hands-on support
            </p>
          </div>
        </div>

        <div className="xl:mt-[4rem]  2xl:h-[16.625rem] xl:h-[13rem]   text-white flex items-start lg:gap-[40px] md:gap-[20px] gap-[10px] md:mb-[40px]">
          <div className='flex flex-col justify-center'>
            <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex items-center justify-center '>
            <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
            </div>
            <div className='w-[3px] h-[8rem] md:h-[5rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'></div>
          </div>
          <div>
            <h4 className="text-left text-white">
              24/7 Technical Support
            </h4>
            <p className="text-left sm:max-w-[400px]">
            Don&#39;t just take our word for it. We&#39;re the web hosting provider of choice for thousands of happy customers.
            </p>
          </div>
        </div>
      </div>
    <div className="reason-image">
      <Image src={IMAGES.person} alt="person" className="w-full  object-cover xl:object-contain" />
    </div>
    </section>
  );
};
export default Reason;
