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
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={IMAGES.footer}
                alt="footer"
            />
            <div className="relative z-10 pt-[140px] max-lg:pt-[200px]">
                <div className="flex flex-col lg:flex-row justify-between mx-32 max-2xl:mx-6 items-start lg:items-center gap-10 lg:gap-0">
                    <div className="flex flex-col lg:flex-row w-full gap-20 max-lg:gap-2">
                        {FOOTER_LINKS.map((footerLink, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="flex justify-between items-center lg:items-start lg:block">
                                    <span className="text-[24px] max-2xl:text-[18px] font-bold text-home-heading">{footerLink.title}</span>
                                    <Image
                                        src={IMAGES.plus}
                                        alt='plus'
                                        className={`lg:hidden cursor-pointer`}
                                        onClick={() => toggleSection(i)}
                                    />
                                </div>
                                <ul
                                    className={`transition-max-height duration-300 ease-in-out overflow-hidden ${expandedSection === i ? 'max-h-40' : 'max-h-0'
                                        } lg:max-h-full`}
                                >
                                    {footerLink.links.map((link) => (
                                        <li key={link.label} className="text-[20px] max-2xl:text-[18px] max-xl:text-[15px] font-roboto-serif text-home-heading  pt-1">
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-[270px]">
                            <Image src={ICONS.footerlogo} alt='logo' />
                            <p className=' text-home-heading font-roboto-serif text-[17px]'>Now Digital Easy have been the #1 provider of best business solutions from Karur, India, since 2015</p>
                        </div>
                        <div className="flex gap-8 py-2 items-center">
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
                <div className=' mx-32 max-2xl:mx-16 mt-16 flex gap-4 items-center'>
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
                <hr className="bg-white h-[2px] mx-6 lg:mx-32 mt-2" />
                <div className="px-4 pt-2 flex flex-col md:flex-row justify-between items-center mx-6 lg:mx-32 gap-6 max-md:gap-0 md:gap-0">
                    <span className="text-[13px] text-center md:text-left text-[#151D8C] font-roboto-serif">
                        @2022 Nowdigitaleasy, Inc. All Rights Reserved.
                    </span>
                    <div className="flex max-md:flex-col items-center justify-center p-2 pb-4 gap-4">
                        <div>
                            <span className=" font-roboto-serif text-[12px] text-[#151D8C]">
                                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                            </span>
                            <span className=" font-roboto-serif text-[12px] text-[#151D8C]">
                                <Link href={"/usage-terms"}>Terms and Conditions</Link>
                            </span>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={ICONS.facebook} alt='fb' />
                            <Image src={ICONS.insta} alt='insta' />
                            <Image src={ICONS.linkdin} alt='linkedin' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
