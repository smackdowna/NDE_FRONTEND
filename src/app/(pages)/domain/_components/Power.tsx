import { ICONS } from '@/assets';
import Image from 'next/image';
import React from 'react';

const features = [
    "Manage domain name renewals.",
    "Embed customizable forms with NDE Forms.",
    "Send newsletters with NDE Campaigns.",
    "Enable live chat with NDE SalesIQ.",
    "Optimize conversion rates with NDE PageSense",
    "Capture leads and manage customer data with NDE CRM.",
    "Engage and convert leads with NDE Marketing Automation."
];

const Power = () => {
    return (
        <div className='bg-domain-primary-card px-[6px] md:px-[143px] py-[50px] md:py-20 xl:px-[37px]'>
            <div className='flex justify-center gap-[18px] md:gap-10 xl:gap-[50px] 3xl:gap-[70px] mx-10 items-center max-xl:flex-col '>
                <div className=' w-[800px] max-xl:w-[500px] max-lg:w-[400px] max-md:w-[300px]'>
                    <div className='text-[24px] md:text-[43px] 3xl:text-[64px] leading-normal md:leading-[51.6px] 3xl:leading-[76.8px] font-900 font-roboto text-home-heading w-[321px] md:w-[539px] lg:w-[454px] 1xl:w-[454px] 3xl:w-[722px]'>
                        The Power of NDE, now on your website
                    </div>
                    <div className='flex flex-col gap-[18px] md:gap-[22px] xl:gap-[23.3px] 3xl:gap-[20.2px] mt-7 md:mt-10 xl:mt-[36.64px] 3xl:mt-[30.64px]'>
                        {features.map((feature, index) => (
                            <div className='flex gap-4' key={index}>
                                <Image src={ICONS.arrowCricle} alt='circlecheck' />
                                <span className='text-[#000334] text-[15px] md:text-[17px] 3xl:text-[22px] leading-[24.75px] md:leading-[28.5px] 3xl:leading-[36.3px] font-roboto-serif '>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={ICONS.Power} alt='domain' className='w-[700px] max-2xl:w-[600px] max-xl:w-[500px] '/>
            </div>
        </div>
    );
};

export default Power;
