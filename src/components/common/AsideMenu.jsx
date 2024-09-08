const asideMenuItems = [
  { label: "Dashboard", path: "/admin" },
  { label: "Projects", path: "/admin/project" },
  { label: "Blogs", path: "/admin/blogs" },
  { label: "Users", path: "/admin/users" },
  { label: "Logout", path: "/admin/logout" },
];

const AsideMenu = () => {
  return (
    <aside className="w-[300px] h-full border-r border-slate-800 flex-shrink-0 fixed left-0">
      <ul className="pt-10 px-1 flex flex-col gap-2">
        {asideMenuItems.map((item) => (
          <li
            key={item.label}
            className="flex items-center px-4 py-2 hover:bg-gray-900 cursor-pointer rounded-lg"
            onClick={() => window.location.href = item.path}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  )
};

export default AsideMenu;