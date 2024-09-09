import { ICONS } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Transforming = () => {
    return (
        <div className='bg-[#F1FFF6D9]'>
            <div className='flex justify-center py-24 max-md:py-6'>
                <div className='flex flex-col gap-6  text-center w-[70vw]  max-lg:w-[96vw] '>
                    <span className=' text-6xl max-lg:text-4xl max-md:text-xl font-roboto max-md:tracking-tighter font-900  text-home-heading'>Google Workspace: Transforming Collaboration and Productivity</span>
                    <span className=' font-roboto-serif font-400 text-2xl max-md:text-sm'>Want to know about Google Workspace Services At Your Fingertips.</span>
                </div>
            </div>
            <div className=' flex justify-center pb-20'>
                <Image src={ICONS.Gsuite} alt='banner' className='w-[80vw] max-md:w-[96vw]' />
            </div>
        </div>
    )
}

export default Transforming