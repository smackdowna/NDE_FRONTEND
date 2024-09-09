import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

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

interface Product {
    _id: string;
    name: string;
    description: string;
    discount: number;
    price: {
        period: string;
        defaultPrice: number;
        offerPrice: number;
        type: string;
    }[];
}

const GsuitePlans = async () => {
    const response = await axios.get('https://liveserver.nowdigitaleasy.com:5000/product//Gsuite?country_code=IN');
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
    const [selectedPeriod, setSelectedPeriod] = useState('Annual-Monthly');
    const [price, setPrice] = useState < number > (0);
    const [selectedDomains, setSelectedDomains] = useState < Domain[] > ([]);
    const [quantity, setQuantity] = useState(1);


    const { data, isError, isLoading } = useQuery({ queryKey: ["Gsuite"], queryFn: GsuitePlans });

    useEffect(() => {
        if (data && data.products && data.products.length > 0) {
            const initialPrice = data.products[index].price.find((p: { period: string }) => p.period === selectedPeriod);
            setPrice(initialPrice ? initialPrice.offerPrice : 0);
        }
    }, [data, selectedPeriod, index]);

    useEffect(() => {
        if (data) {
            const currentProduct = data.products[index]._id;

            // Load existing cart from localStorage
            const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

            // Filter cart items for the current product
            const productCartItems = existingCart.filter((item: any) => item.productId === currentProduct);

            // Update selected domains based on existing cart items
            const domainsInCart = domains.filter(domain =>
                productCartItems.some((item: any) => item.domainName === domain.name)
            );

            setSelectedDomains(domainsInCart);
        }
    }, [data, index, domains]);

    const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setSelectedPeriod(selected);

        if (data && data.products && data.products[index]) {
            const selectedPrice = data.products[index].price.find((p: { period: string }) => p.period === selected);
            setPrice(selectedPrice ? selectedPrice.offerPrice : 0);
        }
    };

    const toggleDomainSelection = (domain: Domain) => {
        setSelectedDomains(prevSelected => {
            const isSelected = prevSelected.some(d => d.name === domain.name);
            let updatedSelectedDomains;
    
            if (isSelected) {
                toast.success(`${domain.name} removed from cart`);
                updatedSelectedDomains = prevSelected.filter(d => d.name !== domain.name);
            } else {
                toast.success(`${domain.name} added to cart`);
                updatedSelectedDomains = [...prevSelected, domain];
            }
    
            if (data) {
                const currentProduct = data.products[index]._id;
    
                const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
                const filteredCart = existingCart.filter((item: any) => item.productId !== currentProduct);
    
                const newCartItems = updatedSelectedDomains.map(domain => ({
                    product: "gsuite",
                    productId: currentProduct,
                    domainName: domain.name,
                    period: selectedPeriod,
                    type: "new",
                    quantity // Include the selected quantity here
                }));
    
                const updatedCart = [...filteredCart, ...newCartItems];
    
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
    
            return updatedSelectedDomains;
        });
    };
    

    const DomainItem = ({ domain }: { domain: Domain }) => (
        <div className="flex justify-between bg-white items-center content-center m-3">
            <div className="flex flex-col mx-4 max-md:mx-1 p-3 max-md:p-1">
                <span className="font-900 text-lg max-lg:text-md max-md:text-xs">{domain.name}</span>
                <div>
                    <span className={`text-[14px] w-[30px] max-md:text-xs ${domain.status === 'Available' ? 'text-green-500' :
                        domain.status === 'Added' ? 'text-yellow-600' :
                            domain.status === 'Unavailable' ? 'text-red-500' :
                                'text-gray-500'
                        }`}>
                        {domain.status}
                    </span>
                </div>
            </div>
            <div className="flex content-center items-center gap-8">
                <select className="border rounded-md p-1 max-md:hidden" disabled={domain.status !== 'Available'}>
                    {[1, 2, 3, 5].map((year) => (
                        <option key={year} value={year}>
                            {year} year{year > 1 ? 's' : ''}
                        </option>
                    ))}
                </select>
                <div className="w-[150px] max-md:w-[40px]">
                    <span className="font-900 w-[200px] text-center text-2xl max-lg:text-sm leading-tight">
                        {domain.price && domain.price.length > 0 ? `₹${domain.price[0].registerPrice}` : 'N/A'}
                    </span>
                    <div className="">
                        <span className="text-[14px] text-center max-md:hidden  max-lg:text-xs ">
                            {domain.price && domain.price.length > 0 ? `then ₹${domain.price[0].registerPrice + 2}/Year` : ''}
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
    );

    if (!isOpen) return null;

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading plans</div>;

    const currentProduct = data?.products[index];

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
            <div className="relative w-[80vw] max-xl:w-[92vw] rounded-lg border border-black shadow-lg mb-8 bg-background-Gsuite-banner">
                <div className="p-4 max-lg:p-1 relative">
                    {currentStep === 0 && currentProduct && (
                        <div>
                            <div className="flex max-md:flex-col justify-between items-center max-md:text-center py-10 mx-4 md:mx-10">
                                <div className='flex flex-col gap-1 max-md:text-center'>
                                    <span className='font-roboto font-900 text-4xl max-xl:text-2xl text-home-heading'>Plan Name</span>
                                    <span className='text-3xl max-xl:text-xl font-400 font-roboto-serif'>{currentProduct.name}</span>
                                </div>
                                <div className='flex max-md:flex-col items-center justify-center max-md:pt-4 max-md:gap-4 gap-10'>
                                    <div className='flex flex-col gap-2'>
                                        <span className='font-roboto font-900 text-4xl max-md:text-xl text-home-heading'>Quantity</span>
                                        <input
                                            type="number"
                                            name="quantity"
                                            id="quantity"
                                            className='p-3 rounded-xl'
                                            min={1}
                                            max={5000}
                                            defaultValue={1}
                                            onChange={(e) => setQuantity(Number(e.target.value))}
                                        />

                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <span className='text-4xl max-md:text-xl font-roboto font-900 text-home-heading'>Duration</span>
                                        <select
                                            name="duration"
                                            id="duration"
                                            className='p-3 rounded-lg'
                                            value={selectedPeriod}
                                            onChange={handleDurationChange}
                                        >
                                            {currentProduct.price.map((p: any) => (
                                                <option key={p.period} value={p.period}>
                                                    {p.period.charAt(0).toUpperCase() + p.period.slice(1)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-roboto font-900 text-4xl max-md:text-xl text-home-heading'>Total</span>
                                        <span className='text-4xl font-400 max-md:text-xl font-roboto-serif'>₹{price}/-</span>
                                    </div>

                                    <button
                                        className='bg-home-primary text-3xl max-md:text-xl max-xl:text-xl font-900 text-white py-4 px-4 rounded-2xl'
                                        onClick={handleNextStep}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {currentStep === 1 && (
                        <div className='flex flex-col items-start px-10 max-md:px-0'>
                            <div className='flex items-center  max-md:justify-center max-md:items-start gap-16 max-md:gap-0  mx-3 max-md:mx-0 '>
                                <div className='flex items-center gap-4 max-md:gap-1'>
                                    <input
                                        type="radio"
                                        name="domainOption"
                                        id="newDomain"
                                        onChange={() => setShowInputForm(true)}
                                    />
                                    <span className=' font-roboto-serif text-3xl max-md:text-xs '>
                                        Register a New Domain
                                    </span>
                                </div>
                                <div className='flex items-center gap-4 max-md:gap-1'>
                                    <input
                                        type="radio"
                                        name="domainOption"
                                        id="existingDomain"
                                        onChange={() => setShowInputForm(false)}
                                    />
                                    <span className=' font-roboto-serif text-3xl max-md:text-xs '>
                                        I already have a Domain Name
                                    </span>
                                </div>
                            </div>
                            <div className="flex w-full pb-6 max-md:pb-0">
                                {showInputForm ? (
                                    <div>
                                        <div className="flex m-3 rounded-xl">
                                            <input
                                                className="w-[60vw] max-md:w-[50vw] max-md:text-md max-md:p-2 p-6 border rounded-l-xl max-md:placeholder:text-[10px]"
                                                placeholder="Find and purchase a domain name"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                autoFocus
                                            />
                                            <button
                                                className={`bg-home-primary text-white text-xl max-md:text-[10px] max-md:px-1 max-md:p-0 font-roboto font-700 px-6 p-2 rounded-r-xl ${isFetching ? "cursor-wait" : ""
                                                    }`}
                                                onClick={async () => {
                                                    await refetch();
                                                    setIsModalOpen(true);
                                                }} disabled={isFetching}
                                            >
                                                {isFetching ? "Searching..." : "Check Availability "}
                                            </button>
                                        </div>
                                        <div className="p-2 h-[300px] overflow-y-scroll hide-scrollbar">
                                            <div>
                                                {domains.map((domain, index) => (
                                                    <DomainItem key={index} domain={domain} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex m-3 rounded-xl">
                                        <input
                                            className="w-[60vw] p-6 border rounded-l-xl max-md:placeholder:text-[10px]"
                                            placeholder="Enter your domain name"
                                        />
                                        <button
                                            className="bg-domain-primary text-xl max-md:text-sm text-white px-8 max-md:px-2 rounded-r-xl"
                                        >
                                            <span className="font-roboto font-700">Add to Cart</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-[-15px] right-[-12px] w-[40px] h-[40px] max-md:text-lg max-md:w-[30px] max-md:h-[30px] text-2xl bg-gray-300 rounded-full font-900"
                >
                    <span>✖</span>
                </button>
            </div>
        </div>
    );
};

export default PlanModal;
