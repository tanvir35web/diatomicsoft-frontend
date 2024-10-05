import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const UserReviewSection = () => {
    const [reviews] = useState([
        {
            id: 1,
            name: "Carolina Montoya",
            position: "Managing Director",
            image: "/images/user1.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: 5,
        },
        {
            id: 2,
            name: "Peter Rose",
            position: "Manager",
            image: "/images/user2.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: 5,
        },
        {
            id: 3,
            name: "Gerald Gilbert",
            position: "Developer",
            image: "/images/user3.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: 5,
        },
    ]);

    return (
        <section className=" py-12 px-4 md:px-8 lg:px-16 font-poppins">
            <div className="container mx-auto text-center mb-10">
                <h2 className="text-3xl font-poppins font-bold mb-2">Client Reviews</h2>
                <p className="text-gray-500 mb-10">Here's what our clients are saying about us.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-gray-900 rounded-3xl shadow-lg p-8 text-center flex flex-col items-center "
                    >
                        {/* User Image */}
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-gray-800 pt-1">
                            <Image
                                src={review.image}
                                alt={`${review.name}'s photo`}
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>

                        {/* User Name and Position */}
                        <h3 className="text-xl font-semibold">{review.name}</h3>
                        <p className="text-blue-500 text-sm font-medium">{review.position}</p>

                        {/* Star Rating */}
                        <div className="flex justify-center mt-2 mb-4 text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={index < review.rating ? "text-yellow-500" : "text-gray-300"}
                                />
                            ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-400">{review.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UserReviewSection;
