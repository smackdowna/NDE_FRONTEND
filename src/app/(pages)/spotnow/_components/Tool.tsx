import { ICONS, IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Title from './Title'


interface StepProps {
    image: string;
    title: string;
    description: string;
}

// Step component
const Step: React.FC<StepProps> = ({ image, title, description }) => (
    <div className='flex-tool gap-4 '>
        <Image src={image} alt='tick' className='' />
        <div className="content-container">
        <h3 className='text-home-heading text-left lg:block hidden' style={{lineHeight: 1.2}}>{title}</h3>
        <h5 className='text-home-heading text-left block lg:hidden '>{title}</h5>
        <p className=' text-home-heading text-left text-[22px]' style={{lineHeight:1.65, opacity:0.8}}>{description}</p>
        </div>
    </div>
);

const Tool = () => {
    const steps = [
        { image: IMAGES.tracking, title: 'Real-Time Tracking', description: 'Monitor and manage your team’s activities instantly, anytime, anywhere.' },
        { image: IMAGES.tracking1, title: 'Boosted Productivity', description: 'Streamline tasks and enhance efficiency with actionable insights.' },
        { image: IMAGES.tracking2, title: 'Simple & Intuitive', description: 'Easy-to-use interface that simplifies complex operations effortlessly.' },
    ];

    return (
        <section className='toolSection bg-[#EEFDF6]'>
           
           <div className="w-full hidden items-center justify-center lg:flex">
            <Title
                title='Why You Choose NDE’s SpotNow tool?'
                description='Experience seamless field workforce management with SpotNow, designed to optimize and elevate your operations.' 
                titleWidth=''
                descriptionWidth='max-w-[780px]'
                />
           </div>
           <div className="w-full flex items-center justify-center lg:hidden">
            <Title
                title='Why You Choose SpotNow?'
                description='Experience seamless field workforce management with SpotNow, designed to optimize and elevate your operations.' 
                titleWidth=''
                descriptionWidth='max-w-[780px]'
                />
           </div>
    
            <div className='tool-flex flex justify-between mt-[32px]'>
                {steps.map((step, index) => (
                    <Step
                        key={index}
                        image={step.image}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Tool
