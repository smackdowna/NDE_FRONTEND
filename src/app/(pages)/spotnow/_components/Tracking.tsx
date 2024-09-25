import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Title from './Title'

const Tracking = () => {
    return (
        <div className=' bg-[#E6F0FF] text-center py-16'>
            <Title 
            title='Field Employee Tracking Software' 
            description='Empower your business with SpotNow, the cutting-edge cloud-based Field Employee Tracking App. Effortlessly monitor daily work activities, enhance productivity, and gain real-time insights into your remote workforce teams. Perfect for sales, support, and beyond – SpotNow simplifies, streamlines, and supercharges your operations.'
            descriptionWidth='max-w-[935px] 2xl:max-w-[1339px]'
            titleWidth=''
            />
            <div className=' flex flex-col'>
                 
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