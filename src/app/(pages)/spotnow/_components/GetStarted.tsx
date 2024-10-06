import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';
import Title from './Title';
import './style.css';


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
    <h4 >{title}</h4>
    <p>{description}</p>
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
        descriptionWidth='lg:w-[70%] w-[90%]'
      />
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-16 py-16 powerGrid w-full place-items-center'>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} />
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
