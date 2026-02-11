import { HeaderNav } from './components/zen/HeaderNav';
import { HeroSection } from './components/zen/HeroSection';
import { MissionSection } from './components/zen/MissionSection';
import { RoadmapSection } from './components/zen/RoadmapSection';
import { TokenSection } from './components/zen/TokenSection';
import { Footer } from './components/zen/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <main>
        <HeroSection />
        <MissionSection />
        <RoadmapSection />
        <TokenSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
