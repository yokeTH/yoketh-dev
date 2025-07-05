interface Props {
  total: number
  current: number
}

export default function PageIndicator({ total, current }: Props) {
  return (
    <div className='fixed top-1/2 right-4 -translate-x-1/2'>
      <div className='flex flex-col items-center space-y-3'>
        {Array.from({ length: total }).map((_, i) => (
          <span key={i}>
            {current === i + 1 ? String(i + 1).padStart(2, '0') : '■'}
          </span>
        ))}
      </div>
    </div>
  )
}
