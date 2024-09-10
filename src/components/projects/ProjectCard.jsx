import Image from "next/image";

const ProjectCard = ({ coverImage, id, title, description, status, usedTechnology, targetedPlatform }) => {    

    return (
        <>
            <div key={id} className="bg-gray-900 cursor-pointer duration-200 border border-gray-700 hover:border-blue-900 p-3 rounded-lg w-[600px] mt-8" >
                {coverImage && <Image src={coverImage} height={600} width={800} alt={title + " image"} className="w-full h-80 object-cover rounded-t-md" />}
                <div className="p-4">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="mt-2 text-gray-400">{description}</p>
                    <p className="mt-4 text-gray-400"><strong>Status:</strong> {status}</p>
                    <p className="mt-4 text-gray-400"><strong>Technologies:</strong> {usedTechnology}</p>
                    <p className="mt-4 text-gray-400"><strong>Platforms:</strong> {targetedPlatform}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;