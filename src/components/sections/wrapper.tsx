'use client'

import * as motion from 'motion/react-client'

import { useScrollContext } from '@/components/sections/layout'

interface Props {
  children: React.ReactNode
  sectionNo: number
}

export default function SectionWrapper({ children, sectionNo }: Props) {
  const { setCurrent } = useScrollContext()
  return (
    <motion.div
      className='min-h-dvh min-w-[calc(100dvh-128px)]'
      onViewportEnter={() => setCurrent(sectionNo)}
    >
      {children}
    </motion.div>
  )
}
