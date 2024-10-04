import { useState } from "react";
import Image from "next/image";

const ContactSection = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending data to an API
        console.log("Form submitted:", form);
    };

    return (
        <section className="container mx-auto py-12 px-4 md:px-8 lg:px-16 bg-gray-900 rounded-3xl mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 md:px-[50px]">

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
                <div className="w-full max-w-[700px] shadow-lg rounded-lg p-6 md:p-8 lg:p-12">
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
                                value={form.name}
                                onChange={handleChange}
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
                                value={form.email}
                                onChange={handleChange}
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
                                value={form.company}
                                onChange={handleChange}
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
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="border border-gray-700 rounded-md p-3 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="Type your message here..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold text-lg py-3 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
