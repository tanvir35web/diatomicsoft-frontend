"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/store/slices/blogSlices";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import DOMPurify from 'dompurify';


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

    const [sanitizedContent, setSanitizedContent] = useState('');

    useEffect(() => {
        // Sanitize only on the client-side after mounting
        if (typeof window !== 'undefined') {
            setSanitizedContent(DOMPurify.sanitize(blog?.description));
        }
    }, [blog?.description]);

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
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold">{blog.title}</h1>
                <div className="flex justify-between mt-2">
                    <p className="mt-2 text-gray-400 text-sm md:text-lg ">Author: {blog.author}</p>
                    <p className="mt-2 text-gray-400 text-sm md:text-lg">{formatDate(blog.createdAt)}</p>
                </div>

                <div className="relative mt-10 w-full md:w-[800px] lg:w-[1510px] h-[140px] lg:h-[600px] p-4">
                    <Image
                        src={blog.blogImage}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 800px) 100vw, 800px"
                        quality={100}
                        className="object-cover rounded-xl"
                    />
                </div>

                <div
                    className="prose prose-sm md:prose-lg mt-10 text-justify w-full max-w-none"
                    dangerouslySetInnerHTML={{__html: sanitizedContent}}
                ></div>


            </div>
        </>
    );
};

export default BlogPost;
