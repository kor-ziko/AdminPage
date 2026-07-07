import { NavLink } from "react-router-dom";

import {
    FiHome,
    FiShoppingCart,
    FiTruck,
    FiUsers,
    FiPackage,
    FiSettings,
} from "react-icons/fi";

const menus = [
    { title: "Dashboard", path: "/", icon: <FiHome /> },
    { title: "대행관리", path: "/orders", icon: <FiShoppingCart /> },
    { title: "회원관리", path: "/users", icon: <FiUsers /> },
    { title: "게시판관리", path: "/notice_board", icon: <FiTruck /> },
    { title: "쿠폰관리", path: "/coupons", icon: <FiPackage /> },
    { title: "환경설정", path: "/settings", icon: <FiSettings /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen">
      <div className="text-2xl font-bold p-6">
        SAZO
      </div>

      <nav className="flex flex-col">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-700"
              }`
            }
          >
            {menu.icon}
            <span>{menu.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}