import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import lightLogoImg from "@assets/svgviewer-png-output_1757720985026.png";
import darkLogoImg from "@assets/svgviewer-png-output(1)_1757797300720.png";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);
  const currentYear = new Date().getFullYear();

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
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4" data-testid="footer-logo-container">
              <img 
                src={isDark ? darkLogoImg : lightLogoImg} 
                alt="Logo de ByronAI" 
                className="h-10"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Capacitando a poetas y escritores creativos con autocompletado con IA 
              y sugerencias inteligentes para crear hermosa poesía.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Producto</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-features"
                  onClick={() => console.log('Navigate to features')}
                >
                  Características
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-pricing"
                  onClick={() => console.log('Navigate to pricing')}
                >
                  Precios
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-download"
                  onClick={() => console.log('Navigate to download')}
                >
                  Descargar
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-help"
                  onClick={() => console.log('Navigate to help')}
                >
                  Centro de Ayuda
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact"
                  onClick={() => console.log('Navigate to contact')}
                >
                  Contáctanos
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-privacy"
                  onClick={() => console.log('Navigate to privacy')}
                >
                  Política de Privacidad
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ByronAI. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>para escritores creativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}