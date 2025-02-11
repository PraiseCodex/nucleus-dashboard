'use client'

import React from 'react'
import DashboardHeader from "@/components/DashboardHeader"
import Details from '@/components/Details'


const page = () => {
  return (
    <div 
      className='w-full h-full'>

      <DashboardHeader />
      <div className="p-4">
        <div className='flex flex-col'>
          <Details />
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default page
