"use client"
import { ICONS } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import Title from './Title'
import checkIcon from '../../../../assets/icons/check 1.svg'; // Adjust the path as necessary



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
            <h2 className=" text-home-heading">{name}</h2>
            <span className="font-900">
                <sup className="text-lg lg:text-xl max-md:hidden">₹</sup>
                <h2 className="text-home-heading">{price}</h2>{isMonthly ? ' month' : ' annual'}
            </span>
            <button className="bg-[#00B98B] p-2 lg:p-4 text-white xl:border 2xl:ronded-sm 2xl:w-[150px] rounded-md mx-auto max-md:mx-1">
                <h6>Add to cart</h6>
            </button>
        </div>
    </th>
);



// PlanFeature Component
const PlanFeature: React.FC<PlanFeatureProps> = ({ title, starter, advanced, premium }) => (
    <tr className="border-t-[1px] border-black border-opacity-65 font-roboto-serif">
        <td className="  text-home-heading tracking-tighter text-md px-1 lg:text-2xl text-start pl-4 lg:pl-10 font-400 py-2 lg:py-4 xl:text-lg 2xl:text-2xl">
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
        <div className='plans bg-[#F3F4FD] py-24 max-2xl:py-8'>
            
            <Title
             title='Choose Your Plan'
             description='Businesses just love working with us!' 
             titleWidth=''
             descriptionWidth='max-2xl:w-[638px]  '
            />

            <div className='sm:hidden show-600-flex flex justify-center py-6 '>
                
                <div className="flex flex-col gap-4 px-3 ">
                    {/* Toggle Button Container */}
                    <div
                        className='flex relative max-md:w-[272px]  w-[300px] bg-[#D7D7FB] justify-center text-center py-6 px-16 rounded-full cursor-pointer '
                        onClick={handleTogglePricing}
                    >
                        {/* The white div that moves on toggle */}
                        <div
                            className={`bg-white absolute rounded-full right-3 top-3 md:w-[100px] h-[55px] transition-all duration-500 ease-in-out ${isMonthly ? 'translate-x-[-130px]' : 'translate-x-0'
                                }`}
                        ></div>

                        {/* Monthly and Annually Text */}
                        <div className={` flex justify-center  font-bold text-2xl xl:text-2xl 2xl:text-2xl gap-10 max-md:text-lg max-md:gap-16 z-10`}  >
                            <h4 className={` ${!isMonthly ? ' text-gray-600' : ' text-black'}`} onClick={togglePricing}>Monthly</h4>
                            <h4 className={` ${isMonthly ? ' text-gray-600' : ' text-black'}`} onClick={togglePricing}>Annually</h4>
                        </div>
                    </div>

                    {/* Additional Text */}
                </div>
            </div>
            <div className=' flex justify-center sm:hidden show-600-flex flex-col items-center gap-6'>
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
                <div className="bg-white mx-0 lg:mx-14 overflow-x-auto rounded-sm">
                    <table className="w-full min-w-max ">
                        <thead>
                            <tr className=' max-sm:hidden hide-600 first-row'>
                                <th className="relative bg-white shadow-r-xl text-home-heading text-3xl max-lg:text-2xl max-md:text-xl font-roboto font-900">
                                    <div className="flex flex-col gap-4 px-10 pl-4 py-4 lg:pl-10">
                                        {/* Toggle Button Container */}
                                        <div
                                            className='flex relative w-[300px] bg-[#D7D7FB] justify-center text-center py-6 px-16 rounded-full cursor-pointer'
                                            onClick={handleTogglePricing}
                                        >
                                            {/* The white div that moves on toggle */}
                                            <div
                                                className={`moving-plan bg-white absolute rounded-full right-6 top-3 lg:w-[130px] lg:h-[55px] w-[110px] h-[45px] transition-all duration-500 ease-in-out ${isMonthly ? 'lg:translate-x-[-125px] md:translate-x-[-123px] isMonthly' : 'lg:translate-x-[-4px] translate-x-[-23px]'
                                                    }`}
                                            ></div>

                                            {/* Monthly and Annually Text */}
                                            <div className={` flex justify-center font-bold text-2xl 2xl:text-2xl 2xl:text-2xl 2xl:gap-10  gap-6  z-10`}  onClick={togglePricing}>
                                                <h4 className={` ${!isMonthly ? ' text-gray-600' : ' text-black'}`} onClick={togglePricing}>Monthly</h4>
                                                <h4 className={` ${isMonthly ? ' text-gray-600' : ' text-black'}`} onClick={togglePricing}>Annually</h4>
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
                        <tbody className='max-sm:hidden hide-600 '>
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
                        
                        <tbody className="sm:hidden show-600 border-2 border-blue-600">
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Number of Users</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Attendance - In & Out</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Multiple Checkin & Checkout</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Multiple Attendance Session</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Edit Meeting Notes</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Multiple Branch Locations</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Branch Location based Attendance Geo-restriction</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Hierarchy based Attendance Geo-restriction</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Geo-restriction for Checkout</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Hierarchy based Geo-restriction Notification</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Live Tracking</td>
                                <td className="border bg-white text-center px-4 py-2">
                                    <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Sort Tracking Page</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">GPS On & Off Notification</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border bg-white text-center px-4 py-2">Play and Pause Route</td>
                                <td className="border bg-white text-center px-4 py-2">
                                <Image
                                    src={checkIcon}
                                    alt='tick'
                                    className='mx-auto'
                                    width={24}
                                    height={24}
                                    />
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <div className='show-600 flex w-full justify-center content-center  items-center'>
                                <button className=' bg-home-primary text-white p-2 rounded-xl w-[110.38px] sm:hidden'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotNowTable;
