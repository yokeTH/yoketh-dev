import HeroSection from '@/components/sections/hero'
import { ScrollProvider } from '@/components/sections/layout'
import ScrollSections from '@/components/sections/scroll-session'
import SectionWrapper from '@/components/sections/wrapper'

export default function Home() {
  return (
    <main className='h-dvh w-dvw'>
      <ScrollProvider>
        <ScrollSections>
          <SectionWrapper sectionNo={1}>
            <HeroSection />
          </SectionWrapper>
          <SectionWrapper sectionNo={2}>
            <HeroSection />
          </SectionWrapper>
          <SectionWrapper sectionNo={3}>
            <HeroSection />
          </SectionWrapper>
          <SectionWrapper sectionNo={4}>
            <HeroSection />
          </SectionWrapper>
        </ScrollSections>
      </ScrollProvider>
    </main>
  )
}
