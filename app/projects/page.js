"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await fetch("https://diatomicsoft-backend-api.vercel.app/api/projects");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Failed to fetch project data:", error);
      }
    }

    fetchProject();
  }, []);

  console.log("projectData", projectData);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-black p-10 text-center">Current Projects</h1>
      <div className="flex gap-3 justify-center flex-wrap container m-auto">
        {projectData.data.map((project) => (
          <div key={project.id} className="bg-gray-200 p-3 rounded-lg max-w-72 mt-24">
            <Image src={project.coverImageURL} height={100} width={200} alt={project.title + " image"} className="w-full h-48 object-cover rounded-t-md" />
            <div className="p-4">
              <h1 className="text-2xl font-bold">{project.title}</h1>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <p className="mt-4 text-gray-800"><strong>Status:</strong> {project.status}</p>
              <p className="mt-4 text-gray-800"><strong>Technologies:</strong> {project.usedTechnology}</p>
              <p className="mt-4 text-gray-800"><strong>Platforms:</strong> {project.targetedPlatform}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
