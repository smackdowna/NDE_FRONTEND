"use client"
import { ICONS } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';

// Define interfaces for props
interface PlanCardProps {
    name: string;
    price: string;
    isStarter: boolean;
    isMonthly:boolean;
}

interface PlanFeatureProps {
    title: string;
    starter: string;
    advanced: string;
    premium: string;
}

// PlanCard Component
const PlanCard: React.FC<PlanCardProps> = ({ name, price, isStarter , isMonthly}) => (
    <th className={`text-center py-2 lg:py-4 relative ${isStarter ? 'bg-[#EBEBFD]' : ''}`}>
        <div className="flex flex-col gap-2 lg:gap-4">
            <span className="font-900 text-xl lg:text-4xl text-home-heading xl:text-4xl 2xl:text-5xl">{name}</span>
            <span className="font-900">
                <sup className="text-lg lg:text-xl max-md:hidden">₹</sup>
                <span className="text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl">{price}</span>{isMonthly ? ' month' : ' annual'}
            </span>
            <button className="bg-[#00B98B] p-2 lg:p-4 text-white text-md lg:text-2xl xl:w-[116px] xl:text-sm 2xl:text-lg xl:border 2xl:ronded-sm 2xl:w-[150px]  font-900 rounded-md mx-auto max-md:mx-1">
                Add to cart
            </button>
        </div>
    </th>
);



