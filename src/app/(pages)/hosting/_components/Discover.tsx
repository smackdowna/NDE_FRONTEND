"use client";
import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';

interface DomainCardProps {
    image: string;
    title: string;
    index: number;
    hoveredCard: number | null;
    setHoveredCard: React.Dispatch<React.SetStateAction<number | null>>;
}

const DomainCard: React.FC<DomainCardProps> = ({ image, title, index, hoveredCard, setHoveredCard }) => (
    <div
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        className={`relative hover:scale-105 w-[21vw]  max-xl:w-[300px] max-md:w-[280px] group shadow-md rounded-[10px] h-[400px] transition-all duration-1000 p-[1px] ${
            hoveredCard === index ? 'bg-gradient-to-r from-sky-500 to-cyan-300' : 'bg-transparent'
        }`}
        style={{ background: hoveredCard === index ? 'linear-gradient(265.93deg, #00A7A7 0%, #0066FF 100%)' : 'transparent' }}
    >
        <div className="relative bg-white py-5 px-4 rounded-[10px] h-[398px] flex flex-col gap-4">
            <Image
                src={image}
                alt={title}
                className={`absolute bottom-0 right-0 w-[50%] h-auto transition-opacity duration-300 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-70'
                }`}
            />
            <div className="relative z-10 flex flex-col gap-4">
                <div className="bg-cyan-300 bg-opacity-20 w-[80px] h-[80px] flex justify-center items-center">
                    <Image src={ICONS.icon} alt="lock icon" className="w-[30px]" />
                </div>
                <span className=" font-roboto max-2xl:text-2xl text-3xl max-md:text-2xl font-900 w-72 text-home-heading">{title}</span>
                <span className="font-normal text-opacity-70 max-md:text-lg  text-xl w-64 font-roboto-serif opacity-65">Choice for growing agencies and support that acts as your ecommerce businesses.</span>
            </div>
        </div>
    </div>
);

const Discover: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const domainDetails: Omit<DomainCardProps, 'index' | 'hoveredCard' | 'setHoveredCard'>[] = [
        {
            image: ICONS.icon1,
            title: 'Maximum Security',
       
        },
        {
            image: ICONS.icon1,
            title: '100% Moneyback Guarantee',
        
        },
        {
            image: ICONS.icon1,
            title: 'Maximum Performance',
     
        },
        {
            image: ICONS.icon1,
            title: 'Maximum Data Transfer',
     
        },
        {
            image: ICONS.icon1,
            title: 'Maximum Security',
       
        },
        {
            image: ICONS.icon1,
            title: '100% Moneyback Guarantee',
        
        },
        {
            image: ICONS.icon1,
            title: 'Maximum Performance',
         
        },
        {
            image: ICONS.icon1,
            title: 'Maximum Data Transfer',
  
        },
    ];

    return (
        <div className="flex flex-col gap-4 bg-[#BFF8F84D] py-[150px] max-md:py-10 max-lg:py-[40px]">
            <span className="text-center text-6xl max-lg:text-4xl max-md:text-3xl font-900 font-roboto text-home-heading z-10">
                <span className="text-[#016AFB]">Discover</span> all Our Web Hosting Features
            </span>
            <div className=' flex justify-center'>
            <span className="text-center text-3xl max-md:mx-8 max-lg:mx-24 max-md:text-lg sm:text-2xl w-[900px] font-medium font-roboto-serif tracking-tight z-10">
                Focus on your business and avoid all the web hosting hassles. Our managed hosting guarantees unmatched performance, reliability, and choice with 24/7 support that acts as your extended team.
            </span>
            </div>
            <div className="flex justify-center pt-24 max-md:pt-2 mx-28 max-lg:pt-10 max-2xl:mx-2 max-md:mx-2">
                <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
                    {domainDetails.map((domain, index) => (
                        <DomainCard
                            key={index}
                            index={index}
                            image={domain.image}
                            title={domain.title}
                            hoveredCard={hoveredCard}
                            setHoveredCard={setHoveredCard}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discover;
