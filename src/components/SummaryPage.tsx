'use client'
import Image, { StaticImageData } from "next/image";
import { CART } from "@/assets";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import trash from "../assets/cart/trash.png";

import { useQueryClient } from '@tanstack/react-query';
import { showToast } from './../services/showToast';
import './Summary.css'



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

interface Product {
  cartId?:string | undefined;
  name: string;
  link: string;
  img: StaticImageData;
  price: string;
  domainName?: string;
  period?: string | number;
  quantity:number;
  duration:number;
}

const SummaryPage = () => {
  const queryClient = useQueryClient();
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products)
  const [loading, setLoading] = useState<boolean>(true);
  const [subtotal, setSubtotal] = useState<number | null>(null);
  const [tax, setTax] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  // if the user is not loggedin, then showqing 18% tax
  const additionalTax = subtotal ? subtotal * 18 / 100 : 0;

  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const token = useSelector((state: any) => state.auth.token);

  const fetchCartFromAPI = async () => {
    const response = await axios.get(
      "https://liveserver.nowdigitaleasy.com:5000/cart"
    );
    return response.data;
  };

  const { data: apiCartData, isLoading: apiLoading } = useQuery({
    queryKey: ["cartData"],
    queryFn: fetchCartFromAPI,
    enabled: isAuthenticated,
  });



  const removeProductFromCart = async (cartId: string, domainName: string) => {
    try {
      if (isAuthenticated) {
        // Call the API to remove the product from the cart
        await axios.delete(
          `https://liveserver.nowdigitaleasy.com:5000/cart/client/remove/${cartId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        // Invalidate the cart query to refetch the updated cart
        queryClient.invalidateQueries({ queryKey: ['cartData'] });

  
        // Remove the same product from localStorage as well
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const cartItems: CartItem[] = JSON.parse(savedCart);
          const updatedCart = cartItems.filter(
            (item) => item.domainName !== domainName
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
  
        // Update products in the local state
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.domainName !== domainName)
        );

        const toastId = `toast-${domainName}`;
  
        showToast('success', `${domainName} removed from cart`, toastId);
      } else {
        // Remove from localStorage if the user is not logged in
        const savedCart = localStorage.getItem("cart");
        const cartItems: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
        console.log(cartItems)
        const updatedCart = cartItems.filter(
          (item) => item.domainName !== domainName
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
  
        // Update the products in the local state
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.domainName !== domainName)
        );

        const toastId = `toast-${domainName}`;
  
        // Show a success toast for removal from local storage
        showToast('success', `${domainName} removed from cart`, toastId);
      }
    } catch (error) {
      const toastId = `toast-${domainName}`;
      console.error("Error removing product from cart:", error);
      // Show an error toast if the removal fails
      showToast('error', `${domainName} removed from cart`, toastId);
    }
  };
  
  



  // Function to update quantity 
  const updateLocalStorage = (domainName: string, newQuantity: number) => {
    const savedCart = localStorage.getItem('cart');
    const cartItems: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
    const updatedCart = cartItems.map(item =>
      item.domainName === domainName ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = async (domainName: string, newQuantity: number) => {
    try {
      if (isAuthenticated) {
        await axios.put(
          `https://liveserver.nowdigitaleasy.com:5000/cart/${domainName}`,
          { quantity: newQuantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        // Update quantity in local storage if not logged in
        updateLocalStorage(domainName, newQuantity);
      }

      // Update quantity in state
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.domainName === domainName ? { ...product, quantity: newQuantity } : product
        )
      );
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }
  };

  const handleQuantityChange = (domainName: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(domainName, newQuantity);
    }
  };

  
  
  
  // -------------------------------------------------------------------------------
  const [selectedYears, setSelectedYears] = useState<{ [key: string]: number }>({});

  const handleYearChange = (domainName: string, newYear: number) => {
    setSelectedYears((prev) => ({ ...prev, [domainName]: newYear }));
  };



