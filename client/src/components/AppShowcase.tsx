import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import lightScreenshot1 from "@assets/Screenshot_20250912_185631_com.byronai.byronai_edit_102583427858825_1757790133311.jpg";
import lightScreenshot2 from "@assets/Screenshot_20250912_185739_1757790133311.jpg";
import darkScreenshot1 from "@assets/Screenshot_20250912_190243_com.byronai.byronai_edit_102912061648879_1757798060890.jpg";
import darkScreenshot2 from "@assets/Screenshot_20250912_190322_com.byronai.byronai_edit_102898571797839_1757798068465.jpg";

export default function AppShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
  
  const highlights = [
    "Sugerencias de IA en tiempo real",
    "Interfaz hermosa y sin distracciones",
    "Compatibilidad con todas las formas poéticas",
    "Modo oscuro para escribir de noche",
    "Exporta y comparte tus creaciones"
  ];

  const lightScreenshots = [
    {
      src: lightScreenshot1,
      alt: "App ByronAI - Interfaz de Gestión de Poemas (Modo Claro)",
      title: "Gestiona tus Poemas"
    },
    {
      src: lightScreenshot2,
      alt: "App ByronAI - Interfaz de Editor de Poesía (Modo Claro)",
      title: "Escribe y Edita Poesía"
    }
  ];

  const darkScreenshots = [
    {
      src: darkScreenshot1,
      alt: "App ByronAI - Interfaz de Gestión de Poemas (Modo Oscuro)",
      title: "Gestiona tus Poemas"
    },
    {
      src: darkScreenshot2,
      alt: "App ByronAI - Interfaz de Editor de Poesía (Modo Oscuro)",
      title: "Escribe y Edita Poesía"
    }
  ];

  const screenshots = isDark ? darkScreenshots : lightScreenshots;

  const selectedScreenshot = screenshots[selectedIndex];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              El Compañero de Escritura
              <span className="text-primary"> Perfecto</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ByronAI combina el poder de la inteligencia artificial con una interfaz 
              intuitiva y hermosa diseñada específicamente para poetas y escritores creativos.
            </p>
            
            {/* Highlights List */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground" data-testid={`text-highlight-${index}`}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary" data-testid="text-accuracy">95%</div>
                <div className="text-sm text-muted-foreground">Precisión de las sugerencias</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary" data-testid="text-response-time">&lt; 100ms</div>
                <div className="text-sm text-muted-foreground">Tiempo de Respuesta</div>
              </div>
            </div>
          </div>
          
          {/* App Screenshots Gallery */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
              
              {/* Thumbnail Selection - Mobile: below preview, Desktop: left column */}
              <div className="order-2 lg:order-1 flex flex-col gap-3 lg:max-h-96">
                <h3 className="text-lg font-semibold text-foreground mb-2 lg:mb-4">Características de la app</h3>
                <div className="flex flex-row lg:flex-col gap-3">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`relative rounded-xl overflow-hidden shadow-lg transition-all hover-elevate ${
                        selectedIndex === index 
                          ? 'ring-2 ring-primary scale-100 opacity-100' 
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      data-testid={`button-select-screenshot-${index}`}
                      aria-selected={selectedIndex === index}
                    >
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-20 lg:w-32 h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-1 left-1 right-1">
                        <div className="text-xs text-white font-medium truncate">
                          {screenshot.title}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Preview - Mobile: above thumbnails, Desktop: right column */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative max-w-sm">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-blue-400/30 to-primary/30 rounded-3xl blur-3xl opacity-50" />
                  
                  {/* Main Preview */}
                  <div className="relative">
                    <img 
                      src={selectedScreenshot.src} 
                      alt={selectedScreenshot.alt}
                      className="w-full h-auto rounded-3xl shadow-2xl"
                      data-testid="img-preview"
                    />
                    
                    {/* Preview Title */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-border rounded-2xl px-4 py-2 shadow-lg">
                      <div className="text-sm font-semibold text-foreground text-center whitespace-nowrap" data-testid="text-preview-title">
                        {selectedScreenshot.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}