import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

// HeroSection loads immediately for fast initial page load
import HeroSection from '@/components/home/HeroSection';

// Lazy load other components with explicit typing
const LogoCarousel = dynamic(() => import('@/components/home/Logos'), { ssr: false });
const MoreBorder = dynamic(() => import('@/components/home/Border'), { ssr: false });
const ItemsStats = dynamic(() => import('@/components/home/ItemsStats'), { ssr: false });
const SplitScreen = dynamic(() => import('@/components/home/SplitScreen').then((mod) => mod.SplitScreen), { ssr: false });
const MarketingComparison = dynamic(() => import('@/components/home/Compair'), { ssr: false });
const StretchingSection = dynamic(() => import('@/components/home/StretchingSection'), { ssr: false });
const SvgGraph = dynamic(() => import('@/components/home/SvgGraph'), { ssr: false });
const CardContainer = dynamic(() => import('@/components/home/CardContainer'), { ssr: false });
const ValueProp = dynamic(() => import('@/components/home/ValueProp'), { ssr: false });
const Aboutus = dynamic(() => import('@/components/home/Aboutus'), { ssr: false });
const OurGoal = dynamic(() => import('@/components/home/OurGoal'), { ssr: false });
const SvgProses = dynamic(() => import('@/components/home/SvgProses'), { ssr: false });

const Home = () => {
  return (
    <div className="bg-white text-black">
      {/* Immediately loaded HeroSection */}
      <HeroSection />

      {/* Lazy loaded components with suspense fallback */}
      <Suspense fallback={<div>Loading...</div>}>
        <LogoCarousel />
        <MoreBorder />
        <ItemsStats />
        <SplitScreen />
        <MarketingComparison />
        <StretchingSection />
        <SvgGraph />
        <CardContainer />
        <ValueProp />
        <Aboutus />
        <OurGoal />
        <SvgProses />
      </Suspense>
    </div>
  );
};

export default Home;
