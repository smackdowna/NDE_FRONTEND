"use client";
import { ICONS } from '@/assets';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Title from '../../spotnow/_components/Title';

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What is a domain name?",
        answer: "A domain name is a human-readable address for a website, such as example.com."
    },
    {
        question: "How do I register a domain name?",
        answer: "You can register a domain name through a domain registrar by searching for an available name and completing the registration process."
    },
    {
        question: "What is the cost of a domain name?",
        answer: "The cost of a domain name varies depending on the domain extension and the registrar. Prices typically range from $10 to $50 per year."
    },
    {
        question: "How do I transfer my domain to another provider?",
        answer: "To transfer your domain, you need to unlock it, get an authorization code from your current registrar, and initiate the transfer process with the new registrar."
    },
    {
        question: "What is DNS and how does it work?",
        answer: "DNS (Domain Name System) translates domain names into IP addresses, allowing browsers to load internet resources."
    },
    {
        question: "Can I get a refund after purchasing a domain name?",
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
        <div className='w-full max-w-[850px] mx-auto'>
            <div onClick={toggleAccordion} className="py-4 border-b-2 cursor-pointer">
            <div className='flex justify-between' >
                <span className='font-900 text-[17px] md:text-[24px] xl:text-[17px] 3xl:text-[26px]'>{question}</span>
                <Image src={isOpen ? ICONS.plusCricle : ICONS.plusCricle} alt='toggle icon' />
            </div>
            <div 
                ref={contentRef} 
                style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.3s ease' }} 
                className='border-b-1'
            >
                <div className='text-[#000334] text-[15px] md:text-[17px] 3xl:text-[22px] leading-[24.75px] md:leading-[28.5px] 3xl:leading-[36.3px] font-roboto-serif'>{answer}</div>
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
        <div className={`${bgColor} flex flex-col gap-4 py-[50px] px-[25px] md:py-20 md:px-7 xl:px-[252px] 3xl:px-[395px] `}>

<div>
         <div className='flex justify-center '>
          <span className={`text-6xl max-xl:text-4xl max-md:text-[26px] font-900 text-home-heading font-roboto text-center max-lg:text-[43px] max-lg:leading-tight max-2xl:leading-tight 2xl:text-[64px] max-2xl:text-[43px] max-w-[310px] md:max-w-[777px] 3xl:max-w-[1112px] mx-auto hidden 3xl:block`}>
          Still not sure? Here are some answers for your queries
        </span>
          <span className={`text-6xl max-md:mx-4 max-xl:text-4xl max-md:text-[26px] font-900 text-home-heading font-roboto text-center max-lg:text-[43px] max-lg:leading-tight max-2xl:leading-tight 2xl:text-[64px] max-2xl:text-[43px] max-w-[310px] md:max-w-[777px] 3xl:max-w-[1112px] mx-auto block 3xl:hidden`}>
          Still not sure? <br/>
          Here are some answers for your queries
        </span>
      </div>
      <div className='flex justify-center mt-6 mx-4'>
        <span className={`text-[#000334] text-center w-full font-400 font-roboto-serif text-3xl max-md:text-lg max-xl:w-full max-md:px-4  max-2xl:text-[17px] 2xl:text-[22px]  max-2xl:leading-normal max-w-[330px] md:max-w-[776px] 3xl:max-w-[1132px] mx-auto `}>
        If you have further inquiries about our Google Workspace, Google Workspace Pricing, don&apos;t hesitate to reach out to us. Below are the frequently asked questions regarding our services.
        </span>
      </div>
    </div>

            <div className='flex justify-center md:mt-8  pb-10 md:pb-[40px] md:h-[400px] max-sm:h-[460px] sm:h-[400px] overflow-y-scroll custom-scrollbar w-fit m-auto md:mb-16'>
                <div className='flex flex-col gap-2 w-full'>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={`${index + 1}. ${faq.question}`} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
