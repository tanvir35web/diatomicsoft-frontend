// /blog/BlogPostClient.js (Client Component)

"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import DOMPurify from 'dompurify';

export default function BlogPostClient({ id }) {
  const [blog, setBlog] = useState(null);
  const [sanitizedContent, setSanitizedContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog data for the specific ID
    // fetch(`http://localhost:8000/api/blogs/${id}`)
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data?.data);
        setSanitizedContent(DOMPurify.sanitize(data?.data?.description));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog post not found.</p>;
  

  return (
    <>
      <Head>
        <title>{blog.title} - My Blog</title>
        <meta name="description" content={blog.description} />
      </Head>
      <div className="container max-w-[1000px] m-auto mt-8 p-4">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold">{blog.title}</h1>
        <div className="flex justify-between mt-2">
          <p className="mt-2 text-gray-400 text-sm md:text-lg">Author: {blog.author}</p>
          <p className="mt-2 text-gray-400 text-sm md:text-lg">{formatDate(blog.createdAt)}</p>
        </div>

        <div className="relative mt-10 w-full lg:w-[980px] p-[2px]">
          <div className="relative w-full h-0 pb-[53%]">
            <Image
              src={blog.blogImage}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-lg md:rounded-[16px] lg:rounded-[24px]"
            />
          </div>
        </div>

        <div
          className="prose prose-sm md:prose-lg mt-10 text-justify w-full max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
      </div>
    </>
  );
}
