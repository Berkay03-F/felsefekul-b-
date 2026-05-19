import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, BookOpen, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Biz Kimiz?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-pretty">
            14 Mayıs 2026 tarihinde yenilenen yönetimimizle birlikte, felsefeyi akademinin 
            duvarları arasından çıkarıp sokağa indirme misyonuyla yola çıktık. Amacımız, 
            felsefi düşünceyi herkes için erişilebilir kılmak ve sorgulamayı bir yaşam 
            biçimine dönüştürmek.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="bg-secondary/30 border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Entelektüel Standartlar</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Felsefi tartışmalarımızda derinlik ve kaliteyi ön planda tutuyoruz. 
                    Her düşünce, eleştirel bir bakış açısıyla ele alınır.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30 border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Öğrenci Kimliği</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Akademik ciddiyeti korurken, öğrenci enerjisini ve eğlenceyi 
                    asla kaybetmiyoruz. Felsefe ciddi ama sıkıcı olmak zorunda değil.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30 border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Açık Diyalog</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Her fikir tartışmaya açıktır. Ön yargısız bir ortamda, farklı 
                    düşüncelerin buluştuğu bir agora yaratıyoruz.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30 border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sürekli Gelişim</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Düzenli etkinlikler, atölyeler ve gezilerle hem bireysel hem de 
                    topluluk olarak sürekli öğrenmeyi ve gelişmeyi hedefliyoruz.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
