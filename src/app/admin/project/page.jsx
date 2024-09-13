"use client"
import ProjectForm from "@/components/project/ProjectForm";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectCardAdmin from "@/components/projects/ProjectCardAdmin";
import useFetchProjects from "@/hooks/useFetchProjects";



const Project = () => {
  const { projects, status, error } = useFetchProjects();
  
  return (
    <>

    {/* all projects view edit and delete */}

    <div className="p-4">        
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error.message}</p>}

        <div className="flex gap-10 justify-center flex-wrap container m-auto">
          {projects && projects.map((project) => (
            <ProjectCardAdmin
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



      {/* <ProjectForm />  */}
    </>
  )
}
export default Project;