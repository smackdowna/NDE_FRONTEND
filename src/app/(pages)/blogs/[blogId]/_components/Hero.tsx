import React from 'react';
import Popularpost from './Popularpost';
import Image from 'next/image';
import { ICONS } from '@/assets';

const Hero = () => {
    // Data structure for sections
    const sections = [
        {
            title: 'What is omnichannel customer engagement?',
            content: `The term &apos;omnichannel customer engagement&apos; describes how different communication channels are strategically integrated to offer a unified and consistent customer experience across all touchpoints. Customer engagement through omnichannel is a two-way street. By using this method, customers receive a consistent experience, and businesses gain a comprehensive understanding of who their customers are.`,
        },
        {
            title: 'What makes omnichannel customer engagement necessary?',
            content: `Putting into practice a clear omnichannel strategy has several advantages, such as:
            - Enhanced customer loyalty and satisfaction
            - Improved brand perception
            - Better sales and revenue`,
        },
        {
            title: 'Challenges of creating an omnichannel customer engagement strategy',
            content: `Even if there might be big benefits, there are several challenges that can hinder your journey.`,
        },
        {
            title: 'Siloed data and systems',
            content: `Companies often operate in silos, with different departments using separate systems and databases. This fragmented landscape makes it difficult to unify customer data and gain a holistic view of their interactions. This lack of a centralized view can lead to inconsistencies in messaging and personalization across channels.`,
        },
        {
            title: 'Content personalization paradox',
            content: `Customers crave personalized experiences, but achieving this at a large scale can be tricky. Tailoring content to individual preferences requires a deep understanding of customer behavior and preferences. However, gathering and ethically utilizing such data can be complex, requiring careful consideration of privacy regulations and customer expectations.`,
        },
        {
            title: 'Change management hurdle',
            content: `Shifting to an omnichannel approach often necessitates a cultural shift within the organization. Employees accustomed to traditional, siloed workflows may resist the change, requiring training and support to adapt to the new collaborative environment.`,
        },
        {
            title: 'Measuring the maze',
            content: `Measuring the maze It might be difficult to assess an omnichannel strategy&apos;s effectiveness. Conventional metrics related to specific channels might not precisely depict the combined impact of the complete omnichannel encounter. Establishing thorough KPIs that record the client journey at every touchpoint is essential to successfully tracking results and refining your plan.`,
        },
        {
            title: 'Technological hurdles',
            content: `Technological hurdles Implementing an omnichannel strategy often requires investing in new technologies to integrate various channels and systems. Choosing the right technology stack, ensuring data security, and maintaining system integrations can be complex and resource-intensive.`,
        },
    ];

    return (
        <div className='flex justify-center max-lg:flex-col gap-10 my-10 wrapper max-width pb-16'>
            <div className='flex flex-col max-lg:p-4'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl font-source-sans-pro font-900 max-lg:text-3xl max-md:text-xl max-lg:text-center'>How to create an omnichannel customer engagement strategy</h1>
                    <Image src={ICONS.blog} alt='Blog Icon' className='w-full' />
                </div>
                <div className='flex justify-between py-4 items-center'>
                    <span className='underline font-bold'>Posted On&nbsp;March 29, 2024&nbsp;</span>
                    <button className='bg-[#C9CDFF] text-primary-400 font-source-sans-pro font-semibold py-2 px-3 max-lg:py-1 rounded-3xl'>Design</button>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-merriweather'>
                        Let&apos;s talk customer engagement—the holy grail of any business. Sephora is often considered the &apos;Sensei&apos; of customer engagement, thanks to its highly personalized Beauty Insider program and its tech-driven approach to providing a seamless customer experience. However, delivering the greatest possible customer experience and engagement is complex and challenging. It requires hard and smart work. Simply providing good service and a cheerful smile isn&apos;t enough. Customers switch across channels—from browsing the website to chatting—and they expect a consistent experience no matter where they contact you. Putting in place an omnichannel customer interaction strategy is one way we can deliver a positive customer experience. In this article, we&apos;ll explore the concept of omnichannel customer engagement and effective strategies to amplify its impact.
                    </p>
                    {sections.map((section, index) => (
                        <div className='flex flex-col gap-4' key={index}>
                            <h2 className='text-4xl max-lg:text-3xl max-md:text-xl font-source-sans-pro font-900'>{section.title}</h2>
                            <p className='font-merriweather'>{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Popularpost />
            </div>
        </div>
    );
};

export default Hero;
