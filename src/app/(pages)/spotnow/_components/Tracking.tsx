import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Title from './Title'
import './style.css'

const Tracking = () => {
    return (
        <h2 className=' bg-[#E6F0FF] text-center py-16'>
            <Title 
            title='Field Employee Tracking Software' 
            description='Empower your business with SpotNow, the cutting-edge cloud-based Field Employee Tracking App. Effortlessly monitor daily work activities, enhance productivity, and gain real-time insights into your remote workforce teams. Perfect for sales, support, and beyond – SpotNow simplifies, streamlines, and supercharges your operations.'
            descriptionWidth='lg:w-[80%] w-[90%]'
            titleWidth=''
            />
            <div className=' flex flex-col'>

                <div className=' flex justify-center'>
                <Image src={IMAGES.spotReactangle} alt='' className=' w-[90vw] pt-10' />
                </div>
               </div>  
              <div>
            </div>
        </h2>
    )
}

export default Tracking