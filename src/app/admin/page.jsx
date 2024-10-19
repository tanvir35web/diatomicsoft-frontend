"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Admin() {
  // const router = useRouter();
  //
  // const handleLogout = () => {
  //   document.cookie = "uidToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; SameSite=None";
  //   router.push('/admin/login');
  // }

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
                  <p className="text-3xl font-bold ">03</p>
              </div>

              <div

                  className="bg-slate-900 p-3 lg:p-6 m-2 rounded-xl border border-gray-800 flex flex-col gap-4 h-[200px]">
                  <div className=" ">
                      <Image src="/stock-images/project-icon.png" alt="3d-digital-image" width={50} height={50}></Image>
                  </div>
                  <p className="text-md -mt-1 text-gray-300 ">Number of Projects</p>
                  <p className="text-3xl font-bold ">04</p>
              </div>

              <div
                  className="bg-slate-900 p-3 lg:p-6 m-2 rounded-xl border border-gray-800 flex flex-col gap-4 h-[200px]">
                  <div className=" ">
                      <Image src="/stock-images/rating-icon.png" alt="3d-digital-image" width={50} height={50}></Image>
                  </div>
                  <p className="text-md -mt-1 text-gray-300 ">Number of Reviews</p>
                  <p className="text-3xl font-bold ">03</p>
              </div>
          </div>

          <div className="mt-10 px-3">
              <p className="text-gray-500">Here will be some charts and contact us form data ... </p>
          </div>

      </div>
  );
}
