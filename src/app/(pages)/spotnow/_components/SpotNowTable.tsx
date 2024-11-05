"use client"
import { ICONS } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import Title from './Title'
import checkIcon from '../../../../assets/icons/check 1.svg'; // Adjust the path as necessary
import SwipeableTable from '@/components/SwipeableTable';
import { motion } from 'framer-motion';


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

type Plan = 'Starter' | 'Standard' | 'Plus';
interface PlanInfo {
  name: Plan;
  price: number;
}

const plans: PlanInfo[] = [
  { name: 'Starter', price: 132 },
  { name: 'Standard', price: 232 },
  { name: 'Plus', price: 350 },
];



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


    
  const handlePlanToggle = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const getSelectedIndex = () => plans.findIndex(plan => plan.name === selectedPlan);

    return (
        <div className='plans bg-[#F3F4FD] py-14 max-2xl:py-8'>
           <div className="plansTitle w-full flex md:hidden items-center justify-center">
            <Title
                title='Choose Your Plan'
                description='Businesses just love working with us!' 
                titleWidth='text-[43px] font-black lineHeight-[1.2]'
                descriptionWidth='max-2xl:w-[638px]  '
                />
           </div>
           <div className="plansTitle w-full hidden md:flex items-center justify-center">
            <Title
                title='Find the right plan for your business.'
                description='Choose the Spot Now’s edition that best fits your business.' 
                titleWidth=''
                descriptionWidth='max-2xl:w-[638px]  '
                />
           </div>



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
            <div className="flex flex-col items-center gap-6 p-4 max-w-md mx-auto show-600">
                <div className="relative toogleBox w-full bg-gray-100 rounded-2xl shadow-md">
                <div className="toogleBackground"></div>
                <div className="toogleBoxContent w-full relative flex justify-between items-center">
                <div className="toogleBackground"></div>
                    <div className="relative w-full flex justify-between items-center p-[4px]">
                    <motion.div
                    className="absolute bg-white rounded-xl h-11 transition-all duration-300 ease-in-out"
                    initial={false}
                    animate={{
                        x: `calc(${getSelectedIndex() * 100}% + ${getSelectedIndex() * 0.5}rem)`,
                        width: 'calc(33.33% - 0.5rem)',
                    }}
                    />
                    {plans.map((plan) => (
                    <button
                        key={plan.name}
                        onClick={() => handlePlanToggle(plan.name)}
                        className={`flex-1 py-3 text-[15px] font-bold font-roboto z-10 transition-colors duration-300 ${
                        selectedPlan === plan.name ? 'text-[#000]' : 'text-[#000]'
                        }`}
                    >
                        {plan.name}
                    </button>
                    ))}
                </div>
                    </div>
                </div>
            <div className="flex justify-between w-full px-2 mt-5">
                {plans.map((plan) => (
                <div key={plan.name} className="text-center">
                    <h6 className={`planPrice text-xl font-black ${selectedPlan === plan.name ? 'text-blue-600' : 'text-gray-500'}`}>
                    <span className="text-sm">₹</span>
                    {plan.price}
                    </h6>
                </div>
                ))}
            </div>
      </div>

            <div className="px-0 max-lg:mx-4 mt-4  rounded-sm">
                <SwipeableTable>
                <div className="mx-0  lg:mx-14 tableBorder bordered-table">
                    <table className="w-full min-w-max">
                        <thead>
                            <tr className=' max-sm:hidden hide-600 first-row'>
                                <th className="relative shadow-r-xl text-home-heading text-3xl max-lg:text-2xl max-md:text-xl font-roboto font-900">
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
                        
                       
                        
                    </table>
                    
                    <table className="w-full mmin-w-max sm:hidden show-600">
                    <tbody className="small-tbody">
                            <tr>
                                <td className="  text-center px-4 py-2">Number of Users</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Attendance - In & Out</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Multiple Checkin & Checkout</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Multiple Attendance Session</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Edit Meeting Notes</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Multiple Branch Locations</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Branch Location based Attendance Geo-restriction</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Hierarchy based Attendance Geo-restriction</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Geo-restriction for Checkout</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Hierarchy based Geo-restriction Notification</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Live Tracking</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Sort Tracking Page</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">GPS On & Off Notification</td>
                                <td className=" text-center px-4 py-2">
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
                                <td className=" text-center px-4 py-2">Play and Pause Route</td>
                                <td className=" text-center px-4 py-2">
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

                    <div className='hidden show-600-flex w-full justify-center content-center  items-center py-2'>
                        <button className=' bg-home-primary text-white p-2 rounded-xl w-[110.38px]'>Add to Cart</button>
                    </div>
                </div>
                </SwipeableTable>
            </div>
        </div>
    );
};

export default SpotNowTable;
