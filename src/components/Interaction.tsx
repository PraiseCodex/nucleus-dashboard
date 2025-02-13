import React from "react";
import Dropdown from "./Dropdown";
import { Skeleton } from "./ui/skeleton";
import {motion} from "framer-motion"

export default function Interaction() {
  const items = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    
      className="w-full bg-white rounded-xl p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Interaction</h3>
        <Dropdown />
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div className="flex gap-2" key={item}>
            <Skeleton className="min-w-12 h-12 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-6 w-[6rem]" />
              <Skeleton className="h-6 w-[25rem]" />
              <Skeleton className="h-6 w-[25rem]" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
