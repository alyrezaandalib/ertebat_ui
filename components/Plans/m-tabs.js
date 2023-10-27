import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";

export default function MTabs({setMonth }) {
  const data = [
    {
      label: "یک ماهه",
      value: "0",
    },
    {
      label: "سه ماهه",
      value: "1",
    },
    {
      label: "شش ماهه",
      value: "2",
    },
  ];
  return (
    <Tabs value="0" className={"w-[90%] lg:w-[83%] mx-auto "}>
      <TabsHeader className={"bg-secondary/20"}>
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="text-[12px] sm:text-sm lg:text-lg place-items-start mx-auto"
            onClick={() => setMonth(value)}
          >
            <div className="flex items-center gap-2">{label}</div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
