import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import lightLogoImg from "@assets/svgviewer-png-output_1757720985026.png";
import darkLogoImg from "@assets/svgviewer-png-output(1)_1757797300720.png";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme state
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Create observer to watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center" data-testid="logo-container">
              <img 
                src={isDark ? darkLogoImg : lightLogoImg} 
                alt="Logo de ByronAI" 
                className="h-10"
                data-testid="img-logo"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                className="text-foreground/80 hover:text-foreground transition-colors"
                data-testid="button-nav-features"
                onClick={() => console.log('Navigate to features')}
              >
                Características
              </button>
              <button 
                className="text-foreground/80 hover:text-foreground transition-colors"
                data-testid="button-nav-download"
                onClick={() => console.log('Navigate to download')}
              >
                Descargar
              </button>
              <button 
                className="text-foreground/80 hover:text-foreground transition-colors"
                data-testid="button-nav-about"
                onClick={() => console.log('Navigate to about')}
              >
                Acerca de
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              className="hidden sm:flex"
              data-testid="button-get-started"
              onClick={() => console.log('Get started clicked')}
            >
              Comenzar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}