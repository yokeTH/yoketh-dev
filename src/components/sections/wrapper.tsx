'use client'

import { useEffect } from 'react'

import { useScrollContext } from '@/components/sections/layout'

interface Props {
  children: React.ReactNode
  sectionNo: number
}

export default function SectionWrapper({ children, sectionNo }: Props) {
  const { setTotal } = useScrollContext()

  useEffect(() => {
    setTotal((prev) => Math.max(prev, sectionNo))
  }, [sectionNo, setTotal])

  return <div className='h-full w-screen flex-shrink-0 p-16'>{children}</div>
}
