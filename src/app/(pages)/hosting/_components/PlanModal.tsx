import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { RootState } from "@/store/store";
import { showToast } from "@/services/showToast";
import "./PlanModal.css";
import { set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setIsSidebarOpen } from '@/store/sidebarSlice';


interface CartItem {
  product: string;
  productId: string;
  domainName?: string;
  period?: string;
  name?: string;
  status?: string;
  price?: number;
  quantity:number;
  duration:number;
  year?: number;
}

interface Domain {
  name: string;
  status: string;
  price?: { registerPrice: number }[];
}

interface cardDetails {
  id: number;
  duration: string;
  originalPrice: string;
  durationInYears: number;
  price: string;
  currency: string;
  desc: string;
  discount: string;
}

interface PlanModalProps {
  isOpen: boolean;
  currentStep: number;
  handleNextStep: () => void;
  setIsModalOpen: (isOpen: boolean) => void;
  showInputForm: boolean;
  setShowInputForm: (show: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  domains: Domain[];
  refetch: () => void;
  isFetching: boolean;
  index: number;
}

const fetchPlans = async () => {
  const response = await axios.get(
    "https://liveserver.nowdigitaleasy.com:5000/product//hosting?country_code=IN"
  );
  if (!response) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

const PlanModal: React.FC<PlanModalProps> = ({
  isOpen,
  currentStep,
  handleNextStep,
  setIsModalOpen,
  showInputForm,
  setShowInputForm,
  searchQuery,
  setSearchQuery,
  domains,
  refetch,
  isFetching,
  index,
}) => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector((state: any) => state.sidebar);
  const queryClient = useQueryClient();
  const [cart, setCart]= useState<CartItem>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWithTax, setTotalWithTax] = useState(0);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [price, setPrice] = useState<number>(0);
  const [selectedDomains, setSelectedDomains] = useState<Domain[]>([]);
  const [selectedYears, setSelectedYears] = useState<{ [key: string]: number }>(
    {}
  );

  console.log(cart)

//   Getting all the products from cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

    // Showing total price
    useEffect(() => {
      const total = cart.reduce((acc, item) => acc + (item.price || 0), 0);
      setTotalPrice(total);
      const tax = total * 0.18;
      setTotalWithTax(total + tax);
    }, [cart]);

  // console.log(selectedDomains)

