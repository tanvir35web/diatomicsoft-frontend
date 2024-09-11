"use client";

import HeroSection from "@/components/hero/HeroSection";
import OverViewSection from "@/components/overview/OverviewSection";
import LatestProjectSection from "@/components/projects/latestProjectSection";

export default function Home() {

  return (
    <div className="px-4">
      <HeroSection />
      <OverViewSection />
      <LatestProjectSection />
    </div>
  );
}
