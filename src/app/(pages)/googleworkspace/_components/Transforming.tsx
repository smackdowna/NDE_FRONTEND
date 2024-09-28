import { ICONS } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Transforming = () => {
    return (
        <div className='bg-[#F1FFF6D9]'>
            <div className='flex justify-center py-24 max-md:py-6'>
                <div className='flex flex-col gap-6  text-center w-[70vw]  max-lg:w-[96vw] '>
                    <span className=' 2xl:text-[64px] md:text-[43px] max-md:text-[26px] 2xl:leading-[76.8px] md:leading-[51.6px] max-md:leading-[31.2px] font-roboto max-md:tracking-tighter font-900  text-home-heading'>Google Workspace: Transforming Collaboration and Productivity</span>
                    <span className=' font-roboto-serif font-400 2xl:text-[22px] 2xl:leading-[36.3px] max-2xl:text-[17px] max-2xl:leading-[28.05px] '>Want to know about Google Workspace Services At Your Fingertips.</span>
                </div>
            </div>
            <div className=' flex justify-center pb-20'>
                <Image src={ICONS.Gsuite} alt='banner' className='w-[80vw] max-md:w-[96vw]' />
            </div>
        </div>
    )
}

export default Transforming