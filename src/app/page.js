"use client";

import Blogs from "@/components/blogs/Blogs";
import HeroSection from "@/components/hero/HeroSection";
import OverViewSection from "@/components/overview/OverviewSection";
import LatestProjectSection from "@/components/projects/latestProjectSection";
import ShowcaseSection from "@/components/projects/ShowcaseSection";
import DigitalProducts from "@/components/digital-product/DigitalProducts";
import ContactSection from "@/components/contacts/ContactSection";



export default function Home() {

  return (
    <div className="px-4">
      <HeroSection />
      <OverViewSection />
      <ShowcaseSection />
        <div className="pt-[80px]"><DigitalProducts /></div>
      <Blogs />
        <ContactSection/>
    </div>
  );
}
