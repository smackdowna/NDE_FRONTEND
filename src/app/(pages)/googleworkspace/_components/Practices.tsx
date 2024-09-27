import { ICONS, IMAGES } from '@/assets'
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
            <div className='flex justify-center  max-xl:px-2'>
                <div className='flex flex-col lg:flex-row justify-between px-28 items-center w-full  space-y-8 lg:space-y-0'>
                    <div className='pb-10 flex'>


                        <div className="pt-4 lg:pt-16 text-white space-y-8">

                            <div className='flex gap-[2rem]'>
                                {/* adding tick design*/}
                                <div className='flex flex-col justify-center'>
                                    <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex items-center justify-center  '>
                                    <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
                                    </div>
                                    <div className='w-[3px] h-[8rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'>
                                    
                                    </div>
                                </div>
                                <div>
                                    <span className="font-900 font-roboto text-xl sm:text-2xl lg:text-4xl">
                                        A cloud-first, browser-based approach
                                    </span>
                                    <p className=" 2xl:w-[722px] font-roboto-serif text-base sm:text-lg lg:text-3xl py-2 sm:py-4 lg:py-6">
                                        that is constantly updated – no need for local devices, native apps or email attachments
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-[2rem] '>
                                {/* adding tick design*/}
                                <div className='flex flex-col justify-center'>
                                    <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex items-center justify-center  '>
                                    <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
                                    </div>
                                    <div className='w-[3px] h-[8rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'>
                                    
                                    </div>
                                </div>
                                <div>
                                    <span className="font-900 font-roboto text-xl sm:text-2xl lg:text-4xl">
                                    Built-in controls, encryption and verification
                                    </span>
                                    <p className=" 2xl:w-[722px]  font-roboto-serif text-base sm:text-lg lg:text-3xl py-2 sm:py-4 lg:py-6">
                                    with a zero-trust approach that enables employees to work from anywhere and eliminates the need for VPNs
                                    </p>
                                </div>
                            </div>


                            <div className='flex gap-[2rem] '>
                                <div className='flex flex-col justify-center'>
                                    <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex items-center justify-center  '>
                                    <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
                                    </div>
                                    <div className='w-[3px] h-[8rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'>
                                    
                                    </div>
                                </div>
                                <div>
                                    <span className="font-900 font-roboto text-xl sm:text-2xl lg:text-4xl">
                                    Operating on a global scale
                                    </span>
                                    <p className=" 2xl:w-[804px] font-roboto-serif text-base sm:text-lg lg:text-3xl py-2 sm:py-4 lg:py-6">
                                    to protect your organisation’s information from phishing, malware, ransomware and supply chain attacks – no add-ons required
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-[2rem] '>
                                <div className='flex flex-col justify-center'>
                                    <div className='w-[41px] h-[42px] border-[3px] border-white rounded-full flex items-center justify-center  '>
                                    <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
                                    </div>
                                    <div className='w-[3px] h-[8rem] 2xl:h-[10rem] xl:h-[6.5rem] bg-white ml-[19px] max-lg:h-[5.5rem]'>
                                    
                                    </div>
                                </div>
                               <div>
                                    <span className="font-900 font-roboto text-xl sm:text-2xl lg:text-4xl">
                                    Making everyone safer
                                    </span>
                                    <p className=" 2xl:w-[722px] font-roboto-serif text-base sm:text-lg lg:text-3xl py-2 sm:py-4 lg:py-6">
                                    with secure endpoints (company-provided or BYOD) that don’t require patching and strong account takeover protections
                                    </p>
                               </div>
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
