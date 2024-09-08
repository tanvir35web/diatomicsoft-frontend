"use client";
import AsideMenu from "@/components/common/AsideMenu";



export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <AsideMenu />
      <div className="flex-1 overflow-auto pl-[300px]">
        {children}
      </div>
    </div>
  );
}
