'use client'

import { useEffect } from 'react'

import { cn } from '@sglara/cn'
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'

import { useScrollContext } from '@/components/sections/layout'

export default function ScrollSections({
  children,
}: {
  children: React.ReactNode
}) {
  const { total, ref, setCurrent, setTotal } = useScrollContext()
  const { scrollYProgress } = useScroll({ target: ref })

  const x = useMotionValue(0)

  useEffect(() => {
    setTotal(Array.isArray(children) ? children.length : 1)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(total - 1, Math.round(latest * total))
    setCurrent(index + 1)
    animate(x, -index * window.innerWidth, {
      type: 'spring',
      damping: 30,
      stiffness: 200,
    })
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
