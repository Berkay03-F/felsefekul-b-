import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--border)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--border)_1px,_transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">Dijital Agora</span>
        </div>

        {/* Main Quote */}
        <blockquote className="max-w-4xl mx-auto mb-8">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
            &ldquo;Sorgulanmamış bir yaşam, yaşanmaya değer değildir.&rdquo;
          </p>
          <footer className="mt-6 text-lg sm:text-xl text-primary font-medium">
            — Sokrates
          </footer>
        </blockquote>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed text-pretty">
          Afyon Kocatepe Üniversitesi Felsefe Kulübü olarak felsefeyi toplumla buluşturuyor, 
          ön yargıları yıkıyor ve sorgulamayı interaktif hale getiriyoruz.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            <Link href="/manifesto">
              Manifestomuzu Keşfet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary/50 px-8">
            <Link href="/fikir-kursusu">
              Tartışmalara Katıl
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-widest">Keşfet</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
