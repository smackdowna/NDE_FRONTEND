"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Accelerate from './_components/Accelerate';
import Footer from './_components/Footer';
import Hero from './_components/Hero';
import Organization from './_components/Organization';
import Possibilities from './_components/Possibilities';
import TakeStepNow from './_components/TakeStepNow';
import Testimonials from './_components/Testtimonial';

export default function Home() {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: possibilitiesRef, inView: possibilitiesInView } = useInView();
  const { ref: accelerateRef, inView: accelerateInView } = useInView();
  const { ref: organizationRef, inView: organizationInView } = useInView();
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView();
  const { ref: takeStepNowRef, inView: takeStepNowInView } = useInView();

  useEffect(() => {
    if (heroInView) {
      setNavbarBg('bg-transparent');
    } else {
      setNavbarBg('bg-gradient-light');
    }
  }, [heroInView, possibilitiesInView, accelerateInView, organizationInView, testimonialsInView, takeStepNowInView]);

  return (
    <>
      <Navbar navbarBg={navbarBg} />
      <div className="">
        <div ref={possibilitiesRef}>
        <Hero />
        </div>
        <div ref={possibilitiesRef}>
          <Possibilities />
        </div>
        <div ref={accelerateRef}>
          <Accelerate />
        </div>
        <div ref={organizationRef}>
          <Organization />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={takeStepNowRef}>
          <TakeStepNow />
        </div>
      </div>
    </>
  );
}
