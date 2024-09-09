"use client";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Hero from './_components/Hero';
import FAQs from '../domain/_components/FAQs';
import RightPlan from './_components/RightPlan';
import Discover from './_components/Discover';
import Reason from './_components/Reason';
import Navbar from '@/components/Navbar';

const Page = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  // Setting up refs and inView states for each section
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: rightPlanRef, inView: rightPlanInView } = useInView();
  const { ref: discoverRef, inView: discoverInView } = useInView();
  const { ref: reasonRef, inView: reasonInView } = useInView();
  const { ref: faqsRef, inView: faqsInView } = useInView();

  // Update navbar background based on the hero section's visibility
  useEffect(() => {
    if (heroInView) {
      setNavbarBg('bg-transparent');
    } else {
      setNavbarBg('bg-gradient-hosting-hero');
    }
  }, [heroInView, rightPlanInView, discoverInView, reasonInView, faqsInView]);

  return (
    <div>
      <Navbar navbarBg={navbarBg} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={rightPlanRef}>
        <RightPlan />
      </div>
      <div ref={discoverRef}>
        <Discover />
      </div>
      <div ref={reasonRef}>
        <Reason />
      </div>
      <div ref={faqsRef}>
        <FAQs bgColor='bg-gradient-hosting-hero'/>
      </div>
    </div>
  );
};

export default Page;
