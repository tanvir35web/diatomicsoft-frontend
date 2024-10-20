"use client";

import Image from "next/image";
import useFetchProjects from "@/hooks/useFetchProjects";
import {blogSelector, fetchBlogs} from "@/store/slices/blogSlices";
import {useFetchData} from "@/hooks/useFetchData";
import {fetchReviews, reviewsSelector} from "@/store/slices/reviewSlice";

export default function Admin() {
    const { projects } = useFetchProjects();

    const { data: reviews } = useFetchData(fetchReviews, reviewsSelector);
    const reviewsData = reviews?.data;

    const { data: blogs } = useFetchData(fetchBlogs, blogSelector);
    const blogsData = blogs?.data;


    return (
      <div className="p-6">
          <h1 className="text-3xl font-bold px-3">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              <div
                  className="bg-slate-900 p-3 lg:p-6 m-2 rounded-xl border border-gray-800 flex flex-col gap-4 h-[200px] relative">
                  <div className=" ">
                      <Image src="/stock-images/blog-icon.png" alt="3d-digital-image" width={50} height={50}></Image>
                  </div>
                  <p className="text-md -mt-1 text-gray-300 ">Number of blogs</p>
                  <p className="text-3xl font-bold ">{blogsData && blogsData?.length && (blogsData.length < 10 ? `0${blogsData.length}` : blogsData.length ) || 0}</p>
              </div>

              <div

                  className="bg-slate-900 p-3 lg:p-6 m-2 rounded-xl border border-gray-800 flex flex-col gap-4 h-[200px]">
                  <div className=" ">
                      <Image src="/stock-images/project-icon.png" alt="3d-digital-image" width={50} height={50}></Image>
                  </div>
                  <p className="text-md -mt-1 text-gray-300 ">Number of Projects</p>
                  <p className="text-3xl font-bold ">{projects && projects?.length && (projects.length < 10 ? `0${projects.length}` : projects.length ) || 0}</p>
              </div>

              <div
                  className="bg-slate-900 p-3 lg:p-6 m-2 rounded-xl border border-gray-800 flex flex-col gap-4 h-[200px]">
                  <div className=" ">
                      <Image src="/stock-images/rating-icon.png" alt="3d-digital-image" width={50} height={50}></Image>
                  </div>
                  <p className="text-md -mt-1 text-gray-300 ">Number of Reviews</p>
                  <p className="text-3xl font-bold ">{reviewsData && reviewsData?.length && (reviewsData.length < 10 ? `0${reviewsData.length}` : reviewsData.length ) || 0}</p>
              </div>
          </div>

          <div className="mt-10 px-3">
              <p className="text-gray-500">Here will be some charts and contact us form data ... </p>
          </div>

      </div>
  );
}
