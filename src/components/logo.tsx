'use client'

import { useState } from 'react'

import * as motion from 'motion/react-client'

import Bracket from '@/components/ui/bracket-button'
import { TextScramble } from '@/components/ui/text-scramble'

export default function Logo() {
  const [isTrigger, setIsTrigger] = useState(false)

  return (
    <Bracket position='top-left'>
      <TextScramble
        className='font-mono text-sm uppercase'
        as={motion.span}
        trigger={isTrigger}
        onHoverStart={() => setIsTrigger(true)}
        onScrambleComplete={() => setIsTrigger(false)}
      >
        YOKE.TH
      </TextScramble>
    </Bracket>
  )
}
