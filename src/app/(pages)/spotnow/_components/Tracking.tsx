import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Tracking = () => {
    return (
        <div className=' bg-[#E6F0FF] text-center py-16'>
            <div className=' flex flex-col'>
                <span className=' font-900 font-roboto text-6xl max-md:text-3xl text-home-heading'>Field Employee Tracking Software</span>
                <div className='flex justify-center'>
                    <span className=' w-[75vw] font-500 max-md:w-full max-lg:px-2 font-roboto-serif text-2xl max-md:text-base pt-6'>Empower your business with SpotNow, the cutting-edge cloud-based Field Employee Tracking App. Effortlessly monitor daily work activities, enhance productivity, and gain real-time insights into your remote workforce teams. Perfect for sales, support, and beyond – SpotNow simplifies, streamlines, and supercharges your operations.</span>
                </div>
                <div className=' flex justify-center'>
                <Image src={IMAGES.spotReactangle} alt='' className='w-[90vw] pt-10' />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Tracking