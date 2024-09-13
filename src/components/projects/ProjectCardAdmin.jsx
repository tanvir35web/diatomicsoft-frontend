import { deleteProject } from "@/store/slices/projectSlices";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ProjectCardAdmin = ({ coverImage, id, title, description, status, usedTechnology, targetedPlatform }) => {
  const [isThreeDotMenuOpen, setIsThreeDotMenuOpen] = useState(false);

  // Accessing Redux state for error/status
  const { status: deleteStatus, error } = useSelector(state => state.project); 
  const dispatch = useDispatch(); // Moved useDispatch to the top level

  const handleThreeDotMenuClick = (e) => {
    e.preventDefault();
    setIsThreeDotMenuOpen(prev => !prev);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown-menu") && !e.target.closest(".three-dot-menu")) {
      setIsThreeDotMenuOpen(false);
    }
  };

  const handleDelete = (id) => {
    console.log("Deleting project with id:", id); // Debugging log
    dispatch(deleteProject(id)); // Dispatch the deleteProject thunk with the correct project ID
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (error) {
      console.error("Error occurred while deleting:", error);
    }
    if (deleteStatus === 'succeeded') {
      console.log("Project deleted successfully");
    }
  }, [error, deleteStatus]); // Watching for delete status and error

  return (
    <>
      <div key={id} className="bg-[#0E0F1D] relative bg-opacity-55 cursor-pointer duration-200 border border-gray-700 hover:border-blue-900 p-2 rounded-lg w-[300px]">
        <div className="relative w-full h-[150px]">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={`${title} image`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"   
              priority={true}           
              className="object-cover rounded-t-md"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 rounded-md"></div>
          )}
        </div>
        <div className="p-1">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="mt-2 text-gray-400 text-sm text-justify">
            {description.slice(0, 150)}
          </p>
          <p className="mt-4 pb-2 text-gray-400"><strong>Platforms:</strong> {targetedPlatform}</p>
        </div>
        <div className="absolute bottom-4 right-3 three-dot-menu">
          <CgMoreVerticalAlt size={24} onClick={handleThreeDotMenuClick} />
          {isThreeDotMenuOpen && (
            <div className="dropdown-menu w-[150px] absolute right-2 top-full bg-slate-900 border border-gray-600 rounded-md shadow-md p-2 z-20">
              <button
                className="text-start w-full px-2 py-2 text-gray-300 hover:bg-gray-800 duration-150 rounded flex flex-row items-center gap-2"
              >
                <FaUserEdit />
                Edit
              </button>
              <button
                className="text-start w-full px-2 py-2 text-gray-300 hover:bg-red-800 duration-150 rounded flex flex-row items-center gap-2"
                onClick={() => handleDelete(id)} // Pass the correct project ID
              >
                <MdDelete />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCardAdmin;
