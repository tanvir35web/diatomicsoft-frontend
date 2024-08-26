import { submitProjectForm } from "@/store/slices/projectSlices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

const ProjectForm = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.projectForm);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectStatus, setProjectStatus] = useState("active");
  const [usedTechnology, setUsedTechnology] = useState("");
  const [targetedPlatform, setTargetedPlatform] = useState("");
  const [errors, setErrors] = useState({});


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file); // Store the file itself
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (imageFile) {
      console.log("cover-img", imageFile);
      
      formData.append('coverImage', imageFile);
    }
    formData.append('title', title);
    formData.append('description', description);
    formData.append('projectStatus', projectStatus);
    formData.append('usedTechnology', usedTechnology);
    formData.append('targetedPlatform', targetedPlatform);

      // Dispatch the submitProjectForm action
      dispatch(submitProjectForm(formData))
      .unwrap()
      .then(() => {
        // Reset form on success
        setSelectedImage(null);
        setImageFile(null);
        setTitle('');
        setDescription('');
        setProjectStatus('active');
        setUsedTechnology('');
        setTargetedPlatform('');
        setErrors({});
        toast.success('Project Submitted Successfully');
      })
      .catch((err) => {
        if (err.errors && Object.keys(err.errors).length > 0) {
          setErrors(err.errors);
        } else {
          setErrors({ submit: 'There was an error submitting the form. Please try again later.' });
          toast.error('There was an error submitting the form. Please try again');
        }
      });

  };

 



  return (
    <div className="flex items-center justify-center w-full pt-10">
      <form onSubmit={handleOnSubmit} enctype="multipart/form-data"  className="flex flex-col w-[800px] bg-gray-200 p-5 md:p-8 m-auto gap-5 rounded-2xl shadow">
        <p className="text-3xl font-bold pb-2">Project Form</p>

        <div className="flex flex-col gap-1 w-full py-4">
          <label
            htmlFor="coverImage"
            className="text-gray-700 mb-2 font-semibold text-lg"
          >
            Profile Photo
          </label>
          <div className="flex items-center">
            <label
              htmlFor="coverImage"
              className="relative cursor-pointer rounded-full bg-blue-500 text-white hover:bg-blue-600 p-1 flex items-center justify-center w-24 h-24 overflow-hidden"
            >
              {selectedImage ? (
                <Image src={selectedImage} alt="Profile Preview" width={400} height={400} className="w-full h-full object-cover rounded-full" />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs">Upload Photo</span>
                </span>
              )}
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                className="absolute inset-0 opacity-0 cursor-pointer"
                // required
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <p className="ml-4 text-sm text-gray-600">PNG or JPG up to 5MB</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="title">Title</label>
          <input
            className={`outline-none bg-gray-50 px-4 py-2 rounded-md ${errors.title ? 'border-red-500' : ''}`}
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}

          />
          {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title[0]}</div>}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="description">Description</label>
          <textarea className="outline-none bg-gray-50 px-4 py-2 rounded-md h-28"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description[0]}</p>}

        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="projectStatus">projectStatus</label>
          <select className="outline-none bg-gray-50 px-2 py-4 rounded-md" id="projectStatus" name="projectStatus" value={projectStatus} onChange={(e) => setProjectStatus(e.target.value)} >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.projectStatus && errors.projectStatus.map((error, index) => (
            <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
          ))}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="usedTechnology">Used Technologies</label>
          <input className="outline-none bg-gray-50 px-4 py-2 rounded-md"
            type="text"
            id="usedTechnology"
            name="usedTechnology"
            value={usedTechnology}
            onChange={(e) => setUsedTechnology(e.target.value)}
          />
          {errors.usedTechnology && <p className="text-red-500 text-sm mt-1">{errors.usedTechnology[0]}</p>}

        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="targetedPlatform">Targeted Platform</label>
          <input className="outline-none bg-gray-50 px-4 py-2 rounded-md"
            type="text"
            id="targetedPlatform"
            name="targetedPlatform"
            value={targetedPlatform}
            onChange={(e) => setTargetedPlatform(e.target.value)}
          />
          {errors.targetedPlatform && <p className="text-red-500 text-sm mt-1">{errors.targetedPlatform[0]}</p>}
        </div>

         <div className="flex gap-2 justify-between w-full mt-4">
          <button className="w-full hover:to-red-900 px-4 py-4 rounded-md text-white bg-red-700" type="reset">Reset</button>
          <button
            className="w-full bg-blue-600 hover:to-blue-900 px-4 py-2 rounded-md text-white"
            type="submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        <Link href="/projects">
          <p className="ml-10 text-center underline text-blue-500 mt-6">Back to Projects</p>
        </Link>
      </form>
    </div>
  );
};

export default ProjectForm;
