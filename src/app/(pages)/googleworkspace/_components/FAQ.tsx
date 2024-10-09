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
                <span className='font-900 text-2xl max-md:text-[17px] max-lg:text-xl'>{question}</span>
                <Image src={isOpen ? ICONS.minusCircle : ICONS.plusCricle} alt='toggle icon' />
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

const FAQs: React.FC<FAQsProps> = () => {
    return (
        <div className='bg-gradient-domain-hero faq-sectionfaq-section flex flex-col py-[50px] px-0 md:py-20 md:px-7 xl:px-[252px] 3xl:px-[395px]'>
            <div className="pt-[79px]">
                <div className='flex justify-center'>
                    <h2 className='text-home-heading lg:w-[90%]'>
                        Still not sure? <br />
                        Here are some answers for your queries
                    </h2>
                </div>
                <div className='flex justify-center mt-6 mx-4'>
                    <p className='text-[#000334] w-[90%]'>
                        If you have further inquiries about our Google Workspace, Google Workspace Pricing, do not hesitate to reach out to us. Below are the frequently asked questions regarding our services.
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
        </div>
    );
};

export default FAQs;
