import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';
import './style.css'

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className='featureCard bg-[#F7F7F7] md:bg-white border border-[#7f7b7b40] hover:shadow-2xl duration-300 rounded-[8px] group pt-4 p-4 pb-8 flex flex-col items-center md:items-start xl:w-[500px] lg:px-2 lg:w-[420px] md:w-[300px]'>
        <Image src={icon} alt={title} className='w-[50px] md:w-[60px] 3xl:w-20' />
            <h5 className='text-home-heading mt-2 sm:text-left text-center hidden sm:block md:hidden'>
                {title}
            </h5>
            <h3 className='text-home-heading mt-2 sm:text-left md:block hidden text-center'>
                {title}
            </h3>
            <p className='text-home-heading font-black font-roboto mt-2 sm:text-left text-center sm:hidden block'>
                {title}
            </p>
        <div className='text-[#000334] text-lg md:text-[17px] 3xl:text-[22px] leading-[24.75px] md:leading-[28.5px] 3xl:leading-[36.3px] font-serif  font-400  mt-2 text-center md:text-start'>
            <p className='md:text-left sm:text-center sm:block hidden'>{description}</p>
            <div className='md:text-left sm:text-center block sm:hidden sub-para subPara-center'>{description}</div>
        </div>
    </div>
);

const GetDomain: React.FC = () => (
    <section className='getDomain relative flex flex-col items-center justify-center py-[50px] md:py-20 xl:py-[103.61px] 3xl:py-[186.49px]'>
        {/* Background image */}
        <div
            className='absolute inset-0 bg-cover bg-center opacity-40'
            style={{ backgroundImage: `url(${IMAGES.domainBanner.src})` }}
        ></div>

        {/* Overlay with lower opacity */}
        <div className='absolute inset-0 opacity-20'></div>

        {/* Content */}
        <div className='relative z-10 flex flex-col items-center justify-center'>
            <h2 className=' text-home-heading mx-auto w-[95%] sm:block hidden'>
                Get More With Your Domain
            </h2>
            <h5 className=' text-home-heading mx-auto w-[95%] sm:hidden block text-center'>
                Get More With Your Domain
            </h5>
            <p className='text-center mx-auto text-[#000334] w-[90%] hidden md:block'>
                Enjoy essential features at no extra cost with every domain you buy!
            </p>
            <div className='flex justify-center flex-wrap gap-[22.2px] md:gap-[23px] xl:gap-9 3xl:gap-10 mt-[20px]'>
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
    </section>
);

export default GetDomain;
