import { Zap, Wind, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { assetPath } from '@/lib/assetPath';

export function HeroSection() {
  const scrollToToken = () => {
    const element = document.getElementById('token');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by Blockchain</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Peer-to-Peer
                <span className="block text-primary mt-2">Energy Trading</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Trade solar and wind power directly through smart contracts. Bypass traditional utilities and join the renewable energy revolution.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToToken}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                Get ZEN Token
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('mission');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="border-2"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sun className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">Solar</span>
                </div>
                <p className="text-sm text-muted-foreground">Energy Source</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Wind className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">Wind</span>
                </div>
                <p className="text-sm text-muted-foreground">Energy Source</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">P2P</span>
                </div>
                <p className="text-sm text-muted-foreground">Trading</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />
            <img
              src={assetPath('assets/generated/zen-hero-illustration.dim_1600x900.png')}
              alt="ZEN Token mascot in cosmic energy clouds"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
