import { ICONS } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Practices = () => {
    return (
        <div className='bg-background-Gsuite-banner'>
            <div className='flex justify-center items-center px-28 max-md:px-2  max-xl:px-10 py-10'>
                <span className='font-900 font-roboto text-white leading-snug max-2xl:text-4xl max-xl:text-3xl text-5xl max-lg:text-2xl max-md:text-2xl max-md:text-center'>
                    Google Workspace is designed to support stringent privacy and security standards based on industry best practices.
                </span>
            </div>
            <div className='flex justify-center px-20 max-xl:px-2'>
                <div className='flex flex-col lg:flex-row justify-around items-center w-full  space-y-8 lg:space-y-0'>
                    <div className='pb-10'>
                        <div className="pt-4 lg:pt-16 text-white space-y-8">
                            <div>
                                <span className="font-900 font-roboto text-xl sm:text-2xl lg:text-4xl">
                                    15+ Years Web Hosting Company
                                </span>
                                <p className="font-roboto-serif text-base sm:text-lg lg:text-3xl py-2 sm:py-4 lg:py-6">
                                    Traditional WordPress, you get all the features, tools, <br className='hidden sm:block' /> and guidance you need to build and launch.
                                </p>
                            </div>
                            <div>
                                <span className="font-900 font-roboto text-xl sm:text-2xl lg:text-4xl">
                                    Safe and Secured
                                </span>
                                <p className="font-roboto-serif text-base sm:text-lg lg:text-3xl py-2 sm:py-4 lg:py-6">
                                    Traditional WordPress, you get all the features, tools, <br className='hidden sm:block' /> and guidance you need to build and launch.
                                </p>
                            </div>
                            <div>
                                <span className="font-900 font-roboto text-xl sm:text-2xl lg:text-4xl">
                                    24/7 Technical Support
                                </span>
                                <p className="font-roboto-serif text-base sm:text-lg lg:text-3xl py-2 sm:py-4 lg:py-6">
                                    Traditional WordPress, you get all the features, tools, <br className='hidden sm:block' /> and guidance you need to build and launch.
                                </p>
                            </div>
                            <div>
                                <span className="font-900 font-roboto text-xl sm:text-2xl lg:text-4xl">
                                    24/7 Technical Support
                                </span>
                                <p className="font-roboto-serif text-base sm:text-lg lg:text-3xl py-2 sm:py-4 lg:py-6">
                                    Traditional WordPress, you get all the features, tools, <br className='hidden sm:block' /> and guidance you need to build and launch.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
                        <Image src={ICONS.GsuiteIcon} alt='' className='w-3/4 sm:w-1/2 lg:w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practices
