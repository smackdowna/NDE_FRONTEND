import Image from "next/image";
import { IMAGES } from "@/assets";
import './style.css'

const TakeStepNow = () => {
    return (
        <div className='nextStep relative bg-background-take flex flex-col gap-4 pb-20 '>
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
            <div className="md:mt-[100px] sm:mt-[120px] mt-[80px]" >
                <h2>Transform Your Vision into Reality</h2>
            </div>
            <div className="relative z-10">
                <h3>Take the first step with us!</h3>
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
