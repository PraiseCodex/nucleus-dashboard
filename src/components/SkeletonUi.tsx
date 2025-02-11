import React from "react";
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonUi() {
  return (
    <div className="flex items-center w-full space-x-2">
     <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-4 w-[60px] rounded-md" />
        <Skeleton className="h-4 w-[25px] rounded-sm" />
      </div>
    </div>
  );
}
