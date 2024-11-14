import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

const RecentBlog = () => {
    // Assuming IMAGES.blog1 is defined and contains the correct image URL
    
    // Example data for demonstration
    const blogs = [
        {
            id: 1,
            image: IMAGES.blog1,
            title: "The dos and don'ts of internal communication.",
            content: "Effective internal communication is key to any organization’s success. It brings employees together, boosts collaboration, and keeps morale high. To achieve this, follow these essential practices."
        },
        {
            id: 2,
            image: IMAGES.blog1,
            title: "The dos and don'ts of internal communication.",
            content: "Effective internal communication is key to any organization’s success. It brings employees together, boosts collaboration, and keeps morale high. To achieve this, follow these essential practices."
        },
        {
            id: 3,
            image: IMAGES.blog1,
            title: "The dos and don'ts of internal communication.",
            content: "Effective internal communication is key to any organization’s success. It brings employees together, boosts collaboration, and keeps morale high. To achieve this, follow these essential practices."
        },
        // Add more blog entries as needed
    ];

    return (
        <div className='max-width overflow-hidden max-lg:overflow-x-scroll'>
            <div className='flex py-10 gap-10 mx-4 max-lg:gap-6 justify-center w-[1100px]'>
                {blogs.map(blog => (
                    <div key={blog.id} className='flex flex-col border p-4 rounded-[20px] w-[365px] gap-6 shadow-xl'>
                        <Image src={blog.image} alt='blogImage' />
                        <span className='font-source-sans-pro font-900 text-2xl'>{blog.title}</span>
                        <span className='font-merriweather'>{blog.content}</span>
                        <div>
                            <button className='border p-2 rounded-full text-primary-300 font-merriweather px-8 text-[15px] font-900'>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentBlog;
