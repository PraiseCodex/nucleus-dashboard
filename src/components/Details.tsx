"use client "


import React from 'react'

import { 
  FileText,
  Users,
  PieChart,
  SortAscIcon
} from 'lucide-react'

export default function Details() {
  return (
    <div className='bg-white w-full flex justify-between p-2'>
     <div className='flex'>
        <FileText />
        <p className='flex flex-col'>
          <span>Projects</span>
          <span>3</span>
        </p>
     </div>
     <div>
        <SortAscIcon />
        <p>
          <span>Requests</span>
          <span>3456</span>
        </p>
     </div>
     <div>
        <Users />
        <p>
          <span>Users</span>
          <span>3</span>
        </p>
     </div>
     <div>
        <PieChart />
        <p>
          <span>Storage</span>
          <span>128/500 GB</span>
        </p>
     </div>
    </div>
  )
}
