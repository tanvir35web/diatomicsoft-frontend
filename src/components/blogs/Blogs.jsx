"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/store/slices/blogSlices";
import { useEffect } from "react";
import BlogsCard from "./BlogsCard";
import { useRouter } from "next/navigation";

const Blogs = () => {
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
        <div className="p-0 lg:p-4 mt-16">
            <div className="flex justify-center gap-2 flex-wrap"> {blogs && blogs.length > 0 ? (
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
    );
};

export default Blogs;
