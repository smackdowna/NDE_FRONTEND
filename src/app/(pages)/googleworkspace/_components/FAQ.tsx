"use client";
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '@/assets';
import './style.css'

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What is Google Workspace?",
        answer: "Google Workspace (formerly known as G Suite) is a cloud based-productivity suite that includes professional email, documents sharing and collaboration tools, video conferencing, cloud storage and more."
    },
    {
        question: "Why choose Google Workspace with Now Digital Easy?",
        answer: "As a Google Premium Partner, we have extensive experience in deploying and managing Workspace for businesses of all sizes. We provide personalized support to all clients, ensuring smooth transition and maximizing productivity."
    },
    {
        question: "How does Gmail in Google Workspace differ from free Gmail?",
        answer: "Paid Google Workspace provides you with several features and integrations not available in the free consumer version of the apps. It includes custom business email, unlimited group email IDs, 99.9% guaranteed uptime, storage, customized logo branding for your company, zero ads, 24/7 support, Google Workspace Sync for Microsoft Outlook."
    },
    {
        question: "Do you assist with Google workspace migrations?",
        answer: "Yes, we provide seamless migration assistance from various legacy email systems to Google Workspace. We will handle the entire process, ensuring minimal downtime and disruption to your workflow."
    },
    {
        question: "Is G suitable for small businesses as well?",
        answer: "Yes, Google Workspace is designed for businesses of all sizes, including small businesses. Workspace’s upgradable features and pricing plan make it the perfect choice for organizations with different needs."
    },
    {
        question: "Can I use my existing domain with Google Workspace?",
        answer: "Yes, you can use an existing domain with your Google Workspace purchase."
    },
    {
        question: "Can I manage multiple domains with Google Workspace?",
        answer: "If your organization needs a new domain or does business at multiple domains, you can add all your domains to your account at no extra cost. You add a domain as either a separate domain or domain alias, depending on how you plan to use it."
    }
];

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px');
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className='faqSection w-full max-w-[850px] mx-auto'>
            <div className='flex justify-between p-3 border-b-2 cursor-pointer' onClick={toggleAccordion}>
                <h4 className='text-[#000659]'>{question}</h4>
                <Image src={isOpen ? ICONS.minusCircle : ICONS.plusCricle} alt='toggle icon' />
            </div>
            <div 
                ref={contentRef} 
                style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.3s ease' }} 
                className='text-base md:text-lg border-b-1'
            >
                <p className='text-[#000334] text-left'>{answer}</p>
            </div>
        </div>
    );
};

interface FAQsProps {
    bgColor?: string;
}

const FAQs: React.FC<FAQsProps> = () => {
    return (
        <section className='faq-section flex flex-col'>
            <div className="pt-[79px]">
                <div className='flex justify-center '>
                        <h2 className="text-home-heading lg:w-[90%] md:w-[750px] hidden md:block">
                        Still not sure? Here are some answers for your queries
                        </h2>
                        <h2 className="text-home-heading lg:w-[90%] md:w-[750px] block md:hidden">
                        Still not sure?<br /> Here are some answers for your queries
                        </h2>
                </div>
                <div className='flex justify-center mt-[30px] md:mt-[15px] xl:mt-3 1xl:mt-6'>
                        <p className='subHeadingPara lg:w-[60%] md:w-[750px] sm:w-[600px] sm:opacity-100 opacity-70'>
                        If you have further inquiries about our Google Workspace, Google Workspace Pricing, don&apos;t hesitate to reach out to us. Below are the frequently asked questions regarding our services.
                        </p>
                </div>
            </div>

            <div className='faqs-container flex justify-center md:mt-8 pb-10 md:pb-[40px] md:h-[400px] max-sm:h-[460px] sm:h-[400px] overflow-y-scroll w-fit m-auto md:mb-16'>
                <div className='flex flex-col gap-2 w-full'>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={`${index + 1}. ${faq.question}`} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
