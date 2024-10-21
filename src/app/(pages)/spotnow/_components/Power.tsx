import React from 'react';
import { ICONS } from "@/assets";
import Image from "next/image";
import Title from './Title';
import './style.css'

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
        <div className='power bg-[#EEFDF6] sm:pt-[80px] pt-[40px]'>
            <div className='flex flex-col'>
                <div className='max-2xl:pt-20'>
                 <Title
                    title="Power your Field Service Team and Deliver Better Results"
                    description=" SpotNow is your key to seamless, agile, and data-driven workforce management."
                    descriptionWidth='w-[90%] text-[22px] lineHeight-[1.65]'
                    titleWidth = 'max-2xl:w-[752px] max-lg:w-[752px] 2xl:mt-28'
                />
                </div>
                
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-4 md:px-8 px-4 md:py-8 py-4 powerGrid'>
                    {data.map((item, index) => ( 
                        <div key={index} className='bg-white  py-10 px-4 shadow-xl rounded-xl'>
                            <div className='flex justify-center py-4'>
                                <Image src={item.imgSrc}  alt='brand' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='font-900 font-roboto text-home-heading text-3xl max-lg:text-xl max-2xl:text-2xl text-center'>
                                    {item.title}
                                </span>
                                <p className='sub-para' style={{opacity: 0.7, textAlign:'center'}}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Power;
