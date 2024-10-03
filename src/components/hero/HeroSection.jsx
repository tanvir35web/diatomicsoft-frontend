import Image from "next/image";
import { BsRocketTakeoffFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-10 bg-[#0A0A0A]">
      <div className="absolute bottom-0 m-auto">
        <div className="relative w-[1600px] h-full">
          {/* Gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-[#0A0A0A] z-20"></div>
          <Image
            src="/stock-images/background rock.webp"
            alt="rock-background-image"
            layout="responsive"
            height={1000}
            width={1500}
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center text-right w-full h-screen px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-4 items-center justify-center text-center pb-6">
          <h1 className="text-3xl md:text-5xl lg:text-[85px] text-center font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-200">
            <span className="text-blue-600">Empowering</span> Your Digital Transformation
          </h1>

          <p className="text-lg font-poppins md:text-xl lg:text-xl text-gray-200 text-opacity-65 text-center w-[300px] lg:w-[750px] text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-gray-200">
            We are a team of passionate developers, designers, and engineers who
            create innovative solutions. Bringing Your Vision to Life with Advanced
            Technology.
          </p>
        </div>


          <button
              className="relative font-poppins font-semibold mb-20 z-50 bg-[#2563EB] hover:bg-blue-600 px-8 py-4 flex flex-row items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 rounded-lg border-transparent">
            Connect <BsRocketTakeoffFill />
          </button>








      </div>
    </div>
  );
};

export default HeroSection;
