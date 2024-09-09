import React from 'react';
import { IMAGES } from "@/assets";
import Image from "next/image";

const data = [
    {
        title: "Activity Timeline",
        description: "Stay in the loop with a visual timeline of your team's daily activities, ensuring transparency and accountability.",
        imgSrc: IMAGES.spotBrand,
    },
    {
        title: "Activity Timeline",
        description: "Stay in the loop with a visual timeline of your team's daily activities, ensuring transparency and accountability.",
        imgSrc: IMAGES.spotBran1,
    },
    {
        title: "Activity Timeline",
        description: "Stay in the loop with a visual timeline of your team's daily activities, ensuring transparency and accountability.",
        imgSrc: IMAGES.spotBrand,
    },
    {
        title: "Activity Timeline",
        description: "Stay in the loop with a visual timeline of your team's daily activities, ensuring transparency and accountability.",
        imgSrc: IMAGES.spotBrand,
    },
    {
        title: "Activity Timeline",
        description: "Stay in the loop with a visual timeline of your team's daily activities, ensuring transparency and accountability.",
        imgSrc: IMAGES.spotBran1,
    },
    {
        title: "Activity Timeline",
        description: "Stay in the loop with a visual timeline of your team's daily activities, ensuring transparency and accountability.",
        imgSrc: IMAGES.spotBran1,
    },
];

const Power = () => {
    return (
        <div className='bg-[#EEFDF6]'>
            <div className='flex flex-col'>
                <div className='flex justify-center text-center'>
                    <span className='px-2 max-xl:text-3xl max-md:text-2xl tracking-tighter font-roboto text-6xl text-home-heading font-900 pt-28 pb-10'>
                        Power your Field Service Team and Deliver Better Results
                    </span>
                </div>
                <span className='font-500 font-roboto-serif text-3xl max-lg:text-xl text-center'>
                    SpotNow is your key to seamless, agile, and data-driven workforce management.
                </span>
                <div className='flex justify-center flex-wrap gap-10 py-16'>
                    {data.map((item, index) => (
                        <div key={index} className='bg-white w-[27vw] max-lg:w-[40vw] max-md:w-[80vw] py-10 px-4 shadow-2xl rounded-xl'>
                            <div className='flex justify-center py-4'>
                                <Image src={item.imgSrc} alt='brand' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='font-900 font-roboto text-home-heading text-3xl max-lg:text-xl text-center'>
                                    {item.title}
                                </span>
                                <span className='font-roboto-serif font-500 text-2xl max-md:text-lg text-center'>
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
