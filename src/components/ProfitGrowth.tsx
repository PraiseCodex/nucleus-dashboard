import React from 'react'

import PieChartUi from './PieChartUi'
import {motion} from 'framer-motion'

export default function ProfitGrowth() {
  return (
    <motion.div
      initial={{opacity: 0, y:-20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
    
    >
      <PieChartUi />
    </motion.div>
  )
}
