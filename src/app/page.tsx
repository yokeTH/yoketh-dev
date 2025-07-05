import AboutSection from '@/components/sections/about'
import HeroSection from '@/components/sections/hero'
import { ScrollProvider } from '@/components/sections/layout'
import OthersSection from '@/components/sections/others'
import ProjectsSection from '@/components/sections/project'
import ScrollSections from '@/components/sections/scroll-session'
import SectionWrapper from '@/components/sections/wrapper'

export default function Home() {
  return (
    <main className='h-dvh w-dvw'>
      <ScrollProvider>
        <ScrollSections>
          <SectionWrapper>
            <HeroSection />
          </SectionWrapper>
          <SectionWrapper>
            <AboutSection />
          </SectionWrapper>
          <SectionWrapper>
            <ProjectsSection />
          </SectionWrapper>
          <SectionWrapper>
            <OthersSection />
          </SectionWrapper>
        </ScrollSections>
      </ScrollProvider>
    </main>
  )
}
