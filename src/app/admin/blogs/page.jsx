"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/store/slices/blogSlices";
import { useEffect } from "react";
import BlogsCardForAdmin from "@/components/blogs/BlogsCardForAdmin";
import {useRouter} from "next/navigation";

const Blog = () => {
  const dispatch = useDispatch();
  const router = useRouter();
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


  return (
      <>
        <div className="min-h-[80vh]">
          <div className="p-4 flex flex-wrap">
            {blogs && blogs.length > 0 ? (
                blogs.map((blog) => <BlogsCardForAdmin fullBlog={blog} key={blog._id} {...blog} />
                )
            ) : (
                <p>No blogs available</p>
            )}
          </div>
        </div>

        <div className="fixed bottom-10 right-10">
          <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded border border-slate-700 duration-150" onClick={() => router.push('/admin/blogs/create-blog')}>
            +  Create a new Blog
          </button>
        </div>
      </>

  );
};

export default Blog;
