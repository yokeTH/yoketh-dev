export default function PageIndicator() {
  const current = true
  return (
    <div className='fixed top-1/2 right-4 -translate-x-1/2'>
      <div className='flex flex-col items-center space-y-3'>
        <span>{current ? 'O1' : '■'}</span>
        <span>{!current ? 'O1' : '■'}</span>
        <span>{!current ? 'O1' : '■'}</span>
      </div>
    </div>
  )
}
