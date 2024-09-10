import Image from "next/image";

const ProjectCard = ({ coverImage, id, title, description, status, usedTechnology, targetedPlatform }) => {

    return (
        <>
            <div key={id} className="bg-gray-900 cursor-pointer duration-200 border border-gray-700 hover:border-blue-900 p-3 
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
                    <p className="mt-4 text-gray-400"><strong>Status:</strong> {status} </p>
                    <p className="mt-4 text-gray-400"><strong>Technologies:</strong> {usedTechnology} </p>
                    <p className="mt-4 text-gray-400"><strong>Platforms:</strong> {targetedPlatform} </p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;