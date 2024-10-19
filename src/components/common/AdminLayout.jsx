"use client";
import AsideMenu from "@/components/common/AsideMenu";
import {useRouter} from "next/navigation";



export default function AdminLayout({ children }) {

    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "uidToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; SameSite=None";
        router.push('/login');
    }
  return (
      <div className="flex">
          <AsideMenu/>
          <div className="flex-1 overflow-auto pl-[300px]">
              {children}
          </div>
          <div className="p-2 absolute bottom-3 left-3">
              <button onClick={handleLogout}
                      className="bg-red-900 w-full h-full sm:w-fit px-24 py-4 rounded-lg font-bold hover:bg-red-700 duration-200">Logout
              </button>
          </div>
      </div>
  );
}
