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
        <div className='bg-domain-primary-card py-[100px] max-md:py-10'>
            <div className='flex justify-center gap-32 max-xl:gap-16 mx-10 items-center max-lg:flex-col '>
                <div className=' w-[800px] max-xl:w-[500px] max-lg:w-[400px] max-md:w-[300px]'>
                    <span className='text-6xl max-2xl:text-5xl max-xl:text-3xl max-md:text-2xl text-home-heading font-900   tracking-tight'>
                        The Power of NDE, now on your website
                    </span>
                    <div className='flex flex-col gap-4 pt-16 max-xl:pt-8'>
                        {features.map((feature, index) => (
                            <div className='flex gap-4' key={index}>
                                <Image src={ICONS.arrowCricle} alt='circlecheck' />
                                <span className='text-xl max-xl:text-sm max-md:text-xs'>{feature}</span>
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
