import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';
import Title from './Title';


interface StepProps{
    title:String,
    description:String
}
// Reusable Step component
const Step:React.FC<StepProps> = ({ title, description }) => (
  <div className='flex items-center md:items-start flex-col gap-4 w-[320px] max-2xl:w-[300px]  '>
    <div className='flex  '>
    <Image src={IMAGES.Checkcircle} alt='tick'/>
    </div>
    <span className=' text-3xl max-md:text-[-36px] font-roboto font-900 max-2xl:text-[26px] '>{title}</span>
    <span className=' font-400 font-roboto-serif text-2xl  max-md:text-lg tracking-tight max-2xl:text-[17px] max-2xl:w-[285px]'>{description}</span>
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
    <div className='py-20 max-2xl:py-10   max-md:py-10 bg-background-SpotNow-gettingStarted max-md:text-center'>
       <Title
        title="Get Started with SpotNow in Minutes"
        description="Increased efficiency, better management, and much more in no time! Just follow these four steps."
        titleWidth=''
        descriptionWidth='max-2xl:w-[742px] 2xl:w-[728px]'
      />
      <div className='flex justify-center flex-wrap py-20 max-lg:py-10 max-2xl:gap-2 gap-32 max-2xl:w-full max-md:gap-10 max-lg:mx-3'>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} />
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