// ----------------------------------------------------------------------------------


  // Function to update duration
  const updateLocalStorageDuration = (domainName: string, newDuration: number) => {
    const savedCart = localStorage.getItem('cart');
    const cartItems: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
    const updatedCart = cartItems.map(item =>
      item.domainName === domainName ? { ...item, duration: newDuration } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    // Trigger a re-render by updating the products state with the latest data
    setProducts(
      updatedCart.map(item => ({
        name: item.product || "Unknown Product",
            link: item.domainName || "Unknown Product",
            img:
              item.product.toLowerCase() === "hosting"
                ? CART.database
                : item.product.toLowerCase() === "domain"
                ? CART.www
                : CART.google,
            price: `₹ ${(item.price && item.price * item.duration) || item.price}/-`,
            domainName: item.domainName,
            period: item.period || item.year || "Unknown Period",
            quantity: item.quantity || 1,
            duration : item.duration || 1,
            cartId : item.productId,
      }))
    );
  };
  
  const updateDuration = async (domainName: string, newDuration: number) => {
    try {
        updateLocalStorageDuration(domainName, Number(newDuration));
      // Update duration in state
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.domainName === domainName ? { ...product, period: Number(newDuration) } : product
        )
      );
    } catch (error) {
      console.error('Error updating product duration:', error);
    }
  };
  
  const handleDurationChange = (domainName: string, newDuration: number) => {
    setSelectedYears((prev) => ({ ...prev, [domainName]: Number(newDuration) }));
    updateDuration(domainName, Number(newDuration));
  };
  

 
  

  useEffect(() => {
    const fetchCartItems = () => {
      try {
        if (!isAuthenticated) {
          const savedCart = localStorage.getItem("cart");
          const cartItems: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
          const totalPrice = cartItems.reduce((total, item) => {
            return total + (item?.price ?? 0);
          }, 0);
          setSubtotal(totalPrice || 0);
          // const cgstAmt = apiCartData.gst.cgst.Amt || 0;
          // const sgstAmt = apiCartData.gst.sgst.Amt || 0;
          // setTax(cgstAmt + sgstAmt);

          setTotal(totalPrice);

          const formattedProducts: Product[] = cartItems.map((item) => ({
            name: item.product || "Unknown Product",
            link: item.domainName || "Unknown Product",
            img:
              item.product.toLowerCase() === "hosting"
                ? CART.database
                : item.product.toLowerCase() === "domain"
                ? CART.www
                : CART.google,
            price: `₹ ${(item.price && item.price * item.duration) || 0}/-`,
            domainName: item.domainName,
            period: item.period || item.year || "Unknown Period",
            quantity: item.quantity || 1,
            duration : item.duration || 1,
            cartId : item.productId,
          }));

          setProducts(formattedProducts);
        } else if (apiCartData) {
          const formattedProducts: Product[] = apiCartData.products.map(
            (item: any) => {
              let productImage = CART.www; // Default image for domains
              if (item.product.toLowerCase() === "hosting") {
                productImage = CART.database;
              } else if (item.product.toLowerCase() === "gsuite") {
                productImage = CART.google;
              }

              return {
                cartId : item._id,
                name: item.product || "Unknown Product",
                link: item.domainName || "Unknown Product",
                quantity: item.quantity || 1,
                img: productImage,
                price: `₹ ${item.domainprice || item.gsuitePrice || item.pleskPrice || 0}/-`,
                domainName: item.domainName,
                duration : item.duration || 1,
                period: item.period || `${item.year} Year` || "Unknown Period",
              };
            }
          );

          setProducts(formattedProducts);

          // Handle subtotal, tax, and total calculation
          setSubtotal(apiCartData.subTotal || 0);
          const cgstAmt = apiCartData.gst.cgst.Amt || 0;
          const sgstAmt = apiCartData.gst.sgst.Amt || 0;
          setTax(cgstAmt + sgstAmt);
          setTotal(apiCartData.Total || 0);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
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
    <div className="w-full overflow-x-auto">
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-64 text-center">
          <p className="text-lg font-semibold text-gray-500">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-between summaryTable">
          <div className="heightContainer h-[40vh] overflow-y-scroll hide-scrollbar">
            <table className="min-w-full divide-y divide-gray-200 table-fixed">
            <thead className="bg-white text-left whitespace-nowrap">
              <tr>
                <th className="w-[35%] px-6 py-4 text-black">
                  <h5>Product</h5>
                </th>
                <th className="w-[20%] text-xs md:text-sm text-black">
                  <h5>Quantity</h5>
                </th>
                <th className="w-[20%] text-xs md:text-sm text-black">
                  <h5>Duration</h5>
                </th>
                <th className="w-[20%] text-xs md:text-sm text-black">
                  <h5>Price</h5>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index} className="tracking-tighter">
                  <td className="flex items-center xl:text-sm px-4 py-4 lg:py-[14px] text-sm md:text-base 2xl:text-lg lg:text-lg text-gray-800">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="w-6 h-6 md:w-12 md:h-12 lg:w-10 lg:h-10"
                    />
                    <div className="ml-2">
                      <h3 className="text-xs md:text-sm lg:text-base 2xl:text-lg font-semibold xl:text-sm text-left">
                        {product.name}
                      </h3>
                      <a
                        href={product.link}
                        className="text-blue-500 text-xs md:text-sm 2xl:text-lg lg:text-base xl:text-sm"
                      >
                        {product.link}
                      </a>
                    </div>
                  </td>
                  <td className=" py-4">
                    <input
                      onChange={(e) => handleQuantityChange(product.domainName || '', parseInt(e.target.value))}
                      value={product?.quantity}
                      type="number"
                      min="1"
                      className="w-16 px-2 py-1 border rounded-sm xl:w-14 text-center custom-number-input"
                    />
                  </td>
                  <td className=" py-4  text-gray-800">
                    <select 
                      className="w-full px-2 py-1 border rounded-sm "
                      value={product.duration}
                    onChange={(e) => handleDurationChange((product.domainName as string), Number(e.target.value))}
                    >
                      {[1, 2, 3, 5].map((year) => (
                <option key={year} value={year}>
                  {year} year{year > 1 ? 's' : ''}
                </option>
              ))}
                    </select>
                  </td>
                  <td className=" py-4  text-gray-800">
                  <div className="flex items-center justify-between">
                  {product.price}
                
                <svg
                  onClick={() => {
                    if (product?.cartId) {
                      removeProductFromCart(product.cartId, product.domainName || "");
                    } else {
                      console.log(product);
                    }
                  }}
                  className="cursor-pointer inline-block ml-4 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6H5H21"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 11V17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 11V17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>

          
          <div className="flex flex-col divide-y divide-gray-200 h-[30vh] summaryBottom">
            {/* <div className="flex items-center px-4 py-4 text-sm text-blue-800"></div> */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4  py-4 bg-white">
              <button className="text-sm font-bold text-customBlue mb-4 xl:text-sm sm:mb-0 2xl:text-lg">
                Have a Coupon Code?
              </button>
              
              <div className="flex gap-10">
                <ul className="text-right">
                  <li className="py-2 text-sm xl:text-sm 2xl:text-lg">Subtotal</li>
                  <li className="py-2 text-sm xl:text-sm 2xl:text-lg">Tax</li>
                </ul>
                <div className="flex flex-col sm:flex-row  text-center">
                  <ul className="bg-white text-center">
                    <li className="py-2 text-sm xl:text-sm 2xl:text-lg">
                      ₹{(subtotal || 0).toFixed(2)}
                    </li>
                    <li className="py-2 text-sm xl:text-sm 2xl:text-lg">₹{(tax || additionalTax).toFixed(2)}</li>
                  </ul>
                </div>
             
              </div>
            </div>

            <div className="flex flex-row sm:flex-row items-start sm:items-center justify-between px-4 py-4 bg-white">
              <div className="flex items-center px-12 py-4 text-sm text-blue-800"></div>
              <div className="flex items-center px-12 py-4 text-sm text-blue-800"></div>
              <div className="text-sm text-gray-800  ">
                <ul className="bg-white text-center ">
                  <li className="py-2  ml-2 mr-2 font-900 text-lg sm:ml-10 xl:text-sm 2xl:text-lg">
                    Total
                  </li>
                </ul>
              </div>
              <div className="text-sm text-gray-800 md:flex items-start justify-start w-full">
                <ul className="bg-white text-center">
                  {/* <li className="py-2 text-lg xl:text-sm 2xl:text-lg">₹{(total || 0).toFixed(2)}</li> */}
                  <li className="py-2 text-lg xl:text-sm 2xl:text-lg font-700 ">
  ₹{((isAuthenticated ? total : (total ?? 0) + (additionalTax ?? 0)) || 0).toFixed(2)}
</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryPage;