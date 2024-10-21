import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Title from './Title'
import './style.css'

const Tracking = () => {
    return (
        <h2 className=' bg-[#E6F0FF] text-center py-16'>
            
            <div className="hidden md:flex items-center justify-center">
                <Title 
                title='Field Employee Tracking Software' 
                description='Empower your business with SpotNow, the cutting-edge cloud-based Field Employee Tracking App. Effortlessly monitor daily work activities, enhance productivity, and gain real-time insights into your remote workforce teams. Perfect for sales, support, and beyond – SpotNow simplifies, streamlines, and supercharges your operations.'
                descriptionWidth='lg:w-[80%] w-[90%] text-[22px] lineHeight-[1.65]'
                titleWidth=''
                />
            </div>
            <div className="md:hidden flex items-center justify-center">
                <Title 
                title='Field Employee Tracking Software' 
                description='Empower your business with SpotNow, the cutting-edge cloud-based Field Employee Tracking App. Effortlessly monitor daily work activities, enhance productivity, and gain real-time insights into your remote workforce teams. Perfect for sales, support, and beyond – SpotNow simplifies, streamlines, and supercharges your operations.'
                descriptionWidth='lg:w-[80%] w-[90%] sub-para subPara-center'
                titleWidth=''
                />
            </div>
           
            <div className=' flex flex-col'>

                <div className=' flex justify-center'>
                <Image src={IMAGES.spotReactangle} alt='' className=' w-[90vw] md:pt-10 pt-6' />
                </div>
               </div>  
              <div>
            </div>
        </h2>
    )
}

export default Tracking