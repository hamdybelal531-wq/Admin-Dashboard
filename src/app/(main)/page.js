"use client";
import { ChartAreaDefault } from "./components/charts/areachart";
import { ChartAreaInteractive } from "./components/charts";
import { ChartAreaStackedExpand } from "./components/charts/charts2";
import DashboardStats from "./components/charts/info";
import AppVersions from "./components/charts/version";
import DeviceUsage from "./components/charts/device";
import QuickSettings from "./components/charts/lable";

export default function Page() {
  return (
    <>
      <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2">
        <div className="md:col-span-2">
          <DashboardStats />
        </div>
        <div className="md:col-span-2 ">
          <ChartAreaInteractive />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-1 gap-5 w-full p-2 md:p-4 ">
        <AppVersions />
        <DeviceUsage />
        <QuickSettings />
      </div>
    </>
  );
}
