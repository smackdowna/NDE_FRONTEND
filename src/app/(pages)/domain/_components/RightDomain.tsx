import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface InfoSectionProps {
  title: string;
  description: string;
  cardWidth:string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, description, cardWidth }) => (
  <div className={`flex flex-col gap-[6px] md:gap-[14px] xl:gap-[10px] 3xl:gap-4 w-[740px] max-2xl:w-[550px] max-xl:w-[400px] max-md:w-[300px] ${cardWidth}`}>
    <span className='text-[24px] md:text-[26px] lg:text-[30px] 3xl:text-[38px] font-900 font-roboto text-home-heading tracking-tighter'>{title}</span>
    <p className='text-[#000334] text-[15px] md:text-[17px] 3xl:text-[22px] leading-[24.75px] md:leading-[28.5px] 3xl:leading-[36.3px] font-roboto-serif max-w-[320px] md:max-w-[510px] 3xl:max-w-[648px]'>{description}</p>
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
    <div className='bg-domain-primary-card flex flex-col items-center py-[50px] md:py-[80px] 3xl:py-[120px] gap-0 md:gap-[30px] xl:gap-10'>
      {/* Heading */}
      <div className='text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-900 tracking-tight font-roboto text-home-heading hidden md:block max-w-full md:max-w-[400px] lg:max-w-[640px] xl:max-w-[1049px] 3xl:max-w-[1696px] mx-auto md:leading-[51.6px] 3xl:leading-[93.6px]'>
        Finding the Right Domain Name
      </div>
      <span className='text-center text-lg md:text-xl lg:text-2xl font-roboto-serif font-500 tracking-tight hidden lg:block text-[#000334]'>
        It&apos;s easier than you think!
      </span>
    
      <div className="flex flex-col gap-[97px] md:gap-20 xl:gap-[126.5px] 2xl:gap-[89.78px]">
        
      <div className='flex flex-col-reverse gap-10 md:gap-[30px] xl:gap-[102px] 3xl:gap-[197px] justify-between md:flex-col lg:flex-row items-center'>
        <div className='flex flex-col gap-5 md:gap-[10px] xl:gap-[21px] 3xl:gap-[31.47px] w-[320px] md:w-[490px] xl:w-[490px] 3xl:w-[698px]'>
          {
            infoSectionContent1.map((section , index) => 
              <InfoSection key={index} title={section?.title} description={section?.description} cardWidth={"  w-full md:w-[490px] xl:w-[550px] 3xl:w-[698px]"}/>
            )
            }
          
        </div>

            {/* First card */}
        <div className='flex gap-[27.7px] md:gap-[38px] 2xl:gap-[45px] 3xl:gap-[64.22px] w-[332px] md:w-[466px] 2xl:w-[600px] 3xl:w-[809.249px]'>
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

      <div className='flex flex-col md:flex-col-reverse gap-10 md:gap-[30px] 2xl:gap-[102px] 3xl:gap-[197px] justify-between md:flex-col lg:flex-row items-center'>
      <div className='flex gap-[27.7px] md:gap-[38px] 2xl:gap-[45px] 3xl:gap-[64.22px] w-[332px] md:w-[466px] 2xl:w-[600px] 3xl:w-[809.249px]'>
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
        <div className='flex flex-col gap-5 md:gap-[10px] xl:gap-[21px] 3xl:gap-[31.47px] w-[320px] md:w-[490px] xl:w-[490px] 3xl:w-[698px]'>
        {
            infoSectionContent2.map((section , index) => 
              <InfoSection key={index} title={section?.title} description={section?.description} cardWidth={"  w-full md:w-[490px] xl:w-[550px] 3xl:w-[698px]"} />
            )
            }
        </div>
       
      </div>

      </div>
      
    </div>
  );
};

export default RightDomain;
