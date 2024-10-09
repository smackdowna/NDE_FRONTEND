import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import './style.css'



const Hero = () => {
  return (
    <div className="relative bg-background-Gsuite">
      <div className="absolute inset-0 z-0">
        <Image 
          src={ICONS.blur} 
          alt="home banner" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>
      <div className="hero relative z-10 ">
        <div className="hero-flex flex justify-between items-center">
          <div className="hero-content flex flex-col gap-10 ">
            {/* Heading */}
            <h1 >
            Empower Your Team With  Google Workspace</h1>
            <p className="show-p text-left">
            We minimise your downtime with our reliable technical experts and IT infrastructure management
            </p>
            <ul>
              <li><p>Custom Business Email</p></li>
              <li><p>30 GB of Cloud Storage</p></li>
              <li><p>High Standard Security</p></li>
              <li><p>100 Meet Participant</p></li>
            </ul>
            <div className="">
              <div className="show-1280 mb-2">
                <p className="text-left">Starts at</p>
                <h4 className="text-[#0011FF]">₹136/user/mo</h4>
              </div>
              <button className="bg-background-button w-fit px-6 md:px-8 lg:px-10 py-2 md:py-4 text-white text-base md:text-lg lg:text-2xl font-700 rounded-[8px] shadow-[0px_2px_2px_0px_#00000040]">
                <div className="flex gap-2 md:gap-3 items-center">
                  <span>Get Started</span>
                  <Image src={IMAGES.arrow} alt="arrow" />
                </div>
              </button>
            </div>
          </div>
          {/* Video Placeholder */}
          <div className="hero-video flex items-center justify-start">
            <Image src={IMAGES.gsuiteHeroImg} alt="hero" className="large-video"/>
            <Image src={IMAGES.gsuiteHeroAnimation} alt="hero" className="small-video"/>
          </div>
        </div>
      </div>
      <span className="flex text-center text-3xl max-2xl:text-xl max-lg:text-lg font-600 pt-[80px] relative md:pt-[100px] lg:pt-[120px] leading-[20.4px] text-home-body justify-center font-roboto-serif">
        12,000+ global businesses trust us to transform & grow digitally
      </span>
      <div className="flex justify-center mt-[14px] md:mt-4 items-center gap-4 md:gap-8 lg:gap-16 pb-10 relative  overflow-hidden ">
        <Image src={IMAGES.brand2} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={IMAGES.brand3} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={IMAGES.brand6} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={IMAGES.brand4} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={IMAGES.brand5} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={IMAGES.brand1} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={IMAGES.brand7} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={ICONS.gol}     alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={IMAGES.brand1} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={IMAGES.brand7} alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
        <Image src={ICONS.gol}     alt="" className="w-[60px] md:w-[80px] lg:w-[140px] h-[60px] md:h-[80px] lg:h-[140px]" />
      </div>
    </div>
  );
};

export default Hero;
