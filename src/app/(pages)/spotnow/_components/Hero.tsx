import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import './style.css'

const Hero = () => {
    return (
        <div className="hero relative bg-background-SpotNow pt-20 max-md:pt-2">
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src={IMAGES.spotBanner}
                    alt="home banner"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="relative z-10 pt-[120px] max-lg:pt-[100px] xl:px-[100px] md:px-[64px] sm:pt-[100px] sm:px-[16px]">
                <div className="hero-flex flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col gap-5 max-md:gap-4 items-center md:items-start text-center lg:text-left">
                        {/* Heading */}
                        <h1 className="md:text-left sm:text-center">
                            Simplify, Streamline, Supercharge<br />Your Field Operations </h1>
                        <p className="text-left w-[550px]">
                            Real-time insights, daily work management, live tracking, resource allocation, and much more - all with a cloud-based Field Employee Tracking Software.
                        </p>
                        <button className="hero-btn">
                            Get Free Trial
                        </button>
                    </div>
                    {/* Video Placeholder */}
                    <div className="aspect-[1.6/1] w-[50vw] max-lg:w-full md:flex sm:flex-col sm:items-center sm:justify-center sm:mt-[24px]">
                        <Image src={IMAGES.spotIcon} alt="hero"  />
                    </div>
                </div>
            </div>
            <span className="flex text-center   max-2xl:text-lg max-lg:text-lg 2xl:text-[24px] font-600 pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[20px] md:pb-[30px] lg:pb-[40px] leading-[20.4px] text-home-body justify-center font-roboto-serif max-md:px-4">
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
                <Image src={ICONS.gol} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
                <Image src={IMAGES.brand1} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
                <Image src={IMAGES.brand7} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
                <Image src={ICONS.gol} alt="" className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]" />
            </div>
        </div>
    );
};

export default Hero;
