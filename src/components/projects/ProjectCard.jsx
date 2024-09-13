import Image from "next/image";

const ProjectCard = ({ coverImage, id, title, description, status, usedTechnology, targetedPlatform }) => {

    return (
        <>
            <div key={id} className="bg-[#0E0F1D] relative bg-opacity-55 cursor-pointer duration-200 border border-gray-700 hover:border-blue-900 p-4 
            rounded-lg w-[400px] " >
                <div className="relative w-[370px] h-[200px]">
                    {coverImage ? (<Image
                        src={coverImage}
                        alt={`${title} image`}
                        fill
                        className="object-cover rounded-t-md"
                        loading="lazy"
                    />) : (<div className=" w-full rounded-md bg-gray-700"></div>)}
                </div>
                <div className="p-4">
                    <h1 className="text-xl font-bold"> {title} </h1>
                    <p className="mt-2 text-gray-400"> {description.slice(1, 200)} </p>
                    <div className="absolute bottom-10 right-5">
                        {status === "active" ? ( <div className="bg-green-800 px-3 rounded-full text-green-200"> Active </div>) : ""}
                    </div>
                    <div className="flex flex-wrap gap-5 mt-3">
                        {usedTechnology.map((tech, index) => {
                            const items = tech.split(',').map(item => item.trim());
                            return (
                                <div key={index}>
                                    {items.map((item, i) => (
                                        <span key={i} className="last:mr-0 mr-2 bg-blue-600-500 border border-green-600 text-green-900 py-1 px-2 rounded">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            );
                        })}
                    </div>

                    <p className="mt-4 text-gray-400"><strong>Platforms:</strong> {targetedPlatform} </p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;