import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import './style.css'

const Hero = () => {
    return (
        <div className="hero spotnow-hero relative bg-background-SpotNow pt-20 max-md:pt-2">
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src={IMAGES.spotBanner}
                    alt="home banner"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="hero-padding relative z-10 pt-[120px] max-lg:pt-[100px] xl:px-[100px] md:px-[36px] sm:pt-[80px] sm:px-[16px]">
                <div className="hero-flex flex flex-col md:flex-row justify-between items-center lg:gap-4">
                    <div className="hero-content flex flex-col gap-[40px] lg:items-start text-center lg:text-left items-center md:items-start sm:items-center xl:min-w-[40vw] hero-left">
                        {/* Heading */}
                        <div className="flex flex-col sm:w-full w-full gap-[30px] hero-text">
                            <h1 className="md:text-left hidden sm:block sm:text-center text-home-heading">
                                Simplify, Streamline, Supercharge<br />Your Field Operations </h1>
                            <h4 className="md:text-left sm:hidden block text-center text-home-heading">
                                Simplify, Streamline, Supercharge<br />Your Field Operations </h4>
                            <p className="md:text-left text-center">
                                Real-time insights, daily work management, live tracking, resource allocation, and much more - all with a cloud-based Field Employee Tracking Software.
                            </p>
                        </div>
                        <button className="hero-btn">
                            Get Free Trial
                        </button>
                    </div>
                    {/* Video Placeholder */}
                    <div className="heroImage aspect-[1.6/1] max-lg:w-full md:flex sm:flex-col sm:items-center sm:justify-center sm:mt-[24px]  xl:max-w-[52vw] min-w-[45vw]">
                        <Image src={IMAGES.spotIcon} alt="hero"  />
                    </div>
                </div>
            </div>
            <span className="flex text-center max-2xl:text-lg max-lg:text-lg 2xl:text-[24px] font-black pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[20px] md:pb-[30px] lg:pb-[40px] leading-[20.4px] text-home-body justify-center font-roboto-serif max-md:px-4">
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
