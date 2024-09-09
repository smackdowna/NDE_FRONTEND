import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';


interface StepProps{
    title:String,
    description:String
}
// Reusable Step component
const Step:React.FC<StepProps> = ({ title, description }) => (
  <div className='flex flex-col gap-4 w-[320px]'>
    <div className='flex max-md:justify-center'>
    <Image src={IMAGES.Checkcircle} alt='tick' />
    </div>
    <span className='font-900 font-roboto text-home-heading text-3xl max-md:text-2xl'>{title}</span>
    <span className='font-400 font-roboto-serif text-home-heading text-2xl  max-md:text-xl tracking-tight'>{description}</span>
  </div>
);

const GetStarted = () => {
  const steps = [
    {
      title: 'Create SpotNow Account',
      description: 'Sign up and get started with your new SpotNow account. Enter your details, and you’re all set to begin.'
    },
    {
        title: 'Create SpotNow Account',
        description: 'Sign up and get started with your new SpotNow account. Enter your details, and you’re all set to begin.'
      },
      {
        title: 'Create SpotNow Account',
        description: 'Sign up and get started with your new SpotNow account. Enter your details, and you’re all set to begin.'
      },
      {
        title: 'Create SpotNow Account',
        description: 'Sign up and get started with your new SpotNow account. Enter your details, and you’re all set to begin.'
      },
    // Add more steps here if needed
  ];

  return (
    <div className='py-20 max-md:py-10 bg-background-SpotNow-gettingStarted max-md:text-center'>
      <div className='flex justify-center'>
        <span className='text-6xl max-xl:text-4xl max-lg:text-2xl max-md:text-3xl font-900 text-home-heading font-roboto text-center'>Get Started with SpotNow in Minutes</span>
      </div>
      <div className='flex justify-center pt-8'>
        <span className='text-center font-400 font-roboto-serif text-3xl max-md:text-xl w-[40vw] max-xl:w-full'>Increased efficiency, better management, and much more in no time! Just follow these four steps.</span>
      </div>
      <div className='flex justify-center flex-wrap py-20 max-lg:py-10 gap-32 max-md:gap-10 max-lg:mx-3'>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} />
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
