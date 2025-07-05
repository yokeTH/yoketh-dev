import * as motion from 'motion/react-client'

export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className='w-fit cursor-pointer bg-red-500'
      whileHover={{ padding: '4px', x: [0, -5, 5, -5, 5, 0] }}
    >
      {children}
    </motion.span>
  )
}
