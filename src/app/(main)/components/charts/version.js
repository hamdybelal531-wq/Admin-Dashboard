import React from "react";
import { ChevronUp, X, Menu, BarChart2 } from "lucide-react";

// البيانات لمحاكاة الرسم البياني
const appVersionsData = [
  { version: "0.1.5.2", usage: "123k", width: "80%" },
  { version: "0.1.5.3", usage: "53k", width: "35%" },
  { version: "0.1.5.4", usage: "23k", width: "15%" },
  { version: "0.1.5.5", usage: "3k", width: "2%" },
  { version: "0.1.5.6", usage: "1k", width: "0.7%" },
];

const HeaderControls = () => (
  <div className="flex items-center space-x-2 text-gray-400 dark:text-white">
    <Menu size={16} className="cursor-pointer hover:text-gray-600" />
    <ChevronUp size={16} className="cursor-pointer hover:text-gray-600" />
    <X size={16} className="cursor-pointer hover:text-gray-600" />
  </div>
);
const AppVersions = () => {
  return (
    <div className="bg-white dark:bg-[#101828] p-4 rounded-lg shadow border m-auto border-gray-200 dark:border-gray-700 w-full ">
      {/* رأس المكون */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          App Versions
        </h3>
        <HeaderControls />
      </div>

      {/* محتوى المكون */}
      <h4 className="text-sm font-medium  mb-4 text-gray-800 dark:text-white">
        App Usage across versions
      </h4>

      <div className="space-y-3">
        {appVersionsData.map((item) => (
          <div key={item.version} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-800 dark:text-white">
                {item.version}
              </span>
            </div>
            <div className="flex items-center">
              {/* شريط التقدم */}
              <div className="grow h-3 bg-[#eee]  dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                <div
                  className="h-full bg-teal-500"
                  style={{ width: item.width }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-600 dark:text-white w-10 text-right">
                {item.usage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppVersions;
