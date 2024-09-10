import useFetchProjects from "@/hooks/useFetchProjects";
import ProjectCard from "./projectCard";

const LatestProjectSection = () => {

  const { projects, status, error } = useFetchProjects();


  return (
    <>
      <div>
        <h1 className="text-6xl font-bold text-grbg-gray-300 p-5 text-center">Our Recent Projects</h1>
        <p className="text-center text-gray-400 max-w-[800px] mx-auto mb-6">Explore our innovative solutions crafted with cutting-edge technologies. From dynamic web applications to modern software systems, each project showcases our commitment to excellence and innovation.</p>
        
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error.message}</p>}

        <div className="flex gap-20 justify-center flex-wrap container m-auto">
          {projects && projects.slice(1, 13).map((project) => (
            <ProjectCard
              coverImage={project.coverImageURL}
              id={project.id}
              title={project.title}
              description={project.description}
              status={project.status}
              usedTechnology={project.usedTechnology}
              targetedPlatform={project.targetedPlatform}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default LatestProjectSection; 