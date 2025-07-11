import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/finance", icon: "💰", label: "Finance" },
    { path: "/engagement", icon: "📊", label: "Engagement" },
    { path: "/doctor", icon: "🩺", label: "Doctor" },
  ];

  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-6 flex flex-col justify-between">
      {/* Top: Title + Navigation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Admin Dashboard</h2>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-md font-medium transition ${
                currentPath === item.path
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom: Brand Name */}
      <div className="pt-6 mt-10 border-t border-gray-100 text-sm text-center text-gray-500">
        <span className="font-semibold text-indigo-600">Oeja SwasthSetu</span>
      </div>
    </aside>
  );
};

export default Sidebar;

