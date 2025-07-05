import HeroSection from '@/components/sections/hero'
import { ScrollProvider } from '@/components/sections/layout'
import SectionWrapper from '@/components/sections/wrapper'

export default function Home() {
  return (
    <main className='px-16'>
      <ScrollProvider>
        <SectionWrapper sectionNo={1}>
          <HeroSection />
        </SectionWrapper>
        <SectionWrapper sectionNo={2}>
          <HeroSection />
        </SectionWrapper>
        <SectionWrapper sectionNo={3}>
          <HeroSection />
        </SectionWrapper>
      </ScrollProvider>
    </main>
  )
}