  const { data, isError, isLoading } = useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  });
  const [current, setCurrent] = useState(2);

  useEffect(() => {
    if (data && data.product && data.product.length > 0) {
      const initialPrice = data?.product[index]?.price?.find(
        (p: { period: string }) => p.period === selectedPeriod
      );
      console.log(initialPrice);
      setPrice(initialPrice ? initialPrice?.amount : 0);
    }
  }, [data, selectedPeriod, index]);

  useEffect(() => {
    if (data) {
      const currentProduct = data.product[index]._id;
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productCartItems = existingCart.filter(
        (item: any) => item.productId === currentProduct
      );
      const domainsInCart = domains.filter((domain) =>
        productCartItems.some((item: any) => item.domainName === domain.name)
      );
      setSelectedDomains(domainsInCart);
    }
  }, [data, index, domains]);

  const handleYearChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    domainName: string
  ) => {
    const selected = Number(e.target.value);
    setSelectedYears((prevYears) => ({
      ...prevYears,
      [domainName]: selected,
    }));
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedPeriod(selected);

    if (data && data.product && data.product[index]) {
      const selectedPrice = data.product[index].price.find(
        (p: { period: string }) => p.period === selected
      );
      setPrice(selectedPrice ? selectedPrice.offerPrice : 0);
    }
  };

  const addCartToAPI = async (cartData: any) => {
    try {
      const response = await axios.post(
        "https://liveserver.nowdigitaleasy.com:5000/cart",
        { data: cartData },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      queryClient.invalidateQueries({ queryKey: ["cartData"] });
      return response.data;
    } catch (error) {
      throw new Error("Failed to add cart to API");
    }
  };

  const syncCartToAPI = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartData = existingCart.map((item: any) => {
      const { price, ...rest } = item;
      return rest;
    });
    if (isAuthenticated && existingCart.length > 0) {
      const toastIdForSuccess = `1`;
      const toastIdForError = `2`;
      addCartToAPI(cartData)
        .then(() => {
          showToast("success", `Cart synced successfully`, toastIdForSuccess);
          queryClient.invalidateQueries({ queryKey: ["plans"] });
        })
        .catch((error) => {
          showToast("error", `Failed to sync cart`, toastIdForError);
          console.error(error);
        });
    }
  };

  const [isPlanCardSelected, setIsPlanCardSelected] = useState(false);
  const [selectedPlanCard, setSelectedPlanCard] = useState<cardDetails | null>(
    null
  );

  const planCards = [
    {
      id: 0,
      discount: "25%",
      duration: "12 months",
      durationInYears: 1,
      price: "₹399",
      originalPrice: "₹599.00",
      currency: "INR / month",
      desc: "Plans renew at rs. 399.00 / month 0n 13/10/2025",
    },
    {
      id: 1,
      discount: "25%",
      duration: "24 months",
      durationInYears: 2,
      price: "₹399",
      originalPrice: "₹399.00",
      currency: "INR / month",
      desc: "Plans renew at rs. 399.00 / month 0n 13/10/2025",
    },
    {
      id: 2,
      discount: "25%",
      duration: "36 months",
      durationInYears: 3,
      price: "₹399",
      originalPrice: "₹299.00",
      currency: "INR / month",
      desc: "Plans renew at rs. 399.00 / month 0n 13/10/2025",
    },
    {
      id: 3,
      discount: "25%",
      duration: "48 months",
      durationInYears: 4,
      price: "₹399",
      originalPrice: "₹599.00",
      currency: "INR / month",
      desc: "Plans renew at rs. 399.00 / month 0n 13/10/2025",
    },
  ];

  const handlePlanCardSelection = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number // Accept id directly
  ) => {
    // Add the 'selected' class to the clicked card
    const selectedCard = e.currentTarget as HTMLDivElement;
    selectedCard.classList.add("selected");

    // Log the id and selected card details for debugging
    console.log("Selected card id:", id);
    console.log("Selected card details:", planCards[id]);

    // Wait for 2 seconds
    setTimeout(() => {
      setIsPlanCardSelected(true);
      setSelectedPlanCard(planCards[id]); // Directly select the card by id
    }, 1000);

    // remove the selected class from all other cards
    const cards = document.querySelectorAll(".plans-card");
    cards.forEach((card) => {
      if (card !== selectedCard) {
        card.classList.remove("selected");
      }
    });
  };

  const PlanCard = (cardDetails: cardDetails) => {
    return (
      <div
        className="plans-card flex flex-col items-center bg-white lg:px-[36px] lg:py-[12px] lg:pt-[32px] relative"
        onClick={(e) => handlePlanCardSelection(e, cardDetails.id)} // Pass id directly
      >
        <span className="time text-center mb-1">{cardDetails.duration}</span>
        <span className="originalPrice text-center">
          {cardDetails.originalPrice}
        </span>
        <span className="price text-center">{cardDetails.price}</span>
        <span className="currency text-center mb-1 opacity-80">
          {cardDetails.currency}
        </span>
        <span className="desc text-center opacity-70">{cardDetails.desc}</span>
        <div className="save">
          <span>Save {cardDetails.discount}</span>
        </div>
      </div>
    );
  };

  const gotoStep2 = () => {
    // show all the plan-cards
    setCurrent(2);
    setIsPlanCardSelected(false);
  };

  const toggleDomainSelection = (domain: Domain) => {
    const selectedYear = selectedYears[domain.name] || 1;
    setSelectedDomains((prevSelected) => {
      const isSelected = prevSelected.some((d) => d.name === domain.name);
      let updatedSelectedDomains;

      const toastId = `toast-${domain.name}`;

      if (isSelected) {
        showToast("success", `${domain.name} removed from cart`, toastId);
        updatedSelectedDomains = prevSelected.filter(
          (d) => d.name !== domain.name
        );
      } else {
        showToast("success", `${domain.name} added to cart`, toastId);
        updatedSelectedDomains = [...prevSelected, domain];
      }

      if (data) {
        const currentProduct = data.product[index]._id;
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

        const newCartItems = updatedSelectedDomains.map((domain) => ({
          product: "hosting",
          productId: currentProduct,
          domainName: domain.name,
          period: selectedPeriod,
          type: "new",
          price: domain.price
            ? domain.price[0].registerPrice * selectedYear
            : 0,
        }));

        const updatedCart = existingCart.filter(
          (item: any) =>
            !newCartItems.some(
              (newItem) => newItem.domainName === item.domainName
            )
        );

        localStorage.setItem(
          "cart",
          JSON.stringify([...updatedCart, ...newCartItems])
        );
        if (isAuthenticated) {
          syncCartToAPI();
        }
      }

      return updatedSelectedDomains;
    });
  };

  const DomainItem = ({ domain }: { domain: Domain }) => {
    const year = selectedYears[domain.name] || 1;
    return (
      <div className="flex justify-between bg-white items-center content-center my-3 w-full">
        <div className="flex flex-col mx-4 max-md:mx-1 p-3 max-md:p-1 domainPlansFlex">
          <span className="md:font-900 font-700 text-lg max-lg:text-md max-md:text-xs">
            {domain.name}
          </span>
          <div>
            <span
              className={`text-[14px] w-[30px] max-md:text-xs ${
                domain.status === "Available"
                  ? "text-green-500"
                  : domain.status === "Added"
                  ? "text-yellow-600"
                  : domain.status === "Unavailable"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              <Image
                src={
                  domain.status === "Available"
                    ? ICONS.charmCircleTick
                    : domain.status === "Added"
                    ? ICONS.cartIcon
                    : ICONS.xCircle
                }
                alt={domain.status}
                className="inline-block w-4 h-4 mr-2"
              />
              {domain.status}
            </span>
          </div>
        </div>
        <div className="flex content-center items-center md:gap-8 gap-2 ">
          <select
            value={year}
            onChange={(e) => handleYearChange(e, domain.name)}
            className="border rounded-md p-1 hide-700"
            disabled={domain.status !== "Available"}
          >
            {[1, 2, 3, 5].map((year) => (
              <option key={year} value={year}>
                {year} year{year > 1 ? "s" : ""}
              </option>
            ))}
          </select>
          <div className="domainPriceContainer flex flex-col items-start">
            <span className="font-900  text-start text-2xl max-lg:text-sm leading-tight mainPrice">
              {/* Multiply price by the selected year */}
              {domain.price && domain.price.length > 0
                ? `₹${domain.price[0].registerPrice * year}`
                : "N/A"}
            </span>
            <div className="">
              <span className="text-[14px] text-center max-lg:text-xs bottomPrice">
                {domain.price && domain.price.length > 0
                  ? `then ₹${(domain.price[0].registerPrice + 200) * year}/Year`
                  : ""}
              </span>
            </div>
          </div>
          <button
            className={`text-white w-[110px] max-md:w-[80px] max-md:mx-1 max-md:text-xs max-md:p-1 p-2 mx-3 rounded-md domainModalButton  ${
              selectedDomains.some((d) => d.name === domain.name)
                ? "bg-home-primary"
                : domain.status === "Available"
                ? "bg-blue-500 availableCart"
                : domain.status === "Added"
                ? "bg-red-500 removeCart"
                : domain.status === "Unavailable"
                ? "bg-gray-400 unavailableCart"
                : "bg-gray-500 unavailableCart"
            }`}
            disabled={domain.status !== "Available"}
            onClick={() => toggleDomainSelection(domain)}
          >
            <div className="hide-470">
              {selectedDomains.some((d) => d.name === domain.name)
                ? "Remove"
                : domain.status === "Available"
                ? "Add to Cart"
                : domain.status === "Added"
                ? "Remove"
                : "Unavailable"}
            </div>

            <div className="show-470">
              {selectedDomains.some((d) => d.name === domain.name) ? (
                <Image
                  src={ICONS.trashRed}
                  alt="cart"
                  className="inline-block w-4 h-4 mr-2"
                />
              ) : domain.status === "Available" ? (
                <Image
                  src={ICONS.cartBlue}
                  alt="cart"
                  className="inline-block w-4 h-4 mr-2"
                />
              ) : domain.status === "Added" ? (
                <Image
                  src={ICONS.trashRed}
                  alt="cart"
                  className="inline-block w-4 h-4 mr-2"
                />
              ) : (
                <Image
                  src={ICONS.cartGrey}
                  alt="cart"
                  className="inline-block w-4 h-4 mr-2"
                />
              )}
            </div>
          </button>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading plans</div>;

  const currentProduct = data?.product[index];

  return (
    <div className=" fixed inset-0 z-50 flex items-end justify-center">
      <div className="hostingModal relative w-[90vw] md:-[80vw] max-xl:w-[95vw] max-md:w-[95vw] rounded-lg border border-black shadow-lg mb-8">
        <div className="hostingModalContent lg:py-[36px] lg:px-[52px] md:py-[12px] md:px-[32px] w-full py-[8px] px-[24px]">
          <div className="hostingFlex flex items-center justify-between w-full border-b-[1px] border-black pb-2">
            <div className=" flex items-center justify-between">
              <span className="ModalTitle">Choose a plan</span>
            </div>
            <div className="flex items-center lg:gap-[40px] gap-[20px] hide-600">
              <span className="hosting-plan ">Hosting - Deluxe Plan</span>
              <button
                className="hostingModalButton choose"
                onClick={() => setIsModalOpen(false)}
              >
                Change
              </button>
              <Image src={ICONS.checkGreen} alt="done" className="check" />
            </div>
            <div className="show-600-flex hidden  items-center w-full justify-between">
              <span className="hosting-plan">Hosting - Deluxe Plan</span>
              <button
                className="hostingModalButton choose"
                onClick={() => setIsModalOpen(false)}
              >
                Change
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full border-b-[1px] border-black py-2 gap-5">
            <div className="hostingFlex flex items-center justify-between w-full">
              <div className="flex items-center justify-between hide-600">
                <span className="ModalTitle">Choose a Tenure</span>
                <Image
                  src={ICONS.checkGreen}
                  alt="done"
                  className="check hidden"
                />
              </div>
              <div className="items-center justify-between hidden show-600-flex w-full">
                <span className="ModalTitle">Choose a Tenure</span>
                <Image src={ICONS.checkGreen} alt="done" className="check" />
              </div>
              {isPlanCardSelected ? (
                <>
                  <div className="planDetails flex items-center lg:gap-[40px] gap-[20px] hide-600">
                    <div className="flex items-center gap-2">
                      <span className="planDetailsDuration">
                        {selectedPlanCard?.durationInYears ?? ""}{" "}
                        {selectedPlanCard?.durationInYears &&
                        selectedPlanCard.durationInYears > 1
                          ? `Years`
                          : `Year`}{" "}
                        -
                      </span>
                      <span className="planDetailsPrice">
                        {selectedPlanCard?.price}
                      </span>
                      <span className="planDetailsDiscount">
                        Save {selectedPlanCard?.discount}
                      </span>
                    </div>
                    <button
                      className="hostingModalButton choose"
                      onClick={() => {
                        setIsPlanCardSelected(false);
                        setSelectedPlanCard(null);
                      }}
                    >
                      Change
                    </button>
                    <Image
                      src={ICONS.checkGreen}
                      alt="done"
                      className="check"
                    />
                  </div>
                  <div className="planDetails items-center w-full justify-between hidden show-600-flex">
                    <div className="flex items-center gap-2">
                      <span className="planDetailsDuration">
                        {selectedPlanCard?.durationInYears ?? ""}{" "}
                        {selectedPlanCard?.durationInYears &&
                        selectedPlanCard.durationInYears > 1
                          ? `Years`
                          : `Year`}{" "}
                        -
                      </span>
                      <span className="planDetailsPrice">
                        {selectedPlanCard?.price}
                      </span>
                      <span className="planDetailsDiscount">
                        Save {selectedPlanCard?.discount}
                      </span>
                    </div>
                    <button
                      className="hostingModalButton choose"
                      onClick={() => {
                        setIsPlanCardSelected(false);
                        setSelectedPlanCard(null);
                      }}
                    >
                      Change
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="hostingModalButton choose"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              )}
            </div>
            {!isPlanCardSelected && current == 2 ? (
              <>
                <div className="plansFlex flex items-center  justify-between">
                  {planCards.map((card, index) => (
                    <PlanCard key={index} {...card} />
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col w-full  border-black py-2 gap-5">
            <div className="flex items-center justify-between">
              <span className="ModalTitle">Connect your Domain Name</span>
              <button
                className="hostingModalButton choose"
                onClick={() => gotoStep2()}
              >
                Cancel
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="inp-grp flex gap-2 items-center">
                <div className="custom-radio">
                  <Image src={ICONS.radioChecked} alt="radio" />
                </div>
                <p>Register a new domain</p>
              </div>
              <div className="inp-grp flex gap-2 items-center">
                <div className="custom-radio">
                  <Image src={ICONS.radioUnchecked} alt="radio" />
                </div>
                <p>I already have a domain</p>
              </div>
            </div>
            <div className="domains w-full">
              <div className="input-container w-full flex items-center relative">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  type="text"
                  placeholder="Find and purchase a domain name"
                />
                <button
                  disabled={isFetching || !isPlanCardSelected} // Disable if fetching or if plan is not selected
                  onClick={async () => {
                    await refetch();
                    setIsModalOpen(true);
                  }}
                  className="flex gap-1 items-center justify-center"
                >
                  <Image src={ICONS.searchBarIcon} alt="search" />
                  <span className="hide-600">
                    {isFetching ? "Searching..." : "Search"}
                  </span>
                </button>
              </div>
            </div>
            {domains.length > 0 ? (
              <div className="p-2 h-[180px] overflow-y-scroll hide-scrollbar w-full">
                <div>
                  {domains.map((domain, index) => (
                    <DomainItem key={index} domain={domain} />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="total w-full bg-[#000334] flex items-center justify-end py-3 gap-3 px-2">
          <span className="total-totalPrice">Total : {totalWithTax.toFixed(2)}</span>
          <button
          onClick={() => {
            dispatch(setIsSidebarOpen(!isSidebarOpen));
            setIsModalOpen(false);
          }}
          className="button-continue">Continue Order</button>
        </div>

        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-[-15px] right-[-12px] w-[40px] h-[40px] text-2xl bg-gray-300 rounded-full font-900 hide-600"
        >
          <span>✖</span>
        </button>
        <button
          onClick={() => setIsModalOpen(false)}
          className="hidden absolute top-4 right-4 show-600"
        >
          <span>✖</span>
        </button>
      </div>
    </div>
  );
};

export default PlanModal;
