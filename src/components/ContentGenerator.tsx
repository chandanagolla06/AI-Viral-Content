
import { useState } from "react";
import { Button } from "./Button";
import { Sparkles, Type, Image, Zap } from "lucide-react";

const contentTypes = [
  { id: "social", name: "Social Post", icon: <Type className="h-4 w-4" /> },
  { id: "image", name: "Image", icon: <Image className="h-4 w-4" /> },
];

const platforms = [
  { id: "twitter", name: "Twitter" },
  { id: "instagram", name: "Instagram" },
  { id: "facebook", name: "Facebook" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "tiktok", name: "TikTok" },
];

const styles = [
  { id: "professional", name: "Professional" },
  { id: "casual", name: "Casual" },
  { id: "humorous", name: "Humorous" },
  { id: "educational", name: "Educational" },
  { id: "persuasive", name: "Persuasive" },
];

const ContentGenerator = () => {
  const [selectedType, setSelectedType] = useState("social");
  const [selectedPlatform, setSelectedPlatform] = useState("twitter");
  const [selectedStyle, setSelectedStyle] = useState("professional");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!topic) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl mx-auto">
        <div className="mx-auto text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            AI Generator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Create Engaging Content
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our AI understands your audience and generates content that drives engagement, saves time, and boosts your social media presence.
          </p>
        </div>

        <div className="glass-effect rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Content Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {contentTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedType === type.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {type.icon}
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Platform
                </label>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => setSelectedPlatform(platform.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedPlatform === platform.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {platform.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Content Style
                </label>
                <div className="flex flex-wrap gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedStyle === style.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Topic or Keywords
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter your topic or keywords..."
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  onClick={handleGenerate} 
                  disabled={!topic || loading}
                  loading={loading}
                  className="flex items-center gap-2"
                >
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

export default ContentGenerator;
