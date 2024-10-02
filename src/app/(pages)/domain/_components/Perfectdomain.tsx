"use client";
import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';

interface DomainCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  index: number;
  hoveredCard: number | null;
  setHoveredCard: React.Dispatch<React.SetStateAction<number | null>>;
}

const DomainCard: React.FC<DomainCardProps> = ({ image, title, price, originalPrice, index, hoveredCard, setHoveredCard }) => (
  <div
    onMouseEnter={() => setHoveredCard(index)}
    onMouseLeave={() => setHoveredCard(null)}
    className={`relative hover:scale-105 w-[276px] md:w-[277.368px] xl:w-[276px] 3xl:w-[400px] group shadow-[0px_2px_2px_0px_#00000040] h-[200px] rounded-[10px] p-[2px] transition-all duration-300 ${hoveredCard === index ? 'bg-gradient-to-r from-blue-500 to-yellow-500' : 'bg-transparent'}`}
    style={{ background: hoveredCard === index ? 'linear-gradient(0deg, rgba(233,45,253,1) 0%, rgba(136,114,226,1) 55%)' : 'transparent' }}
  >
    <div className='relative bg-white py-5 px-4 rounded-[10px] h-[197px] flex flex-col gap-4'>
      <Image
        src={image}
        alt='domain'
        className={`absolute bottom-0 right-0 w-[50%] h-auto transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-70'}`}
      />
      <div className='relative z-10 flex flex-col gap-4'>
        <span className='font-900 text-5xl max-2xl:text-4xl max-lg:text-3xl text-home-heading'>
          <span style={{ color: '#72e1e2' }}>•</span> {title}
        </span>
        <div className='flex flex-col'>
          <span className='text-sm sm:text-base font-900'>{price}</span>
          <span className='text-xs sm:text-sm font-700'>Instead of {originalPrice}</span>
        </div>
        <div className='flex items-center gap-1 pt-2'>
          <span className='font-roboto text-sm sm:text-sm font-700'>Get Offer</span>
          <Image src={ICONS.getofferarrow} alt='' className='transition-transform duration-300 group-hover:translate-x-2' />
        </div>
      </div>
    </div>
  </div>
);

const Perfectdomain: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const domainDetails: Omit<DomainCardProps, 'index' | 'hoveredCard' | 'setHoveredCard'>[] = [
    { image: IMAGES.domainCloud, title: 'online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: 'online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: 'online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: 'online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: 'online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: 'online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: 'online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: 'online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
  ];

  return (
    <div className='flex flex-col gap-4 md:gap-[7.56px] xl:gap-[30px] 3xl:gap-[37px] bg-home-secondary-card py-[50px] md:py-[79px] xl:py-[80px] 3xl:py-[120px]'>
      <div className='flex flex-col items-center justify-center'>
          
        {/* Build your brand with the perfect domain name span */}
        <span className="text-center font-900 font-roboto text-home-heading z-10 text-[38px] md:text-[43px] 2xl:text-[64px] leading-[45.6px] md:leading-[51.6px] 2xl:leading-[76.8px] px-2 sm:px-0 tracking-tight max-w-[323px] md:max-w-[677px] xl:max-w-[500px] 3xl:max-w-[1367px] mx-auto">
          Build your brand with the perfect domain name
        </span>
        
        {/* With more than 300 domain extensions span */}
        <span className="text-center text-[17px] 2xl:text-[22px] leading-[28.5px] 2xl:leading-[36.3px] mt-3 md:mt-5 xl:mt-4 3xl:mt-[30px] font-500 font-roboto-serif tracking-tight max-w-[286px] md:max-w-[617px] xl:max-w-[290px] 3xl:max-w-[938px] mx-auto z-10 px-4 sm:px-0">
          With more than 300 domain extensions, you&apos;ll find the one that fits just right.
        </span>
      </div>
      
      <div className='flex justify-center'>
        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 md:gap-[35.63px] xl:gap-[17px] 3xl:gap-[39.91px]'>
          {domainDetails.map((domain, index) => (
            <DomainCard
              key={index}
              index={index}
              image={domain.image}
              title={domain.title}
              price={domain.price}
              originalPrice={domain.originalPrice}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Perfectdomain;
