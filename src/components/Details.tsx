"use client "


import React, { useEffect, useState } from 'react'
import { fetchData } from '@/lib/api'
import { ApiData } from '@/lib/type'

import { 
  FileText,
  Users,
  PieChart,
  SortAscIcon
} from 'lucide-react'

export default function Details() {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(()=>{
    const getData = async() => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    getData();

  }, [])

  const { projects } = data || {};


 

  return (
    <div className='bg-white w-full flex justify-between p-2'>
     <div className='flex'>
        <FileText />
        <p className='flex flex-col'>
          <span>Projects</span>
          <span>{projects}</span>
        </p>
     </div>
    </div>
  )
}
