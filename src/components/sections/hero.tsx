import Highlight from '@/components/ui/highlight'

export default function HeroSection() {
  return (
    <div className='h-full w-full p-16'>
      <div className='relative h-full w-full'>
        <div className='absolute top-1/2 left-1/2 h-96 w-96 -translate-1/2 rounded-full backdrop-blur-xl'>
          <div className='h-full w-full rounded-full bg-white'></div>
        </div>
        <h2 className='block text-6xl'>Hi, I&apos;m&nbsp;</h2>
        <Highlight className='text-8xl text-shadow-green-500 text-shadow-lg'>
          Thanapon Johdee
        </Highlight>
        <h3 className='block text-6xl'>
          A Fullstack Developer
          <br />
          Who Enjoys Creating Websites.
        </h3>
        <div className='absolute bottom-20 left-0 text-2xl text-gray-500'>
          <div>A.K.A yoke.th</div>
          <div>Engineering Student</div>
          <div>Freelancer / Partime</div>
        </div>
      </div>
    </div>
  )
}
