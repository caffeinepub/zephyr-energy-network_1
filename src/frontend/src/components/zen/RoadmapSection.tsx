import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RoadmapSection() {
  const phases = [
    {
      title: 'Phase 1: Concept & Community',
      items: [
        'Define mission: peer-to-peer renewable energy trading',
        'Release brand identity and mascot',
        'Build community presence on X and other platforms',
        'Publish litepaper outlining vision and token purpose'
      ]
    },
    {
      title: 'Phase 2: Prototype Development',
      items: [
        'Design peer-to-peer trading model for solar and wind energy',
        'Create early smart contract prototypes',
        'Release ZEN token model and utility description',
        'Begin small-scale community testing with simulated trades'
      ]
    },
    {
      title: 'Phase 3: Alpha Network',
      items: [
        'Launch test environment for energy-trade simulations',
        'Add user dashboards and wallet integration',
        'Start early partnerships with renewable energy hobbyist groups',
        'Gather user feedback to refine the model'
      ]
    },
    {
      title: 'Phase 4: Beta Network',
      items: [
        'Improve trading engine and pricing logic',
        'Introduce gamified sustainability rewards',
        'Expand to larger community trials',
        'Tighten security, auditing, and transparency features'
      ]
    },
    {
      title: 'Phase 5: Public Launch',
      items: [
        'Launch full ZEN token ecosystem',
        'Deploy peer-to-peer marketplace',
        'Introduce governance features for community decisions',
        'Begin onboarding real-world microgrid partners'
      ]
    },
    {
      title: 'Phase 6: Expansion',
      items: [
        'Add support for more energy sources and devices',
        'Integrate optional carbon credit features',
        'Encourage third-party tools and community apps',
        'Explore partnerships with clean-tech organizations'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our journey to revolutionize renewable energy trading through blockchain technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {phase.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
