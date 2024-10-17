import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';
import './style.css'

interface InfoSectionProps {
  title: string;
  description: string;
  cardWidth:string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, description, cardWidth }) => (
  <div className={`flex flex-col gap-[6px] md:gap-[14px] xl:gap-[10px] 3xl:gap-4 w-full ${cardWidth}`}>
    <h3 className='text-home-heading md:block hidden text-left'>{title}</h3>
    <h4 className='text-home-heading sm:block md:hidden hidden text-left'>{title}</h4>
    <h5 className='text-home-heading sm:hidden block text-left'>{title}</h5>
    <p className='text-[#000334] text-left'>{description}</p>
  </div>
);

const RightDomain: React.FC = () => {

  const infoSectionContent1 = [
    {
      title : "Use Relevant Keywords",
      description : "Include your brand name, location, and other identifying elements to create a unique and easily searchable domain."
    },
    {
      title : "Explore Alternatives",
      description : "NDE offers hundreds of domain extensions to choose from! Explore these options to find the one that best reflects your brand identity."
    },
    {
      title : "Keep it Short & Simple",
      description : "A shorter domain name is easier for users to remember and type. Aim for a concise and impactful name that sticks in their minds."
    },
  ];

  const infoSectionContent2 = [
    {
      title : "Prioritise Memorability",
      description : "Choose an easy domain name. Avoid hyphens, numbers, and complex words to ensure users can easily find you again!"
    },
    {
      title : "Protect Your Brand",
      description : "Consider registering variations of your domain name, including common misspellings and alternative extensions."
    },
    {
      title : "Add Domain Privacy",
      description : "Domain Privacy masks your personal information on the WHOIS database. This protects you online!"
    },
  ];

  return (
    <section className='right-domain bg-domain-secondary-card'>
      {/* Heading */}
     <div className="title d-flex flex-col gap-4 items-center md:w-[95%] w-full mb-8 mx-auto">
      <h2 className='text-center tracking-tight text-home-heading mx-auto'>
          Finding the Right Domain Name
        </h2>
        <p className='hide-text-1024 text-center text-[#000334]'>
          It&apos;s easier than you think!
        </p>
     </div>
      <div className="flex flex-col gap-[97px] md:gap-20 xl:gap-[126.5px] 2xl:gap-[89.78px] items-center">
        
      <div className='first-flex flex flex-col-reverse gap-10 md:gap-[30px] xl:gap-[102px] 3xl:gap-[197px] justify-between sm:flex-col md:flex-row items-center'>
        <div className='flex flex-col gap-5 md:gap-[10px] xl:gap-[21px] 3xl:gap-[31.47px] '>
          {
            infoSectionContent1.map((section , index) => 
              <InfoSection key={index} title={section?.title} description={section?.description} cardWidth={"w-full"}/>
            )
            }
          
        </div>

            {/* First card */}
        <div className='flex w-[100%]'>
          <div className='relative h-[549px] md:h-[549px] 3xl:h-[920.391px] overflow-hidden'>
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

            <div className="w-full bg-start-gradient h-[19px] absolute top-0"></div>
            <div className="w-full bg-gradient-to-b from-customTransparent to-customWhite h-[32px] absolute bottom-0"></div>
          </div>
          <div className='relative h-[549px] md:h-[549px] 3xl:h-[920.391px] overflow-hidden'>
          
            <div className='vertical-marquee'>
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-8" />
            </div>
            <div className="w-full bg-start-gradient h-[19px] absolute top-0"></div>
            <div className="w-full bg-gradient-to-b from-customTransparent to-customWhite h-[32px] absolute bottom-0"></div>
          </div>
        </div>
      </div>

      <div className='second-flex flex flex-col gap-10 md:gap-[30px] 2xl:gap-[102px] 3xl:gap-[197px] justify-between sm:flex-col md:flex-row items-center'>
      <div className='flex gap-[27.7px] md:gap-[38px] 2xl:gap-[45px] 3xl:gap-[64.22px] w-[100%]'>
          <div className='relative h-[549px] md:h-[549px] 3xl:h-[920.391px] overflow-hidden'>
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
            <div className="w-full bg-start-gradient h-[19px] absolute top-0"></div>
            <div className="w-full bg-gradient-to-b from-customTransparent to-customWhite h-[32px] absolute bottom-0"></div>
          </div>
          <div className='relative h-[549px] md:h-[549px] 3xl:h-[920.391px] overflow-hidden'>
            <div className='vertical-marquee'>
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb4} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb} alt="rightdomain" className="w-full mb-8" />
              <Image src={ICONS.Mweb3} alt="rightdomain" className="w-full mb-8" />
            </div>
            <div className="w-full bg-start-gradient h-[19px] absolute top-0"></div>
            <div className="w-full bg-gradient-to-b from-customTransparent to-customWhite h-[32px] absolute bottom-0"></div>
          </div>
        </div>
        <div className='flex flex-col gap-5 md:gap-[10px] xl:gap-[21px] 3xl:gap-[31.47px] '>
        {
            infoSectionContent2.map((section , index) => 
              <InfoSection key={index} title={section?.title} description={section?.description} cardWidth={"  w-full "} />
            )
            }
        </div>
       
      </div>

      </div>
      
    </section>
  );
};

export default RightDomain;
