"use client";

import Blogs from "@/components/blogs/Blogs";
import HeroSection from "@/components/hero/HeroSection";
import OverViewSection from "@/components/overview/OverviewSection";
import LatestProjectSection from "@/components/projects/latestProjectSection";
import ShowcaseSection from "@/components/projects/ShowcaseSection";
import DigitalProducts from "@/components/digital-product/DigitalProducts";
import ContactSection from "@/components/contacts/ContactSection";
import {useRef} from "react";
import Footer from "@/components/footer/Footer";
import UserReviewSection from "@/components/review/UserReviewSection";



export default function Home() {
    const nextSectionRef = useRef(null);

    const scrollToSection = () => {
        nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    };

  return (
      <div className="px-4 font-poppins">
          <HeroSection scrollToSection={scrollToSection}/>
          <div ref={nextSectionRef} className="pt-[80px]">
              <DigitalProducts
                  imagePath={"/stock-images/3d-illustration-working.webp"}
                  title={" We craft digital products"}
                  subtitle={" We’re ready and waiting. Click below to begin."}
                  buttonLabelText={"Let's do it together"}
                  buttonUrl={"/contact"}
              />
          </div>
          <OverViewSection/>
          <ShowcaseSection/>
          <div className="pt-[80px] pb-6">
              <DigitalProducts
                  imagePath={"/stock-images/3d-blog.webp"}
                  title={" Stay Updated with Latest Blogs"}
                  subtitle={" Technology evolves daily, and reading helps you stay ahead with the latest trends, tools, and updates."}
                  buttonLabelText={"Read more blogs"}
                  buttonUrl={"/blog"}
              />
          </div>
          <Blogs/>
          <UserReviewSection/>
          <ContactSection/>
          <Footer />
      </div>
  );
}
