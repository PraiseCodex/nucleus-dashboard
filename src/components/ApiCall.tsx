'use client'

import React from 'react'
import { 
  SlidersHorizontal,
} from 'lucide-react'
import { ChartUi } from './ChartUi'

export default function ApiCall() {
  return (
    <div className='bg-white rounded-[0.7rem] p-4'>
      <header className='w-full flex items-center justify-between p-4'>
        <h3 className='font-bold text-[16.89px]'>Api call in last 6 hours</h3>
        <SlidersHorizontal className='hover:opacity-80 cursor-pointer'/>
      </header>
      <ChartUi />
    </div>
  )
}
