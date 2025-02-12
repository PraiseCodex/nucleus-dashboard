import React from "react";

import ProgressUI from "./ProgressUI";
import { SlidersHorizontal } from "lucide-react";


export default function CurrentPlan() {
  return (
    <div className="bg-white p-3 flex flex-col gap-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3>Current Plan</h3>
          <p>Information and usages of your current plan</p>
        </div>
        <SlidersHorizontal />
      </div>
      <ProgressUI />
    </div>
  );
}
