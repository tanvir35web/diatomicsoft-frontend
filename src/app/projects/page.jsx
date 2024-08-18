"use client"

import { fetchData } from "@/store/slices/projectSlices";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {

  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.project);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const projectData = data.data;

  console.log(projectData);


  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black p-5 text-center">Current Projects</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error.message}</p>}
      <div className="flex gap-6 justify-center flex-wrap container m-auto">
        { projectData && projectData.map((project) => (
          <div key={project.id} className="bg-gray-200 cursor-pointer duration-200 border hover:border-blue-600 p-3 rounded-lg w-[600px] mt-8" >
            <Image src={project.coverImageURL} height={600} width={800} alt={project.title + " image"} className="w-full h-80 object-cover rounded-t-md" />
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
