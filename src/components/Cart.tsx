'use client'
import React, { useState, useEffect } from "react";
import SummaryPage from "@/components/SummaryPage";
import PaymentPage from "./Paymentpage";
import RegistrationPage from "./RegistrationPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setIsSidebarOpen } from "@/store/sidebarSlice";
import Link  from 'next/link';
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { loginSuccess, loginFailure } from "../store/authSlice";
import { ICONS } from "@/assets";
import Image from "next/image";
import './Cart.css'

interface LoginFormInputs {
  email: string;
  password: string;
}


// Function to login user
const loginUser = async (data: { email: string; password: string }) => {
  const response = await fetch(
    "https://liveserver.nowdigitaleasy.com:5000/client/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
};

// Function to send the cart data to the API
const addCartToAPI = async (cartData: any) => {
  const response = await fetch(
    "https://liveserver.nowdigitaleasy.com:5000/cart",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ data: cartData }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add cart to API");
  }
  return response.json();
};




const Cart: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state: RootState) => state.sidebar);
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  const [currentStep, setCurrentStep] = useState(1);

  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and registration
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    if (isAuthenticated && currentStep === 2) {
      // If the user is authenticated, skip to the PaymentPage (step 3)
      setCurrentStep(3);
    }
  }, [isAuthenticated, currentStep]);

  const steps = [
    { id: 1, name: "Summary" },
    { id: 2, name: "Login" },
    { id: 3, name: "Payment" },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };



  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

 // Mutation to handle login
 const mutation = useMutation({
  mutationFn: loginUser,
  onSuccess: async (data) => {
    dispatch(loginSuccess({ token: data.token, user: data.data.fullName }));
    localStorage.setItem("token", data.token);
    localStorage.setItem("userData", data.data.fullName);
    // toast.success("Login successful");
    setIsLoggedIn(true);

    // Get cart from local storage and send it directly to the API
    const cart = localStorage.getItem("cart");
    if (cart) {
      try {
        const parsedCart = JSON.parse(cart);

        // Send cart data to the API as is
        await addCartToAPI(parsedCart);
        // toast.success("Cart successfully added to the server");
      } catch (error) {
        toast.error("Failed to sync cart with the server");
      }
    }

    // onClose();
    // window.location.reload();
  },
  onError: (error: Error) => {
    dispatch(loginFailure(error.message));
    toast.error(error.message || "Login failed");
  },
});

// Handle form submission
const onSubmit = (data: LoginFormInputs) => {
  mutation.mutate(data);
};

