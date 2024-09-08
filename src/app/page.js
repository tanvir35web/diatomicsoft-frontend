"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import OverViewSection from "@/components/overview/OverviewSection";
import LatestProjectSection from "@/components/projects/latestProjectSection";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // 50% of the section should be visible to trigger

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  return (
    <div className="px-4">
      <HeroSection />

      <motion.div
        ref={ref} // Reference for OverViewSection
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
        variants={fadeIn}
      >
        <OverViewSection />
      </motion.div>
      <LatestProjectSection />
    </div>
  );
}
