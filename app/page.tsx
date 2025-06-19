import { Header } from './components/Header'
import { VideoHero } from './components/VideoHero'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Curriculum } from './components/Curriculum'
import { Partners } from './components/Partners'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { LazySection } from './components/LazySection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Critical above-the-fold content - loads immediately */}
      <Header />
      
      <VideoHero />
      <LazySection>
        <Partners />
      </LazySection>
      {/* Progressive loading sections */}
      <LazySection>
        <Hero />
      </LazySection>
      
      <LazySection>
        <Features />
      </LazySection>
      
     
      
      <LazySection>
        <CTA />
      </LazySection>
      
      <LazySection>
        <Footer />
      </LazySection>
    </main>
  )
}
