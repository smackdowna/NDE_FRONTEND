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
        title: 'Cloud Solutions',
        description: 'Leverage the power of the cloud with our tailored Google Cloud solutions to meet your business needs.',
        icon: ICONS.icon1,
    },
    {
        title: 'Security Services',
        description: 'Ensure your data and operations are secure with our comprehensive security services.',
        icon: ICONS.icon1,
    },
    {
        title: 'Migration Assistance',
        description: 'Seamlessly migrate your data and services to Google Workspace with our expert assistance.',
        icon: ICONS.icon1,
    },
    {
        title: 'Training and Development',
        description: 'Empower your team with in-depth training and development on Google Workspace tools.',
        icon: ICONS.icon1,
    },
    {
        title: 'Custom Solutions',
        description: 'Get custom solutions tailored to your specific business needs with our expert consulting.',
        icon: ICONS.icon1,
    },
];

const Services = () => {
    return (
        <div className='bg-background-Gsuite-banner py-24 bg-opacity-5 relative'>

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
                    <span className='text-7xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-4xl max-md:text-3xl  font-900 font-roboto text-home-heading relative'>Services We Provide For You</span>
                </div>
            <div className='flex flex-wrap justify-center py-16 gap-10'>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className='group flex flex-col p-4 bg-white items-start gap-6 w-[27vw] max-lg:w-[45vw] max-md:w-[90vw] relative rounded-xl duration-700 transition-transform hover:bg-background-Gsuite'
                    >
                        <span className='text-home-primary text-4xl max-md:text-2xl font-900 font-roboto group-hover:text-white'>
                            {service.title}
                        </span>
                        <span className='font-roboto-serif text-3xl pb-10 max-md:text-lg group-hover:text-white'>
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
