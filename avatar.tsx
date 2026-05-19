import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, BookMarked, Gamepad2, MapPin, Coffee } from "lucide-react"

const features = [
  {
    icon: Film,
    title: "Film Günleri",
    description: "Felsefi temalar işleyen filmleri birlikte izliyor, ardından derinlemesine tartışıyoruz.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: BookMarked,
    title: "Kitap & Kavram Atölyeleri",
    description: "Klasik ve çağdaş felsefi metinleri, temel kavramları birlikte okuyup analiz ediyoruz.",
    color: "text-accent",
    bgColor: "bg-accent/20"
  },
  {
    icon: Gamepad2,
    title: "Oyun Etkinlikleri",
    description: "Felsefi düşünme oyunları ve interaktif aktivitelerle öğrenmeyi eğlenceye dönüştürüyoruz.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: MapPin,
    title: "Antik Kent Gezileri",
    description: "Anadolu&apos;nun kadim topraklarında, felsefenin doğduğu yerleri keşfediyoruz.",
    color: "text-accent",
    bgColor: "bg-accent/20"
  },
  {
    icon: Coffee,
    title: "Sonsuz Çay & Kahve",
    description: "Sohbetlerimiz hiç bitmesin diye, çay ve kahvemiz her zaman hazır.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Neler Sunuyoruz?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Felsefe kulübümüzde sizi bekleyen etkinlikler ve imkanlar
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-secondary/30 border border-border/50 max-w-3xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl text-foreground mb-2">
            &ldquo;Felsefe, hayatı anlamlandırma sanatıdır.&rdquo;
          </p>
          <p className="text-muted-foreground">
            Bizimle bu yolculuğa katılın.
          </p>
        </div>
      </div>
    </section>
  )
}
