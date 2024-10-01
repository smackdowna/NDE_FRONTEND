import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className='w-[27vw] max-lg:w-[350px] max-md:w-[300px] bg-[#F7F7F7] md:bg-white border border-[#7f7b7b40] hover:shadow-2xl duration-300 rounded-[8px] group pt-4 p-4 flex flex-col items-center md:items-start'>
        <Image src={icon} alt={title} className='w-[80px] max-lg:w-[60px]' />
            <span className='text-[38px] max-lg:text-3xl text-home-heading leading-[28.13px] max-2xl:text-[24px] tracking-tighter font-900 mt-[26.37px] md:mt-4 xl:mt-6 3xl:mt-6'>
                {title}
            </span>
        <div className='text-[#000334] max-lg:text-lg max-2xl:text-[17px] font-serif tracking-tighter group text-[24px] max-md:text-lg font-400 mt-[26.37px] md:mt-4 xl:mt-6 3xl:mt-7 text-center md:text-start'>
            <span>{description}</span>
        </div>
    </div>
);

const GetDomain: React.FC = () => (
    <div className='relative py-[150px] max-lg:py-[80px] max-md:py-[40px] flex flex-col items-center justify-center'>
        {/* Background image */}
        <div
            className='absolute inset-0 bg-cover bg-center opacity-40'
            style={{ backgroundImage: `url(${IMAGES.domainBanner.src})` }}
        ></div>

        {/* Overlay with lower opacity */}
        <div className='absolute inset-0 opacity-20'></div>

        {/* Content */}
        <div className='relative z-10 flex flex-col items-center justify-center'>
            <span className='text-center text-[24px] md:text-[43px] 3xl:text-[64px] leading-normal md:leading-[51.6px] 3xl:leading-[76.8px] font-900 font-roboto text-home-heading max-md:mx-4'>
                Get More With Your Domain
            </span>
            <span className='text-center text-[15px] xl:text-[17px] 3xl:text-[22px] leading-[24.75px] xl:leading-[28.5px] 3xl:leading-[36.3px] font-roboto-serif font-500 mt-[19px] xl:mt-[20.39px] 3xl:mt-[30.47px] max-md:mx-4 block md:hidden lg:block'>
                Enjoy essential features at no extra cost with every domain you buy!
            </span>
            <div className='flex justify-center flex-wrap gap-10 mx-2 mt-[19px] md:mt-[67px] xl:mt-10 3xl:mt-[22.21px]'>
                <FeatureCard
                    icon={ICONS.DNS}
                    title="DNS Management"
                    description="Easily manage your DNS records, FTP, sub-domains and more for optimal performance and control"
                />
                <FeatureCard
                    icon={ICONS.HTTPS}
                    title="HTTPS Security"
                    description="Protect your website with advanced HTTPS security and encryption"
                />
                <FeatureCard
                    icon={ICONS.Gear}
                    title="Domain Control"
                    description="Comprehensive tools to take full control of your domain settings"
                />
            </div>
        </div>
    </div>
);

export default GetDomain;
