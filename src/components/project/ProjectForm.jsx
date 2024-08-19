import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [usedTechnology, setUsedTechnology] = useState("");
  const [targetedPlatform, setTargetedPlatform] = useState("");

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
    formData.append('coverImage', imageFile);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('status', status);
    formData.append('usedTechnology', usedTechnology);
    formData.append('targetedPlatform', targetedPlatform);

    

    try {
      const response = await fetch('https://diatomicsoft-backend-api.vercel.app/api/projects', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // console.log('FormData:', formData);

        //reset full form data
        setSelectedImage(null);
        setImageFile(null);
        setTitle('');
        setDescription('');
        setStatus('active');
        setUsedTechnology('');
        setTargetedPlatform('');
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
                required
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
            className="outline-none bg-gray-50 px-4 py-2 rounded-md"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="description">Description</label>
          <textarea className="outline-none bg-gray-50 px-4 py-2 rounded-md h-28" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="status">Status</label>
          <select className="outline-none bg-gray-50 px-2 py-4 rounded-md" id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="usedTechnology">Used Technologies</label>
          <input className="outline-none bg-gray-50 px-4 py-2 rounded-md" type="text" id="usedTechnology" name="usedTechnology" value={usedTechnology} onChange={(e) => setUsedTechnology(e.target.value)} required />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-semibold text-lg" htmlFor="targetedPlatform">Targeted Platform</label>
          <input className="outline-none bg-gray-50 px-4 py-2 rounded-md" type="text" id="targetedPlatform" name="targetedPlatform" value={targetedPlatform} onChange={(e) => setTargetedPlatform(e.target.value)} required />
        </div>

        <div className="flex gap-2 justify-between w-full mt-4">
          <button className="w-full hover:to-red-900 px-4 py-4 rounded-md text-white bg-red-700" type="reset">Reset</button>
          <button className="w-full bg-blue-600 hover:to-blue-900 px-4 py-2 rounded-md text-white" type="submit">Submit</button>
        </div>

        <Link href="/projects">
          <p className="ml-10 text-center underline text-blue-500 mt-6">Back to Projects</p>
        </Link>
      </form>
    </div>
  );
};

export default ProjectForm;
