"use client"
import React, { useEffect, useState } from 'react';
import Hero from './_components/Hero';
import Perfectdomain from './_components/Perfectdomain';
import RightDomain from './_components/RightDomain';
import SwitchDomain from './_components/SwitchDomain';
import GetDomain from './_components/GetDomain';
import Power from './_components/Power';
import FAQs from './_components/FAQs';
import Navbar from '@/components/Navbar';
import { useInView } from 'react-intersection-observer';

const Page = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: perfectDomainRef, inView: perfectDomainInView } = useInView();
  const { ref: rightDomainRef, inView: rightDomainInView } = useInView();
  const { ref: switchDomainRef, inView: switchDomainInView } = useInView();
  const { ref: getDomainRef, inView: getDomainInView } = useInView();
  const { ref: powerRef, inView: powerInView } = useInView();
  const { ref: faqsRef, inView: faqsInView } = useInView();

  useEffect(() => {
    if (heroInView) {
      setNavbarBg('bg-transparent');
    } else {
      setNavbarBg('bg-gradient-domain-hero');
    }
  }, [heroInView, perfectDomainInView, rightDomainInView, switchDomainInView, getDomainInView, powerInView, faqsInView]);

  return (
    <>
      <Navbar navbarBg={navbarBg} />
      <div className="">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={perfectDomainRef}>
          <Perfectdomain />
        </div>
      </div>
      <div ref={rightDomainRef}>
        <RightDomain />
      </div>
      <div ref={switchDomainRef}>
        <SwitchDomain />
      </div>
      <div ref={getDomainRef}>
        <GetDomain />
      </div>
      <div ref={powerRef}>
        <Power />
      </div>
      <div ref={faqsRef}>
        <FAQs bgColor='bg-gradient-domain-hero'/>
      </div>
    </>
  );
}

export default Page;
