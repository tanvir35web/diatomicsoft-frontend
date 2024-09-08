"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import OverViewSection from "@/components/overview/OverviewSection";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // 50% of the section should be visible to trigger

  const fadeIn = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  return (
    <div>
      <HeroSection />

      <motion.div
        ref={ref} // Reference for OverViewSection
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
        variants={fadeIn}
      >
        <OverViewSection />
      </motion.div>
    </div>
  );
}


// import HeroSection from "@/components/hero/HeroSection";
// import OverViewSection from "@/components/overview/OverviewSection";

// export default function Home() {

//   return (
//     <div>
//      <HeroSection />
//      <OverViewSection />
//     </div>
//   );
// }