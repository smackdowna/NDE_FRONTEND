"use client"
import React, { useState, useEffect, useRef, useCallback} from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import PlanModal from './PlanModal';
import './style.css'
import checkIcon from '../../../../assets/icons/check 1.svg'
import './style.css'
import { motion } from 'framer-motion';
import SwipeableTable from "@/components/SwipeableTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { loadCountryCodeFromLocalStorage } from "@/store/countryCodeSlice";

interface Domain {
  name: string;
  status: string;
  price?: { registerPrice: number }[];
}
interface Price {
  period: string;
  amount: number;
}
interface PlanFeatureProps {
  title: string;
  starter: string;
  business: string;
  premium: string;
}
interface PlanCardProps {
  name: string;
  price: string;
  isStarter?: boolean;
  onAddToCart: () => void;
  showDropdown: boolean;
}

const fetchDomainAvailability = async (domain: string, countryCode:string) => {
  const response = await axios.post(
    `https://liveserver.nowdigitaleasy.com:5000/product/domain_availability?country_code=${countryCode}`,
    { domain }
  );
  return response.data.response.map((item: any) => ({
    name: item.domain,
    status:
      item.status === "available"
        ? "Available"
        : item.status === "unavailable"
        ? "Unavailable"
        : "Unknown",
    price: item.price && item.price.length > 0 ? item.price : undefined,
  }));
};

