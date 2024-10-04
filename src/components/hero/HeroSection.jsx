import Image from "next/image";
import { BsRocketTakeoffFill } from "react-icons/bs";

const HeroSection = () => {
    return (
        <>
            <div
                className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-10 bg-[#0A0A0A] overflow-hidden w-full h-screen relative">
                {/* Main Content */}
                <div
                    className="relative z-30 flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left w-full h-screen px-4 md:px-8 lg:px-16 pt-2 md:pt-20">
                    <div className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
                        <Image
                            src="/stock-images/3d-digital.png"
                            alt="3d-digital-image"
                            layout="responsive"
                            width={300}
                            height={300}
                            className="object-cover"
                        />
                    </div>

                    <div
                        className="flex flex-col gap-4 md:ml-8 lg:ml-16 max-w-full md:max-w-[600px] justify-center items-center md:items-start">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[85px] font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-200">
                            <span className="text-blue-600">Empowering</span> Your Digital Transformation
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 text-opacity-65 text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-gray-200 max-w-[300px] md:max-w-[500px] lg:max-w-[750px]">
                            We are a team of passionate developers, designers, and engineers who
                            create innovative solutions. Bringing Your Vision to Life with Advanced
                            Technology.
                        </p>

                        <button
                            className="mt-6 lg:mt-8 bg-[#2563EB] hover:bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 font-semibold font-poppins flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 rounded-lg ">
                            Connect <BsRocketTakeoffFill/>
                        </button>
                    </div>
                </div>
            </div>
            {/* Background Image with Gradient Overlays */}
            <div className="absolute bottom-0 left-0 w-full ">
                <div className="relative w-full h-full max-w-[1600px] mx-auto">
                    {/* Gradient overlay */}
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-[#0A0A0A] z-20"></div>
                    <Image
                        src="/stock-images/background rock.webp"
                        alt="rock-background-image"
                        layout="responsive"
                        width={300}
                        height={300}
                        className="z-0"
                    />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
