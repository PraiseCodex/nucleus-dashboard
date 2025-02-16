import React, { useEffect, useState } from "react";

import PieChartUi from "./PieChartUi";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { fetchData } from "@/lib/api";
import { ApiData } from "@/lib/type";

export default function ProfitGrowth() {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    const getMetrics = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    getMetrics();
  }, []);

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
          <span>
            <SlidersHorizontal />
          </span>
        </p>
        <p className="text-[#92959E]">Total profit of Growth is 25%</p>
      </div>
      <div className="grid grid-cols-[1fr_2fr]">
        {data?.metrics && (
          <div className="flex flex-col gap-4">
            {data.metrics.map((metric, index)=> {

              let bullet_color ="";

              if(index === 0) bullet_color = "bg-[#FD2254]"
              if(index === 1) bullet_color = "bg-[#00B7FE]"
              if(index === 2) bullet_color = "bg-[#D0D2DA]"

              return(
                <div className="flex flex-col" key={index}>
                  <p className="flex items-center">
                    <span className={`min-w-3 h-3 rounded-full ${bullet_color} mr-3`}></span>
                    <span>{metric.name}</span>
                  </p>
                  <p className="ml-5">{metric.percentage}%</p>
                </div>
              )
            })}
          </div>
        )}
        <PieChartUi />
      </div>
    </motion.div>
  );
}