const fetchPlans = async (countryCode:string) => {
  const response = await axios.get(
    `https://liveserver.nowdigitaleasy.com:5000/product//hosting?country_code=${countryCode}`
  );
  if (!response) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

type Plan = 'Starter' | 'Business' | 'Premium';
interface PlanInfo {
  name: Plan;
  price: number;
}

const plans: PlanInfo[] = [
  { name: 'Starter', price: 132 },
  { name: 'Business', price: 232 },
  { name: 'Premium', price: 350 },
];



const RightPlan: React.FC = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector((state: RootState) => state.countryCode.countryCode);
 
  useEffect(() => {
    dispatch(loadCountryCodeFromLocalStorage());
  }, [dispatch]);

  const { data } = useQuery({
    queryKey: ["plans", countryCode],
    queryFn: () => fetchPlans(countryCode),
  });

  // console.log(data)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [price, setPrice] = useState<number>(0);
  // console.log(price)
  const [searchQuery, setSearchQuery] = useState("");
  const [showInputForm, setShowInputForm] = useState<boolean>(true);
  

  const handlePlanToggle = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const getSelectedIndex = () => plans.findIndex(plan => plan.name === selectedPlan);


  const tableRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!tableRef.current) return;
    setStartX(e.touches[0].pageX - tableRef.current.offsetLeft);
    setScrollLeft(tableRef.current.scrollLeft);
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !tableRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - tableRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tableRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const touchStartHandler = (e: TouchEvent) => handleTouchStart(e as unknown as React.TouchEvent<HTMLDivElement>);
    const touchMoveHandler = (e: TouchEvent) => handleTouchMove(e as unknown as React.TouchEvent<HTMLDivElement>);
    const touchEndHandler = () => handleTouchEnd();

    table.addEventListener('touchstart', touchStartHandler, { passive: false });
    table.addEventListener('touchmove', touchMoveHandler, { passive: false });
    table.addEventListener('touchend', touchEndHandler);

    return () => {
      table.removeEventListener('touchstart', touchStartHandler);
      table.removeEventListener('touchmove', touchMoveHandler);
      table.removeEventListener('touchend', touchEndHandler);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  const [starterPlanPrice, setStarterPlanPrice] = useState<number>(0);
  const [businessPlanPrice, setBusinessPlanPrice] = useState<number>(0);
  const [premiumPlanPrice, setPremiumPlanPrice] = useState<number>(0);
  console.log(data)
  useEffect(() => {
    if (data && data.product) {
      data.product.forEach((plan: any) => {
        const periodPrice = plan.price.find((p: { period: string }) => p.period === selectedPeriod);
        if (periodPrice) {
          switch (plan.name) {
            case "Starter":
              setStarterPlanPrice(periodPrice.amount);
              break;
            case "Business":
              setBusinessPlanPrice(periodPrice.amount);
              break;
            case "Premium":
              setPremiumPlanPrice(periodPrice.amount);
              break;
            default:
              break;
          }
        }
      });
    }
  }, [data, selectedPeriod, countryCode]);
 
  // Update price based on selected period
  // useEffect(() => {
  //   if (data && data.product && data.product.length > 0) {
  //     const initialPrice = data.product[0].price.find(
  //       (p: { period: string }) => p.period === selectedPeriod
  //     );
  //     setPrice(initialPrice ? initialPrice.amount : 0);
  //   }
  // }, [data, selectedPeriod]);


  const handleAddToCart = (planName: string) => {
    setActiveDropdown(activeDropdown === planName ? null : planName);
    setIsModalOpen(true); // Open the modal when adding to cart
    setCurrentStep(0); // Reset to the first step
    setSelectedPlan(planName as Plan);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleDurationChange = (e: { target: { value: any } }) => {
    const selected = e.target.value;
    setSelectedPeriod(selected);

    const selectedPrice = data.product[0].price.find(
      (p: { period: any }) => p.period === selected
    );
    setPrice(selectedPrice ? selectedPrice.amount : 0);
  };

  const {
    data: domains = [],
    refetch,
    isFetching,
  } = useQuery<Domain[]>({
    queryKey: ["domainAvailability", searchQuery],
    queryFn: () => fetchDomainAvailability(searchQuery, countryCode),
    enabled: false,
  });

  // console.log(domains)
  

  const handleSearchClick = () => {
    refetch().then(() => {
      setIsModalOpen(true);
    });
  };


  const [selectedPlan, setSelectedPlan] = useState<Plan>('Starter');
  
  const PlanFeature: React.FC<PlanFeatureProps> = ({
    title,
    starter,
    business,
    premium,
  }) => (
    <tr className=" border-t-[1px] border-black border-opacity-65 font-roboto-serif">
      <td className={`left-0 bg-white text-home-heading tracking-tighter text-xs px-1 lg:text-2xl text-start pl-4  font-400 py-2 lg:py-4 ${title == 'email features:'? 'font-bold text-home-heading font-roboto' : ''}`}>
        {title}
      </td>
      <td className="text-home-heading text-center bg-[#D7F2FF] py-2 lg:py-4 text-lg lg:text-2xl">
        {starter}
      </td>
      <td className="text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl">
        {business}
      </td>
      <td className="text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl">
        {premium}
      </td>
    </tr>
  );

  const PlanCard: React.FC<PlanCardProps> = ({
    name,
    price,
    isStarter,
    onAddToCart,
    showDropdown,
  }) => (
    <th
      className={`planCards text-center py-2 lg:py-4 relative ${
        isStarter ? "bg-[#D7F2FF]" : ""
      }`}
    >
      <div className="flex flex-col gap-2 lg:gap-4">
        <h2 className={`font-900 text-home-heading`}>
          {name}
        </h2>
        <span className="font-900">
          <h2><sup>{countryCode === "IN" ? "₹" : countryCode === "US" ? "$" : "$"}</sup>{price}<sub>/mo</sub></h2>
        </span>
        <button
          className="addToCart bg-[#000AFF] "
          onClick={onAddToCart}
        >
          <p className="font-500">Add to cart</p>
        </button>
      </div>
    </th>
  );


  

  return (
    <section className="plans bg-[#B8D4FF] bg-opacity-50">
      <div className="flex justify-center">
        <h2 className="mb-8 text-home-heading text-center hide-600">
          Choose a Right Plan for Your Website
        </h2>
       <div className="mb-8 items-center justify-center show-600 ">
        <h4 className="mb-2 text-home-heading text-center">
            Choose Your Plan
          </h4>
          <p className="text-center text-home-body">Businesses just love working with ussss!</p>
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

      <div className="mb-4">
       <SwipeableTable>
        <div className="bg-white mx-0 lg:mx-14  bordered-table rounded-md overflow-hidden">
            <table className="w-full min-w-max rounded-[7px]">
              <thead>
                <tr>
                  <th className="first-column left-0 shadow-r-xl text-home-heading tracking-tighter z-20 px-4">
                    <h2 className="plansHeader text-left text-home-heading">Plan Features</h2>
                  </th>
                  <PlanCard
                    name="Starter"
                    price={`${starterPlanPrice}`}
                    isStarter={true}
                    onAddToCart={() => handleAddToCart("Starter")}
                    showDropdown={activeDropdown === "Starter"}
                  />
                  <PlanCard
                    name="Premium"
                    price={`${premiumPlanPrice}`}
                    onAddToCart={() => handleAddToCart("Premium")}
                    showDropdown={activeDropdown === "Premium"}
                  />
                   <PlanCard
                    name="Business"
                    price={`${businessPlanPrice}`}
                    onAddToCart={() => handleAddToCart("Business")}
                    showDropdown={activeDropdown === "Business"}
                  />
                </tr>
              </thead>
              <tbody className="hide-600">
                <PlanFeature
                  title="Host Websites"
                  starter="1"
                  business="50"
                  premium="100"
                />
                <PlanFeature
                  title="SSD Storage (GB)"
                  starter="50GB"
                  business="100GB"
                  premium="200GB"
                />
                <PlanFeature
                  title="Bandwidth"
                  starter="Unlimited"
                  business="Unlimited"
                  premium="Unlimited"
                />
                <PlanFeature
                  title="Free .IN Domain (1st Year Only)"
                  starter="1"
                  business=""
                  premium="1"
                />
                <PlanFeature
                  title="Subdomains"
                  starter="5"
                  business="100"
                  premium="200"
                />
                <PlanFeature
                  title="FTP Users"
                  starter="1"
                  business="50"
                  premium="100"
                />
                <PlanFeature
                  title="email features:"
                  starter=""
                  business=""
                  premium=""
                />
                <PlanFeature
                  title="eMail Accounts"
                  starter="2"
                  business="50"
                  premium="100"
                />
                <PlanFeature
                  title="Individual Mailbox Size (GB)"
                  starter="1"
                  business="1"
                  premium="1"
                />
                <PlanFeature
                  title="Overall Mailbox Size (GB)"
                  starter="2"
                  business="50"
                  premium="100"
                />
                <PlanFeature
                  title="Email Per Hour"
                  starter="100"
                  business="100"
                  premium="100"
                />
                <PlanFeature
                  title="Email forwarding accounts"
                  starter="Unlimited"
                  business="Unlimited"
                  premium="Unlimited"
                />
                <PlanFeature
                  title="FTP Users"
                  starter="Unlimited"
                  business="Unlimited"
                  premium="Unlimited"
                />
              </tbody>

              <tbody className="w-full show-600">
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Get secure and personalised email account for your business</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Setup HD video with 100 participants to ensure uninterrupted productivity.</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Keep track of important events and share your schedule.</p></td>
                        <td className="border bg-white text-center px-4 py-2">

                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Secure communications tool, built for teams that makes team communication easy and efficient.</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Generate and work on documents with images, tables, drawings, charts and more</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Get valuable insights via spreadsheet data using formulas, charts, connectors and macros</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Make stunning presentations using templates, embed videos and images</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Do engaging, high-quality sites for your project</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                  
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Geo-restriction for Checkout</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                          <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Hierarchy based Geo-restriction Notification</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                          <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Sort Tracking Page</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Basic security and admin controls.</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border bg-white text-center px-4 py-2"><p>Standard Endpoint device management for account security</p></td>
                        <td className="border bg-white text-center px-4 py-2">
                        <Image
                            src={checkIcon}
                            alt='tick'
                            className='mx-auto'
                            width={32}
                            height={32}
                            />
                        </td>
                    </tr>
                    <hr />
                    <div className="flex items-center justify-center w-full py-5">
                    <button
                        className="bg-home-primary button-medium  text-white  rounded-lg mx-auto max-md:mx-1"
                        onClick={() => handleAddToCart(selectedPlan? selectedPlan : 'Starter')}
                      >
                        Add to cart
                      </button>
                    </div>

              </tbody>

            </table> 
        </div>
       </SwipeableTable>
      </div>

      {activeDropdown === "Starter" && (
        <div>
          <PlanModal
            isOpen={isModalOpen}
            currentStep={currentStep}
            handleNextStep={handleNextStep}
            setIsModalOpen={setIsModalOpen}
            showInputForm={showInputForm}
            setShowInputForm={setShowInputForm}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            domains={domains}
            refetch={refetch}
            selectedPlan = {selectedPlan}
            isFetching={isFetching}
            index={0}
          />
        </div>
      )}
      
      {activeDropdown === "Premium" && (
        <div>
          <PlanModal
            isOpen={isModalOpen}
            currentStep={currentStep}
            handleNextStep={handleNextStep}
            setIsModalOpen={setIsModalOpen}
            showInputForm={showInputForm}
            setShowInputForm={setShowInputForm}
            searchQuery={searchQuery}
            selectedPlan= {selectedPlan}
            setSearchQuery={setSearchQuery}
            domains={domains}
            refetch={refetch}
            isFetching={isFetching}
            index={2}
          />
        </div>
      )}

      {activeDropdown === "Business" && (
        <div>
          <PlanModal
            isOpen={isModalOpen}
            currentStep={currentStep}
            handleNextStep={handleNextStep}
            setIsModalOpen={setIsModalOpen}
            selectedPlan={selectedPlan}
            showInputForm={showInputForm}
            setShowInputForm={setShowInputForm}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            domains={domains}
            refetch={refetch}
            isFetching={isFetching}
            index={1}
          />
        </div>
      )}
    </section>
  );
};

export default RightPlan;