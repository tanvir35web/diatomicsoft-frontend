"use client"

import ProjectForm from "@/components/project/ProjectForm";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "uidToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; SameSite=None";
    router.push('/admin/login');
  }

  return (
    <div className="p-4">
      
      <ProjectForm />
      <div className="mt-20">
        <button onClick={handleLogout} className="bg-red-100 w-full sm:w-fit px-10 py-4 rounded-lg font-bold text-black hover:bg-red-900 hover:text-white duration-200">Logout</button>
      </div>
    </div>
  );
}