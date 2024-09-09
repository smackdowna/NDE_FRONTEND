import { ICONS, IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'


interface StepProps {
    image: string;
    title: string;
    description: string;
}

// Step component
const Step: React.FC<StepProps> = ({ image, title, description }) => (
    <div className='flex flex-col gap-4 w-[27vw] max-xl:w-[350px] max-md:w-[300px]'>
        <Image src={image} alt='tick' className='' />
        <span className='font-900 font-roboto text-home-heading text-3xl max-md:text-xl pr-16 max-md:pr-0'>{title}</span>
        <span className='font-400 font-roboto-serif text-home-heading text-2xl max-md:text-lg tracking-tight'>{description}</span>
    </div>
);

const Tool = () => {
    const steps = [
        { image: IMAGES.tracking, title: 'Create SpotNow Account', description: 'Sign up and get started with your new SpotNow account. Enter your details, and you’re all set to begin.' },
        { image: IMAGES.tracking1, title: 'Set Up Your Profile', description: 'Complete your profile setup by adding necessary details and preferences.' },
        { image: IMAGES.tracking2, title: 'Explore Features', description: 'Discover the various features of SpotNow and how they can benefit you.' },
    ];

    return (
        <div className='py-40 max-md:py-10 bg-[#EEFDF6] max-md:text-center'>
            <div className='flex justify-center'>
                <span className='text-6xl max-2xl:text-4xl max-xl:text-3xl max-md:tracking-tight font-900 text-home-heading font-roboto text-center'>Get Started with SpotNow in Minutes</span>
            </div>
            <div className='flex justify-center pt-8'>
                <span className='text-center font-400 font-roboto-serif text-3xl max-xl:text-xl w-[40vw] max-lg:w-full'>Increased efficiency, better management, and much more in no time! Just follow these three steps.</span>
            </div>
            <div className='flex justify-center flex-wrap py-20 max-md:py-10 gap-10 max-md:gap-20'>
                {steps.map((step, index) => (
                    <Step
                        key={index}
                        image={step.image}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Tool
