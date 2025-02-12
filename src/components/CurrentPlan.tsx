import React from "react";

import ProgressUI from "./ProgressUI";
import { SlidersHorizontal } from "lucide-react";
import {motion} from "framer-motion"


export default function CurrentPlan() {
  return (
    <motion.div 
      initial={{y: 20, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.4}}

    className="bg-white p-3 flex flex-col gap-6 shadow-md rounded-xl">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3>Current Plan</h3>
          <p>Information and usages of your current plan</p>
        </div>
        <SlidersHorizontal />
      </div>
      <div>

      </div>
      <ProgressUI />
    </motion.div>
  );
}
