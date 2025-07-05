'use client'

import { createContext, useContext, useState } from 'react'

import PageIndicator from '@/components/page-indecator'

interface Props {
  children: React.ReactNode
}

interface ScrollContextType {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined,
)

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider')
  }
  return context
}

export function ScrollProvider({ children }: Props) {
  const [total, setTotal] = useState(
    Array.isArray(children) ? children.length : 1,
  )
  const [current, setCurrent] = useState(1)

  return (
    <ScrollContext.Provider value={{ total, setTotal, current, setCurrent }}>
      {children}
      <PageIndicator
        total={total}
        current={current}
      />
    </ScrollContext.Provider>
  )
}

export default function ScrollLayout({ children }: Props) {
  return <div>{children}</div>
}
