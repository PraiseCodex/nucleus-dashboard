'use client'

import React from 'react'
import { 
  SlidersHorizontal,
} from 'lucide-react'
import { ChartUi } from './ChartUi'

import {motion} from "framer-motion"

export default function ApiCall() {
  return (
    <motion.div 
      initial={{opacity: 0, x: -20}}
      animate ={{opacity: 1, x: 0}}
      transition={{duration: 0.4}}


    className='bg-white rounded-[0.7rem] p-4'>
      <header className='w-full flex items-center justify-between p-4'>
        <h3 className='font-bold text-[16.89px]'>Api call in last 6 hours</h3>
        <SlidersHorizontal className='hover:opacity-80 cursor-pointer'/>
      </header>
      <ChartUi />
    </motion.div>
  )
}
