"use client"
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PlanModal from "./PlanModel"; // Import the PlanModal component
import SelectPlan from "@/components/SelectPlan";
import { ICONS } from "@/assets";
import Image from "next/image";
import checkIcon from '../../../../assets/icons/check 1.svg'; // Adjust the path as necessary
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
  starterIcon: any;
  advancedIcon: any;
  premiumIcon: any;
  iconSrc: any;
}
interface PlanCardProps {
  name: string;
  price: string;
  isStarter?: boolean;
  onAddToCart: () => void;
  showDropdown: boolean;
}

type Plan = 'Starter' | 'Advanced' | 'Premium';
interface PlanInfo {
  name: Plan;
  price: number;
}

const plans: PlanInfo[] = [
  { name: 'Starter', price: 132 },
  { name: 'Advanced', price: 232 },
  { name: 'Premium', price: 350 },
];


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
    `https://liveserver.nowdigitaleasy.com:5000/product//gsuite?country_code=${countryCode}`
  ); // Replace with your API endpoint
  if (!response) {
    throw new Error("Network response was not ok");
  }
  console.log("Google workspace plans: ", response.data)
  return response.data;
};

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

  // console.log("Data Fetched from api: ",data)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [price, setPrice] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showInputForm, setShowInputForm] = useState<boolean>(true);

  const handlePlanToggle = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const getSelectedIndex = () => plans.findIndex(plan => plan.name === selectedPlan);



 const [selectedPeriod, setSelectedPeriod] = useState("Annual-Monthly");
  const [starterPlanPrice, setStarterPlanPrice] = useState<number>(0);
  const [businessPlanPrice, setBusinessPlanPrice] = useState<number>(0);
  const [premiumPlanPrice, setPremiumPlanPrice] = useState<number>(0);

  useEffect(() => {
    if (data && data.products) {
      data.products.forEach((plan: any) => {
        const periodPrice = plan.price.find((p: { period: string }) => p.period === selectedPeriod);
        console.log(periodPrice)

        if (periodPrice) {
          switch (plan.name) {
            case "Google Workspace Business Starter":
              setStarterPlanPrice(periodPrice.offerPrice);
              break;
            case "Google Workspace Business Standard":
              setBusinessPlanPrice(periodPrice.offerPrice);
              break;
            case "Google Workspace Business Plus":
              setPremiumPlanPrice(periodPrice.offerPrice);
              break;
            default:
              break;
          }
        }
      });
    }
  }, [data, selectedPeriod, countryCode]);

  const handleAddToCart = (planName: string) => {
    setActiveDropdown(activeDropdown === planName ? null : planName);
    setIsModalOpen(true); // Open the modal when adding to cart
    setCurrentStep(0); // Reset to the first step
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
    starterIcon,
    advancedIcon,
    premiumIcon,
    iconSrc,
  }) => (
    <tr className=" border-t-[1px] border-black font-roboto-serif">
      <td className="planFeature text-home-heading text-lg lg:text-2xl text-start pl-4 font-400 py-2 lg:py-4">
        <div className="flex gap-10 max-md:gap-3 px-4 max-md:px-1">
          <Image src={iconSrc} alt={title} className="" />
          <p className="text-left">{title}</p>{" "}
          {/* Use the new image prop */}
        </div>
      </td>
      <td className="planFeature text-home-heading text-center bg-[#c0daf8] py-2 lg:py-4 text-lg lg:text-2xl">
        <div className="flex justify-center">
          {starterIcon && <Image src={starterIcon} alt="Starter icon" />}
        </div>
      </td>
      <td className="planFeature text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl">
        <div className="flex justify-center">
          {advancedIcon && <Image src={advancedIcon} alt="Advanced icon" />}
        </div>
      </td>
      <td className="planFeature text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl">
        <div className="flex justify-center">
          {premiumIcon && <Image src={premiumIcon} alt="Premium icon" />}
        </div>
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
      className={`planCards text-center py-8 lg:py-8 relative ${
        isStarter ? "bg-[#c0daf8]" : ""
      }`}
    >
      <div className="flex flex-col gap-2 lg:gap-4">
        <h2 className="font-900 text-home-heading">
          {name}
        </h2>
        <span className="font-900">
          <h2><sup>{countryCode === "IN" ? "₹" : countryCode === "US" ? "$" : "$"}</sup>{price}<sub>/mo</sub></h2>
        </span>
        <button
          className="bg-home-primary button-medium  text-white  rounded-lg mx-auto max-md:mx-1"
          onClick={onAddToCart}
        >
          Add to cart
        </button>
      </div>
    </th>
  );

  return (
    <section className="plans bg-[#B8D4FF] bg-opacity-50 workspace-table">
      <div className="flex justify-center flex-col gap-2 mb-[24px]">
        <h2 className="hide-600 text-home-heading text-center">
          Find the right plan for your business.
        </h2>
        <h2 className="show-600 text-home-heading text-center">
          Choose Your Plan
        </h2>
        <p className="hide-600 text-[22px] lineHeight-[1.2]">Choose the Google Workspace edition that best fits your business.</p>
        <p className="show-600">Businesses just love working with us!</p>
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

      <div className="px-0 lg:px-10 pb-10">
        <SwipeableTable>
        <div className="bg-white mx-0 border-[3px] border-blue-600 rounded-md borderTable swipe-table">
          <table className="w-full min-w-max  ">
            <thead>
              <tr>
                <th className="first-column left-0 bg-white shadow-r-xl text-home-heading text-xl lg:text-5xl font-roboto font-900 tracking-tighter text-left py-4 px-8 lg:py-8">
                    <h2 className="text-left">Google Workspace Features</h2>
                </th>
                <PlanCard
                  name="Starter"
                  price={`${starterPlanPrice}`}
                  isStarter={true}
                  onAddToCart={() => handleAddToCart("Google Workspace Business Starter")}
                  showDropdown={activeDropdown === "Google Workspace Business Starter"}
                />
                <PlanCard
                  name="Standard"
                  price={`${premiumPlanPrice}`}
                  onAddToCart={() => handleAddToCart("Google Workspace Business Standard")}
                  showDropdown={activeDropdown === "Google Workspace Business Standard"}
                />
                 <PlanCard
                  name="Business Plus"
                  price={`${businessPlanPrice}`}
                  onAddToCart={() => handleAddToCart("Google Workspace Business Plus")}
                  showDropdown={activeDropdown === "Google Workspace Business Plus"}
                />
              </tr>
            </thead>

            <tbody className="hide-600">
              <PlanFeature
                title="Get secure and personalised email account for your business"
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Gmail}
              />
              <PlanFeature
                title="Setup HD video with 100 participants to ensure uninterrupted productivity."
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.video}
              />
              <PlanFeature
                title="Keep track of important events and share your schedule."
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.calendar}
              />
              <PlanFeature
                title="Secure communications tool, built for teams that makes team communication easy and efficient."
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.teams}
              />
              <PlanFeature
                title="Generate and work on documents with images, tables, drawings, charts and more"
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Docs}
              />
              <PlanFeature
                title="Get valuable insights via spreadsheet data using formulas, charts, connectors and macros"
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Sheets}
              />
              <PlanFeature
                title="Make stunning presentations using templates, embed videos and images"
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Keeps}
              />
              <PlanFeature
                title="Do engaging, high-quality sites for your project."
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Projects}
              />
              <PlanFeature
                title="Create custom forms for surveys and questionnaires."
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Forms}
              />
              <PlanFeature
                title="Manage your to-do’s, take notes on the go and never lose track of ideas."
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Buld}
              />
              <PlanFeature
                title="Experience interesting conversations, discuss ideas, gather input and keep everyone in your organization engaged."
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Buld1}
              />
              <PlanFeature
                title="Basic security and admin controls."
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Admin}
              />
              <PlanFeature
                title="Standard Endpoint device management for account security"
                starterIcon={ICONS.Check}
                advancedIcon={ICONS.Check}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Google1}
              />
              <PlanFeature
                title="Smart Search within and outside Google Workspace with Cloud Search."
                starterIcon={ICONS.Close}
                advancedIcon={ICONS.Close}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Google2}
              />
              <PlanFeature
                title="Vault for eDiscovery for emails, chats, and files and archiving."
                starterIcon={ICONS.Close}
                advancedIcon={ICONS.Close}
                premiumIcon={ICONS.Check}
                iconSrc={ICONS.Google3}
              />
            </tbody>

            <tbody className="w-full show-600">
                  <tr>
                      <td className=" text-center px-4 py-2"><p>Get secure and personalised email account for your business</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Setup HD video with 100 participants to ensure uninterrupted productivity.</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Keep track of important events and share your schedule.</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Secure communications tool, built for teams that makes team communication easy and efficient.</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Generate and work on documents with images, tables, drawings, charts and more</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Get valuable insights via spreadsheet data using formulas, charts, connectors and macros</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Make stunning presentations using templates, embed videos and images</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Do engaging, high-quality sites for your project</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Geo-restriction for Checkout</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Hierarchy based Geo-restriction Notification</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Sort Tracking Page</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Basic security and admin controls.</p></td>
                      <td className=" text-center px-4 py-2">
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
                      <td className=" text-center px-4 py-2"><p>Standard Endpoint device management for account security</p></td>
                      <td className=" text-center px-4 py-2">
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
                      onClick={() => handleAddToCart(selectedPlan)}
                    >
                      Add to cart
                    </button>
                  </div>

            </tbody>

          </table>
        </div>
        </SwipeableTable>
      </div>
      
      {activeDropdown === "Google Workspace Business Starter" && (
        <div>
          <PlanModal
          planPrice={starterPlanPrice}
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
            isFetching={isFetching}
            index={0}
          />
        </div>
      )}
      
      {activeDropdown === "Google Workspace Business Standard" && (
        <div>
          <PlanModal
          planPrice={premiumPlanPrice}
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
            isFetching={isFetching}
            index={1}
          />
        </div>
      )}

      {activeDropdown === "Google Workspace Business Plus" && (
        <div>
          <PlanModal
          planPrice={businessPlanPrice}
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
            isFetching={isFetching}
            index={2}
          />
        </div>
      )}
    </section>
  );
};

export default RightPlan;
