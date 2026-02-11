import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function TokenSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = 'BJHgkB2HqNHqr1SKFAgnFd1U3MEBGgpbdjH8A3a8pump';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast.success('Contract address copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy address');
    }
  };

  return (
    <section id="token" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            ZEN Token
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The native token powering the Zephyr Energy Network ecosystem.
          </p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Contract Address</CardTitle>
            <CardDescription>
              Official ZEN token contract on Solana
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contract Address Display */}
            <div className="bg-muted/50 rounded-lg p-6 border-2 border-border">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <code className="text-sm sm:text-base font-mono text-foreground break-all flex-1">
                  {contractAddress}
                </code>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Token Info */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">ZEN</div>
                <div className="text-sm text-muted-foreground">Symbol</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">Solana</div>
                <div className="text-sm text-muted-foreground">Network</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">Pump.fun</div>
                <div className="text-sm text-muted-foreground">Platform</div>
              </div>
            </div>

            {/* External Link */}
            <div className="pt-4 text-center">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open(`https://pump.fun/${contractAddress}`, '_blank')}
              >
                View on Pump.fun
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Always verify the contract address before making any transactions. Do your own research.
          </p>
        </div>
      </div>
    </section>
  );
}
