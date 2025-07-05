'use client'

import { cn } from '@sglara/cn'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'

import { useScrollContext } from '@/components/sections/layout'

export default function ScrollSections({
  children,
}: {
  children: React.ReactNode
}) {
  const { total, ref, setCurrent } = useScrollContext()
  const { scrollYProgress } = useScroll({ target: ref })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${(total - 1) * 100}%`],
  )

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(total, Math.ceil(latest * total) + 1)
    setCurrent(index)
  })

  return (
    <div
      ref={ref}
      className={cn('relative')}
      style={{ height: `${100 * total}dvh` }}
    >
      <div className='sticky top-0 h-screen w-full overflow-hidden'>
        <motion.div
          style={{ x }}
          className='flex h-full w-full'
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
