"use client"
import ProjectForm from "@/components/project/ProjectForm";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectCardAdmin from "@/components/projects/ProjectCardAdmin";
import useFetchProjects from "@/hooks/useFetchProjects";
import { useState } from "react";



const Project = () => {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] = useState(false);
  const { projects, status, error } = useFetchProjects();

  const handleCreateProjectModalOpen = () => {
    setIsCreateProjectModalOpen(true);
  }

  return (
    <div className="py-4">

      {/* all projects view edit and delete */}

      <div className="p-4 pt-8">
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error.message}</p>}

        <div className="flex gap-10 justify-center flex-wrap container">
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

      <div className="py-10 px-20">
        <button onClick={handleCreateProjectModalOpen} className="bg-green-900 hover:bg-transparent duration-200 border border-green-900 px-4 py-2 rounded w-full" >Create new project</button>
      </div>
      {isCreateProjectModalOpen && <ProjectForm />}
    </div>
  )
}
export default Project;