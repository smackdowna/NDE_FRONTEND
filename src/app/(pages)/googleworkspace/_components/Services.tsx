import { ICONS } from '@/assets';
import Image from 'next/image';
import React from 'react';

const servicesData = [
    {
        title: 'Technical Support',
        description: 'Get support for Google Workspace plans anytime you need it from our team of professional Google wizards.',
        icon: ICONS.icon1,
    },
    {
        title: 'Email Migration',
        description: 'With the aid of migration tools & services, all of your essential business files may be easily migrated to G suite.',
        icon: ICONS.icon1,
    },
    {
        title: 'Step-Up & Configure',
        description: 'You may not have enough time to set up. This is something that our G Suite reseller experts can do swiftly for you.',
        icon: ICONS.icon1,
    },
    {
        title: 'Free Consultation',
        description: "We provide a support team for Google Workspace plans management to help maximise your team's productivity.",
        icon: ICONS.icon1,
    },
    {
        title: 'Empowering Your Tech Team',
        description: 'We at Now Digital Easy assist your technology team with Control Panel, Security Settings, and Group options & more.',
        icon: ICONS.icon1,
    },
    {
        title: 'Pay Your Way',
        description: 'Easy Google workspace pricing & payment options. Wire Transfer, NEFT, Cheque, RTGS, Debit Card, Credit Card, Paypal.',
        icon: ICONS.icon1,
    },
];

const Services = () => {
    return (
        <div className='bg-background-Gsuite-banner py-20 2xl:py-24 bg-opacity-5 relative'>

            <div className="absolute inset-0 z-0">
                <Image
                    src={ICONS.blur}
                    alt="home banner"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className='flex justify-center text-center'>
                    <span className='text-[26px] md:text-[43px] 2xl:text-[54px] max-sm:w-[292px]  font-900 font-roboto text-home-heading relative'>Services What We Provide For You</span>
                </div>
            <div className='grid grid-cpls-1 md:grid-cols-2 xl:grid-cols-3 w-[95%] md:w-[95%] xl:w-[90%] mx-auto justify-center py-16 gap-10'>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className='group flex flex-col w-full md:gap-3 2xl:gap-4  pt-6 pl-6 pr-[9px] bg-white items-start gap-6 relative rounded-xl duration-700 transition-transform hover:bg-background-Gsuite'
                    >
                        <span className='text-home-primary text-[24px] 2xl:text-[38px] font-900 font-roboto group-hover:text-white'>
                            {service.title}
                        </span>
                        <span className='font-roboto-serif text-[15px] 2xl:text-[22px] pb-[64px] max-md:text-lg group-hover:text-white'>
                            {service.description}
                        </span>
                        <Image src={service.icon} alt='icon' className='absolute bottom-0 right-0 rounded-xl group-hover:opacity-50' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