// PlanFeature Component
const PlanFeature: React.FC<PlanFeatureProps> = ({ title, starter, advanced, premium }) => (
    <tr className="border-t-[1px] border-black border-opacity-65 font-roboto-serif">
        <td className="sticky left-0   text-home-heading tracking-tighter text-md px-1 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-2 lg:py-4 xl:text-lg 2xl:text-2xl">
            {title}
        </td>
        <td className="text-home-heading text-center bg-[#EBEBFD] py-2 lg:py-4 text-lg lg:text-2xl xl:text-lg 2xl:text-2xl">{starter}</td>
        <td className="text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl xl:text-lg 2xl:text-2xl">{advanced}</td>
        <td className="text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl xl:text-lg 2xl:text-2xl">{premium}</td>
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
        <div className='bg-[#F3F4FD] py-24 max-2xl:py-8'>
            <div className='flex justify-center text-center pt-10'>
                <span className='font-roboto-serif font-500 text-2xl max-md:px-2'>Choose the Spot Now’s edition that best fits your business.</span>
            </div>
            <div className='md:hidden flex justify-center py-6 '>
                <div className="flex flex-col gap-4 px-3 ">
                    {/* Toggle Button Container */}
                    <div
                        className='flex relative max-md:w-[272px]   w-[300px] bg-[#D7D7FB] justify-center text-center py-6 px-16 rounded-full cursor-pointer '
                        onClick={handleTogglePricing}
                    >
                        {/* The white div that moves on toggle */}
                        <div
                            className={` bg-white absolute rounded-full right-3 top-3 max-md:w-[117px] w-[150px] h-[55px] transition-all duration-500 ease-in-out ${isMonthly ? 'translate-x-[-130px]' : 'translate-x-0'
                                }`}
                        ></div>

                        {/* Monthly and Annually Text */}
                        <div className={` flex justify-center  font-bold text-2xl xl:text-2xl 2xl:text-2xl gap-10 max-md:text-lg max-md:gap-16 z-10`}  >
                            <span className={` ${!isMonthly ? ' text-gray-600' : ' text-black'}`} onClick={togglePricing}>Monthly</span>
                            <span className={` ${isMonthly ? ' text-gray-600' : ' text-black'}`} onClick={togglePricing}>Annually</span>
                        </div>
                    </div>

                    {/* Additional Text */}
                </div>
            </div>
            <div className=' flex justify-center md:hidden flex-col items-center gap-6'>
                <div className="flex flex-col gap-4 px-3 shadow-neutral-700  ">
                    {/* Toggle Button Container */}
                    <div className="flex relative w-[300px] bg-[#D7D7FB] justify-center text-center py-6 px-16 cursor-pointer">
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
                <div className='md:hidden flex flex-row justify-between w-[267px] '> 
                                <span className='flex flex-col'>
                                    <div className='font-bold text-lg flex'>
                                        <span className='text-sm'>₹</span>
                                       <span>{isAnnually ? "670" : "67"}</span> </div>
                                    <span className='text-[8px]'>{isAnnually ? '/user/annual': '/user/month'}</span>
                                </span>
                                <span className='flex flex-col'>
                                    <div className='font-bold text-lg flex'>
                                        <span className='text-sm'>₹</span>
                                       <span>{isAnnually ? "990" : "99"}</span> </div>
                                    <span className='text-[8px]'>{isAnnually ? '/user/annual': '/user/month'}</span>
                                </span>
                                <span className='flex flex-col'>
                                    <div className='font-bold text-lg flex'>
                                        <span className='text-sm'>₹</span>
                                       <span>{isAnnually ? "1490" : "149"}</span> </div>
                                    <span className='text-[8px]'>{isAnnually ? '/user/annual': '/user/month'}</span>
                                </span>
                            </div>
                       </div>



            <div className="px-0 max-md:px-4 pb-10 pt-14 max-md:pt-6 max-lg:mx-4">
                <div className="bg-white mx-0 lg:mx-14 overflow-x-auto">
                    <table className="w-full min-w-max  ">
                        <thead>
                            <tr className=' max-md:hidden'>
                                <th className="relative bg-white shadow-r-xl text-home-heading text-3xl max-lg:text-2xl max-md:text-xl font-roboto font-900">
                                    <div className="flex flex-col gap-4 px-3">
                                        {/* Toggle Button Container */}
                                        <div
                                            className='flex relative w-[300px] bg-[#D7D7FB] justify-center text-center py-6 px-16 rounded-full cursor-pointer'
                                            onClick={handleTogglePricing}
                                        >
                                            {/* The white div that moves on toggle */}
                                            <div
                                                className={`bg-white absolute rounded-full right-6 2xl:w-[130px] top-3 max-2xl:w-[130px] w-[150px] h-[55px] transition-all duration-500 ease-in-out ${isMonthly ? 'translate-x-[-130px]' : 'translate-x-0'
                                                    }`}
                                            ></div>

                                            {/* Monthly and Annually Text */}
                                            <div className={` flex justify-center font-bold text-2xl xl:text-2xl 2xl:text-2xl 2xl:gap-10  gap-6  z-10`}  onClick={togglePricing}>
                                                <span className={` ${!isMonthly ? ' text-gray-600' : ' text-black'}`} onClick={togglePricing}>Monthly</span>
                                                <span className={` ${isMonthly ? ' text-gray-600' : ' text-black'}`} onClick={togglePricing}>Annually</span>
                                            </div>
                                            
                                        </div>

                                        {/* Additional Text */}
                                        <span className='text-start xl:text-[28px] 2xl:text-[28px]'>Spot Now Features</span>
                                    </div>
                                </th>
                                <PlanCard name="Starter" price={isAnnually ? "670" : "67"} isStarter={true} isMonthly={isMonthly} />
                                <PlanCard name="Advanced" price={isAnnually ? "990" : "99"} isStarter={false} isMonthly={isMonthly}/>
                                <PlanCard name="Premium" price={isAnnually ? "1490" : "149"} isStarter={false} isMonthly={isMonthly} />
                            </tr>
                            
                        </thead>
                        <tbody className=' max-md:hidden '>
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
                        
                        <tbody className='md:hidden border-2 border-blue-600 rounded-[8px]'>
                            <tr>
                                <td className="sticky left-0  xl:text-[17px]  border  bg-white text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Number of Users
                                </td>
                                <td className="text-home-heading text-center  border py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Attendance - In & Out
                                </td>
                                <td className="text-home-heading text-center border  py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Multiple Checkin & Checkout
                                </td>
                                <td className="text-home-heading text-center border py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Multiple Attendance Session
                                </td>
                                <td className="text-home-heading text-center border  py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Edit Meeting Notes
                                </td>
                                <td className="text-home-heading text-center border  py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Multiple Branch Locations
                                </td>
                                <td className="text-home-heading text-center border  py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white  border w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Branch Location based Attendance Geo-restriction
                                </td>
                                <td className="text-home-heading text-center border  py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Hierarchy based Attendance Geo-restriction                                </td>
                                <td className="text-home-heading text-center border  py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Geo-restriction for Checkout</td>
                                <td className="text-home-heading text-center border py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Hierarchy based Geo-restriction Notification</td>
                                <td className="text-home-heading text-center border py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Live Tracking</td>
                                <td className="text-home-heading text-center border py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr> 
                                <td className="sticky left-0 bg-white border w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Sort Tracking Page</td>
                                <td className="text-home-heading text-center border  py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white border w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    GPS On & Off Notification</td>
                                <td className="text-home-heading text-center border  py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>
                            <tr>
                                <td className="sticky left-0 bg-white   w-[200px] text-home-heading tracking-tighter text-md px-10 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-6 lg:py-4 xl:text-lg 2xl:text-2xl font-roboto-serif">
                                    Play and Pause Route</td>
                                <td className="text-home-heading text-center border    py-2 lg:py-4 text-lg lg:text-2xl px-6 xl:text-lg 2xl:text-2xl font-roboto-serif">100</td>
                            </tr>

                            
                        </tbody>
                        
                    </table>
                    <div className='flex w-full justify-center content-center py-10   items-center'>
                                <button className=' bg-home-primary text-white p-2 rounded-xl w-[110.38px]'>Add to Cart</button>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default SpotNowTable;
