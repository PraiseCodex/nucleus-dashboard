'use client'

import Graph from "@/components/Graph"

import React from 'react'
import {motion} from "framer-motion"

const page = () => {
  return (
    <motion.div 
      initial={{y: -90}}
      animate={{y:0}}
      transition={{duration: 0.3}}
      className='w-full h-full'>
      <Graph />
    </motion.div>
  )
}

export default page
