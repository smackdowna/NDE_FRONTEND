import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import './style.css'


const Hero = () => {
  return (
    <div className="hero relative bg-gradient-hosting-hero">
      <div className="absolute inset-0 z-0">
        <Image 
          src={IMAGES.HostBanner} 
          alt="home banner" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>
      <div className="hero-padding relative z-10 pt-[120px] max-lg:pt-[100px] mx-4 md:mx-10">
        <div className="flex hero-flex justify-between items-center">
          <div className="flex hero-content flex-col gap-[33px] md:gap-8 lg:gap-5 2xl:gap-11 items-center lg:items-start text-center lg:text-left">
            {/* Heading */}
            <h1 className="header1">
            Fast<span></span> Secure<span></span> Stable <br />Web Hosting
            </h1>
            <h1 className="header2">
              EXPERIENCE POWERFUL WEB HOSTING
            </h1>
            <p className="text-left">
            We minimise your downtime with our reliable technical experts and IT infrastructure management
            </p>
            <button className="bg-background-button px-6 md:px-8 lg:px-10 py-2 md:py-4 text-white text-base md:text-lg lg:text-2xl font-700 rounded-[8px] shadow-[0px_2px_2px_0px_#00000040]">
              <div className="flex gap-2 md:gap-3 items-center">
                <span>Get Started</span>
                <Image src={IMAGES.arrow} alt="arrow" />
              </div>
            </button>
          </div>
          {/* Video Placeholder */}
          <div className="aspect-[1.6/1]  w-[40vw] max-lg:w-full hero-image ">
          <Image src={IMAGES.HostHero} alt="hero"/></div>
        </div>
      </div>
      <span className="flex text-center text-3xl max-2xl:text-xl max-lg:text-lg font-600 pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[20px] md:pb-[30px] lg:pb-[40px] leading-[20.4px] text-home-body justify-center font-roboto-serif max-md:px-[2px] max-md:pt-[80px] max-md:pb-[10px]">
        12,000+ global businesses trust us to transform & grow digitally
      </span>
      <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-16 pb-6 overflow-hidden min-xl:px-[6px]">
        <Image src={IMAGES.brand2} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={IMAGES.brand3} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={IMAGES.brand6} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={IMAGES.brand4} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={IMAGES.brand5} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={IMAGES.brand1} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={IMAGES.brand7} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={ICONS.gol}     alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={IMAGES.brand1} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={IMAGES.brand7} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
        <Image src={ICONS.gol}     alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
      </div>
    </div>
  );
};

export default Hero;
