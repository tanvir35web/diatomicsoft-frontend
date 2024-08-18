"use client"

import { fetchData } from "@/store/slices/projectSlices";
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

  console.log(data);


  return (
    // <div>
    //   <h1 className="text-3xl font-bold text-black p-10 text-center">Current Projects</h1>
    //   <div className="flex gap-3 justify-center flex-wrap container m-auto">
    //     {projectData.data.map((project) => (
    //       <div key={project.id} className="bg-gray-200 p-3 rounded-lg max-w-72 mt-24">
    //         <Image src={project.coverImageURL} height={100} width={200} alt={project.title + " image"} className="w-full h-48 object-cover rounded-t-md" />
    //         <div className="p-4">
    //           <h1 className="text-2xl font-bold">{project.title}</h1>
    //           <p className="mt-2 text-gray-600">{project.description}</p>
    //           <p className="mt-4 text-gray-800"><strong>Status:</strong> {project.status}</p>
    //           <p className="mt-4 text-gray-800"><strong>Technologies:</strong> {project.usedTechnology}</p>
    //           <p className="mt-4 text-gray-800"><strong>Platforms:</strong> {project.targetedPlatform}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          <p>fetched successfully</p>

          {data.data.map(item => (

            <li key={item.id}>{item.clientName}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  );
}
