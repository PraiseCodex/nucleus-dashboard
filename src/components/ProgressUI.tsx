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
    <div>
      <div>
        <p>Plans</p>
        <Progress value={progress} />
      </div>
      <div>
        <p>Plans</p>
        <Progress value={progress} />
      </div>
      <div>
        <p>Plans</p>
        <Progress value={progress} />
      </div>
    </div>
  );
}
