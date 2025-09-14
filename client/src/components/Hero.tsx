import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import heroBackgroundImg from "@assets/generated_images/Hero_background_with_neon_560ca023.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackgroundImg})` }}
      />
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary" data-testid="text-badge">
              Asistente de Poesía con IA
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Escribe Poesía con</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              ByronAI
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Experimenta el futuro de la escritura creativa con autocompletado inteligente 
            y sugerencias con IA que inspiran tu viaje poético.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              data-testid="button-download-app"
              onClick={() => console.log('Download app clicked')}
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar la app
            </Button>
          </div>
          
          {/* Pre-Alpha Status */}
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-primary" data-testid="text-pre-alpha-hero">
                Pre-Alpha — Acceso anticipado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}