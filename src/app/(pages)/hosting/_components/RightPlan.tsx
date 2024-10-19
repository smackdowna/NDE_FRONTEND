// pages/RightPlan.tsx or components/RightPlan.tsx
import React, { useState, useEffect, useRef, useCallback} from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import PlanModal from './PlanModal';
import './style.css'
import checkIcon from '../../../../assets/icons/check 1.svg'
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
  starter: string;
  advanced: string;
  premium: string;
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
    starter,
    advanced,
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
        {advanced}
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
          <h2><sup>₹</sup>{price}<sub>/mo</sub></h2>
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
          <p className="text-center text-home-body">Businesses just love working with us!</p>
       </div>
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
            {/* <p className="sub">/User/Month</p> */}
          </div>
          <div className="flex flex-col gap-1">
            <h6><span>₹</span>232</h6>
            {/* <p className="sub">/User/Month</p> */}
          </div>
          <div className="flex flex-col gap-1">
            <h6><span>₹</span>350</h6>
            {/* <p className="sub">/User/Month</p> */}
          </div>
        </div>
      </div>
      

      <div className="pb-10">
        <div className="bg-white mx-0 lg:mx-14 overflow-x-auto bordered-table rounded-md swipe-table"
              ref={tableRef}
              style={{ overscrollBehaviorX: 'contain', touchAction: 'pan-y', }}
              >
          <table className="w-full min-w-max">
            <thead>
              <tr>
                <th className="first-column left-0 bg-white shadow-r-xl text-home-heading tracking-tighter z-20 px-4">
                  <h2 className="plansHeader text-left text-home-heading">Plan Features</h2>
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
                title="Host Websites"
                starter="1"
                advanced="50"
                premium="100"
              />
              <PlanFeature
                title="SSD Storage (GB)"
                starter="50GB"
                advanced="100GB"
                premium="200GB"
              />
              <PlanFeature
                title="Bandwidth"
                starter="Unlimited"
                advanced="Unlimited"
                premium="Unlimited"
              />
              <PlanFeature
                title="Free .IN Domain (1st Year Only)"
                starter="1"
                advanced=""
                premium="1"
              />
              <PlanFeature
                title="Subdomains"
                starter="5"
                advanced="100"
                premium="200"
              />
              <PlanFeature
                title="FTP Users"
                starter="1"
                advanced="50"
                premium="100"
              />
              <PlanFeature
                title="email features:"
                starter=""
                advanced=""
                premium=""
              />
              <PlanFeature
                title="eMail Accounts"
                starter="2"
                advanced="50"
                premium="100"
              />
              <PlanFeature
                title="Individual Mailbox Size (GB)"
                starter="1"
                advanced="1"
                premium="1"
              />
              <PlanFeature
                title="Overall Mailbox Size (GB)"
                starter="2"
                advanced="50"
                premium="100"
              />
              <PlanFeature
                title="Email Per Hour"
                starter="100"
                advanced="100"
                premium="100"
              />
              <PlanFeature
                title="Email forwarding accounts"
                starter="Unlimited"
                advanced="Unlimited"
                premium="Unlimited"
              />
              <PlanFeature
                title="FTP Users"
                starter="Unlimited"
                advanced="Unlimited"
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
