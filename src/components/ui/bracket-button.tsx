import * as React from 'react'

import { cn } from '@sglara/cn'
import * as motion from 'motion/react-client'

const leftBrecket = {
  rest: {
    x: -16,
  },
  hover: {
    x: -26,
    transition: {
      duration: 0.222,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
}

const rightBrecket = {
  rest: {},
  hover: {
    x: 10,
    transition: {
      duration: 0.222,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
}

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface Props {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  position?: Position
}

const Bracket = React.forwardRef<HTMLButtonElement, Props>(function Bracket(
  { children, onClick, position = 'top-right' },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      initial='rest'
      whileHover='hover'
      animate='rest'
      className={cn(
        'fixed cursor-pointer font-sans',
        position === 'top-left' && 'top-5 left-10',
        position === 'top-right' && 'top-5 right-10',
        position === 'bottom-left' && 'bottom-5 left-10',
        position === 'bottom-right' && 'right-10 bottom-5',
      )}
      onClick={onClick}
    >
      <motion.span
        className='absolute'
        variants={leftBrecket}
      >
        [
      </motion.span>
      <motion.span>{children}</motion.span>
      <motion.span
        className='absolute'
        variants={rightBrecket}
      >
        ]
      </motion.span>
    </motion.button>
  )
})

export default Bracket
