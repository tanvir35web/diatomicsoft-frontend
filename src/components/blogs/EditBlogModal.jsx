import { useState } from 'react';
import { toast } from 'react-toastify';
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";



// Dynamically import ReactQuill to handle SSR issues with Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Define the Quill modules with header support
const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'font': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': [] }],
    ['link', 'image'],                                // add image support
    ['clean']                                         // remove formatting button
  ]
};

// Define the formats Quill can use
const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'blockquote', 'list', 'bullet', 'indent',
  'link', 'image', 'align', 'color', 'background'
];

const EditBlogModal = ({ isOpen, onClose, blog, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: blog._id,
    title: blog.title,
    description: blog.description,
    author: blog.author,
    tags: blog.tags,
  });
  const [description, setDescription] = useState(blog.description); // Initialize with blog's description


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // No need for FormData here unless you handle file uploads
    const updatedData = {
      id: formData.id,
      title: formData.title,
      description: description,
      author: formData.author,
      tags: formData.tags,
    };

    onSubmit(updatedData)  // Pass the plain object
        .then(() => {
          toast.success(`${formData.title} updated successfully`);
          onClose();  // Close modal on success
        })
        .catch((error) => {
          toast.error('Failed to update project.');
          console.error(error);
        });
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-7xl h-[90%] w-full">
        <h2 className="text-2xl mb-4">Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Title</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-slate-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                  style={{ height: "350px", width: "100%" }}
                  modules={modules} // Add the modules to enable headers
                  formats={formats} // Add the formats to support headers
              />
            </div>
          </div>

          <div className="mb-4 mt-12">
            <label className="block text-sm font-medium text-gray-400">Author</label>
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Tags</label>
            <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;
