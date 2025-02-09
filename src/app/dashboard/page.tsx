'use client'

import Graph from "@/components/Graph"

import React from 'react'
import {motion} from "framer-motion"
import DashboardHeader from "@/components/DashboardHeader"

const page = () => {
  return (
    <motion.div 
      initial={{y: -90}}
      animate={{y:0}}
      transition={{duration: 0.3}}
      className='w-full h-full'>


      <DashboardHeader />
      <div>
        {/* <div>
          some details
          api call in last 6 hrs
          <div>
            p and l
            current plan
          </div>
        </div>
        <div>
          activity
          integration
        </div> */}
      </div>

      {/* <Graph /> */}

    </motion.div>
  )
}

export default page
