import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonUi() {
  return (
    <div className="flex items-center space-x-4">
     <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex flex-col">
        <Skeleton className="h-4 w-[60px]" />
        <Skeleton className="h-4 w-[25px]" />
      </div>
    </div>
  );
}
