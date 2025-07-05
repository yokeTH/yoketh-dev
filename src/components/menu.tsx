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
    setTimeout(() => setShowContent(true), 800)
  }

  const handleClose = () => {
    setShowContent(false)
    setTimeout(() => setOpen(false), 400)
  }

  return (
    <>
      <Bracket onClick={handleOpen}> MENU </Bracket>

      {/* Bars animation */}
      <AnimatePresence onExitComplete={() => setOpen(false)}>
        {open && (
          <motion.div className='pointer-events-none fixed inset-0 z-50'>
            {Array.from({ length: NUM_BARS }).map((_, i) => (
              <motion.div
                key={i}
                className='absolute top-0 bottom-0 bg-black outline outline-white'
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
            className='fixed inset-0 z-50 flex items-center justify-center bg-black'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Bracket onClick={handleClose}>X</Bracket>
            <div className='container mx-auto'>
              <div className='w-full p-16 text-center text-8xl outline'>
                Home
              </div>
              <div className='w-full p-16 text-center text-8xl outline'>
                MENU 1
              </div>
              <div className='w-full p-16 text-center text-8xl outline'>
                MENU 2
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
