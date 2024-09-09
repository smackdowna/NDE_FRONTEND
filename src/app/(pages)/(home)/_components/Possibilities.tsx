"use client"
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { useState } from "react";

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
        <div>
            <div className="bg-[#FFFBF0] pb-10 ">
                <div className="p-4 max-lg:p-2 mx-28 max-2xl:mx-10 max-lg:mx-0">
                    <div className="flex justify-center mt-10">
                        <h2 className="font-roboto text-[55px] max-lg:text-[38px] max-md:text-3xl text-center  font-800 text-home-heading">One platform. Infinite possibilities.</h2>
                    </div>
                    <div className="flex justify-center mt-3 max-md:mx-4">
                        <div className="bg-border-image-source w-[80%] h-2"></div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <span className="text-center text-[19px] font-roboto-serif font-500 w-[782px] leading-[28.05px]">
                            Discover our range of innovative solutions designed to streamline your operations, enhance productivity, and drive growth.
                        </span>
                    </div>
                    <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 max-lg:mx-4">
                        {cardContent.map((content, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`relative w-full  hover:scale-105 rounded-[10px] p-[2px] transition-all duration-300 ${hoveredCard === index ? 'bg-gradient-to-r from-blue-500 to-yellow-500' : 'bg-transparent'}`}
                            >
                                <div className="w-full h-full bg-white rounded-[8px] p-6">
                                    <div className="flex gap-4 w-full">
                                        <span className={`text-[24px] font-800 text-home-heading }`}>
                                            {content.title}
                                        </span>
                                        <Image src={hoveredCard === index ? IMAGES.arrowright : ICONS.cardarrow} alt="arrow" className={`${hoveredCard === index ? 'w-[18px]' : ''} duration-300`} />
                                    </div>
                                    <div className="mt-3">
                                        <span className="text-home-body font-roboto-serif font-400 text-[17px] w-full opacity-60">{content.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Possibilities;
