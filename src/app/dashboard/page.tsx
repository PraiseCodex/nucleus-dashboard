'use client'

import React from 'react'
import DashboardHeader from "@/components/DashboardHeader"
import Details from '@/components/Details'
import ApiCall from '@/components/ApiCall'
import Activity from '@/components/Activity'
import ProfitGrowth from '@/components/ProfitGrowth'
import CurrentPlan from '@/components/CurrentPlan'
import Interaction from '@/components/Interaction'


const page = () => {
  return (
    <div 
      className='w-full h-full'>

      <DashboardHeader />
      <div className="p-4 grid grid-cols-[2fr_1fr] gap-8">
        <div className='flex flex-col gap-4'>
          <Details />
          <ApiCall />
          <div className='grid grid-cols-2 gap-4 w-full'>
            <ProfitGrowth />
            <CurrentPlan />
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <Activity />
          <Interaction />
        </div>
      </div>
    </div>
  )
}

export default page
