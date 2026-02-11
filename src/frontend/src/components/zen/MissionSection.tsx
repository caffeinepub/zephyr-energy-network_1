import { Leaf, Users, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { assetPath } from '@/lib/assetPath';

export function MissionSection() {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Energy',
      description: 'Trade renewable solar and wind power directly between producers and consumers.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Born from community discussions on X, built for the people by the people.'
    },
    {
      icon: Shield,
      title: 'Smart Contracts',
      description: 'Secure, transparent blockchain technology ensures trustless peer-to-peer trading.'
    },
    {
      icon: TrendingUp,
      title: 'Bypass Utilities',
      description: 'Cut out middlemen and trade energy directly, reducing costs and increasing efficiency.'
    }
  ];

  return (
    <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Zephyr Energy Network empowers individuals to trade renewable energy directly through blockchain technology, creating a decentralized, sustainable future for energy distribution.
          </p>
        </div>

        {/* Mascot Image */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl -z-10" />
            <img
              src={assetPath('assets/generated/image-1.webp')}
              alt="ZEN mascot character in pink hoodie"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
