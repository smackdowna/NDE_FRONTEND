"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";
import './style.css'

// Define a type for the Button props
type ButtonProps = {
    text: string;
    onClick: () => void;
    isActive: boolean;
};

const Button = ({ text, onClick, isActive }: ButtonProps) => (
    <button
        onClick={onClick}
        className={`text-[15px] border-[2px]
        ${isActive ? "bg-transparent md:bg-[#0011FF] border-[#0011FF] md:text-white sm:text-[#0011FF]" : "text-black border-black"} 
        font-700 hover:text-white hover:bg-[#0011FF]  p-2 rounded`}
    >
        <span>{text}</span>
    </button>
);

const Accelerate = () => {
    const sliderRef = useRef<Slider | null>(null);
    const cards = [ICONS.card, ICONS.card, ICONS.card, ICONS.card, ICONS.card];
    const [activeButton, setActiveButton] = useState("Mails Now");
    const [currentSlide, setCurrentSlide] = useState(0);

    const buttons = ["Mails Now", "NDE Mail", "Vision Now", "Chat Now", "Spot Now"];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        centerPadding: "100px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (index: number) => {
            setActiveButton(buttons[index]);
            setCurrentSlide(index);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };

    const handleButtonClick = (index: number, text: string) => {
        sliderRef.current?.slickGoTo(index);
        setActiveButton(text);
    };

    useEffect(() => {
        // Set the initial slide to "Mails Now"
        sliderRef.current?.slickGoTo(0);
    }, []);

    return (
        <section className="accelerate bg-gradient-acc max-lg:bg-gradient-acc1">
            <div className="flex justify-center mt-10 md:w-[90%] w-full mx-auto">
                <h2 className="text-home-heading">
                    Accelerate Outcomes and Supercharge Experience with Ready to Go Solutions
                </h2>
            </div>
            <div className="border-img sm:flex justify-center mt-4 hidden  md:w-[80%] mx-auto">
                <div className="bg-border-image-source md:w-[100%] max-lg:w-[700px] h-[5px]"></div>
            </div>
            <div className="flex justify-center text-white">
                <div className="flex justify-center flex-wrap gap-8 max-lg:gap-4 mt-8">
                    {buttons.map((text, index) => (
                        <Button
                            key={text}
                            text={text}
                            onClick={() => handleButtonClick(index, text)}
                            isActive={activeButton === text}
                        />
                    ))}
                </div>
            </div>
            <div className="flex authSlider justify-center relative">
                <Slider {...settings} ref={sliderRef} className="w-full my-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`md:px-4 px-0 transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-30"}`}
                        >
                            <Image src={card} alt="card" layout="responsive" objectFit="cover" />
                        </div>
                    ))}
                </Slider>
                <button className="absolute bg-[#0011FF] left-[30px] top-1/2 transform -translate-y-1/2" onClick={() => sliderRef.current?.slickPrev()}>
                    <Image src={ICONS.arrowleft} alt="left" />
                </button>
                <button className="absolute bg-[#0011FF] right-[30px] top-1/2 transform -translate-y-1/2" onClick={() => sliderRef.current?.slickNext()}>
                    <Image src={ICONS.arrowleft} alt="right" className="rotate-180" />
                </button>
            </div>
        </section>
    );
};

// Custom Next Arrow component
const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-[#0011FF]`}
            style={{ ...style, display: "block", right: "30px" }}
            onClick={onClick}
        >
            <Image src={ICONS.arrowleft} alt="right" className="rotate-180" />
        </div>
    );
};

// Custom Prev Arrow component
const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-[#0011FF]`}
            style={{ ...style, display: "block", left: "30px" }}
            onClick={onClick}
        >
            <Image src={ICONS.arrowleft} alt="left" />
        </div>
    );
};

export default Accelerate;
