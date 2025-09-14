import { Brain, Palette, Zap, BookOpen, Heart, Lightbulb } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Autocompletion",
      description: "Get intelligent suggestions as you write, helping you find the perfect words and maintain your poetic flow."
    },
    {
      icon: Palette,
      title: "Style Adaptation",
      description: "The AI learns your unique writing style and provides suggestions that match your voice and poetic preferences."
    },
    {
      icon: Zap,
      title: "Instant Inspiration",
      description: "Break through writer's block with creative prompts and alternative word suggestions powered by advanced AI."
    },
    {
      icon: BookOpen,
      title: "Poetry Forms",
      description: "Master various poetry forms with guided templates for sonnets, haikus, free verse, and more."
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "AI understands emotional context and helps you express feelings with nuanced and appropriate language."
    },
    {
      icon: Lightbulb,
      title: "Creative Suggestions",
      description: "Discover unexpected metaphors, rhymes, and literary devices to elevate your poetic expression."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Powerful Features for
            <span className="text-primary"> Creative Writers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how ByronAI transforms your poetry writing experience with cutting-edge AI technology 
            designed specifically for creative expression.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="hover-elevate"
            />
          ))}
        </div>
      </div>
    </section>
  );
}