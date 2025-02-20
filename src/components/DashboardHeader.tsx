"use client"

import React from 'react'
import HeaderCalender from './HeaderCalender'
import {motion} from "framer-motion"

export default function DashboardHeader() {
  return (
    <motion.div 
      initial={{opacity:0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
    
    className='w-full flex items-center justify-between p-4'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-[28.16px] font-bold'>Dashboard</h1>
        <p className='text-[#92959E] text-[12.67px]'>Information about your current plan and usages</p>
      </div>
      <HeaderCalender />
    </motion.div>
  )
}
