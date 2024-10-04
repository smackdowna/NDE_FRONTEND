"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

interface DomainCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  index: number;
  hoveredCard: number | null;
  setHoveredCard: React.Dispatch<React.SetStateAction<number | null>>;
}

const DomainCard: React.FC<DomainCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  index,
  hoveredCard,
  setHoveredCard,
}) => (
  <div
    onMouseEnter={() => setHoveredCard(index)}
    onMouseLeave={() => setHoveredCard(null)}
    className={`relative hover:scale-105 w-full max-w-[400px] group shadow-[0px_2px_2px_0px_#00000040]  rounded-[10px] p-[2px] transition-all duration-300 ${
      hoveredCard === index
        ? "bg-gradient-to-r from-blue-500 to-yellow-500"
        : "bg-transparent"
    }`}
    style={{
      background:
        hoveredCard === index
          ? "linear-gradient(0deg, rgba(233,45,253,1) 0%, rgba(136,114,226,1) 55%)"
          : "transparent",
    }}
  >
    <div className="relative bg-white pt-[15.34px] md:pt-[22.26px] xl:pt-[15.34px] 2xl:pt-[26.52px] px-[12.62px] md:px-[16.64] xl:px-[12.62px] 2xl:px-4 pb-[25.92px] md:pb-[43.9px] xl:pb-[25.92px] 2xl:pb-[51.17px] rounded-[10px] flex flex-col gap-4 h-full">
      <Image
        src={image}
        alt="domain"
        className={`absolute bottom-0 right-0 w-[50%] transition-opacity duration-300 ${
          hoveredCard === index ? "opacity-100" : "opacity-70"
        }`}
      />
      <div className="relative z-10 flex flex-col">
        <span className="font-900 text-[24px] md:text-[26px] xl:text-[24px] 2xl:text-[38px] leading-normal md:leading-[31.2px] xl:leading-normal 2xl:leading-[45.6px] tet-home-headinxg">
          •{title}
        </span>
        <div className="flex flex-col">
          <span className="font-900 text-[15.4px] md:text-[17px] xl:text-[14px] 2xl:text-[24px] leading-[15.4px] xl:mt-[22.5px] 2xl:mt-[35.54px] md:leading-normal xl:leading-[15.4px] 2xl:leading-normal text-[#000] mt-[22.5px] md:mt-[29.69px]">{price}</span>
          <span className="text-[#000] text-[10px] md:text-xs xl:text-[10px] 2xl:text-[15px] leading-[16.5px] font-roboto-serif font-400 mt-[12.56px] md:mt-[9.86px] xl:mt-[12.56px] 2xl:mt-3">
            Instead of {originalPrice}
          </span>
        </div>
        <div className="flex items-center gap-1 mt-[17.34px] hidden max-1xl:flex max-lg:hidden max-md:flex">
          <span className="text-[#000] font-roboto font-700 text-xs leading-[13.2px]">
            Get Offer
          </span>
          <Image
            src={ICONS.getofferarrow}
            alt=""
            className="transition-transform duration-300 group-hover:translate-x-2 size-6"
          />
        </div>
      </div>
    </div>
  </div>
);

const Perfectdomain: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const domainDetails: Omit<
    DomainCardProps,
    "index" | "hoveredCard" | "setHoveredCard"
  >[] = [
    {
      image: IMAGES.domainCloud,
      title: "online",
      price: "Rs 999.00/yr",
      originalPrice: "Rs 1500.00/yr",
    },
    {
      image: IMAGES.domainCloud,
      title: "online",
      price: "Rs 999.00/yr",
      originalPrice: "Rs 1500.00/yr",
    },
    {
      image: IMAGES.domainCloud,
      title: "online",
      price: "Rs 999.00/yr",
      originalPrice: "Rs 1500.00/yr",
    },
    {
      image: IMAGES.domainCloud,
      title: "online",
      price: "Rs 999.00/yr",
      originalPrice: "Rs 1500.00/yr",
    },
    {
      image: IMAGES.domainCloud,
      title: "online",
      price: "Rs 999.00/yr",
      originalPrice: "Rs 1500.00/yr",
    },
    {
      image: IMAGES.domainCloud,
      title: "online",
      price: "Rs 999.00/yr",
      originalPrice: "Rs 1500.00/yr",
    },
    {
      image: IMAGES.domainCloud,
      title: "online",
      price: "Rs 999.00/yr",
      originalPrice: "Rs 1500.00/yr",
    },
    {
      image: IMAGES.domainCloud,
      title: "online",
      price: "Rs 999.00/yr",
      originalPrice: "Rs 1500.00/yr",
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-[7.56px] xl:gap-[30px] 3xl:gap-[37px] bg-home-secondary-card py-[50px] md:py-[79px] xl:py-[80px] 3xl:py-[120px]">
      <div className="flex flex-col items-center justify-center">
        {/* Build your brand with the perfect domain name span */}
        <span className="text-center font-900 font-roboto text-home-heading z-10 text-[64px] max-md:text-[43px] max-2xl:text-[50px] max-3xl:text-[70px] leading-[45.6px] md:leading-[51.6px] 2xl:leading-[76.8px] px-2 sm:px-0 tracking-tight max-3xl:max-w-full max-1xl:max-w-[550px] max-lg:max-w-[677px] max-sm:max-w-[323px] max-w-full mx-auto">
          Build your brand with the perfect domain name
        </span>

        {/* With more than 300 domain extensions span */}
        <span className="text-[#000334] text-center text-[17px] 2xl:text-[27px] leading-[28.5px] 2xl:leading-[36.3px] mt-3 md:mt-5 xl:mt-4 3xl:mt-[30px] font-500 font-roboto-serif tracking-tight max-w-full max-sm:max-w-[286px] max-lg:max-w-[460px] max-1xl:max-w-[290px] max-3xl:max-w-[938px] mx-auto z-10 px-4 sm:px-0">
          With more than 300 domain extensions, you&apos;ll find the one that
          fits just right.
        </span>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 md:gap-[35.63px] xl:gap-[17px] 2xl:gap-[39.91px] w-full px-[30px] md:px-[90px] lg:px-[75px] 3xl:px-[100px]">
          {domainDetails.map((domain, index) => (
            <DomainCard
              key={index}
              index={index}
              image={domain.image}
              title={domain.title}
              price={domain.price}
              originalPrice={domain.originalPrice}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfectdomain;
