"use client"
import { useState } from "react";
import { TESTIMONIALS } from "@/assets/data/testmonials";
import TestimonialCard from "./TestimonialsCard";
import Image from "next/image";
import { IMAGES } from "@/assets";
import './style.css'

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <section className="testimonials bg-[#FFFBF0]">
                <div className="flex justify-center">
                    <span className="text-dark-200 text-lg md:text-[28px] text-center xl:text-2xl font-900  text-home-body opacity-70">
                        People just love working with us!
                    </span>
                </div>
                <div className="pb-10 pt-8 flex justify-center text-[#000659]">
                    <span className="text-dark-200 text-[42px] max-lg:text-4xl max-lg:w-[500px] max-md:text-2xl max-md:w-[300px]  font-900 text-center">
                        Digitalized Business Happy Customers That’s Impact
                    </span>
                </div>
                <div className="grid grid-cols-2 lg:gap-x-[30px] lg:gap-y-[30px] sm:gap-x-[24px] sm:gap-y-[20px] max-w-full max-sm:hidden">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} index={index} />

                        
                        // <div key={index} className="w-full md:w-1/2 p-4 flex justify-center">
                        //     <TestimonialCard {...testimonial} index={index} />
                        // </div>
                    ))}
                </div>
                <div className="flex justify-center w-100">
                    <div className="relative block sm:hidden overflow-hidden">
                        <div
                            className="flex items-center transition-transform duration-500"
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
                <div className="flex justify-center mt-2 gap-2 sm:hidden">
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
        </section>

    );
};

export default Testimonials;
