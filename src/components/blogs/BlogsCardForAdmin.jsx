import {CgMoreVerticalAlt} from "react-icons/cg";
import {FaUserEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {useState} from "react";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {deleteBlog, updateBlog} from "@/store/slices/blogSlices";
import {useRouter} from "next/navigation";
import {editProject} from "@/store/slices/projectSlices";
import EditBlogModal from "@/components/blogs/EditBlogModal";
import axios from "axios";

const BlogsCardForAdmin = ({ bolgImage, fullBlog, _id, title, description, author, tags }) => {

    const [isThreeDotMenuOpen, setIsThreeDotMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();


    const handleThreeDotMenuClick = (e) => {
        e.preventDefault();
        setIsThreeDotMenuOpen(prev => !prev);
    };

    const handleDelete = (id) => {
        dispatch(deleteBlog(id));
        setIsThreeDotMenuOpen(false);
        toast.success(`${title} deleted successfully`);
    };


    const openModal = () => {
        setIsModalOpen(true);
        setIsThreeDotMenuOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleUpdateBlog = (updatedBlog) => {
        return dispatch(updateBlog(updatedBlog));
    };

    const renderTagSeperatedName = (tags) => {
        return (
            <div className="flex flex-wrap gap-5">
                {tags.map((tech, index) => {
                    const items = tech.split(',').map(item => item.trim());
                    return (
                        <div key={index} className="w-[400px] flex flex-wrap gap-2">
                            {items.map((item, i) => (
                                <span key={i} className="bg-blue-600-500 bg-slate-800 py-1 px-2 rounded text-sm">
                                    #{item}
                                </span>
                            ))}
                        </div>
                    );
                })}
            </div>
        )
    }
    return (
        <>
            <div className="bg-slate-900  p-3 lg:p-6 m-2 rounded-lg w-[320px] lg:w-[500px] cursor-pointer border border-gray-800 hover:border-gray-700 duration-150 relative">
                <p className="text-2xl font-semibold pb-4">{title}</p>
                {/* Render description using dangerouslySetInnerHTML */}
                <div
                    className="text-sm pb-3 text-gray-300 text-justify"
                    dangerouslySetInnerHTML={{ __html: description.slice(0,500) }}
                />
                <p className="text-sm pb-4 text-gray-300"> Author: {author}</p>
                <p>{renderTagSeperatedName(tags)}</p>

                <div
                    className="absolute hover:bg-gray-800 duration-150 rounded-full p-1 bottom-4 right-3 three-dot-menu">
                    <CgMoreVerticalAlt size={24} onClick={handleThreeDotMenuClick}/>
                    {isThreeDotMenuOpen && (
                        <div
                            className="dropdown-menu w-[150px] absolute right-2 top-full bg-slate-900 border border-gray-600 rounded-xl shadow-md p-2 z-20">
                            <button
                                onClick={openModal}
                                className="text-start w-full px-2 py-2 text-gray-300 hover:bg-gray-800 duration-150 rounded-lg flex flex-row items-center gap-2"
                            >
                                <FaUserEdit/>
                                Edit
                            </button>
                            <button
                                className="text-start w-full px-2 py-2 text-gray-300 hover:bg-red-800 duration-150 rounded-lg flex flex-row items-center gap-2"
                                onClick={() => handleDelete(_id)}
                            >
                                <MdDelete/>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <EditBlogModal
                isOpen={isModalOpen}
                onClose={closeModal}
                blog={fullBlog}
                onSubmit={handleUpdateBlog}
            />
        </>
    )
}

export default BlogsCardForAdmin;
