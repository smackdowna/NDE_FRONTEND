"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import './style.css'

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
    className={`relative hover:scale-105 max-w-[400px] w-[95%] group shadow-[0px_2px_2px_0px_#00000040]  rounded-[10px] p-[2px] transition-all duration-300 ${
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
    <div className="relative bg-white pt-[15.34px] md:pt-[22.26px] xl:pt-[15.34px] 2xl:pt-[26.52px] px-[12.62px] md:px-[16.64] xl:px-[12.62px] 2xl:px-4 pb-[25.92px] md:pb-[30px] xl:pb-[25.92px] 2xl:pb-[51.17px] rounded-[10px] flex flex-col gap-4 h-full">
      <Image
        src={image}
        alt="domain"
        className={`absolute bottom-0 right-0 w-[50%] transition-opacity duration-300 ${
          hoveredCard === index ? "opacity-100" : "opacity-70"
        }`}
      />
      <div className="relative z-10 flex flex-col">
        <span className="font-900 text-[24px] md:text-[26px] xl:text-[24px] 2xl:text-[38px] leading-normal md:leading-[31.2px] xl:leading-normal 2xl:leading-[45.6px] tet-home-headinxg text-home-heading">
          •{title}
        </span>
        <div className="flex flex-col">
          <span className="font-900 text-[15.4px] md:text-[17px] xl:text-[14px] 2xl:text-[24px] leading-[15.4px] xl:mt-[22.5px] 2xl:mt-[35.54px] md:leading-normal xl:leading-[15.4px] 2xl:leading-normal text-[#000] mt-[22.5px] md:mt-[29.69px]">{price}</span>
          <span className="text-[#000] text-[10px] md:text-xs xl:text-[10px] 2xl:text-[15px] lg:text-[15px] leading-[16.5px] font-roboto-serif mt-[12.56px] md:mt-[9.86px] xl:mt-[12.56px] 2xl:mt-3 font-bold">
            Instead of {originalPrice}
          </span>
        </div>
        <div className="items-center gap-1 mt-[17.34px] get-offer-hidden">
          <span className="text-[#000] font-roboto font-extrabold text-xs leading-[13.2px]">
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
    <section className="perfectDomain flex flex-col gap-4 md:gap-[7.56px] xl:gap-[30px] 3xl:gap-[37px] bg-home-primary-card">
      <div className="flex flex-col items-center justify-center">
        {/* Build your brand with the perfect domain name span */}
        <h2 className="text-center  text-home-heading z-10 tracking-tight mx-auto sm:block hidden lg:max-w-[90%] md:max-w-[500px]">
          Build your brand with the perfect domain name
        </h2>
        <h3 className="text-center  text-home-heading z-10 tracking-tight mx-auto sm:hidden block">
          Build your brand with the perfect domain name
        </h3>

        {/* With more than 300 domain extensions span */}
        <p className="text-[#000334] text-center sm:opacity-100 text-opacity-70 mt-2 md:max-w-[450px] lg:max-w-[100%] mb-8">
          With more than 300 domain extensions, you&apos;ll find the one that
          fits just right.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="perfectDomain-grid place-items-center">
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
    </section>
  );
};

export default Perfectdomain;
