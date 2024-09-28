import React from 'react';
import { ICONS } from "@/assets";
import Image from "next/image";
import Title from './Title';

const data = [
    {
        title: "Activity Timeline",
        description: "Stay in the loop with a visual timeline of your team's daily activities, ensuring transparency and accountability.",
        imgSrc: ICONS.time
    },
    {
        title: "Daily Attendance",
        description: "Effortlessly record and monitor daily attendance that eliminates confusions and proxies.",
        imgSrc: ICONS.attendance,
    },
    {
        title: "Live Tracking",
        description: "Instantly pinpoint the exact location of your field employees for precise monitoring and efficient task allocation.",
        imgSrc: ICONS.liveTracking,
    },
    {
        title: "Task Management",
        description: "Assign, prioritize, and monitor tasks in real-time, ensuring your team stays focused and productive.",
        imgSrc: ICONS.taskManagement,
    },
    {
        title: "User-Friendly Interface",
        description: "Intuitive and easy-to-navigate platform that requires no technical expertise for seamless integration into your workflow.",
        imgSrc: ICONS.userInterface,
    },
    {
        title: "Reports & Analytics",
        description: "Generate reports of your business with real-time insights of your KPIs to make better, data-driven decisions.",
        imgSrc: ICONS.reports,
    },
];

const Power = () => {
    return (
        <div className='bg-[#EEFDF6]'>
            <div className='flex flex-col'>
                <div className='max-2xl:pt-20'>
                 <Title
                    title="Power your Field Service Team and Deliver Better Results"
                    description=" SpotNow is your key to seamless, agile, and data-driven workforce management."
                    descriptionWidth='max-2xl:w-[936px]'
                    titleWidth = 'max-2xl:w-[752px] max-lg:w-[752px] 2xl:mt-28'
                />
                </div>
                
                <div className='flex justify-center flex-wrap gap-10 py-16'>
                    {data.map((item, index) => (
                        <div key={index} className='bg-white w-[27vw] max-lg:w-[40vw] max-md:w-[80vw] py-10 px-4 shadow-xl rounded-xl'>
                            <div className='flex justify-center py-4'>
                                <Image src={item.imgSrc} alt='brand' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='font-900 font-roboto text-home-heading text-3xl max-lg:text-xl max-2xl:text-2xl text-center'>
                                    {item.title}
                                </span>
                                <span className='font-roboto-serif font-500 text-2xl max-2xl:text-lg max-md:text-lg text-center text-customGray'>
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Power;