const handleChangeStep = (id:number) => {
  if(id===1){
    setCurrentStep(1)
  } else if(id===2){
    setCurrentStep(2)
  }else if (id===3 && isAuthenticated){
    setCurrentStep(3)
  }
}

  // Avoid rendering the modal until the login state is determined
  if (isLoggedIn === null) {
    return null;
  }

  // hide body scrollbar when the modal is open
  if (isSidebarOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
   <div 
   onClick={() => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  }}
  className={`fixed z-[100] w-screen ${
    isSidebarOpen ? "" : "invisible opacity-0"
  } inset-0 grid place-items-center duration-100 `}
   >
     <div className="max-w-full">
     <div onClick={(e_) => e_.stopPropagation()} className="mainCart ml-auto bg-white shadow-lg fixed inset-0 z-30 overflow-scroll hide-scrollbar">

      {/* Header */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(90.37deg,#d2d5fd .32%,#d8daf8 22.3%,#efe8e7 49.57%,#fef3e2 99.68%)",
        }}
      >
        <div className="mx-4">
          <div className="flex max-w-screen-lg h-[110px] py-4 mx-auto">
            {steps.map((step, index) => (
              <div className="w-full flex flex-col justify-center " key={step.id}>
                <div className="flex items-center w-full">
                  <div
                  onClick={() => handleChangeStep(step.id)}
                    className={`cursor-pointer w-8 h-8 shrink-0 border-[1px] mx-[-1px] p-1.5 flex items-center justify-center rounded-full z-[1]  ${currentStep === step.id ? "bg-blue-600 border-[#0011FF]" : "bg-transparent border-[#262424] p-0"
                    } ${currentStep > step.id ? "border-[#1A8408]" : ""}`}
                  >
                    {currentStep > step.id ? (
                      <Image src={ICONS.checkCart} alt="cartCheck" className="w-full h-full" />
                    ) : (
                      <span className={`text-base font-bold ${currentStep === step.id ? 'text-white' : 'text-[#262424]'} `}>
                        
                        {step.id}
                      </span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full lineCart h-[2px] z-[0] ${currentStep > step.id ? "bg-[#fff]" : "bg-[#fff]"
                        }`}
                    ></div>
                  )}
                </div>
                <h6
                  className={`cartStep text-base font-medium font-roboto-serif ${currentStep > step.id ? "text-[#1A8408]" : "text-gray-500"
                    }`}
                >
                  {step.name}
                </h6>
              </div>
            ))}
          </div>
          <button
            className="absolute top-4 right-4 text-sm text-gray-500"
            onClick={() => dispatch(setIsSidebarOpen(!isSidebarOpen))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="black"
              className="font-bold bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className=" md:p-4 relative sm:p-2 p-1 cartMainContent">
        {currentStep === 1 && <SummaryPage />}

        {currentStep === 2 && !isAuthenticated && (
          <>
            {isLogin ? <div className="flex flex-col justify-center items-center  px-4 ">
              <div className="sm:w-full sm:max-w-sm">
                <h2 className="mt-2 font-black text-base md:text-base lg:text-lg leading-9 tracking-tight text-gray-900 text-center">
                  Existing User?
                </h2>
                <p className="text-[20px] lineHeight-[1.2]">Please sign in with your credentials below to continue</p>
              </div>
              <div className="mt-4 sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" action="#" method="POST">
                  <div>
                    <label className="text-xl block">Email</label>
                    <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                      type="text"
                      placeholder="Email"
                      className="px-4 py-3 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                    />
                    {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                  </div>
                  <div>
                    <label className="text-sm block">Password</label>
                    <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                      type="password"
                      placeholder="Password"
                      className="px-4 py-3 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                    />
                    {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                  </div>
                  <div>
                    <div className="text-sm flex items-center justify-end">
                      <a href="#" className="font-semibold font-roboto-serif text-blue-600 hover:text-indigo-500 text-[17px] lineHeight-[1.2]">Forgot password?</a>
                    </div>
                  </div>
                  <button
            // onClick={handleNext}
            className="w-full bg-blue-600 text-white xl:text-sm py-2 2xl:text-lg rounded hover:bg-blue-700"
          >
            {mutation.isPending ? "Logging in..." : "Login"}
          </button>
                 
                </form>
              </div>
            </div> : <RegistrationPage />}
            <div className="text-center text-sm text-gray-500 mt-3">
              {isLogin ? (
                <>
                  New to NowDigitalEasy?{" "}
                  <button
                    onClick={toggleLogin}
                    className="font-bold leading-6 text-blue-600"
                  >
                    Sign up here
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={toggleLogin}
                    className="font-bold leading-6 text-blue-600"
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>
          </>
        )}

        {currentStep === 3 && <PaymentPage/>}

        

        {
          currentStep === 1 ?
          <div className="flex justify-center gap-4 p-4 cartBottomBtnContainer">
            <Link 
            onClick={() => dispatch(setIsSidebarOpen(!isSidebarOpen))}
            href={"/"} className="w-2/4 bg-white text-customBlue py-2 text-sm border-2 2xl:text-lg font-bold border-customBlue rounded  hover:bg-blue-700 hover:text-white text-center cartBottomBtn">
              Continue Shopping
            </Link>

          <button
            onClick={handleNext}
            className="w-2/4 bg-blue-600 text-white xl:text-sm py-2  2xl:text-lg rounded hover:bg-blue-700 cartBottomBtn"
          >
            {Number(currentStep) === 3 ? "Pay" : "Checkout"}

          </button>
        </div>
        :
          ""
        }


      </div>
    </div>
     </div>
   </div>
  );
};

export default Cart;
