"use client";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Hero from './_components/Hero';
import Tracking from './_components/Tracking';
import Power from './_components/Power';
import GetStarted from './_components/GetStarted';
import FAQs from '../domain/_components/FAQs';
import Tool from './_components/Tool';
import Navbar from '@/components/Navbar';
import SpotNowTable from './_components/SpotNowTable';

const Page = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  // Setting up refs and inView states for each section
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: trackingRef, inView: trackingInView } = useInView();
  const { ref: powerRef, inView: powerInView } = useInView();
  const { ref: getStartedRef, inView: getStartedInView } = useInView();
  const { ref: toolRef, inView: toolInView } = useInView();
  const { ref: spotNowTableRef, inView: spotNowTableInView } = useInView();
  const { ref: faqsRef, inView: faqsInView } = useInView();

  // Update navbar background based on the hero section's visibility
  useEffect(() => {
    if (heroInView) {
      setNavbarBg('bg-transparent');
    } else {
      setNavbarBg('bg-background-SpotNow');
    }
  }, [heroInView, trackingInView, powerInView, getStartedInView, toolInView, spotNowTableInView, faqsInView]);

  return (
    <div>
      <Navbar navbarBg={navbarBg} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={trackingRef}>
        <Tracking />
      </div>
      <div ref={powerRef}>
        <Power />
      </div>
      <div ref={getStartedRef}>
        <GetStarted />
      </div>
      <div ref={toolRef}>
        <Tool />
      </div>
      <div ref={spotNowTableRef}>
        <SpotNowTable />
      </div>
      <div ref={faqsRef}>
        <FAQs bgColor='bg-background-SpotNow-gettingStarted'/>
      </div>
    </div>
  );
};

export default Page;
