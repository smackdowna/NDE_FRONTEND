"use client"
import { useState } from "react";
import { TESTIMONIALS } from "@/assets/data/testmonials";
import TestimonialCard from "./TestimonialsCard";
import Image from "next/image";
import { IMAGES } from "@/assets";

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <div className=" bg-[#FFFBF0]">
            <div className=" gap-10 pb-36 max-md:pb-10 mx-24 max-2xl:mx-2">
                <div className="pt-28 max-md:pt-10 flex justify-center">
                    <span className="text-dark-200 text-lg md:text-[28px] text-center xl:text-2xl font-900  text-home-body opacity-70">
                        People just love working with us!
                    </span>
                </div>
                <div className="pb-10 pt-8 flex justify-center text-[#000659]">
                    <span className="text-dark-200 text-[42px] max-lg:text-4xl max-lg:w-[500px] max-md:text-2xl max-md:w-[300px]  font-900 text-center">
                        Digitalized Business Happy Customers That’s Impact
                    </span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 max-w-full max-md:hidden">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} index={index} />
                    ))}
                </div>
                <div className="flex justify-center ">
                    <div className="relative md:hidden mx-8 overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <TestimonialCard {...testimonial} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center m-4 gap-2 md:hidden">
                    {TESTIMONIALS.map((_, index) => (
                        <Image
                            key={index}
                            src={IMAGES.dot}
                            width={10}
                            alt="dot"
                            onClick={() => handleDotClick(index)}
                            className={`cursor-pointer ${currentIndex === index ? "opacity-100" : "opacity-50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Testimonials;
