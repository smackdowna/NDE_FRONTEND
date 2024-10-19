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
  <div className='steps-getStarted flex items-center md:items-start flex-col gap-4 '>
    <div className='flex  '>
    <Image src={IMAGES.Checkcircle} alt='tick'/>
    </div>
      <h3 className='hidden lg:block text-left text-home-heading' style={{lineHeight:1.2}}>{title}</h3>
      <h4 className='block lg:hidden text-home-heading'>{title}</h4>
      <p className='text-home-body'>{description}</p>
  </div>
);

const GetStarted = () => {
  const steps = [
    {
      title: 'Create SpotNow Account',
      description: 'Sign up and get started with your new SpotNow account. Enter your details, and you’re all set to begin.'
    },
    {
        title: 'Add Field Team',
        description: 'Effortlessly onboard your employees by adding them to the system. Ensure everyone is connected and ready to track.'
      },
      {
        title: 'Dashboard Personalisation',
        description: 'Customize your dashboard to reflect your specific tracking needs. Arrange tools and insights for maximum efficiency.'
      },
      {
        title: 'Start Tracking',
        description: 'Begin tracking daily activities and gaining valuable insights instantly. Watch your operations transform in real-time.'
      },
    // Add more steps here if needed
  ];

  return (
    <div className='getStartedSection py-20 max-2xl:py-10   max-md:py-10 bg-background-SpotNow-gettingStarted max-md:text-center'>
       <Title
        title="Get Started with SpotNow in Minutes"
        description="Increased efficiency, better management, and much more in no time! Just follow these four steps."
        titleWidth=''
        descriptionWidth='lg:w-[70%] w-[90%]'
      />
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-16 md:py-16 py-8 powerGrid w-full place-items-center'>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} />
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
