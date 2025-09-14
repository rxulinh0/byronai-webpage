import { Button } from "@/components/ui/button";
import { Download, Star, Users, Sparkles } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Comienza a Escribir Poesía
            <span className="text-primary"> Hoy</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Eleva tu escritura creativa con la forma de escribir poesía del futuro
          </p>
        </div>
        
        {/* Pre-Alpha Status */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-3">
            <span className="text-lg font-medium text-amber-600 dark:text-amber-400" data-testid="text-pre-alpha-status">
              Versión en pruebas (acceso anticipado)
            </span>
          </div>
        </div>
        
        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto min-w-[200px]"
            data-testid="button-download-android"
            onClick={() => console.log('Download Android app clicked')}
          >
            <Download className="mr-2 h-5 w-5" />
            Descargar para Android
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 h-auto min-w-[200px] backdrop-blur-sm"
            data-testid="button-coming-soon-ios"
            onClick={() => console.log('iOS coming soon clicked')}
          >
            iOS Próximamente
          </Button>
        </div>
        
        {/* Additional Info */}
        <p className="text-sm text-muted-foreground">
          Descarga gratuita • No se requiere tarjeta de crédito • Funciones premium disponibles
        </p>
        
        {/* Glassmorphic Card */}
        <div className="max-w-lg mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Oferta por tiempo limitado
          </h3>
          <p className="text-muted-foreground">
            ¡Funciones premium gratis durante el acceso anticipado!
          </p>
        </div>
      </div>
    </section>
  );
}