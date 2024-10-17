// pages/RightPlan.tsx or components/RightPlan.tsx
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PlanModal from "./PlanModel"; // Import the PlanModal component
import SelectPlan from "@/components/SelectPlan";
import { ICONS } from "@/assets";
import Image from "next/image";
import checkIcon from '../../../../assets/icons/check 1.svg'; // Adjust the path as necessary
import './style.css'

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
  starterIcon: any; // You can replace `any` with the correct type, e.g., `string` or `StaticImageData` if using Next.js Image
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

const fetchDomainAvailability = async (domain: string) => {
  const response = await axios.post(
    "https://liveserver.nowdigitaleasy.com:5000/product/domain_availability?country_code=IN",
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

const fetchPlans = async () => {
  const response = await axios.get(
    "https://liveserver.nowdigitaleasy.com:5000/product//hosting?country_code=IN"
  ); // Replace with your API endpoint
  if (!response) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

const RightPlan: React.FC = () => {
  const { data } = useQuery({ queryKey: ["plans"], queryFn: fetchPlans });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [price, setPrice] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showInputForm, setShowInputForm] = useState<boolean>(true); // Ensure this state is defined

  // Update price based on selected period
  useEffect(() => {
    if (data && data.product && data.product.length > 0) {
      const initialPrice = data.product[0].price.find(
        (p: { period: string }) => p.period === selectedPeriod
      );
      setPrice(initialPrice ? initialPrice.amount : 0);
    }
  }, [data, selectedPeriod]);

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
    queryFn: () => fetchDomainAvailability(searchQuery),
    enabled: false,
  });

  const handleSearchClick = () => {
    refetch().then(() => {
      setIsModalOpen(true);
    });
  };
  type Plan = 'Starter' | 'Standard' | 'Plus';

  const [selectedPlan, setSelectedPlan] = useState<Plan>('Starter');
  
  const handlePlanToggle = (plan: Plan) => {
    setSelectedPlan(plan);
  };

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
          <h2><sup>₹</sup>{price}<sub>/mo</sub></h2>
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
    <section className="plans bg-[#B8D4FF] bg-opacity-50">
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

      <div className='justify-center hidden show-600-flex flex-col items-center gap-6 mb-5'>
        <div className="togglebox-contianer flex flex-col gap-4 px-3 shadow-neutral-700">
            {/* Toggle Button Container */}
            <div className="toggle-box flex relative justify-between text-center py-6 px-16 cursor-pointer">
              {/* The white div that moves on toggle */}
              <div
                className={`hide-500 bg-white absolute rounded-xl top-3 w-[85px] h-[50px] transition-all duration-500 ease-in-out ${
                  selectedPlan === 'Starter'
                    ? 'translate-x-[-10px]'
                    : selectedPlan === 'Standard'
                    ? 'translate-x-[140px]'
                    : 'translate-x-[280px] w-[70px]'
                }`}
              ></div>
              <div
                className={`show-500 hide-400 bg-white absolute rounded-xl top-3 w-[85px] h-[50px] transition-all duration-500 ease-in-out ${
                  selectedPlan === 'Starter'
                    ? 'translate-x-[-10px]'
                    : selectedPlan === 'Standard'
                    ? 'translate-x-[90px]'
                    : 'translate-x-[180px] w-[60px]'
                }`}
              ></div>
              <div
                className={`show-400 bg-white absolute rounded-xl top-3  h-[50px] transition-all duration-500 ease-in-out ${
                  selectedPlan === 'Starter'
                    ? 'translate-x-[0px] w-[70px]'
                    : selectedPlan === 'Standard'
                    ? 'translate-x-[105px] w-[85px]'
                    : 'translate-x-[220px] w-[60px]'
                }`}
              ></div>



              {/* Plans Text */}
              <div className="flex justify-between font-bold text-md px-2 gap-8 z-50 w-full">
                <span
                  onClick={() => handlePlanToggle('Starter')}
                >
                  Starter
                </span>
                <span
                 
                  onClick={() => handlePlanToggle('Standard')}
                >
                  Standard
                </span>
                <span
                 
                  onClick={() => handlePlanToggle('Plus')}
                >
                  Plus
                </span>
              </div>
            </div>
        </div>
        <div className=" justify-between items-center pricing-flex hidden show-600-flex">
          <div className="flex flex-col gap-1">
            <h6><span>₹</span>132</h6>
            <p className="sub">/User/Month</p>
          </div>
          <div className="flex flex-col gap-1">
            <h6><span>₹</span>132</h6>
            <p className="sub">/User/Month</p>
          </div>
          <div className="flex flex-col gap-1">
            <h6><span>₹</span>132</h6>
            <p className="sub">/User/Month</p>
          </div>
        </div>
      </div>
      
      <div className="px-0 lg:px-10 pb-10">
        <div className="bg-white mx-0 overflow-x-auto border-[3px] border-blue-600 rounded-md ">
          <table className="w-full min-w-max  ">
            <thead>
              <tr>
                <th className="first-column left-0 bg-white shadow-r-xl text-home-heading text-xl lg:text-5xl font-roboto font-900 tracking-tighter text-left py-4 px-8 lg:py-8">
                    <h2 className="text-left">Google Workspace Features</h2>
                </th>
                <PlanCard
                  name="Starter"
                  price="67"
                  isStarter={true}
                  onAddToCart={() => handleAddToCart("Starter")}
                  showDropdown={activeDropdown === "Starter"}
                />
                <PlanCard
                  name="Advanced"
                  price="99"
                  onAddToCart={() => handleAddToCart("Advanced")}
                  showDropdown={activeDropdown === "Advanced"}
                />
                <PlanCard
                  name="Premium"
                  price="149"
                  onAddToCart={() => handleAddToCart("Premium")}
                  showDropdown={activeDropdown === "Premium"}
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
                    >
                      Add to cart
                    </button>
                  </div>

            </tbody>

          </table>
        </div>
      </div>
      
      {activeDropdown === "Starter" && (
        <div>
          <PlanModal
          planPrice={67}
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
      {activeDropdown === "Advanced" && (
        <div>
          <PlanModal
          planPrice={99}
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
      {activeDropdown === "Premium" && (
        <div>
          <PlanModal
          planPrice={149}
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
