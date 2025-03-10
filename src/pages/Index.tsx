
import { Flame, ScrollText, Image, Share2, Zap, Palette, Bot, Activity } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import ContentGenerator from "@/components/ContentGenerator";
import ContentPreview from "@/components/ContentPreview";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/Button";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Powerful Features
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our AI-powered platform helps you create, optimize and schedule viral content across all your social channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<ScrollText className="h-6 w-6" />}
              title="Text Generation"
              description="Create engaging posts, captions, and threads optimized for each platform."
            />
            <FeatureCard
              icon={<Image className="h-6 w-6" />}
              title="Image Creation"
              description="Generate eye-catching images that complement your written content."
            />
            <FeatureCard
              icon={<Palette className="h-6 w-6" />}
              title="Style Customization"
              description="Choose from multiple tones and styles to match your brand voice."
            />
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Sentiment Analysis"
              description="Analyze content performance and audience sentiment in real-time."
            />
            <FeatureCard
              icon={<Bot className="h-6 w-6" />}
              title="AI Enhancement"
              description="Our AI learns your preferences and improves with every generation."
            />
            <FeatureCard
              icon={<Share2 className="h-6 w-6" />}
              title="Multi-Platform Sharing"
              description="Publish content directly to Twitter, Instagram, Facebook and more."
            />
            <FeatureCard
              icon={<Flame className="h-6 w-6" />}
              title="Trending Topics"
              description="Get content ideas based on what's trending in your industry."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Quick Generation"
              description="Generate multiple content variations in seconds with one click."
            />
          </div>
        </div>
      </section>
      
      <ContentGenerator />
      <ContentPreview />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Create Viral Content?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Join thousands of creators and marketers who are using ViralWavez to boost their social media presence.
          </p>
          <Button size="lg" className="font-medium">
            Get Started for Free
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
