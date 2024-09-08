"use client";
import AsideMenu from "@/components/common/AsideMenu";



export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      <AsideMenu />
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>
    </div>
  );
}
