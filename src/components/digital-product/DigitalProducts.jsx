import Image from "next/image";
import {useRouter} from "next/navigation";
import {BsFillRocketTakeoffFill} from "react-icons/bs";

const DigitalProducts = ({title, subtitle, buttonUrl, buttonLabelText, imagePath}) => {
    const router = useRouter();
    return (
        <section className=" container bg-blue-500 m-auto px-4 sm:px-8 lg:px-16 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1300px] m-auto text-black h-auto md:h-[350px] my-20">
                {/* Text Content */}
                <div className="max-w-full md:max-w-[400px] px-4 py-8 md:px-8 md:py-16 text-center md:text-left relative">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10">
                        {title}
                    </h2>
                    <p className="text-base sm:text-lg mb-6 z-10">
                        {subtitle}
                    </p>
                    <button onClick={() => router.push(buttonUrl)}
                        className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold z-10 hover:bg-gray-800 hover:scale-105 transition flex gap-2 items-center"
                    >
                        {buttonLabelText} <BsFillRocketTakeoffFill/>
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mt-8 md:mt-0">
                    <Image
                        className="w-full h-auto"
                        src={imagePath}
                        width={400}
                        height={300}
                        alt="3d-illustration-working"
                    />
                </div>
            </div>
        </section>
    );
};

export default DigitalProducts;
