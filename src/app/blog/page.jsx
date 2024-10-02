"use client"
import BlogsCard from "@/components/blogs/BlogsCard";
import { fetchBlogs } from "@/store/slices/blogSlices";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const router = useRouter();
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

  return (

    <div>
      <p className="text-5xl font-bold text-center mt-6 pb-10">This is the blog section</p>
      <div className="flex  justify-center gap-2"> {blogs && blogs.length > 0 ? (
        blogs.map((blog) =>
          <BlogsCard
            key={blog.id}
            bolgImage={blog.bolgImage}
            title={blog.title}
            description={blog.description}
            tags={blog.tags}
            author={blog.author}
          />
        )
      ) : (
        <p>No blogs available</p>
      )} </div>
    </div>
  )
}

export default Blog;