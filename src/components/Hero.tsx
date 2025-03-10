
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.08),transparent_50%)]" />
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            className={`inline-flex items-center px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            AI-Powered Content Creation
          </div>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Create Viral Content with AI
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 text-balance transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Generate engaging social media content in seconds using advanced AI. Boost your social presence with content that resonates with your audience.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div 
          className={`relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none z-10"></div>
          
          <div className="glass-effect rounded-xl p-8 md:p-10 backdrop-blur-xl border border-white/20">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-border pb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Content Generator</h3>
                    <p className="text-sm text-foreground/60">Create viral content in seconds</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-flex h-2 w-2 rounded-full bg-success"></span>
                  <span className="text-xs font-medium text-success-foreground">AI Active</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="animation-delay-300 animate-pulse bg-muted h-12 rounded-md w-full"></div>
                <div className="animation-delay-500 animate-pulse bg-muted h-32 rounded-md w-full"></div>
                <div className="animation-delay-700 animate-pulse bg-muted h-20 rounded-md w-full"></div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Generate Content
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
