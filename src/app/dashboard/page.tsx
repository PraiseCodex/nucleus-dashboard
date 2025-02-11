'use client'

import React from 'react'
import DashboardHeader from "@/components/DashboardHeader"
import Details from '@/components/Details'
import SkeletonUi from '@/components/SkeletonUi'
import ApiCall from '@/components/ApiCall'


const page = () => {
  return (
    <div 
      className='w-full h-full'>

      <DashboardHeader />
      <div className="p-4">
        <div className='flex flex-col gap-4'>
          <Details />
          <ApiCall />
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default page
