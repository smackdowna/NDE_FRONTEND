import { ICONS } from '@/assets';
import Image from 'next/image';
import React from 'react';
import './style.css'

const features = [
    "Book appointment with NDE Bookings.",
    "Embed customizable forms with NDE Forms.",
    "Send newsletters with NDE Campaigns.",
    "Enable live chat with NDE SalesIQ.",
    "Optimize conversion rates with NDE PageSense",
    "Capture leads and manage customer data with NDE CRM.",
    "Engage and convert leads with NDE Marketing Automation."
];

const Power = () => {
    return (
        <section className='power-domain bg-domain-primary-card'>
                <div className='power-domain-content'>
                    <h2 className='text-home-heading text-left'>
                        The Power of NDE, now on your website
                    </h2>
                    <div className='flex flex-col gap-[18px] md:gap-[22px] xl:gap-[23.3px] 3xl:gap-[20.2px] mt-7 md:mt-10 xl:mt-[36.64px] 3xl:mt-[30.64px]'>
                        {features.map((feature, index) => (
                            <div className='flex gap-4' key={index}>
                                <Image src={ICONS.arrowCricle} alt='circlecheck' />
                                <p className='text-[#000334] text-left'>{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={ICONS.Power} alt='domain' className='power-grid-image'/>
        </section>
    );
};

export default Power;
