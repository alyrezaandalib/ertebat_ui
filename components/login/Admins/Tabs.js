import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import React from "react";

export default function DashboardTabs({ setValue }) {
  const data = [
    {
      label: "پشتیبان",
      value: "support",
    },
    {
      label: "ادمین",
      value: "admin",
    },
  ];
  return (
    <Tabs value="admin" className={"w-full mb-5"}>
      <TabsHeader className={"bg-secondary/20"}>
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="text-xs lg:text-lg place-items-start mx-auto"
            onClick={() => setValue(value)}
          >
            <div className="flex items-center gap-2">{label}</div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
