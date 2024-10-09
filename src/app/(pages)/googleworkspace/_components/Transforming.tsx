import { ICONS } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Transforming = () => {
    return (
        <section className='bg-[#F1FFF6D9]'>
            <div className='flex justify-center mb-4'>
                <div className='flex flex-col gap-6  text-center w-[70vw]  max-lg:w-[96vw] '>
                    <h2 className='text-home-heading'>Google Workspace: Transforming Collaboration and Productivity</h2>
                    <p className=''>Want to know about Google Workspace Services At Your Fingertips.</p>
                </div>
            </div>
            <div className='transforming-relative flex justify-center pb-20'>
                <Image src={ICONS.playVideo} alt="play" className="playIcon" />
                <Image src={ICONS.Gsuite} alt='banner' className='w-[80vw] max-md:w-[96vw]' />
            </div>
        </section>
    )
}

export default Transforming