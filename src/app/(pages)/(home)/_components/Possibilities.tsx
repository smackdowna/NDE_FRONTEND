"use client"
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import './style.css'

// Define the type for card content
type CardContent = {
    title: string;
    description: string;
};

const cardContent: CardContent[] = [
    {
        title: "NDE Mail",
        description: "Guaranteed privacy and seamless, ad-free emails for your business...."
    },
    {
        title: "Spot Now",
        description: "Real-time field employee tracking for enhanced efficiency and oversight..."
    },
    {
        title: "Mails Now",
        description: "Create and automate personalised emails with dedicated IP and unlimited warm-up..."
    },
    {
        title: "Chat Now",
        description: "Streamline workflows and boost productivity with advanced CRM analytics."
    },
    {
        title: "Vision Now",
        description: "Streamline workflows and boost productivity with advanced CRM analytics."
    },
    {
        title: "Marketing Studio",
        description: "Manage customer interactions across multiple platforms from one dashboard..."
    }
];

const Possibilities: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section className='Possibilities bg-[#FFFBF0]'>
            <div className="flex gap-[14px] flex-col items-center">
                <div className="possibilities-header">
                <div className="flex justify-center mt-10">
                    <h2 className="text-[#000659]">One platform. Infinite possibilities.</h2>
                </div>
                <div className="flex justify-center mt-1 max-md:mx-4">
                    <div className="bg-border-image-source w-[100%] h-[5px] sm:mt-[12px]"></div>
                </div>
                </div>
                <div className="flex justify-center w-[100%] lg:w-[60%] sm:w-[80%]">
                    <p className="text-home-body">
                        Discover our range of innovative solutions designed to streamline your operations, enhance productivity, and drive growth.
                    </p>
                </div>
                <div className="grid w-full gap-y-[15px] lg:gap-x-[30px] lg:gap-y-[40px] md:gap-y-[30px] md:gap-x-[20px] sm:gap-x-[20px] sm:gap-y-[20px] md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 max-lg:mx-4 mt-[24px]">
                {cardContent.map((content, index) => (
                    <div
                    key={index}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative w-full cursor-pointer hover:scale-105 lg:hover:scale-105 rounded-[10px] p-[2px] transition-all duration-300 ${
                        hoveredCard === index ? 'bg-gradient-to-r from-blue-500 to-yellow-500' : 'bg-transparent'
                    } transform-gpu`}
                    >
                    <div className="w-full h-full bg-white rounded-[8px] p-6">
                        <div className="flex gap-4 items-center w-full">
                        <h5 className="text-[24px] font-black text-home-heading">
                            {content.title}
                        </h5>
                        <div className="relative w-[24px] h-[24px] flex items-center justify-center">
                            <Image 
                                src={hoveredCard === index ? IMAGES.arrowright : ICONS.cardarrow} 
                                alt="arrow" 
                                className={`${hoveredCard === index ? 'w-[18px]' : ''} duration-300`} 
                            />
                        </div>
                        </div>
                        <div className="mt-3">
                        <span className="sub-para text-[#000334]" style={{lineHeight: 1.65, opacity:0.8}}>{content.description}</span>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Possibilities;
