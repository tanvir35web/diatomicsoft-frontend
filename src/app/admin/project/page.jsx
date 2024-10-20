"use client"
import ProjectCardAdmin from "@/components/projects/ProjectCardAdmin";
import useFetchProjects from "@/hooks/useFetchProjects";

const Project = () => {
  const { projects, status, error } = useFetchProjects();

  return (
    <div className="py-4">

      {/* all projects view edit and delete */}

      <div className="p-4 pt-8 min-h-[80vh]">
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error.message}</p>}

        <div className="flex gap-10 justify-center flex-wrap container ">
          {projects && projects.map((project) => (
            <ProjectCardAdmin
              completeProject={project}
              key={project.id}
              coverImage={project.coverImageURL}
              id={project._id}
              title={project.title}
              description={project.description}
              status={project.status}
              usedTechnology={project.usedTechnology}
              targetedPlatform={project.targetedPlatform}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Project;