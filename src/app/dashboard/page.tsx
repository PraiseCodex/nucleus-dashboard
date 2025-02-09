'use client'

import React from 'react'
import {motion} from "framer-motion"
import DashboardHeader from "@/components/DashboardHeader"
import Details from '@/components/Details'

const page = () => {
  return (
    <motion.div 
      initial={{y: -90}}
      animate={{y:0}}
      transition={{duration: 0.3}}
      className='w-full h-full'>

      <DashboardHeader />
      <div className="grid grid-cols-2 p-4">
        <div className='flex flex-col'>
          <Details />
        </div>
        <div>

        </div>
      </div>

      {/* <Graph /> */}

    </motion.div>
  )
}

export default page
