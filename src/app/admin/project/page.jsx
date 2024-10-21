"use client"
import ProjectCardAdmin from "@/components/projects/ProjectCardAdmin";
import useFetchProjects from "@/hooks/useFetchProjects";
import {useRouter} from "next/navigation";

const Project = () => {
  const { projects, status, error } = useFetchProjects();
  const router = useRouter()

  return (
    <div className="py-3">

      {/* all projects view edit and delete */}

        <div className="p-4 pt-3 pl-6 min-h-[80vh]">
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error.message}</p>}

            <div className="flex gap-6 justify-start flex-wrap container ">
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

            <div className="fixed bottom-10 right-10">
                <button
                    className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded border border-slate-700 duration-150"
                    onClick={() => router.push('/admin/project/create-new-project')}>
                    + Create a new Project
                </button>
            </div>
        </div>
    </div>
  )
}
export default Project;