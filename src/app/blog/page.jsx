"use client";
import BlogsCard from "@/components/blogs/BlogsCard";
import { fetchBlogs } from "@/store/slices/blogSlices";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link"; // Import Link for navigation

const Blogs = () => {
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

  // Debugging: Log the blogs data
  console.log('Blogs:', blogs);

  return (
    <div>
      <p className="text-5xl font-bold text-center mt-6 pb-10">This is the blog section</p>
      <div className="flex justify-center gap-2 flex-wrap">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => {
            // Debugging: Log the blog ID
            console.log('Blog ID:', blog._id);

            return (
              <Link key={blog._id} href={`/blog/${blog._id}`}>
                <BlogsCard
                  bolgImage={blog.bolgImage}
                  title={blog.title}
                  description={blog.description}
                  tags={blog.tags}
                  author={blog.author}
                />
              </Link>
            );
          })
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
