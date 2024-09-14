import { useState } from 'react';
import { toast } from 'react-toastify';

const EditProjectModal = ({ isOpen, onClose, project, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: project.title,
    description: project.description,
    targetedPlatform: project.targetedPlatform,
    usedTechnology: project.usedTechnology,
    status: project.status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // toast.success(`${project.title} edited successfully`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl mb-4">Edit Project</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data" >
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
