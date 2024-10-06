import { useState, useEffect } from "react";
import useFetchProjects from "@/hooks/useFetchProjects";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const ShowcaseSection = () => {
    const { projects, status, error } = useFetchProjects();
    const [activeTab, setActiveTab] = useState(projects?.[0]?.title || null);
    const [activeIndex, setActiveIndex] = useState(1); // Track active index
    const [slideDirection, setSlideDirection] = useState("from-left");

    const tagColors = [
        "bg-yellow-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-purple-500",
        "bg-red-500",
    ];

    useEffect(() => {
        if (projects && projects.length > 0 && !activeTab) {
            setActiveTab(projects[1].title);
        }
    }, [projects, activeTab]);

    const handleTabChange = (projectTitle, index) => {
        setSlideDirection(index > activeIndex ? "from-right" : "from-left");
        setActiveTab(projectTitle);
        setActiveIndex(index);
    };

    const handleSwipe = (direction) => {
        if (projects) {
            if (direction === "left" && activeIndex < projects.length - 1) {
                // Swipe left to move to the next project
                const nextIndex = activeIndex + 1;
                handleTabChange(projects[nextIndex].title, nextIndex);
            } else if (direction === "right" && activeIndex > 1) {
                // Swipe right to move to the previous project
                const prevIndex = activeIndex - 1;
                handleTabChange(projects[prevIndex].title, prevIndex);
            }
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Enables swipe with mouse drag
    });

    return (
        <div className="container overflow-hidden mt-12 mx-auto p-6 pb-12 text-center bg-gradient-to-b from-gray-900 to-transparent rounded-[50px]">
            <div className="w-[300px] h-[270px] m-auto pt-8">
                <Image
                    src="/stock-images/3d-deshboard.png"
                    alt="rock-background-image"
                    layout="responsive"
                    width={300}
                    height={300}
                    className="object-cover"
                />
            </div>

            <h1 className="text-4xl font-bold mb-4">Let's explore our latest projects</h1>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Diatomicsoft is the trusted partner for tech innovators, managing the end-to-end process & taking you
                from innovation to execution. View our projects to see how we turn visionary ideas into best-in-class
                apps.
            </p>

            {/* Loading and error handling */}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error.message}</p>}

            {/* Tabs */}
            <div className="flex justify-center max-w-[890px] m-auto flex-wrap gap-2 mb-10 md:overflow-x-auto px-2 md:bg-gray-800 p-3 rounded-full">
                {projects && projects.slice(0, 5).map((project, index) => (
                    <button
                        key={project.title}
                        onClick={() => handleTabChange(project.title, index)}
                        className={`px-3 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm lg:text-lg transition-colors duration-300 max-w-[200px] truncate ${
                            activeTab === project.title ? "bg-blue-500 text-white" : "bg-transparent text-white hover:bg-gray-600"
                        }`}
                    >
                        {project.title}
                    </button>
                ))}
            </div>

            {/* Active Tab Content with Swipe and Slide Animation */}
            <div {...swipeHandlers} className={`transition-container ${slideDirection}`}>
                {projects && projects.slice(1, 6).map((project) => (
                    activeTab === project.title && (
                        <div key={project.id} className="active-tab-content text-left max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-3 md:mt-20 select-none">
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
                            <div className="flex justify-center w-[330px] h-[200px] md:w-[500px] lg:h-[400px] object-cover bg-gray-700 rounded-3xl opacity-50 border border-gray-600 overflow-hidden">
                                {project && project?.coverImageURL && (
                                    <Image src={project.coverImageURL} alt={project.title}
                                           width={330}
                                           height={330}
                                           className="w-full h-full object-cover rounded-lg shadow-lg"/>
                                )}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default ShowcaseSection;
