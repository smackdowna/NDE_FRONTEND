"use client";
import { ICONS, IMAGES } from '@/assets';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import './style.css'

interface DomainCardProps {
    image: StaticImageData;
    title: string;
    description : string;
    index: number;
    hoveredCard: number | null;
    setHoveredCard: React.Dispatch<React.SetStateAction<number | null>>;
}

const DomainCard: React.FC<DomainCardProps> = ({ image, title, description, index, hoveredCard, setHoveredCard }) => (
    <div
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        className={`relative hover:scale-105 group shadow-md rounded-[10px] h-[264px] transition-all duration-1000 p-[1px]  ${
            hoveredCard === index ? 'bg-gradient-to-r from-sky-500 to-cyan-300' : 'bg-transparent'
        }`}
        style={{ background: hoveredCard === index ? 'linear-gradient(265.93deg, #00A7A7 0%, #0066FF 100%)' : 'transparent' }}
    >
        <div className="relative bg-white py-5 px-4 rounded-[10px] h-[264px] flex flex-col gap-4 domain-card-sub-div">
            <Image
                src={ICONS.icon1}
                alt={title}
                className={`absolute bottom-0 right-0 w-[50%] h-auto transition-opacity duration-300 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-70'
                }`}
            />
            <div className="relative z-10 flex flex-col gap-4">
                <div className="bg-cyan-300 bg-opacity-20 w-[60.61px] h-[55px] flex justify-center items-center">
                    <Image src={image} alt="lock icon" className="w-[30px]" />
                </div>
                <span className=" font-roboto leading-[28px] md:leading-6 xl:leading-[31.2px] xl:text-[26px] text-[24px] font-900  text-home-heading w-fit">{title}</span>
                <span className="font-normal text-opacity-70 max-md:text-lg  text-xl w-fit font-roboto-serif opacity-65">{description}</span>
            </div>
        </div>
    </div>
);

const Discover: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const domainDetails: Omit<DomainCardProps, 'index' | 'hoveredCard' | 'setHoveredCard'>[] = [
        {
            image: ICONS.Refund,
            title: '100% Money-Back Guarantee',
            description : "Risk-free hosting with a full refund if you're not satisfied."
        },
        {
            image: ICONS.Performance,
            title: 'Maximum Performance',
            description : "Optimised servers deliver top speed and efficiency for your website."
        },
        {
            image: ICONS.CiberSecurity,
            title: 'Top-Notch Security',
            description : "Protect your site from threats with advanced security measures."
        },
        {
            image: ICONS.UltimatedStorage,
            title: 'Unlimited Bandwidth',
            description : "Enjoy maximum data transfer to handle heavy traffic with ease."
        },
        {
            image: ICONS.MaximunUptime,
            title: 'Maximum Uptime',
            description : "NDE’s reliable hosting keeps your website available around the clock."
        },
        {
            image: ICONS.Operation,
            title: 'Easy Management',
            description : "Easily control and manage your website with our intuitive tools."
        },
        {
            image: ICONS.CloudSync,
            title: 'Daily Backups',
            description : "Automatic daily backups to keep your data safe and secure."
        },
        {
            image: ICONS.Support,
            title: '24/7 Support',
            description : "Get help whenever you need it, from our expert team, 24/7."
        },
    ];

    return (
        <section className="flex flex-col gap-4 bg-[#BFF8F84D] ">
            <div className="flex flex-col gap-1">
                <h2 className="text-center  text-home-heading ">
                    <span className="text-[#016AFB]">Discover</span> all Our Web Hosting Features
                </h2>
                <div className=' flex justify-center'>
                <p className="text-center tracking-tight z-10 lg:w-[550px] ">
                    Explore the powerful features that make NDE Hosting the perfect choice for your 24/7 promotion.
                </p>
            </div>
            </div>
            <div className="discover-grid mt-4">
                {domainDetails.map((domain, index) => (
                    <DomainCard
                        key={index}
                        index={index}
                        image={domain.image}
                        title={domain.title}
                        description={domain.description}
                        hoveredCard={hoveredCard}
                        setHoveredCard={setHoveredCard}
                    />
                ))}
            </div>
        </section>
    );
};

export default Discover;
