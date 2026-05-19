"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Footer() {
  const [kvkkOpen, setKvkkOpen] = useState(false)

  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-serif text-base font-bold text-primary-foreground">Φ</span>
            </div>
            <span className="font-serif text-base font-semibold text-foreground">AKÜ Felsefe Kulübü</span>
          </div>
          
          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/manifestomuz" className="text-muted-foreground hover:text-primary transition-colors">
              Manifestomuz
            </Link>
            <Link href="/fikir-kursusu" className="text-muted-foreground hover:text-primary transition-colors">
              Fikir Kürsüsü
            </Link>
            <Link href="/iletisim" className="text-muted-foreground hover:text-primary transition-colors">
              İletişim
            </Link>
          </nav>

          {/* Disclaimer */}
          <div className="max-w-2xl text-center">
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              Bu site AKÜ Felsefe Kulübü öğrencileri tarafından yönetilen bağımsız bir topluluk platformudur. 
              Üniversitenin resmi web sitesi değildir.
            </p>
          </div>

          {/* Copyright & KVKK */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground/50">
            <span>© {new Date().getFullYear()} AKÜ Felsefe Kulübü. Tüm hakları saklıdır.</span>
            <span className="hidden sm:inline">|</span>
            <Dialog open={kvkkOpen} onOpenChange={setKvkkOpen}>
              <DialogTrigger asChild>
                <button className="text-muted-foreground/70 hover:text-primary transition-colors underline-offset-2 hover:underline">
                  KVKK Aydınlatma Metni
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl bg-card border-border max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-foreground">
                    KVKK Aydınlatma Metni
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <section>
                      <h3 className="font-semibold text-foreground mb-2">1. Veri Sorumlusu</h3>
                      <p>
                        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz; 
                        veri sorumlusu olarak Afyon Kocatepe Üniversitesi Felsefe Kulübü tarafından aşağıda 
                        açıklanan kapsamda işlenebilecektir.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-2">2. Kişisel Verilerin İşlenme Amacı</h3>
                      <p>Toplanan kişisel verileriniz;</p>
                      <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                        <li>Kulüp üyelik işlemlerinin yürütülmesi</li>
                        <li>Etkinlik ve organizasyonların planlanması ve duyurulması</li>
                        <li>İletişim faaliyetlerinin gerçekleştirilmesi</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        <li>Kulüp faaliyetlerinin iyileştirilmesi</li>
                      </ul>
                      <p className="mt-2">amaçlarıyla KVKK&apos;nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları kapsamında işlenecektir.</p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-2">3. İşlenen Kişisel Veriler</h3>
                      <p>Kulüp tarafından işlenen kişisel veriler şunlardır:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                        <li>Kimlik bilgileri (ad, soyad)</li>
                        <li>İletişim bilgileri (e-posta adresi, telefon numarası)</li>
                        <li>Eğitim bilgileri (öğrenci numarası, bölüm, fakülte)</li>
                        <li>Dijital iz bilgileri (IP adresi, çerez verileri)</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-2">4. Kişisel Verilerin Aktarılması</h3>
                      <p>
                        Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, 
                        Afyon Kocatepe Üniversitesi&apos;nin ilgili birimleri ve yasal zorunluluk halinde yetkili kamu 
                        kurum ve kuruluşları ile paylaşılabilecektir.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-2">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
                      <p>
                        Kişisel verileriniz, kulüp web sitesi üzerinden elektronik ortamda, üyelik formları, 
                        etkinlik kayıt formları ve iletişim formları aracılığıyla toplanmaktadır. Bu veriler, 
                        KVKK&apos;nın 5. maddesinde belirtilen &quot;ilgili kişinin açık rızası&quot; ve &quot;bir sözleşmenin 
                        kurulması veya ifasıyla doğrudan doğruya ilgili olması&quot; hukuki sebeplerine dayanılarak 
                        işlenmektedir.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-2">6. Kişisel Veri Sahibinin Hakları</h3>
                      <p>KVKK&apos;nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak;</p>
                      <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                        <li>Kişisel verilerinin işlenip işlenmediğini öğrenme</li>
                        <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                        <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                        <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                        <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                        <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                        <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                        <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
                      </ul>
                      <p className="mt-2">haklarına sahiptir.</p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-2">7. Başvuru Yöntemi</h3>
                      <p>
                        Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile 
                        KVKK&apos;nın 11. maddesinde belirtilen haklardan kullanmayı talep ettiğiniz hakkınıza yönelik 
                        açıklamalarınızı içeren talebinizi; felsefekulubu@aku.edu.tr e-posta adresine göndererek 
                        iletebilirsiniz.
                      </p>
                    </section>

                    <section className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground/70">
                        Son güncelleme: Ocak 2026 | AKÜ Felsefe Kulübü
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  )
}
