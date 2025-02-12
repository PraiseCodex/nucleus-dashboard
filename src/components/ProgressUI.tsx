"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function ProgressUI() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 max-w-[300px]">
      <div className="flex flex-col gap-2">
        <p>Projects</p>
        <Progress value={progress} />
      </div>
      <div className="flex flex-col gap-2">
        <p>Users</p>
        <Progress value={progress} />
      </div>
      <div className="flex flex-col gap-2">
        <p>Request/day</p>
        <Progress value={progress} />
      </div>
    </div>
  );
}
