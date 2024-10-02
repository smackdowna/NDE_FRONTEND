import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

const SwitchDomain = () => {
    const switchDomainPoints = [
        "Manage domain name renewals.",
        "Add our Whois Hero spam protection.",
        "Build your very own website"
    ]
    return (
        <div className='bg-home-secondary-card px-5 md:px-[123px] py-[50px] md:py-20 xl:px-[64px] 3xl:px-[100px] 3xl:py-[120px]'>
            <div className='flex justify-center gap-[30px] xl:gap-[23px] 3xl:gap-[170px] max-xl:flex-col'>
                <Image src={IMAGES.swutchdomain} alt='domain' className='max-xl:w-[400px] hidden xl:block' />
                <Image src={IMAGES.switchDomainSm} alt='domain' className='w-[280px] md:w-[541px] block xl:hidden mx-auto' />
                <div className='w-[900px] max-2xl:w-[650px] 2xl:w-[951px] max-lg:w-full flex flex-col justify-center'>
                    <span className='text-[24px] md:text-[32px] xl:text-[43px] 3xl:text-[64px] leading-normal md:leading-[45.6px] xl:leading-[51.6px] 3xl:leading-[76.8px] tracking-tight font-900 text-home-heading'>Switch Domains, Effortlessly!</span>
                    <p className='text-[#000334] w-[720px] max-2xl:w-full text-[15px] md:text-[17px] 3xl:text-[22px] leading-[24.75px] md:leading-[28.5px] 3xl:leading-[36.3px] font-roboto-serif mt-[17px] md:mt-[23px] xl:mt-[24.5px] 3xl:mt-[30.81px]'>
                        Already have a domain with another provider? Easily transfer it to NDE using our Smart Search Renewal without losing any of the time you&apos;ve already paid for. Plus, with our intuitive tools, you can build your very own website quickly and efficiently. Let NDE handle the technical details so you can focus on what matters most: growing your online presence.
                    </p>
                    <div className='flex flex-col gap-5 md:gap-[17px] xl:gap-6 max-xl:gap-4 max-md:gap-2 mt-7 md:mt-[21px] xl:mt-[20.5px] 3xl:mt-[44.81px]'>
                        {
                            switchDomainPoints.map((point, index) => 
                                <div key={index} className='flex gap-[14px] md:gap-[17px]'>
                            <Image src={IMAGES.cricleCheck} alt='criclecheck' className='max-md:w-[15px] max-xl:w-[18px]' />
                            <span className='text-[#000334] text-[15px] md:text-[17px] 3xl:text-[22px] leading-[24.75px] md:leading-[28.5px] 3xl:leading-[36.3px] font-roboto-serif'>{point}</span>
                        </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwitchDomain
