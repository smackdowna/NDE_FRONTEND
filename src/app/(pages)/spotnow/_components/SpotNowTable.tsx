"use client"
import { ICONS } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';

// Define interfaces for props
interface PlanCardProps {
    name: string;
    price: string;
    isStarter: boolean;
}

interface PlanFeatureProps {
    title: string;
    starter: string;
    advanced: string;
    premium: string;
}

// PlanCard Component
const PlanCard: React.FC<PlanCardProps> = ({ name, price, isStarter }) => (
    <th className={`text-center py-2 lg:py-4 relative ${isStarter ? 'bg-[#EBEBFD]' : ''}`}>
        <div className="flex flex-col gap-2 lg:gap-4">
            <span className="font-900 text-xl lg:text-4xl text-home-heading">{name}</span>
            <span className="font-900">
                <sup className="text-lg lg:text-xl max-md:hidden">₹</sup>
                <span className="text-3xl lg:text-5xl">{price}</span>/month
            </span>
            <button className="bg-[#00B98B] p-2 lg:p-4 text-white text-md lg:text-2xl font-900 rounded-lg mx-auto max-md:mx-1">
                Add to cart
            </button>
        </div>
    </th>
);



// PlanFeature Component
const PlanFeature: React.FC<PlanFeatureProps> = ({ title, starter, advanced, premium }) => (
    <tr className="border-t-[1px] border-black border-opacity-65 font-roboto-serif">
        <td className="sticky left-0 bg-white text-home-heading tracking-tighter text-md px-1 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-2 lg:py-4">
            {title}
        </td>
        <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl">{starter}</td>
        <td className="text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl">{advanced}</td>
        <td className="text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl">{premium}</td>
    </tr>
);

