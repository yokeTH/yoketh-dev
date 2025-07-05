export default function InProgress() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-1/2 text-orange-400'>
      <div className='flex flex-col items-center justify-center'>
        <div className='h-10 w-10'>
          <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path
              d='M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3h-2V1zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2h2V9h2V7h2V5h2V3h2zm0 4h-2v6h2V7zm0 8h-2v2h2v-2z'
              fill='currentColor'
            />
          </svg>
        </div>
        <span className='text-4xl'>
          My site&apos;s still a work in progress—stay tuned!
        </span>
      </div>
    </div>
  )
}
