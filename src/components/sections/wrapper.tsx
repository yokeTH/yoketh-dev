interface Props {
  children: React.ReactNode
}

export default function SectionWrapper({ children }: Props) {
  return (
    <div className='h-full w-screen flex-shrink-0 snap-start p-16'>
      {children}
    </div>
  )
}
