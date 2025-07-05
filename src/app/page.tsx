import DinoSay from '@/components/dino-say'
import Highlight from '@/components/ui/highlight'

export default function Home() {
  return (
    <div className='min-h-screen grid-rows-[20px_1fr_20px] items-center gap-16 p-8 pb-20 sm:p-20'>
      <main className='flex flex-col items-start justify-start gap-8'>
        <h1 className='text-4xl leading-snug'>
          Hi,
          <br />
          I&apos;m&nbsp;
          <Highlight>Thanapon Johdee</Highlight>
          <br />
          A Fullstack Developer
          <br />
          Who Enjoys Creating Websites.
        </h1>
        <DinoSay />
      </main>
    </div>
  )
}
