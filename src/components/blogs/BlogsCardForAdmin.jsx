import {CgMoreVerticalAlt} from "react-icons/cg";
import {FaUserEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {useState} from "react";
import {deleteProject} from "@/store/slices/projectSlices";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {deleteBlog} from "@/store/slices/blogSlices";

const BlogsCardForAdmin = ({ bolgImage, _id, title, description, author, tags }) => {

    const [isThreeDotMenuOpen, setIsThreeDotMenuOpen] = useState(false);
    const dispatch = useDispatch();


    const handleThreeDotMenuClick = (e) => {
        e.preventDefault();
        setIsThreeDotMenuOpen(prev => !prev);
    };

    const handleDelete = (id) => {
        dispatch(deleteBlog(id));
        setIsThreeDotMenuOpen(false);
        toast.success(`${title} deleted successfully`);
    };


    const tagSeperatedName = (tags) => {
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
            <div className="bg-slate-900  p-3 lg:p-6 m-2 rounded-lg w-[320px] lg:w-[500px] cursor-pointer relative">
                <p className="text-2xl font-semibold pb-4">{title}</p>
                <p className="text-sm pb-3 text-gray-300 text-justify">{description}</p>
                <p className="text-sm pb-4 text-gray-300"> Author: {author}</p>
                <p>{tagSeperatedName(tags)}</p>

                <div
                    className="absolute hover:bg-gray-800 duration-150 rounded-full p-1 bottom-4 right-3 three-dot-menu">
                    <CgMoreVerticalAlt size={24} onClick={handleThreeDotMenuClick}/>
                    {isThreeDotMenuOpen && (
                        <div
                            className="dropdown-menu w-[150px] absolute right-2 top-full bg-slate-900 border border-gray-600 rounded-xl shadow-md p-2 z-20">
                            <button
                                // onClick={openModal}
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
        </>
    )
}

export default BlogsCardForAdmin;