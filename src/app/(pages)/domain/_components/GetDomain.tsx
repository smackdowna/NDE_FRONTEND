import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className='w-[27vw] max-lg:w-[350px] max-md:w-[300px] bg-white hover:shadow-2xl duration-300 rounded-[10px] group pt-4 p-4 flex flex-col items-center max-md:text-center'>
        <Image src={icon} alt={title} className='w-[100px] max-lg:w-[60px]' />
        <div className='flex flex-col gap-4 mt-3 max-lg:mt-1 items-center text-center'>
            <span className='text-[38px] max-lg:text-3xl text-home-heading pt-8 leading-[28.13px] tracking-tighter font-900 h-[56px]'>
                {title}
            </span>
        </div>
        <div className='text-[#000334] max-lg:text-lg font-serif tracking-tighter mt-8 group text-[24px] max-md:text-lg font-400  text-center max-md:text-center'>
            <span>{description}</span>
        </div>
    </div>
);

const GetDomain: React.FC = () => (
    <div className='py-[150px] max-lg:py-[80px] max-md:py-[40px] flex flex-col items-center justify-center bg-cover bg-center opacity-70' style={{ backgroundImage: `url(${IMAGES.domainBanner.src})`, opacity: '90%' }}>
        <span className='text-center text-6xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl font-900 font-roboto pb-10 text-home-heading max-md:mx-4'>
            Get More With Your Domain
        </span>
        <span className='text-center text-2xl max-md:text-lg font-roboto-serif font-500 max-md:mx-4'>
            Enjoy essential features at no extra cost with every domain you buy!
        </span>
        <div className='flex justify-center flex-wrap gap-10 pt-24 max-md:pt-10 mx-2'>
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
);

export default GetDomain;
