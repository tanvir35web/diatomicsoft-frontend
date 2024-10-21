// import { useState } from 'react';
// import { toast } from 'react-toastify';
//
// const EditProjectModal = ({ isOpen, onClose, project, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     id: project._id,
//     title: project.title,
//     description: project.description,
//     targetedPlatform: project.targetedPlatform,
//     usedTechnology: project.usedTechnology,
//     status: project.status
//   });
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     // No need for FormData here unless you handle file uploads
//     const updatedData = {
//       id: formData.id,
//       title: formData.title,
//       description: formData.description,
//       targetedPlatform: formData.targetedPlatform,
//       usedTechnology: formData.usedTechnology,
//       status: formData.status
//     };
//
//   // Call the passed onSubmit function with updated formData
//   onSubmit(updatedData)
//     .then(() => {
//       toast.success(`${formData.title} updated successfully`);
//       onClose(); // Close modal on success
//     })
//     .catch((error) => {
//       toast.error('Failed to update project.');
//       console.error(error);
//     });
// };
//
//   if (!isOpen) return null;
//
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm ">
//       <div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-7xl h-[90%] w-full border border-gray-800">
//         <h2 className="text-2xl mb-4">Edit Project</h2>
//         <form onSubmit={handleSubmit} >
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-400">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-slate-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-400">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows={7}
//               className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-400">Targeted Platform</label>
//             <input
//               type="text"
//               name="targetedPlatform"
//               value={formData.targetedPlatform}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-400">Used Technology</label>
//             <input
//               type="text"
//               name="usedTechnology"
//               value={formData.usedTechnology}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-400">Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="pending">Pending</option>
//               <option value="inProgress">In Progress</option>
//               <option value="completed">Completed</option>
//             </select>
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-400">Image</label>
//             <input
//               type="file"
//               name="image"
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mr-2"
//             >
//               Cancel
//             </button>
//             <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
//
// export default EditProjectModal;



import { useState } from 'react';
import { toast } from 'react-toastify';

const EditProjectModal = ({ isOpen, onClose, project, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: project._id,
    title: project.title,
    description: project.description,
    targetedPlatform: project.targetedPlatform,
    usedTechnology: project.usedTechnology,
    status: project.status,
    image: null, // Add image field to state
  });

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });  // Update state with selected image file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use FormData to handle file uploads and form data
    const updatedData = new FormData();
    updatedData.append('id', formData.id);
    updatedData.append('title', formData.title);
    updatedData.append('description', formData.description);
    updatedData.append('targetedPlatform', formData.targetedPlatform);
    updatedData.append('usedTechnology', formData.usedTechnology);
    updatedData.append('status', formData.status);

    if (formData.image) {
      updatedData.append('coverImage', formData.image);  // Append image file if it exists
    }

    // Call the passed onSubmit function with FormData
    onSubmit(updatedData)
        .then(() => {
          toast.success(`${formData.title} updated successfully`);
          onClose(); // Close modal on success
        })
        .catch((error) => {
          toast.error('Failed to update project.');
          console.error(error);
        });
  };

  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm ">
        <div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-7xl h-[90%] w-full border border-gray-800">
          <h2 className="text-2xl mb-4">Edit Project</h2>
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
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Description</label>
              <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={7}
                  className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Targeted Platform</label>
              <input
                  type="text"
                  name="targetedPlatform"
                  value={formData.targetedPlatform}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Used Technology</label>
              <input
                  type="text"
                  name="usedTechnology"
                  value={formData.usedTechnology}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Status</label>
              <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="pending">Pending</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400">Image</label>
              <input
                  type="file"
                  name="coverImage"
                  onChange={handleImageChange}  // Capture file input change
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

export default EditProjectModal;
