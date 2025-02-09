"use client"

import React from 'react'
import HeaderCalender from './HeaderCalender'

export default function DashboardHeader() {
  return (
    <div className='w-full flex items-center justify-between p-4'>
      <div>
        <h1>Dashboard</h1>
        <p>Information about your current plan and usages</p>
      </div>
      <HeaderCalender />
    </div>
  )
}
