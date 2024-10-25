import Image from 'next/image';
import { ICONS, IMAGES } from '@/assets';
import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { showToast } from '@/services/showToast';
import './PlanModal.css'


interface Domain {
    name: string;
    status: string;
    price?: { registerPrice: number }[];
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
    const response = await axios.get('https://liveserver.nowdigitaleasy.com:5000/product//hosting?country_code=IN');
    if (!response) {
        throw new Error('Network response was not ok');
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
    index
}) => {
    const queryClient = useQueryClient();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const [selectedPeriod, setSelectedPeriod] = useState('monthly');
    const [price, setPrice] = useState < number > (0);
    const [selectedDomains, setSelectedDomains] = useState < Domain[] > ([]);
    const [selectedYears, setSelectedYears] = useState<{ [key: string]: number }>({});

    // console.log(selectedDomains)

    const { data, isError, isLoading } = useQuery({ queryKey: ["plans"], queryFn: fetchPlans });

    console.log(price);

    useEffect(() => {
        if (data && data.product && data.product.length > 0) {
            const initialPrice = data?.product[index]?.price?.find((p: { period: string }) => p.period === selectedPeriod);
            console.log(initialPrice)
            setPrice(initialPrice ? initialPrice?.amount : 0);
        }
    }, [data, selectedPeriod, index]);


    useEffect(() => {
        if (data) {
            const currentProduct = data.product[index]._id;
            const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
            const productCartItems = existingCart.filter((item: any) => item.productId === currentProduct);
            const domainsInCart = domains.filter(domain =>
                productCartItems.some((item: any) => item.domainName === domain.name)
            );
            setSelectedDomains(domainsInCart);
        }
    }, [data, index, domains]);


    
    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>, domainName: string) => {
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
            const selectedPrice = data.product[index].price.find((p: { period: string }) => p.period === selected);
            setPrice(selectedPrice ? selectedPrice.offerPrice : 0);
        }
    };

    const addCartToAPI = async (cartData: any) => {
        try {
            const response = await axios.post(
                'https://liveserver.nowdigitaleasy.com:5000/cart',
                { data: cartData },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            queryClient.invalidateQueries({ queryKey: ['cartData'] });
            return response.data;
        } catch (error) {
            throw new Error('Failed to add cart to API');
        }
    };

    const syncCartToAPI = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartData = existingCart.map((item: any) => {
            const { price, ...rest } = item;
            return rest;
        });
        if (isAuthenticated && existingCart.length > 0) {
            const toastIdForSuccess = `1`;
            const toastIdForError = `2`;
            addCartToAPI(cartData)
                .then(() => {
                    showToast('success', `Cart synced successfully`, toastIdForSuccess);
                    queryClient.invalidateQueries({ queryKey: ['plans'] });

                })
                .catch((error) => {
                    showToast('error', `Failed to sync cart`, toastIdForError);
                    console.error(error);
                });
        }
    };

    const toggleDomainSelection = (domain: Domain) => {
        const selectedYear = selectedYears[domain.name] || 1;
        setSelectedDomains((prevSelected) => {
            const isSelected = prevSelected.some((d) => d.name === domain.name);
            let updatedSelectedDomains;

            const toastId = `toast-${domain.name}`;

            if (isSelected) {
                showToast('success', `${domain.name} removed from cart`, toastId);
                updatedSelectedDomains = prevSelected.filter((d) => d.name !== domain.name);
            } else {
                showToast('success', `${domain.name} added to cart`, toastId);
                updatedSelectedDomains = [...prevSelected, domain];
            }

            if (data) {
                const currentProduct = data.product[index]._id;
                const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

                const newCartItems = updatedSelectedDomains.map((domain) => ({
                    product: 'hosting',
                    productId: currentProduct,
                    domainName: domain.name,
                    period: selectedPeriod,
                    type: 'new',
                    price: domain.price ? domain.price[0].registerPrice * selectedYear : 0,
                }));

                const updatedCart = existingCart.filter(
                    (item: any) => !newCartItems.some((newItem) => newItem.domainName === item.domainName)
                );

                localStorage.setItem('cart', JSON.stringify([...updatedCart, ...newCartItems]));
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
            <div className="flex justify-between w-[70vw] max-xl:w-[80vw] bg-white items-center content-center m-3 max-md:m-1">
            <div className="flex flex-col mx-4  max-md:mx-1 p-3 max-md:p-1">
                <span className="font-900 text-lg max-lg:text-md max-md:text-xs">{domain.name}</span>
                <div>
                    <span className={`text-[14px] w-[30px] max-md:text-[10px] ${domain.status === 'Available' ? 'text-green-500' :
                        domain.status === 'Added' ? 'text-yellow-600' :
                            domain.status === 'Unavailable' ? 'text-red-500' :
                                'text-gray-500'
                        }`}>
                        {domain.status}
                    </span>
                </div>
            </div>
            <div className="flex content-center items-center gap-8">
                <select 
                value={year}
                onChange={(e) => handleYearChange(e, domain.name)}
                className="border rounded-md p-1 max-md:hidden" disabled={domain.status !== 'Available'}>
                    {[1, 2, 3, 5].map((year) => (
                        <option key={year} value={year}>
                            {year} year{year > 1 ? 's' : ''}
                        </option>
                    ))}
                </select>
                <div className="w-[150px] max-md:w-[40px]">
                <span className="font-900 w-[200px] text-center text-2xl max-lg:text-sm leading-tight">
              {domain.price && domain.price.length > 0
                ? `₹${(domain.price[0].registerPrice * year).toFixed(2)}`
                : 'N/A'}
            </span>
                    <div className="">
                    <span className="text-[14px] text-center max-md:hidden  max-lg:text-xs ">
                            {domain.price && domain.price.length > 0 ? `then ₹${domain.price[0].registerPrice * year + 2}/Year` : ''}
                        </span>
                    </div>
                </div>
                <button
                    className={`text-white w-[120px]  max-md:w-[80px] max-md:mx-1 max-md:text-xs max-md:p-1 p-2 mx-3 rounded-md ${selectedDomains.some(d => d.name === domain.name) ? 'bg-home-primary' :
                        domain.status === 'Available'
                            ? 'bg-blue-500'
                            : domain.status === 'Remove'
                                ? 'bg-red-500'
                                : domain.status === 'Unavailable'
                                    ? 'bg-gray-400'
                                    : 'bg-gray-500'
                        }`}
                    disabled={domain.status !== 'Available'}
                    onClick={() => toggleDomainSelection(domain)}
                >
                    {selectedDomains.some(d => d.name === domain.name)
                        ? 'Remove'
                        : domain.status === 'Available'
                            ? 'Add to cart'
                            : domain.status === 'Added'
                                ? 'Remove'
                                : 'Unavailable'}
                </button>
            </div>
            </div>
        )
    };

    if (!isOpen) return null;

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading plans</div>;

    const currentProduct = data?.product[index];

    return (
        <div className=" fixed inset-0 z-50 flex items-end justify-center">
            <div className="hostingModal relative w-[80vw] max-xl:w-[95vw] max-md:w-[95vw] rounded-lg border border-black shadow-lg mb-8">
                <div className="hostingModalContent lg:py-[89px] lg:px-[100px] w-full">
                    <div className="flex items-center justify-between w-full border-b-[1px] border-black pb-3">
                        <div className="flex items-center justify-between">
                            <span className='ModalTitle'>Choose a plan</span>
                        </div>
                        <div className="flex items-center lg:gap-[40px]">
                            <span className="hosting-plan">Hosting - Delux Plan</span>
                            <button className='hostingModalButton choose'>Change</button>
                            <Image src={ICONS.checkGreen} alt='done' />
                        </div>
                    </div>
                    <div className="flex flex-col w-full border-b-[1px] border-black py-4 gap-5">
                        <div className="flex items-center justify-between">
                            <span className='ModalTitle'>Choose a Tenure</span>
                            <button className='hostingModalButton choose'>Cancel</button>
                        </div>
                        <div className="flex items-center lg:gap-[40px]">
                            <div className="plans-card selected flex flex-col items-center bg-white lg:px-[36px] lg:py-[12px] lg:pt-[32px] relative">
                                <span className="time text-center mb-1">12 months</span>
                                <span className="originalPrice text-center ">₹399</span>
                                <span className="price text-center">₹599.00</span>
                                <span className="currency text-center mb-1 opacity-80">INR / month</span>
                                <span className='desc text-center opacity-70'>Plans renew at rs. 399.00 / month 0n 13/10/2025</span>
                                <div className="save">
                                    <span>Save 25%</span>
                                </div>
                            </div>
                            <div className="plans-card flex flex-col items-center bg-white lg:px-[36px] lg:py-[12px] lg:pt-[32px] relative">
                                <span className="time text-center mb-1">12 months</span>
                                <span className="originalPrice text-center ">₹399</span>
                                <span className="price text-center">₹599.00</span>
                                <span className="currency text-center mb-1 opacity-80">INR / month</span>
                                <span className='desc text-center opacity-70'>Plans renew at rs. 399.00 / month 0n 13/10/2025</span>
                                <div className="save">
                                    <span>Save 25%</span>
                                </div>
                            </div>
                            <div className="plans-card flex flex-col items-center bg-white lg:px-[36px] lg:py-[12px] lg:pt-[32px] relative">
                                <span className="time text-center mb-1">12 months</span>
                                <span className="originalPrice text-center ">₹399</span>
                                <span className="price text-center">₹599.00</span>
                                <span className="currency text-center mb-1 opacity-80">INR / month</span>
                                <span className='desc text-center opacity-70'>Plans renew at rs. 399.00 / month 0n 13/10/2025</span>
                                <div className="save">
                                    <span>Save 25%</span>
                                </div>
                            </div>
                            <div className="plans-card flex flex-col items-center bg-white lg:px-[36px] lg:py-[12px] lg:pt-[32px] relative">
                                <span className="time text-center mb-1">12 months</span>
                                <span className="originalPrice text-center ">₹399</span>
                                <span className="price text-center">₹599.00</span>
                                <span className="currency text-center mb-1 opacity-80">INR / month</span>
                                <span className='desc text-center opacity-70'>Plans renew at rs. 399.00 / month 0n 13/10/2025</span>
                                <div className="save">
                                    <span>Save 25%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full border-b-[1px] border-black py-4 gap-5">
                        <div className="flex items-center justify-between">
                            <span className='ModalTitle'>Connect your Domain Name</span>
                            <button className='hostingModalButton choose'>Cancel</button>
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
                                <input type="text" placeholder="Find and purchase a domain name" />
                                <button className='flex gap-1 items-center justify-center'>
                                    <Image src={ICONS.searchBarIcon} alt="search" />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-[-15px] right-[-12px] w-[40px] h-[40px] text-2xl bg-gray-300 rounded-full font-900"
                >
                    <span>✖</span>
                </button>
            </div>
        </div>
    );
};

export default PlanModal;
