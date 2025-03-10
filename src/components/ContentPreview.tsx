
import { useState } from "react";
import { Button } from "./Button";
import { Check, Copy, Download, Share2, ThumbsUp } from "lucide-react";

const ContentPreview = () => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <div className="mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Content Preview
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Here's what your AI-generated content will look like before you share it with the world.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">AW</span>
                  </div>
                  <div>
                    <h3 className="font-medium">AI Writer</h3>
                    <p className="text-xs text-muted-foreground">@aiwriter</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Just now</div>
              </div>

              <div className="prose prose-sm max-w-none text-left mb-6">
                <p>
                  Just discovered an amazing productivity hack that's changed my workflow completely. By batching similar tasks together and using the Pomodoro technique, I've increased my output by 37% this week alone! 🚀 
                </p>
                <p>
                  What's your favorite productivity tip? Share below! #ProductivityTips #WorkSmarter
                </p>
              </div>

              <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center mb-6">
                <p className="text-sm text-muted-foreground">Preview image will appear here</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-1.5 text-sm font-medium ${
                      liked ? "text-success" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    {liked ? "Liked" : "Like"}
                  </button>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Download className="h-4 w-4" />
                    Save
                  </Button>
                  <Button size="sm" className="gap-1.5">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
