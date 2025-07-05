import * as React from 'react'

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

interface Props {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Bracket = React.forwardRef<HTMLButtonElement, Props>(function Bracket(
  { children, onClick },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      initial='rest'
      whileHover='hover'
      animate='rest'
      className='fixed top-5 right-10 cursor-pointer font-sans'
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
