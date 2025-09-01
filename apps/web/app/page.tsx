import AboutSection from '@/sections/about';
import HeroSection from '@/sections/hero';
import { ScrollProvider } from '@/sections/layout';
import OthersSection from '@/sections/others';
import ProjectsSection from '@/sections/project';
import ScrollSections from '@/sections/scroll-session';
import SectionWrapper from '@/sections/wrapper';

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
  );
}
