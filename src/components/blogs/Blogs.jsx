"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/store/slices/blogSlices";
import { useEffect } from "react";
import BlogsCard from "./BlogsCard";
import { useRouter } from "next/navigation";

const Blogs = () => {
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

    console.log('Blogs', blogs);


    return (
        <div className="p-4 mt-16">
            <p className="text-5xl font-bold text-center pb-10">This is the blog section</p>
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

            <div className="text-center my-6">
                {blogs && blogs.length && (
                    <button onClick={() => router.push("/blog")}  className="text-center border border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-800 duration-150">View All Blogs</button>
                )}
            </div>

        </div>
    );
};

export default Blogs;
