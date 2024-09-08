import Image from "next/image";
import { BsRocketTakeoffFill } from "react-icons/bs";


const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 px-1 md:px-10">
      <div className="flex flex-col gap-4 items-center md:items-end justify-center text-right w-full h-screen px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-right font-bold text-white">
            <span className="text-[#5BE4A8]">Empowering</span> Your{" "}
            <span className="text-blue-600">Digital <span className="text-yellow-300">Transformation</span></span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white text-opacity-65 text-center md:text-right">
            We are a team of passionate developers, designers, and engineers who
            create innovative solutions. Bringing Your Vision to Life with Advanced
            Technology.
          </p>
        </div>
        <button className="bg-[#36775b5b] hover:bg-[#5be4a95b] px-8 py-4 mt-3 flex flex-row items-center justify-center gap-2 hover:scale-105 duration-200 rounded-lg">Connect <BsRocketTakeoffFill />
        </button>
      </div>
      <div>
        <Image src={"/stock-images/hero-image.png"} width={800} height={800} alt="hero image" />
      </div>
    </div>

  );
}

export default HeroSection;
