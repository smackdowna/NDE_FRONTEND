"use client";
import { ICONS } from '@/assets';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

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
            <div className='flex justify-between p-3 border-b-2 cursor-pointer' onClick={toggleAccordion}>
                <span className='font-700 text-2xl max-md:text-sm max-lg:text-xl'>{question}</span>
                <Image src={isOpen ? ICONS.plusCricle : ICONS.plusCricle} alt='toggle icon' />
            </div>
            <div 
                ref={contentRef} 
                style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.3s ease' }} 
                className='text-base md:text-lg border-b-1'
            >
                <div className='p-3'>{answer}</div>
            </div>
        </div>
    );
};

interface FAQsProps {
    bgColor?: string;
}

const FAQs: React.FC<FAQsProps> = ({ bgColor  }) => {
    return (
        <div className={`${bgColor} flex flex-col gap-4 px-4`}>
            <div className='flex justify-center pt-[120px] max-md:pt-10 max-lg:pt-10'>
                <span className='text-center text-6xl max-lg:text-4xl max-md:text-3xl font-900 w-full max-w-[1300px] text-home-heading font-roboto'>
                    Still not sure? <br /> Here are some answers for your queries
                </span>
            </div>
            <div className='flex justify-center pt-4 md:pt-10'>
                <span className='w-full max-w-[1000px] text-center text-xl md:text-2xl font-roboto-serif'>
                    If you have further inquiries about our Google Workspace, Google Workspace Pricing, don&rsquo;t hesitate to reach out to us. Below are the frequently asked questions regarding our services.
                </span>
            </div>
            <div className='flex justify-center m-4 pb-10 md:pb-[100px]'>
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
