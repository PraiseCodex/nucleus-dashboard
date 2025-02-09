"use client"

import React from 'react'
import HeaderCalender from './HeaderCalender'

export default function DashboardHeader() {
  return (
    <div className='w-full flex items-center justify-between p-4'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-[28.16px] font-bold'>Dashboard</h1>
        <p className='text-[#92959E] text-[12.67px]'>Information about your current plan and usages</p>
      </div>
      <HeaderCalender />
    </div>
  )
}
