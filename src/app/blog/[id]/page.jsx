"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/store/slices/blogSlices";
import formatDate from "@/utils/formatDate";

const BlogPost = ({ params }) => {
    const { id } = params; // Get the ID from params
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.blogs);

    const [blog, setBlog] = useState(null); // State to hold the specific blog post

    // Fetch blogs when the component mounts and status is idle
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBlogs());
        }
    }, [status, dispatch]);

    useEffect(() => {
        // Check if blogs data is available and set the specific blog based on ID
        if (data && data.data) {
            const foundBlog = data.data.find((b) => b._id === id); // Assuming _id is the unique identifier
            setBlog(foundBlog);
        }
    }, [data, id]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;
    if (!blog) return <p>Blog post not found.</p>; 

    return (
        <>
            <Head>
                <title>{blog.title} - My Blog</title>
                <meta name="description" content={blog.description} />
            </Head>
            <div className="container m-auto mt-8 p-4">
                <h1 className="text-4xl font-bold">{blog.title}</h1>
                <div className="flex justify-between mt-2" >
                    <p className="mt-2 text-gray-400">Author: {blog.author}</p>
                    <p className="mt-2 text-gray-400">Date: {formatDate(blog.createdAt)}</p>
                </div>
                <p className="mt-10 text-justify">{blog.description}</p>
            </div>
        </>
    );
};

export default BlogPost;
