import Image from "next/image";
import {FaStar} from "react-icons/fa";

const ReviewCard = ({clientProfilePhoto, clientName, clientPosition, review, rating}) => {
    return (
        <>
            <div
                className="bg-gray-900 rounded-3xl shadow-lg p-8 text-center flex flex-col items-center "
            >
                {/* User Image */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 bg-gray-800 pt-1 relative">
                    <Image
                        src={clientProfilePhoto}
                        alt={`${clientName}'s photo`}
                        fill
                        className="object-cover scale-110"
                    />
                </div>


                {/* User Name and Position */}
                <h3 className="text-xl font-semibold">{clientName}</h3>
                <p className="text-blue-500 text-sm font-medium">{clientPosition}</p>

                {/* Star Rating */}
                <div className="flex justify-center mt-2 mb-4 text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={index < rating ? "text-yellow-500" : "text-gray-300"}
                        />
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-400">{review}</p>
            </div>
        </>
    )
}

export default ReviewCard;