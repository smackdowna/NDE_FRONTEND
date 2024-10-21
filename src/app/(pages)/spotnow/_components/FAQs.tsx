"use client";
import { ICONS } from '@/assets';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Title from '../_components/Title'
import './style.css'

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What is Spot Now?",
        answer: "Spot Now application consists of a stunning mobile application along with a user-friendly web based dashboard that together form an effective field employee tracking, monitoring, and reporting system."
    },
    {
        question: "How does Spot Now help my business grow?",
        answer: "Spot Now helps managers stay completely on top of their teams by letting them track every field activity. Spot Now mobile application allows your field employee to perform all their routine tasks from the field location like summiting reports, expenses, scheduling visits, follow-ups, punch-in, punch-out, and more."
    },
    {
        question: "Do I get a free trial?",
        answer: "Yes, Spot Now offers 15 days of no credit card required free trial for its users, after 15 days it is chargeable for the user/month."
    },
    {
        question: "How does the free trial work?",
        answer: "You can create a free Now Digital Easy account, after successfully log-in you can start using Spot Now immediately. But if you like any additional assistance or expertise you can schedule a free demo with our team. We can get back to you as soon as we can and walk you through settings, accounts, and other features."
    },
    {
        question: "Will I get free support after buying the Spot Now premium plan?",
        answer: "DNS (Domain Name System) translates domain names into IP addresses, allowing browsers to load internet resources."
    },
    {
        question: "What are the basic requirements for using Spot Now?",
        answer: "Refund policies vary by registrar, but generally, domain name purchases are non-refundable."
    },
    {
        question: "How do I update my domain name settings?",
        answer: "You can update your domain name settings through your domain registrar&rsquo;s control panel."
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
        <div className='faqSection w-full max-w-[850px] mx-auto '>
            <div onClick={toggleAccordion} className="py-4 border-b-2 border-[#282C33] border-opacity-10 cursor-pointer px-[25px]">
                <div className='flex justify-between' >
                    <h4 className='text-[#000659]'>{question}</h4>
                    <Image src={isOpen ? ICONS.minusCircle : ICONS.plusCricle} alt='toggle icon' />
                </div>
                <div 
                    ref={contentRef} 
                    style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.3s ease' }} 
                    className='border-b-1'
                >
                    <p className='text-[#000334] text-left'>{answer}</p>
                </div>
            </div>
        </div>
    );
};

interface FAQsProps {
    bgColor?: string;
}

const FAQs: React.FC<FAQsProps> = ({ bgColor  }) => {
    return (
        <section className={`bg-faq-bg faq-section flex flex-col sm:gap-[40px] md:gap-[10px] lg:gap-[12px] gap-[30px]`}>

            <div>
                <div className='flex justify-center '>
                    <h2 className="text-home-heading lg:w-[90%] md:w-[750px] hidden md:block">
                    Still not sure? Here are some answers for your queries
                    </h2>
                    <h2 className="text-home-heading lg:w-[90%] md:w-[750px] block md:hidden">
                    Still not sure?<br /> Here are some answers for your queries
                    </h2>
                </div>
                <div className='flex justify-center mt-[10px] md:mt-[15px] xl:mt-3 1xl:mt-6'>
                    <p className='subHeadingPara lg:w-[60%] md:w-[750px] sm:w-[600px] sm:opacity-100 opacity-70'>
                    If you have further inquiries about our Google Workspace, Google Workspace Pricing, don&apos;t hesitate to reach out to us. Below are the frequently asked questions regarding our services.
                    </p>
                </div>
            </div>

            <div className='faqs-container flex justify-center mt-[15px] md:mt-10 xl:mt-[42px] 1xl:mt-[26px]  pb-10 md:pb-[40px] md:h-[400px] max-sm:h-[460px] sm:h-[400px] overflow-y-scroll w-fit m-auto md:mb-16 hide-scrollbar '>
                <div className=' flex flex-col gap-2 w-full'>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={`${index + 1}. ${faq.question}`} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
