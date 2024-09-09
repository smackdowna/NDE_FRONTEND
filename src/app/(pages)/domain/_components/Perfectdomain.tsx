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
    className={`relative hover:scale-105 w-[22vw] max-lg:w-[300px] group shadow-[0px_2px_2px_0px_#00000040] h-[200px] rounded-[10px] p-[2px] transition-all duration-300 ${hoveredCard === index ? 'bg-gradient-to-r from-blue-500 to-yellow-500' : 'bg-transparent'}`}
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
    <div className='flex flex-col gap-4 bg-home-secondary-card py-[150px] max-md:py-10 max-lg:py-[40px]'>
      <span className="text-center max-md:text-3xl max-lg:text-4xl text-6xl font-900 font-roboto tracking-tight text-home-heading z-10">
        Build your brand with the perfect domain name
      </span>
      <span className="text-center text-2xl max-md:mx-8 max-lg:mx-24 sm:text-2xl font-500 font-roboto-serif tracking-tight z-10">
        With more than 300 domain extensions, you&apos;ll find the one that fits just right.
      </span>
      <div className='flex justify-center pt-24 max-md:pt-2 mx-20 max-lg:pt-10 max-2xl:mx-10 max-md:mx-2'>
        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8'>
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
