import { useState } from "react";
import Image from "next/image";

const ContactSection = () => {
    const [isLoading, setIsLoading] = useState(false); // For loading state
    const [isSubmitted, setIsSubmitted] = useState(false); // For success state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        const formData = new FormData(e.target);
        formData.append("access_key", "eb8b59c8-9da3-4358-a5ad-4227c13e3de9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setIsSubmitted(true); // Set success state
            e.target.reset();

            // Reset the submit button text back to "Submit" after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false); // Reset success state
            }, 3000); // 3000ms = 3 seconds
        } else {
            console.log("Error", data);
        }

        setIsLoading(false); // Stop loading
    };

    return (
        <section className="container mx-auto py-12 px-4 md:px-8 lg:px-16 bg-gray-900 rounded-3xl mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-1 md:px-[50px]">
                {/* Image Section */}
                <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] mx-auto lg:mx-0">
                    <Image
                        src="/stock-images/3d-relux.png"
                        alt="3d-digital-image"
                        layout="responsive"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full max-w-[700px] shadow-lg rounded-lg p-0 md:p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-center mb-6 text-white">
                        Contact Us
                    </h2>
                    <p className="text-center text-gray-300 mb-8">
                        We’d love to hear from you! Fill out the form below, and our team will get in touch with you soon.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-300 font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="border border-gray-700 rounded-md p-3 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-300 font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="border border-gray-700 rounded-md p-3 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="company" className="text-gray-300 font-medium mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="border border-gray-700 rounded-md p-3 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your company name (optional)"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-gray-300 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                className="border border-gray-700 rounded-md p-3 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="Type your message here..."
                            />
                        </div>

                        <button
                            type="submit"
                            className={`text-white font-semibold text-lg py-3 rounded-md transition duration-300
                                ${isLoading ? "bg-blue-500 cursor-not-allowed" : isSubmitted ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"}`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="flex justify-center items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : isSubmitted ? "Submitted" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
