"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/store/slices/blogSlices";
import { useEffect } from "react";

const Blog = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.blogs);

  // Fetch blogs when the component mounts and status is idle
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  const blogs = data?.data;

  console.log('Blogs', blogs);
  

  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-center pb-10">This is the blog section</p>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => <div className="p-2 bg-slate-800 mb-2 rounded" key={blog.id}>{blog.title}</div>
    )
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default Blog;
