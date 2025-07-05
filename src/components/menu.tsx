'use client'

import { useState } from 'react'

import { AnimatePresence, motion } from 'motion/react'

import Bracket from '@/components/ui/bracket-button'

const NUM_BARS = 10

export default function Menu() {
  const [open, setOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    setTimeout(() => setShowContent(true), 600)
  }

  const handleClose = () => {
    setShowContent(false)
    setTimeout(() => setOpen(false), 400)
  }

  return (
    <>
      <Bracket onClick={handleOpen}> MENU </Bracket>

      {/* Bars animation */}
      <AnimatePresence>
        {open && (
          <motion.div className='pointer-events-none absolute inset-0 z-50'>
            {Array.from({ length: NUM_BARS }).map((_, i) => (
              <motion.div
                key={i}
                className='absolute top-0 bottom-0 bg-black'
                style={{
                  width: `${100 / NUM_BARS}%`,
                  left: `${(100 / NUM_BARS) * i}%`,
                }}
                initial={{ height: '0%' }}
                animate={{ height: '100%' }}
                exit={{
                  height: '0%',
                  transition: { delay: Math.random() * 0.3, duration: 0.4 },
                }}
                transition={{
                  delay: Math.random() * 0.5,
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            className='absolute inset-0 z-50 flex items-center justify-center bg-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Bracket onClick={handleClose}>X</Bracket>
            MENUUUUUU
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
