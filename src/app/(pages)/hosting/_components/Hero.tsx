import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="relative bg-gradient-hosting-hero">
      <div className="absolute inset-0 z-0">
        <Image 
          src={IMAGES.HostBanner} 
          alt="home banner" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>
      <div className="relative z-10 pt-[120px] max-lg:pt-[100px] mx-4 md:mx-10">
        <div className="flex flex-col lg:flex-row justify-between items-center ml-[82px] mr-[4vw] gap-10 max-2xl:gap-10 max-xl:mr-0 max-2xl:ml-6 max-2xl:mr-0">
          <div className="flex flex-col gap-5 max-md:gap-4 items-center lg:items-start text-center lg:text-left">
            {/* Heading */}
            <h1 className="text-[70px] leading-tight   tracking-tighter  max-md:text-2xl  max-2xl:text-[48px] max-xl:text-[38px] font-roboto  text-home-heading font-800">
            Fast<span className=" text-home-primary font-mono">.</span> Secure<span className=" text-home-primary font-mono">.</span>Stable <br />Web Hosting
            </h1>
            <p className="text-3xl max-2xl:text-[22px] max-xl:text-lg font-roboto-serif  text-text-900/80 w-[740px] max-2xl:w-[600px] max-xl:w-[550px] max-lg:w-[400px] max-md:w-[320px] max-sm:w-[300px]">
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
          <div className="aspect-[1.6/1]  w-[40vw] max-lg:w-full ">
          <Image src={IMAGES.HostHero} alt="hero"/></div>
        </div>
      </div>
      <span className="flex text-center text-3xl max-2xl:text-xl max-lg:text-lg font-600 pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[20px] md:pb-[30px] lg:pb-[40px] leading-[20.4px] text-home-body justify-center font-roboto-serif">
        12,000+ global businesses trust us to transform & grow digitally
      </span>
      <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-16 pb-6 overflow-hidden ">
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
