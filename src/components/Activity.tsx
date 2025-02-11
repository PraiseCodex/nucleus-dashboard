"use client";

import React from "react";

import { MoreVerticalIcon } from "lucide-react";

export default function Activity() {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-[0.7rem] p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Activity</h3>
        <MoreVerticalIcon />
      </div>
      <div className="flex gap-2 ">
        <div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div>
            <p>James Anderson</p>
            <p>
              Called "Books-Api" with the javascript webhook and commented.
              "Books-API was readily available with proper documentation and
              realiability of a proper API. It was just a webhook away from
              application."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
