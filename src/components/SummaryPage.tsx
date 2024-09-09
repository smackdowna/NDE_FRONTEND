import Image, { StaticImageData } from 'next/image';
import { CART } from '@/assets';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '@/services/axios';
import { useQuery } from '@tanstack/react-query';

interface CartItem {
    product: string;
    productId: string;
    domainName?: string;
    period?: string;
    name?: string;
    status?: string;
    price?: number;
}

interface Product {
    name: string;
    link: string;
    img: StaticImageData;
    price: string;
    domainName?: string;
    period?: string;
}

const SummaryPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [subtotal, setSubtotal] = useState<number | null>(null);
    const [tax, setTax] = useState<number | null>(null);
    const [total, setTotal] = useState<number | null>(null);

    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    const token = useSelector((state: any) => state.auth.token);

    const fetchCartFromAPI = async () => {
        const response = await axios.get('https://liveserver.nowdigitaleasy.com:5000/cart');
        return response.data;
    };

    const { data: apiCartData, isLoading: apiLoading } = useQuery({
        queryKey: ['cartData'],
        queryFn: fetchCartFromAPI,
        enabled: isAuthenticated,
    });

    console.log(apiCartData)

    useEffect(() => {
        const fetchCartItems = () => {
            try {
                if (!isAuthenticated) {
                    const savedCart = localStorage.getItem('cart');
                    const cartItems: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
                    const formattedProducts: Product[] = cartItems.map((item) => ({
                        name: item.product || 'Unknown Product',
                        link: item.domainName || 'Unknown Product',
                        img: item.product.toLowerCase() === 'hosting' ? CART.database : item.product.toLowerCase()=== 'domain' ? CART.www : CART.google,
                        price: `₹ ${item.price || 0}/-`,
                        domainName: item.domainName,
                        period: item.period || 'Unknown Period',
                    }));
    
                    setProducts(formattedProducts);
                } else if (apiCartData) {
                    const formattedProducts: Product[] = apiCartData.products.map((item: any) => {
                        let productImage = CART.www; // Default image for domains
                        if (item.product.toLowerCase() === 'hosting') {
                            productImage = CART.database;
                        } else if (item.product.toLowerCase() === 'gsuite') {
                            productImage = CART.google;
                        }
    
                        return {
                            name: item.product || 'Unknown Product',
                            link: item.domainName || 'Unknown Product',
                            img: productImage,
                            price: `₹ ${item.pleskPrice || item.gsuitePrice || 0}/-`,
                            domainName: item.domainName,
                            period: item.period || `${item.year} Year` || 'Unknown Period',
                        };
                    });
    
                    setProducts(formattedProducts);
    
                    // Handle subtotal, tax, and total calculation
                    setSubtotal(apiCartData.subTotal || 0);
                    const cgstAmt = apiCartData.gst.cgst.Amt || 0;
                    const sgstAmt = apiCartData.gst.sgst.Amt || 0;
                    setTax(cgstAmt + sgstAmt);
                    setTotal(apiCartData.Total || 0);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchCartItems();
    }, [isAuthenticated, apiCartData]);
    

    if (loading || apiLoading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="overflow-x-auto">
            {products.length === 0 ? (
                <div className="flex justify-center items-center h-64 text-center">
                    <p className="text-lg font-semibold text-gray-500">Your cart is empty.</p>
                </div>
            ) : (
                <div>
                    <table className="min-w-full divide-y divide-gray-200 pb-10">
                        <thead className="bg-white text-center whitespace-nowrap">
                            <tr>
                                <th className="py-4 text-xs md:text-sm lg:text-base font-bold text-black">Product</th>
                                <th className="text-xs md:text-sm lg:text-base font-bold text-black tracking-wider">Duration</th>
                                <th className="text-xs md:text-sm lg:text-base font-bold text-black tracking-wider">Price</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((product, index) => (
                                <tr key={index} className="tracking-tighter">
                                    <td className="flex items-center px-4 py-4 text-sm md:text-base lg:text-lg text-gray-800">
                                        <Image src={product.img} alt={product.name} className="w-6 h-6 md:w-12 md:h-12 lg:w-12 lg:h-12" />
                                        <div className="ml-2">
                                            <h3 className="text-xs md:text-sm lg:text-base font-semibold">{product.name}</h3>
                                            <a href={product.link} className="text-blue-500 text-xs md:text-sm lg:text-base">{product.link}</a>
                                        </div>
                                    </td>
                                    <td className="text-sm md:text-base lg:text-lg text-gray-800">
                                        {product.period && <p>{product.period}</p>}
                                    </td>
                                    <td className="text-sm md:text-base lg:text-lg text-gray-800">
                                        <div className="flex items-center justify-around gap-1">
                                            <p className="font-semibold">{product.price}</p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table className="min-w-full divide-y divide-gray-200 tracking-tighter">
                        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                            <tr>
                                <td className="text-sm text-gray-800 px-10 max-md:px-2">
                                    <ul className="bg-white text-left">
                                        <li className="py-1 font-900 text-xl">Subtotal</li>
                                        <li className="py-1 font-900 text-xl">Tax</li>
                                    </ul>
                                </td>
                                <td className="flex items-center px-4 py-4 text-sm text-blue-800"></td>
                                <td className="text-sm text-gray-800">
                                    <ul className="bg-white text-center">
                                        <li className="py-2 text-xl">₹{(subtotal || 0).toFixed(2)}</li>
                                        <li className="py-2 text-xl">₹{(tax || 0).toFixed(2)}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex items-center px-4 py-4 text-sm text-blue-800"></td>
                                <td className="text-sm text-gray-800">
                                    <ul className="bg-white text-center">
                                        <li className="py-2 font-900 text-xl">Total</li>
                                    </ul>
                                </td>
                                <td className="text-sm text-gray-800">
                                    <ul className="bg-white text-center">
                                        <li className="py-4 text-xl">₹{(total || 0).toFixed(2)}</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SummaryPage;
