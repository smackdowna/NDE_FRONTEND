"use client";
import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';


const CURRENCY_FLAGS: { [key: string]: any } = {
    INR: ICONS.india, // Use your flag image path here
    USD: IMAGES.usa, // Assuming you have this path
    SGD: IMAGES.singapore, // Assuming you have this path
};

const FOOTER_LINKS = [
    {
        title: "COMPANY",
        links: [
            { label: "About Us", href: "/about-us" },
            { label: "Payment Method", href: "/payment-option" },
            { label: "Refund Policy", href: "/refund-policy" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
    {
        title: "SERVICES",
        links: [
            { label: "Register Domains", href: "#" },
            { label: "Transfer Domains", href: "#" },
            { label: "Manage Domains", href: "#" },
            { label: "Web Hosting", href: "#" },
            { label: "Google Workspace", href: "#" },
        ],
    },
    {
        title: "PRODUCTS",
        links: [
            { label: "NDE Mail", href: "#" },
            { label: "Vision Now", href: "#" },
            { label: "Peoples Now", href: "#" },
            { label: "Spot Now", href: "#" },
            { label: "Marketing Studio", href: "#" },
        ],
    },
    {
        title: "SUPPORT",
        links: [
            { label: "Open Tickets", href: "#" },
            { label: 'Blog', href: '/blog' },
            { label: "Live Chat", href: "#" },
            { label: "Change Management", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
];

const Footer = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);
    const [currency, setCurrency] = useState('INR');

    const toggleSection = (index: number) => {
        setExpandedSection(prev => (prev === index ? null : index));
    };

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <div className="relative">
            <Image
                className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden"
                src={IMAGES.footerBgSm}
                alt="footer"
            />
            <Image
                className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block xl:hidden"
                src={IMAGES.footerBgMd}
                alt="footer"
            />
            <Image
                className="absolute inset-0 w-full h-full object-cover z-0 hidden xl:block"
                src={IMAGES.footerBgXl}
                alt="footer"
            />
            <Image
                className="absolute inset-0 w-full h-full object-cover z-0 hidden 3xl:block"
                src={IMAGES.footerBg3xl}
                alt="footer"
            />
            <div className="relative z-10 pt-[145px] md:pt-[141px] xl:pt-[136.89px] 3xl:pt-[198.88px] px-[25px] md:px-10 xl:px-[64px] 3xl:px-[104px]">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[26px] lg:gap-0">
                    <div className="flex flex-col lg:flex-row w-full gap-20 max-lg:gap-2">
                        {FOOTER_LINKS.map((footerLink, i) => (
                            <div key={i} className="flex flex-col gap-[17px] 3xl:gap-4">
                                <div className="flex justify-between items-center lg:items-start lg:block">
                                    <span className="text-[17px] md:text-[15px] xl:text-[17px] 3xl:text-[26px] leading-normal md:leading-[18px] xl:leading-normal 3xl:leading-[31.2px] font-900 md:font-500 xl:font-900 text-home-heading">{footerLink.title}</span>
                                    <Image
                                        src={IMAGES.plus}
                                        alt='plus'
                                        className={`lg:hidden cursor-pointer`}
                                        onClick={() => toggleSection(i)}
                                    />
                                </div>
                                <ul
                                    className={`flex flex-col gap-[2px] xl:gap-2 transition-max-height duration-300 ease-in-out overflow-hidden ${expandedSection === i ? 'max-h-40' : 'max-h-0'
                                        } lg:max-h-full`}
                                >
                                    {footerLink.links.map((link) => (
                                        <li key={link.label} className="text-[15px] 3xl:text-[20px] leading-[24.75px] 3xl:leading-[33px] font-roboto-serif text-home-heading hover:underline">
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <div className="w-[270px]">
                            <Image src={ICONS.footerlogo} alt='logo' className="hidden xl:block" />
                            <p className=' text-home-heading font-roboto-serif text-xs xl:text-[15px] 3xl:text-[20px] mt-[6.77px] 3xl:mt-[16.77px]'>Now Digital Easy have been the #1 provider of best business solutions from Karur, India, since 2015</p>
                        </div>
                        <div className="flex gap-[17px] md:gap-4 xl:gap-6 mt-[31px] md:mt-[21px] xl:mt-[25.89px] 3xl:mt-[29.88px] items-center">
                            <Link href="https://cloud.google.com/find-a-partner/partner/now-digital-easy">
                                <Image src={ICONS.partner} alt={""} />
                            </Link>
                            <Link href="https://www.facebook.com/nowdigitaleasyofficial/reviews">
                                <Image src={ICONS.fbreview} alt={""} className="rounded-[50%]" />
                            </Link>
                            <Link href="https://www.google.com/search?q=now+digital+easy+&sca_esv=1408e98ab1991b60&ei=yZk8ZsXPHcGO4-EPssqWuAU&ved=0ahUKEwiF2OqMo4CGAxVBxzgGHTKlBVcQ4dUDCBA&uact=5&oq=now+digital+easy+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEW5vdyBkaWdpdGFsIGVhc3kgMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVI9wVQ9wNY9wNwAXgAkAEAmAHtAaAB7QGqAQMyLTG4AQPIAQD4AQGYAgGgAvgBmAMAiAYBkgcDMi0xoAfyAw&sclient=gws-wiz-serp">
                                <Image src={ICONS.googlereview} alt={""} className="rounded-[50%]" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center mt-[56.6px] md:mt-[36.6px] xl:mt-[79.6px] 3xl:mt-[101px] '>
                    {/* Flag image and currency dropdown */}
                    <div className='flex items-center gap-2'>
                        <Image src={CURRENCY_FLAGS[currency as keyof typeof CURRENCY_FLAGS]} alt={currency} width={30} height={15} />
                        <div className='flex gap-2'>
                            <span>English</span>
                            <Image src={ICONS.drop} alt='' className=' w-2.5' />
                        </div>
                    </div>
                    <div className='relative flex gap-2 items-center'>
                        <select
                            value={currency}
                            onChange={handleCurrencyChange}
                            className="rounded p-1 bg-transparent  outline-none"
                        >
                            <option value="INR">₹INR</option>
                            <option value="USD">$USD</option>
                            <option value="SGD">$SGD</option>
                        </select>
                    </div>
                </div>
                <hr className="bg-white h-[2px] mt-[12.1px] md:mt-[22.31px] xl:mt-5 3xl:mt-[20.12px]" />
                <div className="flex flex-col lg:flex-row justify-between items-center gap-[14px] md:gap-[8.91px] lg:gap-0 mt-[12.1px] md:mt-[13px] xl:mt-[24.11px] 3xl:mt-5">
                    <span className="text-[8px] xl:text-xs 3xl:text-[15px] leading-normal xl:leading-[24.75px] text-center md:text-left text-[#151D8C] font-inter">
                        @2022 Nowdigitaleasy, Inc. All Rights Reserved.
                    </span>
                    <div className="flex max-lg:flex-col items-center justify-center pb-4 gap-[10px] md:gap-[6px] lg:gap-3">
                        <div className="flex items-center gap-[10px] lg:gap-[6px] 3xl:gap-[17px] text-[8px] xl:text-xs 3xl:text-[15px] leading-normal xl:leading-[24.75px] font-inter">
                            <span className=" font-roboto-serif text-[#151D8C]">
                                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                            </span>
                            <span className=" font-roboto-serif text-[#151D8C]">
                                <Link href={"/usage-terms"}>Terms and Conditions</Link>
                            </span>
                        </div>
                        <div className='flex gap-1 lg:gap-[14px]'>
                            <Image src={ICONS.facebook} alt='fb' className="size-[15px] xl:size-6" />
                            <Image src={ICONS.insta} alt='instagram' className="size-[15px] xl:size-6" />
                            <Image src={ICONS.linkdin} alt='linkedin' className="size-[15px] xl:size-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
