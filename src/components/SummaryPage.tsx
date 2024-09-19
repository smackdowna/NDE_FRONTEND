'use client'
import Image, { StaticImageData } from "next/image";
import { CART } from "@/assets";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import trash from "../assets/cart/trash.png";

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
  quantity:number
}

const SummaryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [subtotal, setSubtotal] = useState<number | null>(null);
  const [tax, setTax] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

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

  console.log(apiCartData);


  const removeProductFromCart = async (domainName: string) => {
    try {
      if (isAuthenticated) {
        await axios.delete(
          `https://liveserver.nowdigitaleasy.com:5000/cart/${domainName}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Assuming you're using a bearer token
            },
          }
        );
      } else {
        // Remove from local storage if not logged in
        const savedCart = localStorage.getItem("cart");
        const cartItems: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
        const updatedCart = cartItems.filter(
          (item) => item.domainName !== domainName
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      
      // setting product
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.domainName !== domainName)
      );
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };
  

  useEffect(() => {
    const fetchCartItems = () => {
      try {
        if (!isAuthenticated) {
          const savedCart = localStorage.getItem("cart");
          const cartItems: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
          const totalPrice = cartItems.reduce((total, item) => {
            return total + item?.price;
          }, 0);
          setSubtotal(totalPrice || 0);
          // const cgstAmt = apiCartData.gst.cgst.Amt || 0;
          // const sgstAmt = apiCartData.gst.sgst.Amt || 0;
          // setTax(cgstAmt + sgstAmt);
          setTotal(totalPrice || 0);

          const formattedProducts: Product[] = cartItems.map((item) => ({
            name: item.product || "Unknown Product",
            link: item.domainName || "Unknown Product",
            img:
              item.product.toLowerCase() === "hosting"
                ? CART.database
                : item.product.toLowerCase() === "domain"
                ? CART.www
                : CART.google,
            price: `₹ ${item.price || 0}/-`,
            domainName: item.domainName,
            period: item.period || "Unknown Period",
            quantity: item.quantity || 1,
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
                name: item.product || "Unknown Product",
                link: item.domainName || "Unknown Product",
                quantity: item.quantity || 1,
                img: productImage,
                price: `₹ ${item.domainprice || item.gsuitePrice || item.pleskPrice || 0}/-`,
                domainName: item.domainName,
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
    <div className="overflow-x-auto">
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-64 text-center">
          <p className="text-lg font-semibold text-gray-500">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-28">
          <table className="min-w-full divide-y divide-gray-200 pb-10">
            <thead className="bg-white text-left whitespace-nowrap">
              <tr className=" ">
                <th className="px-6 py-4 text-xs md:text-sm lg:text-base xl:text-sm font-bold 2xl:text-lg text-black">
                  Product
                </th>
                <th className="text-xs md:text-sm lg:text-base font-bold xl:text-sm text-black 2xl:text-lg tracking-wider">
                  Quantity
                </th>
                <th className="text-xs md:text-sm lg:text-base font-bold xl:text-sm text-black 2xl:text-lg tracking-wider">
                  Duration
                </th>
                <th className=" text-xs md:text-sm lg:text-base font-bold xl:text-sm text-black 2xl:text-lg tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index} className="tracking-tighter">
                  <td className="flex items-center xl:text-sm px-4 py-4 text-sm md:text-base 2xl:text-lg lg:text-lg text-gray-800">
                    <Image
                      src={product.img}
                      alt={product.name}
                      className="w-6 h-6 md:w-12 md:h-12   lg:w-12 lg:h-12"
                    />
                    <div className="ml-2">
                      <h3 className="text-xs md:text-sm lg:text-base 2xl:text-lg font-semibold xl:text-sm ">
                        {product.name}
                      </h3>
                      <a
                        href={product.link}
                        className="text-blue-500 text-xs md:text-sm 2xl:text-lg lg:text-base xl:text-sm "
                      >
                        {product.link}
                      </a>
                    </div>
                  </td>
                  <td>
                    <input
                    value={product?.quantity}
                      type="number"
                      // min="1"
                      defaultValue="1"
                      className="w-16 px-2 py-1 border rounded-sm xl:w-14 text-center"
                    />
                  </td>
                  <td className="text-sm md:text-base lg:text-lg  text-gray-800">
                    {product.period && <p className="xl:text-sm 2xl:text-lg">{product.period}</p>}
                  </td>
                  <td className="text-sm md:text-base lg:text-lg text-gray-800">
                    <div className=" items-center justify-around gap-1">
                      <p className="font-semibold xl:text-sm 2xl:text-lg">{product.price}</p>
                    </div>
                  </td>
                  <td>
                    <svg
                     onClick={() => removeProductFromCart(product.domainName || "")}
                     className="cursor-pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6H5H21"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 11V17"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 11V17"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="flex flex-col divide-y divide-gray-200">
            <div className="flex items-center px-4 py-4 text-sm text-blue-800"></div>
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
                    <li className="py-2 text-sm xl:text-sm 2xl:text-lg">₹{(tax || 0).toFixed(2)}</li>
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
              <div className="text-sm text-gray-800">
                <ul className="bg-white text-center">
                  <li className="py-2 text-lg xl:text-sm 2xl:text-lg">₹{(total || 0).toFixed(2)}</li>
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
