import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

const SwitchDomain = () => {
    return (
        <div className='bg-home-secondary-card py-[150px] max-md:py-[40px]'>
            <div className='flex justify-center gap-[30px] xl:gap-[23px] 3xl:gap-[170px] px-4 md:px-[123px] xl:px-[64px] 3xl:px-[100px] max-xl:flex-col'>
                <Image src={IMAGES.swutchdomain} alt='domain' className='max-xl:w-[400px] hidden xl:block' />
                <Image src={IMAGES.switchDomainSm} alt='domain' className='w-[280px] md:w-[541px] block xl:hidden mx-auto' />
                <div className='w-[900px] max-2xl:w-[650px] 2xl:w-[951px] max-lg:w-full flex flex-col justify-center'>
                    <span className='text-[24px] md:text-[32px] xl:text-[43px] 3xl:text-[64px] leading-normal md:leading-[45.6px] xl:leading-[51.6px] 3xl:leading-[76.8px] tracking-tight font-900 text-home-heading'>Switch Domains, Effortlessly!</span>
                    <p className='text-[#000334] w-[720px] max-2xl:w-full text-[24px] max-md:text-sm max-2xl:text-[17px] 2xl:text-[22px] max-xl:text-lg font-roboto-serif mt-[22px]'>
                        Already have a domain with another provider? Easily transfer it to NDE using our Smart Search Renewal without losing any of the time you&apos;ve already paid for. Plus, with our intuitive tools, you can build your very own website quickly and efficiently. Let NDE handle the technical details so you can focus on what matters most: growing your online presence.
                    </p>
                    <div className='flex flex-col gap-8 max-xl:gap-4 max-md:gap-2'>
                        <div className='pt-16 max-2xl:pt-8 max-xl:pt-4'>
                            <div className='flex gap-4'>
                                <Image src={IMAGES.cricleCheck} alt='criclecheck' className='max-md:w-[15px] max-xl:w-[18px]' />
                                <span className='text-xl max-md:text-sm max-xl:text-lg'>Manage domain name renewals.</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <Image src={IMAGES.cricleCheck} alt='criclecheck' className='max-md:w-[15px] max-xl:w-[18px]' />
                                <span className='text-xl max-md:text-sm max-xl:text-lg'>Manage domain name renewals.</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <Image src={IMAGES.cricleCheck} alt='criclecheck' className='max-md:w-[15px] max-xl:w-[18px]' />
                                <span className='text-xl max-md:text-sm max-xl:text-lg'>Manage domain name renewals.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwitchDomain
