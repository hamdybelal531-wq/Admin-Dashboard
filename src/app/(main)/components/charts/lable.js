import React from "react";
import {
  ChevronUp,
  X,
  Menu,
  Settings,
  Briefcase,
  Repeat,
  Award,
  LogOut,
} from "lucide-react";

const settingsMenu = [
  { label: "Settings", icon: Settings },
  { label: "Subscription", icon: Briefcase },
  { label: "Auto Renewal", icon: Repeat },
  { label: "Achievements", icon: Award },
  { label: "Auto Renewal", icon: Repeat },
  { label: "Achievements", icon: Award },
  { label: "Logout", icon: LogOut },
];

const HeaderControls = () => (
  <div className="flex items-center space-x-2 text-gray-400 dark:text-white">
    <Menu size={16} className="cursor-pointer hover:text-gray-600" />
    <ChevronUp size={16} className="cursor-pointer hover:text-gray-600" />
    <X size={16} className="cursor-pointer hover:text-gray-600" />
  </div>
);

const Gauge = ({ value, max }) => {
  const percentage = (value / max) * 100;
  const rotation = percentage * 1.8 - 90;
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-sm font-semibold text-gray-600 dark:text-white mb-4">
        Profile Completion
      </h4>
      <div className="relative w-32 h-16 overflow-hidden">
        {/* القوس الخلفي (الرمادي) */}
        <div className="absolute top-0 left-0 w-full h-full rounded-t-full border-[10px] border-gray-200 border-b-transparent" />

        <div
          className="absolute top-0 left-0 w-full h-full rounded-t-full border-[10px] border-teal-500 border-b-transparent"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%)",
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "bottom center",
            transition: "transform 0.5s ease-out",
          }}
        />

        <div
          className="absolute bottom-0 left-1/2 w-1 h-14 bg-gray-700 rounded-full"
          style={{
            transform: `translateX(-50%) rotate(${rotation}deg)`,
            transformOrigin: "bottom center",
            transition: "transform 0.5s ease-out",
            zIndex: 10,
          }}
        />

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 dark:bg-white rounded-full" />
      </div>

      <div className="flex justify-between w-full px-2 mt-2">
        <span className="text-xs text-gray-600 dark:text-white">3.200%</span>
        <span className="text-xs text-gray-600 dark:text-white">100%</span>
      </div>
    </div>
  );
};
const QuickSettings = () => {
  return (
    <div className="bg-white dark:bg-[#101828] p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 w-full mb-10 md:mb-0">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          Quick Settings
        </h3>
        <HeaderControls />
      </div>

      <div className="flex">
        <ul className="flex-1 space-y-1 text-sm text-gray-700 dark:text-white pr-4">
          {settingsMenu.map((item, index) => (
            <li
              key={index}
              className="flex items-center dark:hover:bg-gray-700 hover:bg-[#eee] p-1 rounded cursor-pointer"
            >
              <item.icon
                size={16}
                className="text-gray-500 dark:text-white mr-2"
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="w-1/2 border-l border-gray-200 pl-4 flex justify-center items-center">
          <Gauge value={3.2} max={100} />
        </div>
      </div>
    </div>
  );
};

export default QuickSettings;
