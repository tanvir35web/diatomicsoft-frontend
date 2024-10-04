// components/ShowcaseSection.js
import { useState, useEffect } from "react";
import useFetchProjects from "@/hooks/useFetchProjects";
import Image from "next/image";

const ShowcaseSection = () => {
    const { projects, status, error } = useFetchProjects();
    const [activeTab, setActiveTab] = useState(projects?.[1]?.title || null);

    const tagColors = [
        "bg-yellow-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-purple-500",
        "bg-red-500",
    ];


    // Update activeTab once projects are loaded
    useEffect(() => {
        if (projects && projects.length > 0 && !activeTab) {
            setActiveTab(projects[1].title);
        }
    }, [projects, activeTab]);

    return (
        <div className="container mx-auto pb-2 px-4 md:px-0 text-center">
            <div className="w-[300px] h-[300px] m-auto ">
                <Image
                    src="/stock-images/3d-deshboard.png"
                    alt="rock-background-image"
                    layout="responsive"
                    width={300}
                    height={300}
                    className="object-cover"
                />
            </div>

            <h1 className="text-4xl font-bold mb-4">Start. Build. Innovate.</h1>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Diatomicsoft is the trusted partner for tech innovators, managing the end-to-end process & taking you
                from innovation to execution. View our projects to see how we turn visionary ideas into best-in-class
                apps.
            </p>

            {/* Loading and error handling */}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error.message}</p>}

            {/* Tabs */}
            <div className="flex justify-center max-w-[1100px] m-auto flex-wrap gap-2 mb-10 overflow-x-auto px-2">
                {projects && projects.slice(1, 6).map((project) => (
                    <button
                        key={project.title}
                        onClick={() => setActiveTab(project.title)}
                        className={`px-3 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm lg:text-lg transition-colors duration-300 max-w-[200px] truncate ${
                            activeTab === project.title ? "bg-blue-500 text-white" : "bg-gray-800 text-white hover:bg-gray-600"
                        }`}
                    >
                        {project.title}
                    </button>
                ))}
            </div>

            {/* Active Tab Content */}
            {projects && projects.slice(1, 6).map((project) => (
                activeTab === project.title && (
                    <div key={project.id}
                         className="transition-opacity duration-500 ease-in-out text-left max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-3 md:mt-20">
                        <div className="max-w-[500px] h-auto">
                            <div className="pt-10">
                                <h2 className="text-2xl font-bold mb-3 text-left">{project.title}</h2>
                                <p className="text-gray-300 mb-10 text-left">{project.description}</p>
                            </div>

                            {/* Tags */}
                            <div className="flex justify-start gap-3 flex-wrap mb-8">
                                {project.usedTechnology.map((tech, index) => {
                                    const items = tech.split(',').map(item => item.trim());
                                    return (
                                        <div key={index} className="flex gap-2 flex-wrap">
                                            {items.map((item, i) => (
                                                <span key={i}
                                                      className={`px-4 py-1 rounded-full text-white font-medium bg-opacity-50 ${tagColors[(index + i) % tagColors.length]}`}>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Image */}
                        <div
                            className="flex justify-center w-[330px] h-[200px] md:w-[500px] lg:h-[400px] object-cover bg-gray-700 rounded-3xl opacity-50 border border-gray-600 overflow-hidden">
                            <img src={project.coverImageURL} alt={project.title}
                                 className="w-full h-full object-cover rounded-lg shadow-lg"/>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

export default ShowcaseSection;
