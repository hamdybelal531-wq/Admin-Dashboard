import React from "react";
import { Users, Clock, User, Layers, Share2 } from "lucide-react";

const StatCard = ({ item, isLast }) => {
  return (
    <div
      className={`flex flex-col justify-between px-6 ${
        // Added dark:border-slate-700 for the dividers
        !isLast ? "border-r border-gray-300 dark:border-slate-700" : ""
      }`}
    >
      {/* Header: Icon and Label */}
      {/* Added dark:text-slate-400 */}
      <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mb-1">
        {item.icon}
        <span className="text-sm font-medium">{item.label}</span>
      </div>

      {/* Main Value */}
      {/* The color class is passed from the data object to handle specific overrides */}
      <div
        className={`text-4xl font-bold mb-2 ${
          item.valueColor || "text-slate-500 dark:text-slate-200"
        }`}
      >
        {item.value}
      </div>

      {/* Trend / Footer */}
      <div className="flex items-center text-xs font-medium">
        <span
          className={`mr-1 ${
            // Adjusted green/red for better contrast in dark mode
            item.isPositive
              ? "text-emerald-500 dark:text-emerald-400"
              : "text-red-500 dark:text-red-400"
          }`}
        >
          {item.isPositive ? "▲" : "▼"} {item.change}
        </span>
        {/* Added dark:text-slate-500 */}
        <span className="text-gray-400 dark:text-slate-500">
          From last Week
        </span>
      </div>
    </div>
  );
};

const DashboardStats = () => {
  const statsData = [
    {
      label: "Total Users",
      value: "2500",
      change: "4%",
      isPositive: true,
      icon: <Users size={16} />,
      valueColor: "text-slate-500 dark:text-slate-200",
    },
    {
      label: "Average Time",
      value: "123.50",
      change: "3%",
      isPositive: true,
      icon: <Clock size={16} />,
      valueColor: "text-slate-500 dark:text-slate-200",
    },
    {
      label: "Total Males",
      value: "2,500",
      change: "34%",
      isPositive: true,
      icon: <User size={16} />,
      valueColor: "text-emerald-500 dark:text-emerald-400",
    },
    {
      label: "Total Females",
      value: "4,567",
      change: "12%",
      isPositive: false,
      icon: <User size={16} />,
      valueColor: "text-slate-500 dark:text-slate-200",
    },
    {
      label: "Total Collections",
      value: "2,315",
      change: "34%",
      isPositive: true,
      icon: <Layers size={16} />,
      valueColor: "text-slate-500 dark:text-slate-200",
    },
    {
      label: "Total Connections",
      value: "7,325",
      change: "34%",
      isPositive: true,
      icon: <Share2 size={16} />,
      valueColor: "text-slate-500 dark:text-slate-200",
    },
  ];

  return (
    <div className="w-full  transition-colors duration-300">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 p-6">
        <div className="flex flex-row flex-wrap gap-y-8">
          {statsData.map((item, index) => (
            <StatCard
              key={index}
              item={item}
              isLast={index === statsData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
