"use client";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Hero from './_components/Hero';
import Transforming from './_components/Transforming';
import Services from './_components/Services';
import Testimonials from '../(home)/_components/Testtimonial';
import FAQs from '../domain/_components/FAQs';
import Practices from './_components/Practices';
import Plans from './_components/Plans';
import Navbar from '@/components/Navbar';

const Page = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: transformingRef, inView: transformingInView } = useInView();
  const { ref: servicesRef, inView: servicesInView } = useInView();
  const { ref: plansRef, inView: plansInView } = useInView();
  const { ref: practicesRef, inView: practicesInView } = useInView();
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView();
  const { ref: faqsRef, inView: faqsInView } = useInView();

  useEffect(() => {
    if (heroInView) {
      setNavbarBg('bg-transparent');
    } else {
      setNavbarBg('bg-gradient-hosting-hero');
    }
  }, [heroInView, transformingInView, servicesInView, plansInView, practicesInView, testimonialsInView, faqsInView]);
  return (
    <>
      <Navbar navbarBg={navbarBg} />
      <div className="">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={transformingRef}>
          <Transforming />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={plansRef}>
          <Plans />
        </div>
        <div ref={practicesRef}>
          <Practices />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={faqsRef}>
        <FAQs bgColor='bg-gradient-hosting-hero'/>
        </div>
      </div>
    </>
  );
};

export default Page;
