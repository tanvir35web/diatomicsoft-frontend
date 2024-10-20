import { useEffect, useState } from 'react';
import { CgMoreVerticalAlt } from 'react-icons/cg';
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteProject, editProject } from "@/store/slices/projectSlices";
import Image from "next/image";
import EditProjectModal from './EditProjectModal';


const ProjectCardAdmin = ({ completeProject, coverImage, id, title, description, status, usedTechnology, targetedPlatform }) => {

  const [isThreeDotMenuOpen, setIsThreeDotMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const dispatch = useDispatch();

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
    dispatch(deleteProject(id));
    setIsThreeDotMenuOpen(false);
    toast.success(`${title} deleted successfully`);
  };

  const handleEditProject = (updatedProject) => {
    return dispatch(editProject(updatedProject));
  };



  const openModal = () => {
    setIsModalOpen(true);
    setIsThreeDotMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        <div className="absolute hover:bg-gray-800 duration-150 rounded-full p-1 bottom-4 right-3 three-dot-menu">
          <CgMoreVerticalAlt size={24} onClick={handleThreeDotMenuClick} />
          {isThreeDotMenuOpen && (
            <div className="dropdown-menu w-[150px] absolute right-2 top-full bg-slate-900 border border-gray-600 rounded-xl shadow-md p-2 z-20">
              <button
                onClick={openModal}
                className="text-start w-full px-2 py-2 text-gray-300 hover:bg-gray-800 duration-150 rounded-lg flex flex-row items-center gap-2"
              >
                <FaUserEdit />
                Edit
              </button>
              <button
                className="text-start w-full px-2 py-2 text-gray-300 hover:bg-red-800 duration-150 rounded-lg flex flex-row items-center gap-2"
                onClick={() => handleDelete(id)}
              >
                <MdDelete />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Modal component */}
      <EditProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={completeProject}
        onSubmit={handleEditProject} 
      />
    </>
  );
};

export default ProjectCardAdmin;
