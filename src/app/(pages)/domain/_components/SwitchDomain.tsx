import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'
import './style.css'

const SwitchDomain = () => {
    const switchDomainPoints = [
        "Manage domain name renewals.",
        "Add our Whois Hero spam protection.",
        "Build your very own website"
    ]
    return (
        <section className='switch-domain bg-home-primary-card '>
                <Image src={IMAGES.swutchdomain} alt='domain' className='big-image' />
                <Image src={IMAGES.switchDomainSm} alt='domain' className='small-image' />
                <div className='switch-content'>
                    <h2 className=' text-home-heading text-left md:block hidden'>Switch Domains, Effortlessly!</h2>
                    <h2 className='text-home-heading text-left md:hidden sm:block hidden'>Easy Domain Management </h2>
                    <h5 className=' text-home-heading text-left sm:hidden block'>Switch Domains, Effortlessly!</h5>
                    <p className='text-[#000334] text-left'>
                        Already have a domain with another provider? Easily transfer it to NDE using our Smart Search Renewal without losing any of the time you&apos;ve already paid for. Plus, with our intuitive tools, you can build your very own website quickly and efficiently.
                        <br/>
                        Let NDE handle the technical details so you can focus on what matters most: growing your online presence.
                    </p>
                    <p className='text-[#000334] text-left md:hidden sm:block hidden'>
                        Do you already have a unique domain with another service provider? You can move it to with ease by using our Smart Search renewal. You won’t lose any time you’ve already paid for
                    </p>
                    <div className='flex flex-col gap-[20px] max-3xl:gap-[16px] mt-[20px] md:mt-[16px] xl:mt-[14px] 3xl:mt-[44.81px]'>
                        {
                            switchDomainPoints.map((point, index) => 
                                <div key={index} className='flex gap-[14px] md:gap-[17px] items-center'>
                            <Image src={IMAGES.cricleCheck} alt='criclecheck' className='size-6' />
                            <p className='text-[#000334] text-left'>{point}</p>
                        </div>
                            )
                        }
                    </div>
                </div>
        </section>
    )
}

export default SwitchDomain
