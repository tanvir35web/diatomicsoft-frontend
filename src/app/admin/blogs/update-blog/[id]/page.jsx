// "use client"; // Ensure this is a client component
// import BlogForm from "@/app/admin/blogs/create-blog/page"; // Import your BlogForm component
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios"; // Import axios
//
// const UpdateBlogPage = () => {
//     const pathname = usePathname(); // Get the current path
//     const [blogId, setBlogId] = useState('');
//     const [blogData, setBlogData] = useState(null); // State to hold the blog data
//
//     useEffect(() => {
//         // Extract the blog ID from the full pathname
//         const pathSegments = pathname.split('/');
//         const extractedId = pathSegments[pathSegments.length - 1];
//         setBlogId(extractedId);
//     }, [pathname]);
//
//     useEffect(() => {
//         if (blogId) {
//             // Fetch blog data using axios
//             async function fetchData() {
//                 try {
//                     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${blogId}`);
//                     setBlogData(response.data.data); // Store the fetched data in the state
//                 } catch (error) {
//                     console.error('Error fetching blog:', error);
//                 }
//             }
//             fetchData(); // Invoke the fetchData function
//         }
//     }, [blogId]); // Depend on blogId so it runs when blogId changes
//     console.log("blogData", blogData)
//
//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-gray-200 p-5">Update your Blog</h1>
//             {/* Pass the fetched blog data to the BlogForm */}
//             {blogData ? (
//                 <BlogForm initialData={blogData} _id={blogId} />
//             ) : (
//                 <p>Loading blog data...</p>
//             )}
//         </div>
//     );
// };
//
// export default UpdateBlogPage;
