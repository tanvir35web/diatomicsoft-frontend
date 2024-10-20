// "use client";
//
// import {toast} from "react-toastify";
// import {useDispatch, useSelector} from "react-redux";
// import {createBlog} from "@/store/slices/blogSlices";
//
// const CreateBlog = () => {
//
//     const dispatch = useDispatch();
//     const { isLoading, successMessage, errorMessage } = useSelector((state) => state.blogCreate);
//
//
//     // Form submission handler
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //
//     //     // Collect form data
//     //     const formData = {
//     //         title: e.target.title.value,
//     //         description: e.target.description.value,
//     //         author: e.target.author.value,
//     //         tags: e.target.tags.value,
//     //     };
//     //
//     //     console.log(formData); // Log formData to ensure it is correct
//     //
//     //     try {
//     //         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`, formData, {
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //         });
//     //         alert("Blog created successfully!");
//     //     } catch (error) {
//     //         console.error('Error details:', error);
//     //         alert(`Error: ${error.message}`);
//     //     }
//     // };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         // Create a new FormData object
//         const formData = new FormData();
//
//         // Append the text fields
//         formData.append('title', e.target.title.value);
//         formData.append('description', e.target.description.value);
//         formData.append('author', e.target.author.value);
//         formData.append('tags', e.target.tags.value);
//
//         // Append the image (if any)
//         const imageFile = e.target.image.files[0]; // Get the selected file from the input
//         if (imageFile) {
//             formData.append('image', imageFile); // Append image to formData
//         }
//
//         dispatch(createBlog(formData));
//
//     };
//
//     console.log("success: ", successMessage);
//
//     if (successMessage) {
//         toast.success("Successfully created blog");
//     } else{
//         toast.error(errorMessage);
//     }
//
//
//     return (
//         <div className="p-10 pl-32 w-full m-auto h-full">
//             <p className="text-3xl font-bold">Create a new Blog</p>
//
//             {/* Create a new Blog Form */}
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 max-w-[60%]">
//                 <div className="mt-8">
//                     <label className="block" htmlFor="title">Title</label>
//                     <input
//                         className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
//                         type="text" name="title" id="title" required/>
//                 </div>
//                 <div>
//                     <label className="block" htmlFor="description">Description</label>
//                     <textarea
//                         className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
//                         name="description" id="description" cols="30" rows="10" required></textarea>
//                 </div>
//                 <div>
//                     <label className="block" htmlFor="author">Author</label>
//                     <input
//                         className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
//                         type="text" name="author" id="author" required/>
//                 </div>
//                 <div>
//                     <label className="block" htmlFor="tags">Tags</label>
//                     <input
//                         className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
//                         type="text" name="tags" id="tags" required/>
//                 </div>
//                 <div>
//                     <label className="block" htmlFor="image">Image</label>
//                     <input
//                         className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
//                         type="file" name="image" id="image" accept="image/*"/>
//                 </div>
//
//                 <button
//                     className="bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600 hover:bg-slate-700"
//                     type="submit"
//                     disabled={isLoading}
//                 >
//                     {isLoading ? 'Creating...' : 'Create'}
//                 </button>
//             </form>
//
//
//         </div>
//     );
// };
//
// export default CreateBlog;


"use client";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "@/store/slices/blogSlices";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill to handle SSR issues with Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Add the code-block support to the Quill toolbar
const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'header': [3, false] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],  // Add code block option
        ['link', 'image'],
        [{ 'align': [] }],
        [{ 'color': [] }, { 'background': [] }],
        ['clean'] // remove formatting button
    ]
};

const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block', 'list', 'bullet',
    'link', 'image', 'align', 'color', 'background'
];

const CreateBlog = () => {
    const dispatch = useDispatch();
    const { isLoading, successMessage, errorMessage } = useSelector((state) => state.blogCreate);

    const [description, setDescription] = useState(""); // State for Quill editor


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formData = new FormData();

        // Append the text fields
        formData.append("title", e.target.title.value);
        formData.append("description", description); // Use the Quill editor value
        formData.append("author", e.target.author.value);
        formData.append("tags", e.target.tags.value);

        // Append the image (if any)
        const imageFile = e.target.image.files[0]; // Get the selected file from the input
        if (imageFile) {
            formData.append("image", imageFile); // Append image to formData
        }

        dispatch(createBlog(formData));
    };

    console.log("success: ", successMessage);

    if (successMessage) {
        toast.success("Successfully created blog");
    } else {
        toast.error(errorMessage);
    }

    return (
        <div className="p-10 pl-32 w-full m-auto h-full">
            <p className="text-3xl font-bold">Create a new Blog</p>

            {/* Create a new Blog Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 max-w-[60%]">
                <div className="mt-8">
                    <label className="block" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
                        type="text"
                        name="title"
                        id="title"
                        required
                    />
                </div>
                <div>
                    <label className="block" htmlFor="description">
                        Description
                    </label>
                    <div style={{width: '100%'}}>
                        <ReactQuill
                            theme="snow"
                            value={description} // Ensure the editor value is set to the description state
                            onChange={setDescription} // Update the description state on editor change
                            className="bg-slate-800 text-white mt-2 rounded outline-none border border-transparent focus:border-slate-600"
                            style={{height: "350px", width: "100%"}}
                            modules={modules} // Add the modules to enable headers
                            formats={formats} // Add the formats to support headers
                        />
                    </div>
                </div>
                <div className="mt-12">
                    <label className="block" htmlFor="author">
                        Author
                    </label>
                    <input
                        className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
                        type="text"
                        name="author"
                        id="author"
                        required
                    />
                </div>
                <div>
                    <label className="block" htmlFor="tags">
                        Tags
                    </label>
                    <input
                        className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
                        type="text"
                        name="tags"
                        id="tags"
                        required
                    />
                </div>
                <div>
                    <label className="block" htmlFor="image">
                        Image
                    </label>
                    <input
                        className="block w-full bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                    />
                </div>

                <button
                    className="bg-slate-800 p-2 mt-2 rounded outline-none border border-transparent focus:border-slate-600 hover:bg-slate-700"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Creating..." : "Create"}
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
