import React from "react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { ApiData } from "@/lib/type";
import { fetchData } from "@/lib/api";


export default function ProgressUI() {

  const [progress, setProgress] = useState([
    { label: "Projects", value: 0},
    { label: "Users", value: 0},
    { label: "Request/day", value: 0},
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result: ApiData = await fetchData(); 
        const updatedProgress = [
          { label: "Projects", value: result.projects || 0},
          { label: "Users", value: result.users || 0},
          { label: "Request/day", value: result.requests || 0},
        ];
        setProgress(updatedProgress);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  

  return (
    <div className="w-full flex flex-col gap-4 max-w-[300px]">
      {progress.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p className="w-full flex items-center justify-between">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </p>
          <Progress
            value={item.value}
          />
        </div>
      ))}
    </div>
  );
}
