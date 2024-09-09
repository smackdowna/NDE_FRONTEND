"use client";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTransition, animated } from "react-spring";
import { useAppDispatch } from "../store/store";
import { loginSuccess, loginFailure } from "../store/authSlice";

interface LoginProps {
  onClose: () => void;
  isOpen: boolean;
}

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

const Login: React.FC<LoginProps> = ({ onClose, isOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const dispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

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
      toast.success("Login successful");
      setIsLoggedIn(true);

      // Get cart from local storage and send it directly to the API
      const cart = localStorage.getItem("cart");
      if (cart) {
        try {
          const parsedCart = JSON.parse(cart);

          // Send cart data to the API as is
          await addCartToAPI(parsedCart);
          toast.success("Cart successfully added to the server");
        } catch (error) {
          toast.error("Failed to sync cart with the server");
        }
      }

      onClose(); // Optionally close the login modal
      window.location.reload(); // Reload the page after cart is synced
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

  const transition = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
    config: { duration: 200 },
  });

  // Avoid rendering the modal until the login state is determined
  if (isLoggedIn === null) {
    return null;
  }

  return transition((style, item) =>
    item ? (
      <animated.div
        style={style}
        className="bg-black fixed right-0 top-0 w-[28vw] z-50 max-2xl:w-[30vw] max-xl:w-[40vw] max-md:w-[100vw] h-full"
      >
        <div className="flex justify-center h-full bg-white">
          <button
            className="absolute top-6 right-6 font-900 text-2xl text-black"
            id="close"
            onClick={onClose}
          >
            ✖
          </button>
          <div className="justify-center flex items-center h-full">
            <div className="flex flex-col text-center w-[350px]">
              <span className="font-roboto font-900 text-2xl">
                Existing User?
              </span>
              <span className="px-2 font-roboto-serif text-xl">
                Please sign in with your credentials below to continue.
              </span>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col"
              >
                <div className="flex flex-col text-start gap-3 pt-6">
                  <label
                    htmlFor="email"
                    className="text-2xl font-roboto-serif"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter the Email Address"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="border p-3 w-[350px]"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="flex flex-col text-start gap-2 pt-4">
                  <label
                    htmlFor="password"
                    className="text-2xl font-roboto-serif"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter the Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="border p-3 w-[350px]"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <span className="text-end pt-1 text-home-primary font-400">
                  Forgot Password
                </span>
                <button
                  type="submit"
                  className="bg-home-primary text-white mx-2 mt-4 mb-2 text-2xl font-800 w-[300px] py-2"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Logging in..." : "Login"}
                </button>
                <span>
                  New to NowDigitalEasy?{" "}
                  <span className="text-home-primary">Sign up here</span>
                </span>
              </form>
            </div>
          </div>
        </div>
      </animated.div>
    ) : null
  );
};

export default Login;
