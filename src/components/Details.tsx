"use client ";

import React, { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import { ApiData } from "@/lib/type";

import { FileText, Users, PieChart, SortAscIcon } from "lucide-react";

const items = [
  {
    title: "Projects",
    icon: FileText,
    key: "projects",
    color: "#FF6A00"
  },
  {
    title: "Requests",
    icon: SortAscIcon,
    key: "requests",
    color: "#551FFF"
  },
  {
    title: "Users",
    icon: Users,
    key: "users",
    color: "#00B7FE"
  },
  {
    title: "Storage",
    icon: PieChart,
    key: "storage",
    color: "#FD2254"
  },
];

export default function Details() {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);


  return (
    <div className="bg-white w-full flex justify-between p-8 gap-4 rounded-xl shadow-lg">
      {items.map(({ title, key, icon: Icon, color }) => {
        let value = data ? data[key] : "Loading...";

        // Ensure value is a string or number before rendering
        if (typeof value === "object") {
          value = JSON.stringify(value); // Convert objects/arrays to strings
        }

        return (
          <div key={key} className="flex items-center gap-3">
            <div className="bg-[#FFF2E9] p-3 rounded-xl">
              <Icon style={{color: color}}></Icon>
            </div>
            <p className="flex flex-col">
              <span className="text-[#92959E] font-bold">{title}</span>
              <span>{value}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