// Main Component: SpotNowTable
const SpotNowTable: React.FC = () => {
    const [isAnnually, setIsAnnually] = useState(false);

    const togglePricing = () => {
        setIsAnnually(!isAnnually);
    };

    const [isMonthly, setIsMonthly] = useState(true);

    // Function to toggle between Monthly and Annually
    const handleTogglePricing = () => {
        setIsMonthly(!isMonthly);
    };

    const [selectedPlan, setSelectedPlan] = useState('Starter');

    // Function to toggle between plans
    const handlePlanToggle = (plan: string) => {
        setSelectedPlan(plan);
    };

    return (
        <div className='bg-[#F3F4FD] py-24'>
            <div className='flex justify-center text-center pt-10'>
                <span className='font-roboto-serif font-500 text-2xl'>Choose the Spot Now’s edition that best fits your business.</span>
            </div>
            <div className='md:hidden flex justify-center py-6'>
                <div className="flex flex-col gap-4 px-3 ">
                    {/* Toggle Button Container */}
                    <div
                        className='flex relative w-[300px] bg-[#D7D7FB] justify-center text-center py-6 px-16 rounded-full cursor-pointer'
                        onClick={handleTogglePricing}
                    >
                        {/* The white div that moves on toggle */}
                        <div
                            className={`bg-white absolute rounded-full right-3 top-3 w-[150px] h-[55px] transition-all duration-500 ease-in-out ${isMonthly ? 'translate-x-[-130px]' : 'translate-x-0'
                                }`}
                        ></div>

                        {/* Monthly and Annually Text */}
                        <div className={` ${isMonthly ? ' text-gray-600' : ' text-black'} flex justify-center  font-bold text-2xl gap-8 z-50`}>
                            <span>Monthly</span>
                            <span>Annually</span>
                        </div>
                    </div>

                    {/* Additional Text */}
                </div>
            </div>
            <div className=' flex justify-center md:hidden'>
                <div className="flex flex-col gap-4 px-3 shadow-neutral-700 ">
                    {/* Toggle Button Container */}
                    <div className="flex relative w-[300px] bg-[#D7D7FB]  justify-center text-center py-6 px-16 cursor-pointer">
                        {/* The white div that moves on toggle */}
                        <div
                            className={`bg-white absolute  rounded-xl top-3 w-[85px] h-[50px] transition-all duration-500 ease-in-out ${selectedPlan === 'Starter'
                                ? 'translate-x-[-90px]'
                                : selectedPlan === 'Standard'
                                    ? 'translate-x-[10px]'
                                    : 'translate-x-[100px]'
                                }`}
                        ></div>

                        {/* Plans Text */}
                        <div className="flex justify-center font-bold text-md px-2 gap-8 z-50  ">
                            <span
                                className={`${selectedPlan === 'Starter' ? 'text-gray-600' : 'text-black'}`}
                                onClick={() => handlePlanToggle('Starter')}
                            >
                                Starter
                            </span>
                            <span
                                className={`${selectedPlan === 'Standard' ? 'text-gray-600' : 'text-black'}`}
                                onClick={() => handlePlanToggle('Standard')}
                            >
                                Standard
                            </span>
                            <span
                                className={`${selectedPlan === 'Plus' ? 'text-gray-600' : 'text-black'}`}
                                onClick={() => handlePlanToggle('Plus')}
                            >
                                Plus
                            </span>
                        </div>
                    </div>
                </div>
            </div>



            <div className="px-0 max-md:px-4 pb-10 pt-14">
                <div className="bg-white mx-0 lg:mx-14 overflow-x-auto">
                    <table className="w-full min-w-max">
                        <thead>
                            <tr className=' max-md:hidden'>
                                <th className="relative bg-white z-50 shadow-r-xl text-home-heading text-3xl max-lg:text-2xl max-md:text-xl font-roboto font-900">
                                    <div className="flex flex-col gap-4 px-3">
                                        {/* Toggle Button Container */}
                                        <div
                                            className='flex relative w-[300px] bg-[#D7D7FB] justify-center text-center py-6 px-16 rounded-full cursor-pointer'
                                            onClick={handleTogglePricing}
                                        >
                                            {/* The white div that moves on toggle */}
                                            <div
                                                className={`bg-white absolute rounded-full right-3 top-3 w-[150px] h-[55px] transition-all duration-500 ease-in-out ${isMonthly ? 'translate-x-[-130px]' : 'translate-x-0'
                                                    }`}
                                            ></div>

                                            {/* Monthly and Annually Text */}
                                            <div className={` ${isMonthly ? ' text-gray-600' : ' text-black'} flex justify-center font-bold text-2xl gap-8 z-50`}>
                                                <span>Monthly</span>
                                                <span>Annually</span>
                                            </div>
                                        </div>

                                        {/* Additional Text */}
                                        <span className='text-start'>Spot Now Features</span>
                                    </div>
                                </th>
                                <PlanCard name="Starter" price={isAnnually ? "670" : "67"} isStarter={true} />
                                <PlanCard name="Advanced" price={isAnnually ? "990" : "99"} isStarter={false} />
                                <PlanCard name="Premium" price={isAnnually ? "1490" : "149"} isStarter={false} />
                            </tr>
                        </thead>
                        <tbody className=' max-md:hidden'>
                            <PlanFeature title="Number of Users" starter="" advanced="50" premium="100" />
                            <PlanFeature title="SSD Storage (GB)" starter="50GB" advanced="100GB" premium="200GB" />
                            <PlanFeature title="Bandwidth" starter="Unlimited" advanced="Unlimited" premium="Unlimited" />
                            <PlanFeature title="Free .IN Domain (1st Year Only)" starter="1" advanced="" premium="1" />
                            <PlanFeature title="Subdomains" starter="5" advanced="100" premium="200" />
                            <PlanFeature title="FTP Users" starter="1" advanced="50" premium="100" />
                            <PlanFeature title="eMail Accounts" starter="2" advanced="50" premium="100" />
                            <PlanFeature title="Individual Mailbox Size (GB)" starter="1" advanced="1" premium="1" />
                            <PlanFeature title="Overall Mailbox Size (GB)" starter="2" advanced="50" premium="100" />
                            <PlanFeature title="Email Per Hour" starter="100" advanced="100" premium="100" />
                            <PlanFeature title="Email forwarding accounts" starter="Unlimited" advanced="Unlimited" premium="Unlimited" />
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="sticky left-0 bg-white text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Number of Users
                                </td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Attendance - In & Out
                                </td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Multiple Checkin & Checkout
                                </td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Multiple Attendance Session
                                </td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Edit Meeting Notes
                                </td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Multiple Branch Locations
                                </td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Branch Location based Attendance Geo-restriction
                                </td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Hierarchy based Attendance Geo-restriction                                </td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Geo-restriction for Checkout</td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Hierarchy based Geo-restriction Notification</td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Live Tracking</td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Sort Tracking Page</td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    GPS On & Off Notification</td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4">
                                    Play and Pause Route</td>
                                <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl px-6">100</td>
                            </tr>

                            <div className='flex justify-center content-center py-10 pl-24'>
                                <button className=' bg-home-primary text-white p-2 rounded-xl '>Add to Cart</button>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SpotNowTable;
