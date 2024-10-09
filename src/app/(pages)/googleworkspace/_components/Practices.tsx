import { ICONS, IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'
import './style.css'

const Practices = () => {

    const content = [
        {
          title: "A cloud-first, browser-based approach",
          description: "that is constantly updated – no need for local devices, native apps or email attachments."
        },
        {
          title: "Built-in controls, encryption and verification",
          description: "with a zero-trust approach that enables employees to work from anywhere and eliminates the need for VPNs."
        },
        {
          title: "Operating on a global scale",
          description: "to protect your organisation's information from phishing, malware, ransomware and supply chain attacks – no add-ons required."
        },
        {
          title: "Making everyone safer",
          description: "with secure endpoints (company-provided or BYOD) that don’t require patching and strong account takeover protections."
        }
      ];

      if (window.matchMedia("(max-width: 1280px)").matches) {
        console.log("Media query for max-width 1280px triggered.");
      }
      
    return (
        <section className='practice bg-background-Gsuite-banner'>
                <h2 className='text-white text-left'>
                Google Workspace is designed to support stringent privacy and security standards based on industry best practices.
                </h2>

                
                
                <div className="flex flex-col flex-col-1024 sm:flex-row justify-between items-center mt-[30px] md:mt-[41px] lg:mt-[46px] 2xl:mt-[29px]">
                
                <div className='max-lg:mb-[2rem]'>
                {
                    content.map((content, index) =>
                        <div key={index} className='flex gap-[30px] 2xl:h-[8.5rem] text-white xl:h-[7.5rem] md:h-[8rem] max-md:h-[10rem] '>
                            {/* adding tick design*/}
                            <div className='flex flex-col '>
                                <div className='w-10 h-10 xl:h-14 border-[3px] border-white rounded-full flex items-center justify-center max-lg:h-[3.5rem] '>
                                <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
                                </div>
                                <div className='w-[3px] h-full bg-white ml-[19px] '>
                                
                                </div>
                            </div>
                            <div className="2xl:mt-[-0.75rem]">
                                <h3 className="text-left">
                                    {content.title}
                                </h3>
                                <p className="w-full md:w-[446px] 2xl:w-[666px] font-roboto-serif text-[15px] md:text-[17px] 2xl:text-[22px] text-left">
                                    {content.description}
                                </p>
                            </div>
                        </div>
                    )
                }
                </div>


                <div className='w-full right-img lg:w-auto flex justify-center lg:justify-end'>
                    <Image src={ICONS.GsuiteIcon} alt='' className=' 2xl:w-[378px] max-2xl:w-[278px]' />
                </div>

                </div>
        </section>
    )
}

export default Practices







