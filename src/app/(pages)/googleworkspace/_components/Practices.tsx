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

      
    return (
        <section className='practice bg-background-Gsuite-banner'>
                <h2 className='text-white text-left'>
                    Google Workspace is designed to support stringent privacy and security standards based on industry best practices.
                </h2>

                
                
                <div className="practiceFlex flex flex-col flex-col-1024 sm:flex-row items-center mt-[30px] md:mt-[41px] lg:mt-[46px] 2xl:mt-[29px] lg:gap-[80px]">
                
                <div className='leftContent max-lg:mb-[2rem] lg:w-[60%]'>
                {
                    content.map((content, index) =>
                        <div key={index} className='flex lg:gap-[30px] md:gap-[20px] gap-[10px] 2xl:h-[8.5rem] text-white xl:h-[7.5rem] md:h-[8rem] max-md:h-[10rem] '>
                            {/* adding tick design*/}
                            <div className='flex flex-col '>
                                <div className='w-10 h-10 xl:h-14 border-[3px] border-white rounded-full flex items-center justify-center max-lg:h-[3.5rem] '>
                                <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
                                </div>
                                <div className='w-[3px] h-full bg-white ml-[19px] '>
                                
                                </div>
                            </div>
                            <div className="2xl:mt-[-0.75rem]">
                                <h3 className="text-left cardTitle">
                                    {content.title}
                                </h3>
                                <p className="w-full md:w-[600px] text-left hide-480">
                                    {content.description}
                                </p>
                                <span className="w-full text-left show-480 sub-para " style={{color:'white', lineHeight:1.2}}>
                                    {content.description}
                                </span>
                            </div>
                        </div>
                    )
                }
                </div>


                <div className='w-full right-img flex justify-center lg:justify-start lg:w-[30%]'>
                    <Image src={ICONS.GsuiteIcon} alt='' className=' 2xl:w-[378px] max-2xl:w-[278px]' />
                </div>

                </div>
        </section>
    )
}

export default Practices







