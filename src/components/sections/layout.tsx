'use client'

import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react'

import PageIndicator from '@/components/page-indecator'

interface ScrollContextType {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  ref: RefObject<HTMLDivElement | null>
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const useScrollContext = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider')
  }
  return context
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [total, setTotal] = useState(1)
  const [current, setCurrent] = useState(1)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <ScrollContext.Provider
      value={{ total, setTotal, current, setCurrent, ref }}
    >
      {children}
      <PageIndicator
        total={total}
        current={current}
      />
    </ScrollContext.Provider>
  )
}
