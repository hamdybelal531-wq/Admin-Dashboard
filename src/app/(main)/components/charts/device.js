import React from "react";
import { ChevronUp, X, Menu } from "lucide-react";

// البيانات لمحاكاة توزيع الأجهزة
const deviceData = [
  { device: "iOS", percent: 30, color: "bg-blue-500" },
  { device: "Android", percent: 10, color: "bg-teal-500" },
  { device: "Blackberry", percent: 20, color: "bg-purple-500" },
  { device: "Symbian", percent: 15, color: "bg-gray-500" },
  { device: "Others", percent: 30, color: "bg-red-500" },
];

const HeaderControls = () => (
  <div className="flex items-center space-x-2 text-gray-400 dark:text-white">
    <Menu size={16} className="cursor-pointer hover:text-gray-600" />
    <ChevronUp size={16} className="cursor-pointer hover:text-gray-600" />
    <X size={16} className="cursor-pointer hover:text-gray-600" />
  </div>
);
const DeviceUsage = () => {
  const chartStyles = {
    background: `conic-gradient(
      #3b82f6 0% 30%,    /* iOS (Blue) 30% */
      #14b8a6 30% 40%,    /* Android (Teal) 10% */
      #a855f7 40% 60%,    /* Blackberry (Purple) 20% */
      #6b7280 60% 75%,    /* Symbian (Gray) 15% */
      #ef4444 75% 100%     /* Others (Red) 30% */
    )`,
  };

  return (
    <div className="bg-white dark:bg-[#101828] p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          Device Usage
        </h3>
        <HeaderControls />
      </div>

      <div className="flex gap-4">
        <div className="relative flex items-center justify-center w-36 h-36 flex-shrink-0">
          <div className="w-full h-full rounded-full" style={chartStyles} />
          <div className="absolute w-20 h-20 bg-white dark:bg-gray-700 rounded-full" />
        </div>

        {/* قائمة الإحصائيات */}
        <div className="flex-1">
          <table className="w-full text-sm text-gray-600 dark:text-white">
            <thead>
              <tr className="text-left text-xs font-semibold text-gray-500 dark:text-white">
                <th className="pt-0">Top 5</th>
                <th className="pt-0">Device</th>
                <th className="pt-0">Progress</th>
              </tr>
            </thead>
            <tbody>
              {deviceData.map((item, index) => (
                <tr key={item.device} className="h-7">
                  <td className="w-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  </td>
                  <td className="text-sm font-medium">{item.device}</td>
                  <td className="text-sm text-right">{item.percent}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeviceUsage;
