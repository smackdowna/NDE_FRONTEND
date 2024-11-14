"use client";
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState } from 'react';

interface Forlgata {
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
  termsChecked: boolean;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Forlgata>();
  const [forlgata, setForlgata] = useState<Forlgata>({
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
    termsChecked: false,
  });

  const onSubmit: SubmitHandler<Forlgata> = (data) => {
    console.log(data); // This will contain your form data
    // Add your form submission logic here

    // Clear the form after submission
    reset({
      companyName: '',
      email: '',
      phoneNumber: '',
      message: '',
      termsChecked: false,
    });
  };

  return (
    <>
      <div className="w-full flex gap-10 max-xl:gap-4 mb-16 max-lg:mb-4 ml-[50px] max-xl:ml-0 max-lg:flex-col">
        <div className='py-6 w-full border-gray-300 border rounded-3xl w-[550px] max-xl:w-[380px] max-lg:[700px] max-lg:justify-center'>
          <form onSubmit={handleSubmit(onSubmit)} className=' overflow-y-auto px-8 rounded-xl'>
            <div className='mb-4'>
              <span className="text-[26px] font-source-sans-pro font-900 text-[#000659]">Send us a message</span>
            </div>
            <div className="mb-4">
              <input type="text" id="companyName" {...register("companyName", { required: true })} value={forlgata.companyName} onChange={(e) => setForlgata({ ...forlgata, companyName: e.target.value })} placeholder='Company Name' className="mt-1 p-2 rounded-lg w-full" />
              {errors.companyName && <span className="text-red-500">Company name is required</span>}
            </div>
            <div className="mb-4">
              <input type="email" id="email" {...register("email", { required: true })} value={forlgata.email} onChange={(e) => setForlgata({ ...forlgata, email: e.target.value })} placeholder='Email Address' className="mt-1 p-2 rounded-lg w-full" />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div className="mb-4">
              <input type="tel" id="phoneNumber" {...register("phoneNumber", { required: true })} value={forlgata.phoneNumber} onChange={(e) => setForlgata({ ...forlgata, phoneNumber: e.target.value })} placeholder='Phone Number' className="mt-1 p-2 rounded-lg w-full" />
              {errors.phoneNumber && <span className="text-red-500">Phone number is required</span>}
            </div>
            <div className="mb-4">
              <textarea id="message" {...register("message", { required: true })} value={forlgata.message} onChange={(e) => setForlgata({ ...forlgata, message: e.target.value })} placeholder='Message' className="mt-1 p-2 border border-gray-300 rounded-lg w-full h-32 resize-none" />
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="termsChecked" className="inline-flex items-center">
                <input type="checkbox" id="termsChecked" {...register("termsChecked", { required: true })} checked={forlgata.termsChecked} onChange={(e) => setForlgata({ ...forlgata, termsChecked: e.target.checked })} className="form-checkbox h-3 w-5 text-[#000659]" />
                <span className="ml-2 text-sm text-gray-700">I agree to the <a href="/terms" className="text-blue-600">terms and conditions</a> and <a href="/privacy-policy" className="text-blue-600">privacy policy</a>.</span>
              </label>
              {errors.termsChecked && <span className="text-red-500">You must agree to the terms and conditions</span>}
            </div>
            <button type="submit" disabled={!forlgata.termsChecked} className={`bg-primary-300 text-white px-20 py-2 rounded-lg hover:bg-primary-600 ${!forlgata.termsChecked && 'opacity-50 cursor-not-allowed'}`}>Submit</button>
          </form>
        </div>
        <div>
        <div className="flex w-[300px] max-xl:w-[200px] max-lg:w-full flex-col gap-2 mb-10 mt-2 ">
          <span className="text-[20px] text-[#000659] font-900 font-source-sans-pro">Now Digital Easy</span>
          <span className="font-merriweather w-full text-[15px]">Now Digital Easy, 76D/1 R.R Complex, New, Salem Bypass Rd, Karur, Tamil Nadu 639002</span>
        </div>
        <div className="flex flex-col gap-2 mb-10 w-[300px] max-lg:w-full max-xl:w-[200px]">
          <span className="text-[20px] text-[#000659] font-900 font-source-sans-pro" >Now Digital Easy</span>
          <span className="font-merriweather w-full text-[15px]"> 5335 Gate Pkwy,
            Jacksonville, FL 32256,
            United States</span>
        </div>
      </div>
      <hr />
      </div>
      <div className='flex max-lg:flex-col max-lg:gap-10 mb-10 py-10 max-lg:py-0 w-full'>
        <div className='flex flex-col gap-3 w-full w-[330px] max-xl:w-[200px]  pr-4 max-lg:pr-0 max-lg:w-full  border-r-2 max-lg:border-r-0 '>
          <span className=' font-source-sans-pro font-900 text-[#000659] text-[28px]'>Sales</span>
          <p className=' font-merriweather text-[15px]'>For sales-related questions, please send us an email at  <a href="/terms" className=" text-blue-600 underline text-[12px]"> digital@nowdigitaleasy.com</a></p>
          <div className='mt-4 flex flex-col gap-1'>
            <span className=' font-source-sans-pro font-900 text-[#000659] text-[20px]'>USA</span>
            <span>Tel: <span className='text-blue-600 underline text-[12px]'>098941 11975</span></span>
            <span>Mail: <span className='text-blue-600 underline text-[12px]'>digital@nowdigitaleasy.com</span></span>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className=' font-source-sans-pro font-900 text-[#000659] text-[20px]'>India</span>
            <span>Tel: <span className='text-blue-600 underline text-[12px]'>098941 11975</span></span>
            <span>Mail: <span className='text-blue-600 underline text-[12px]'>digital@nowdigitaleasy.com</span></span>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[350px] max-xl:w-[200px]  px-3 max-lg:px-0 max-lg:w-full border-r-2 max-lg:border-r-0'>
          <span className=' font-source-sans-pro font-900 text-[#000659] text-[28px]'>Press</span>
          <p className=' font-merriweather text-[12px] '>If you have any queries about our Press Releases, need to discuss any Interviews or require company information for any media publication you can get in touch with our Media Contact  <a href="/terms" className=" text-blue-600 underline text-[12px]"> digital@nowdigitaleasy.com</a></p>
          <div className='mt-4 flex flex-col gap-1'>
            <span className=' font-source-sans-pro font-900 text-[#000659] text-[20px]'>USA</span>
            <span>Tel: <span className='text-blue-600 underline text-[12px]'>098941 11975</span></span>
            <span>Mail: <span className='text-blue-600 underline text-[12px]'>digital@nowdigitaleasy.com</span></span>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className=' font-source-sans-pro font-900 text-[#000659] text-[15px]'>India</span>
            <span>Tel: <span className='text-blue-600 underline text-[12px]'>098941 11975</span></span>
            <span>Mail: <span className='text-blue-600 underline text-[12px]'>digital@nowdigitaleasy.com</span></span>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[350px] max-xl:w-[200px] px-3 max-lg:px-0 max-lg:w-full '>
          <span className=' font-source-sans-pro font-900 text-[#000659] text-[28px]'>Report Abuse</span>
          <p className=' font-merriweather text-[12px]'>We hate spam too! In order to report any abuse activity (spam, phishing, adware etc) with respect to any domain name registered through any of our Resellers simply fill out a small form on our  <a href="/terms" className=" text-blue-600 underline text-[12px]">Report Abuse Page.</a></p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
