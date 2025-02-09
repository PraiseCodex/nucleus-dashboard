"use client"

import React from 'react'
import HeaderCalender from './HeaderCalender'

export default function DashboardHeader() {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <p>Information about your current plan and usages</p>
      </div>
      <HeaderCalender />
    </div>
  )
}
