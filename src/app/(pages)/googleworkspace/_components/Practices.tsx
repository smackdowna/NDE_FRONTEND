import { ICONS, IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

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
        <div className='bg-background-Gsuite-banner'>
            <div className='px-[17px] md:px-[52px] xl:px-[63px] 2xl:px-[100px] py-10'>
                <h1 className='font-900 font-roboto text-white leading-snug max-2xl:text-4xl max-xl:text-3xl text-5xl max-lg:text-2xl max-md:text-2xl max-md:text-center'>
                    Google Workspace is designed to support stringent privacy and security standards based on industry best practices.
                </h1>

                
                
                <div className="flex flex-col lg:flex-row  items-center mt-[30px] md:mt-[41px] lg:mt-[46px] 2xl:mt-[29px]">
                
                <div>
                {
                    content.map((content, index) =>
                        <div key={index} className='flex gap-[30px] text-white'>
                                {/* adding tick design*/}
                                <div className='flex flex-col'>
                                    <div className='w-10 h-10 xl:h-14 border-[3px] border-white rounded-full flex items-center justify-center  '>
                                    <Image src={IMAGES.Done} alt="" width={22} height={24} className='w-[20px] h-[21px] object-cover font-bold' />
                                    </div>
                                    <div className='w-[3px] h-full bg-white ml-[19px] '>
                                    
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <span className="font-900 font-roboto text-[17px] md:text-[26px] lg:text-[24px] 2xl:text-[38px]">
                                        {content.title}
                                    </span>
<<<<<<< HEAD
                                    <p className="w-full md:w-[446px] 2xl:w-[666px] font-roboto-serif text-[15px] md:text-[17px] 2xl:text-[22px]">
                                        {content.description}
=======
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
>>>>>>> da38895b6b15751ac72f59c460660fb1f2e955bc
                                    </p>
                                </div>
                            </div>
                    )
                }
                </div>


<<<<<<< HEAD
                <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
<Image src={ICONS.GsuiteIcon} alt='' className='w-3/4 sm:w-1/2 lg:w-full' />
</div>

=======
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
>>>>>>> da38895b6b15751ac72f59c460660fb1f2e955bc
                </div>
            </div>
        </div>
    )
}

export default Practices







