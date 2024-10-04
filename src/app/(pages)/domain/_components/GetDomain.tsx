import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className='w-[322px] md:w-[360px] 1xl:w-[400px] 3xl:w-[537.813px] h-[245.019px] md:h-[280px] 3xl:h-[363.444px] bg-[#F7F7F7] md:bg-white border border-[#7f7b7b40] hover:shadow-2xl duration-300 rounded-[8px] group pt-4 p-4 flex flex-col items-center md:items-start'>
        <Image src={icon} alt={title} className='w-[50px] md:w-[60px] 3xl:w-20' />
            <span className='text-home-heading text-[20px] md:text-[24px] 1xl:text-[28px] 3xl:text-[38px] leading-[28.13px] tracking-tighter font-900 mt-[26.37px] md:mt-4 xl:mt-6 3xl:mt-6'>
                {title}
            </span>
        <div className='text-[#000334] text-lg md:text-[17px] 3xl:text-[22px] leading-[24.75px] md:leading-[28.5px] 3xl:leading-[36.3px] font-serif  font-400 mt-[23px] md:mt-3 1xl:mt-5 3xl:mt-7 text-center md:text-start'>
            <span>{description}</span>
        </div>
    </div>
);

const GetDomain: React.FC = () => (
    <div className='relative flex flex-col items-center justify-center py-[50px] md:py-20 xl:py-[103.61px] 3xl:py-[186.49px]'>
        {/* Background image */}
        <div
            className='absolute inset-0 bg-cover bg-center opacity-40'
            style={{ backgroundImage: `url(${IMAGES.domainBanner.src})` }}
        ></div>

        {/* Overlay with lower opacity */}
        <div className='absolute inset-0 opacity-20'></div>

        {/* Content */}
        <div className='relative z-10 flex flex-col items-center justify-center'>
            <span className='text-center text-[30px] md:text-[43px] 3xl:text-[64px] leading-normal md:leading-[51.6px] 3xl:leading-[76.8px] font-900 font-roboto text-home-heading  max-w-[264px] md:max-w-[539px] 3xl:max-w-[809.839px] mx-auto'>
                Get More With Your Domain
            </span>
            <span className='text-center text-[20px] xl:text-[17px] 3xl:text-[22px] leading-[24.75px] xl:leading-[28.5px] 3xl:leading-[36.3px] font-roboto-serif font-500 mt-[19px] xl:mt-[20.39px] 3xl:mt-[30.47px] max-md:mx-4 block md:hidden lg:block w-[221px] md:w-full mx-auto text-[#000334]'>
                Enjoy essential features at no extra cost with every domain you buy!
            </span>
            <div className='flex justify-center flex-wrap gap-[22.2px] md:gap-[23px] xl:gap-9 3xl:gap-10 mt-[19px] md:mt-[67px] xl:mt-10 3xl:mt-[22.21px]'>
                <FeatureCard
                    icon={ICONS.DNS}
                    title="DNS Management"
                    description="Easily manage your DNS records, FTP, sub-domains and more for optimal performance and control"
                />
                <FeatureCard
                    icon={ICONS.HTTPS}
                    title="Domain Theft Protection"
                    description="Safeguard your domain from unauthorized transfers and ensure your ownership is secure."
                />
                <FeatureCard
                    icon={ICONS.Gear}
                    title="Easy-to-use Control Panel"
                    description="Our user-friendly and intuitive control panel makes domain management easy and hassle-free."
                />
            </div>
        </div>
    </div>
);

export default GetDomain;
