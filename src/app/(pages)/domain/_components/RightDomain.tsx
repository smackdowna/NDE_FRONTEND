import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface InfoSectionProps {
  title: string;
  description: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, description }) => (
  <div className='flex flex-col gap-2 w-[740px] max-2xl:w-[550px] max-xl:w-[400px] max-md:w-[300px] '>
    <span className='text-5xl max-2xl:text-4xl max-xl:text-2xl max-md:text-2xl  font-900 font-roboto text-home-heading tracking-tighter'>{title}</span>
    <p className='text-3xl max-2xl:text-2xl max-xl:text-xl max-md:text-lg font-roboto-serif'>{description}</p>
  </div>
);

const RightDomain: React.FC = () => {
  const description = 'Include your brand name, location, and other identifying elements to create a unique and easily searchable domain.';

  return (
    <div className='bg-domain-primary-card flex flex-col items-center py-10 lg:pt-[100px] gap-10'>
      <span className='text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-900 tracking-tight font-roboto text-home-heading'>
        Finding the Right Domain Name
      </span>
      <span className='text-center text-lg md:text-xl lg:text-2xl font-roboto-serif font-500 tracking-tight'>
        It&apos;s easier than you think!
      </span>
      <div className='flex flex-col-reverse lg:flex-row justify-center gap-32 max-2xl:gap-20 max-xl:gap-10 items-center px-5 max-md:px-0  lg:px-0 mx-2 lg:mx-32'>
        <div className='w-full lg:w-[50%] py-5 lg:py-32 flex flex-col gap-8  px-1 max-md:gap-4'>
          <InfoSection title="Use Relevant Keywords" description={description} />
          <InfoSection title="Explore alternatives" description={description} />
          <InfoSection title="Keep it short" description={description} />
        </div>
        <div className='flex gap-8'>
          <div className='relative w-[350px] max-2xl:w-[280px] max-xl:w-[240px] max-xl:h-[580px] max-md:w-[130px] max-md:h-[400px] h-[700px] overflow-hidden '>
            <div className='vertical-marquee'>
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb1} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb2} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb1} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb2} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-16" />
            </div>
          </div>
          <div className='relative w-[350px] max-2xl:w-[280px] h-[700px] max-xl:h-[580px] max-md:h-[400px] max-xl:w-[240px] max-md:w-[130px]  overflow-hidden '>
            <div className='vertical-marquee'>
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-8" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center gap-32 max-2xl:gap-20 max-xl:gap-10 items-center px-5 max-md:px-0  lg:px-0 mx-2 lg:mx-32'>
      <div className='flex gap-8'>
          <div className='relative w-[350px] max-2xl:w-[280px] max-xl:w-[240px] max-xl:h-[580px] max-md:w-[130px] max-md:h-[400px] h-[700px] overflow-hidden '>
            <div className='vertical-marquee'>
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb1} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb2} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb1} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb2} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-16" />
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-16" />
            </div>
          </div>
          <div className='relative w-[350px] max-2xl:w-[280px] h-[700px] max-xl:h-[580px] max-md:h-[400px] max-xl:w-[240px] max-md:w-[130px]  overflow-hidden '>
            <div className='vertical-marquee'>
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-8" />
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[50%] py-5 lg:py-32 flex flex-col gap-8  px-1 max-md:gap-4'>
        <InfoSection title="Use Relevant Keywords" description={description} />
          <InfoSection title="Explore alternatives" description={description} />
          <InfoSection title="Keep it short" description={description} />
        </div>
       
      </div>
      
    </div>
  );
};

export default RightDomain;
