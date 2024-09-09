import Image from "next/image";
import { IMAGES } from "@/assets";

const TakeStepNow = () => {
    return (
        <div className='relative bg-background-take flex flex-col gap-4 pb-20 '>
            <div className="absolute inset-0 z-0 opacity-80  ">
                <Image 
                    src={IMAGES.banner} 
                    alt="banner" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100}
                    className=""
                />
            </div>
            <div className="relative z-10 text-[43px] max-lg:text-3xl max-md:text-2xl font-900 text-center mt-40 max-lg:mt-20  text-home-body">
                <span>Transform Your Vision into Reality</span>
            </div>
            <div className="relative z-10 font-900 text-[30px] max-lg:text-2xl max-md:text-lg max-md:font-normal text-center opacity-70  text-home-body">
                <span>Take the first step with us!</span>
            </div>
            <div className="relative z-10 flex justify-center mt-10">
                <button className="bg-gradient-button px-10 py-3 text-white text-[18px] font-700 rounded-xl">
                    <div className="flex gap-3 items-center">
                        <span>Take Step Now</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default TakeStepNow;
