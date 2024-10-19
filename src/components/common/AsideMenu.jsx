"use client"
import { useState } from "react";

const asideMenuItems = [
  { label: "Dashboard", path: "/admin" },
  { 
    label: "Projects", 
    path: "/admin/project", 
    subMenu: [
      { label: "Create Project", path: "/admin/project/create-new-project" },
      { label: "View Projects", path: "/admin/project" }
    ]
  },
  { label: "Blogs", path: "/admin/blogs" },
  // { label: "Users", path: "/admin/users" },
  // { label: "Logout", path: "/admin/logout" },
];

const AsideMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <aside className="w-[300px] h-full border-r border-slate-800 flex-shrink-0 fixed left-0">
      <ul className="pt-10 px-1 flex flex-col gap-2">
        {asideMenuItems.map((item) => (
          <li key={item.label}>
            <div
              className="flex items-center px-4 py-2 hover:bg-gray-900 cursor-pointer rounded-lg"
              onClick={() => item.subMenu ? handleMenuClick(item.label) : window.location.href = item.path}
            >
              {item.label}
            </div>
            {/* Sub-menu rendering */}
            {item.subMenu && openMenu === item.label && (
              <ul className="pl-6 mt-1 flex flex-col gap-2">
                {item.subMenu.map((subItem) => (
                  <li
                    key={subItem.label}
                    className="flex items-center px-4 py-2 hover:bg-gray-900 cursor-pointer rounded-lg"
                    onClick={() => window.location.href = subItem.path}
                  >
                    {subItem.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideMenu;
