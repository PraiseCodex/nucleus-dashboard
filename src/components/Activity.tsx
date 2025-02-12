"use client";

import React from "react";
import Dropdown from "./Dropdown";

import { Skeleton } from "./ui/skeleton";
import {motion} from "framer-motion"

export default function Activity() {
  return (
    <motion.div
     className="flex flex-col gap-4 bg-white rounded-[0.7rem] p-4"
     initial={{opacity:0, x: 30}}
     animate={{opacity:1, x:0}}
     transition={{duration: 0.4}}
     
     >
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Activity</h3>
        <Dropdown />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">James Anderson</h4>
            <p className="text-[]">
              Called "Books-Api" with the javascript webhook and commented.
              "Books-API was readily available with proper documentation and
              realiability of a proper API. It was just a webhook away from
              application."
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="min-w-12 h-12 rounded-full"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-[6rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[25rem]"/>
            <Skeleton className="h-6 w-[5rem]"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
