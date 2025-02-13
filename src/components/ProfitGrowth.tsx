import React from "react";

import PieChartUi from "./PieChartUi";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

export default function ProfitGrowth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="shadow-md rounded-xl flex flex-col gap-6 bg-white p-4"
    >
      <div className="flex flex-col gap-1">
        <p className="font-bold text-xl w-full flex items-center justify-between">
          <span>P & L</span>
          <span><SlidersHorizontal /></span>
        </p>
        <p className="text-[#92959E]">
          Total profit of Growth is 25%
        </p>
        
      </div>
      <div className="flex items-center justify-between">
        <ul>
          <li>Re-Used APIs <br /> 36%</li>
          <li>Webhooks <br /> 38%</li>
          <li>API calls <br /> 25%</li>
        </ul>
        <PieChartUi />
      </div>
    </motion.div>
  );
}
