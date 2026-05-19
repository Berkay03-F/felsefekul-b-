"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Sparkles, Users, GraduationCap, Handshake, CheckCircle } from "lucide-react"

export default function SenlikPage() {
  const [studentDialogOpen, setStudentDialogOpen] = useState(false)
  const [sponsorDialogOpen, setSponsorDialogOpen] = useState(false)
  const [studentKvkkChecked, setStudentKvkkChecked] = useState(false)
  const [sponsorKvkkChecked, setSponsorKvkkChecked] = useState(false)
  const [studentSuccess, setStudentSuccess] = useState(false)
  const [sponsorSuccess, setSponsorSuccess] = useState(false)

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (studentKvkkChecked) {
      setStudentSuccess(true)
    }
  }

  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (sponsorKvkkChecked) {
      setSponsorSuccess(true)
    }
  }

  const resetStudentDialog = () => {
    setStudentDialogOpen(false)
    setStudentKvkkChecked(false)
    setStudentSuccess(false)
  }

  const resetSponsorDialog = () => {
    setSponsorDialogOpen(false)
    setSponsorKvkkChecked(false)
    setSponsorSuccess(false)
  }

  const sahneler = [
    {
      id: "felsefe",
      title: "Felsefe Sahnesi",
      panels: [
        "Ziya Gökalp'te Kültür ve Medeniyet kavramlarının Yapay Zeka çağındaki karşılığı",
        "Ailenin Varoluşsal Analizi: Heidegger'den Günümüze",
        "Teknoloji ve İnsan: Felsefi Bir Sorgulama"
      ]
    },
    {
      id: "sosyoloji",
      title: "Sosyoloji Sahnesi",
      panels: [
        "Dijital Çağda Türk Aile Yapısının Dönüşümü",
        "Sosyal Medya ve Toplumsal İlişkiler",
        "Kentleşme ve Aile Dinamikleri"
      ]
    },
    {
      id: "psikoloji",
      title: "Psikoloji Sahnesi",
      panels: [
        "Değişen Nüfusta Bireyin Ruh Sağlığı ve Yalnızlaşma",
        "Dijital Çağda Aile İçi İletişim",
        "Z Kuşağı ve Kimlik Arayışı"
      ]
    },
    {
      id: "tarih",
      title: "Tarih & Kültür Sahnesi",
      panels: [
        "Tarihsel Süreçte Değişen Aile Rolleri",
        "Osmanlı'dan Cumhuriyet'e Aile Kurumu",
        "Kültürel Mirasın Geleceği"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Güz 2026 | Afyon Kocatepe Üniversitesi</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Sosyal Bilimler ve
              <br />
              <span className="text-primary">Kültür Şenliği 2026</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              &ldquo;Sosyal Bilimlerin Yeni Sahnesi&rdquo;
            </p>
            
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
              2026 Ziya Gökalp Yılı ve Türkiye Aile ve Nüfus 10 Yılı Vizyonu doğrultusunda, 
              akademik derinliği gençliğin modern enerjisiyle birleştiriyoruz. 
              Tüm öğrencilere ve akademisyenlere açık bu büyük şenlikte yerinizi alın.
            </p>
          </div>
        </section>

        {/* Two Focus Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Ziya Gökalp Card */}
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">🏛️</div>
                  <CardTitle className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                    2026 Ziya Gökalp Yılı
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    Türk sosyolojisinin kurucusu Ziya Gökalp&apos;in felsefi ve sosyolojik mirasını 
                    yeniden keşfediyoruz. Kültür, medeniyet ve millet kavramlarını modern perspektifle 
                    ele alıyor, düşünce dünyasını günümüzün sorunsallarıyla buluşturuyoruz.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Aile ve Nüfus Card */}
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                  <CardTitle className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                    Aile ve Nüfus 10 Yılı
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    Geleceğin toplumsal yapısını ve nüfus vizyonunu akademik bir bakış açısıyla 
                    inceliyoruz. Değişen aile dinamikleri, nesiller arası ilişkiler ve toplumsal 
                    dönüşümü disiplinlerarası bir yaklaşımla tartışıyoruz.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sahneler Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                &ldquo;Yeni Sahne&rdquo; Panel ve Söyleşi Akışı
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Her disiplinin kendi sahnesinde akademik derinlik ve güncel tartışmalar sizi bekliyor.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="felsefe" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-secondary h-auto p-1 gap-1">
                  {sahneler.map((sahne) => (
                    <TabsTrigger 
                      key={sahne.id} 
                      value={sahne.id}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-xs md:text-sm"
                    >
                      {sahne.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {sahneler.map((sahne) => (
                  <TabsContent key={sahne.id} value={sahne.id} className="mt-6">
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="font-serif text-xl text-primary">
                          {sahne.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {sahne.panels.map((panel, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium">
                                {index + 1}
                              </span>
                              <span className="text-muted-foreground">{panel}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Bu Sahnede Sen de Yer Al
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Sosyal bilimlerin yeni sahnesinde sesini duyur. Öğrenci, akademisyen veya sponsor olarak 
                bu büyük buluşmanın parçası ol.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Student/Academic Registration Dialog */}
                <Dialog open={studentDialogOpen} onOpenChange={(open) => {
                  if (!open) resetStudentDialog()
                  else setStudentDialogOpen(true)
                }}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Öğrenci/Akademisyen Katılım Kaydı
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-card border-border">
                    {studentSuccess ? (
                      <>
                        <DialogHeader>
                          <DialogTitle className="font-serif text-2xl text-foreground flex items-center gap-2">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                            Başvurunuz Alındı
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                          <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                            <p className="text-foreground leading-relaxed">
                              <strong>Şenlik katılım başvurunuz başarıyla alınmıştır!</strong>
                            </p>
                            <p className="text-muted-foreground mt-3 leading-relaxed">
                              Etkinlik detayları ve programa ilişkin bilgiler belirttiğiniz e-posta adresine gönderilecektir.
                            </p>
                            <p className="text-primary mt-4 font-medium">
                              Sosyal Bilimlerin Yeni Sahnesi&apos;nde görüşmek üzere!
                            </p>
                          </div>
                          <Button 
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={resetStudentDialog}
                          >
                            Tamam
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <DialogHeader>
                          <DialogTitle className="font-serif text-2xl text-foreground">Katılım Kaydı</DialogTitle>
                          <DialogDescription className="text-muted-foreground">
                            Şenliğe katılmak için bilgilerinizi doldurun.
                          </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4 mt-4" onSubmit={handleStudentSubmit}>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="student-name" className="text-foreground">Ad</Label>
                              <Input id="student-name" placeholder="Adınız" className="bg-muted border-border text-foreground" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="student-surname" className="text-foreground">Soyad</Label>
                              <Input id="student-surname" placeholder="Soyadınız" className="bg-muted border-border text-foreground" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="student-department" className="text-foreground">Bölüm</Label>
                            <Input id="student-department" placeholder="Örn: Felsefe Bölümü" className="bg-muted border-border text-foreground" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="student-email" className="text-foreground">E-posta</Label>
                            <Input id="student-email" type="email" placeholder="ornek@ogr.aku.edu.tr" className="bg-muted border-border text-foreground" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="student-message" className="text-foreground">Mesaj (Opsiyonel)</Label>
                            <Textarea id="student-message" placeholder="Katılım amacınız veya eklemek istedikleriniz..." className="bg-muted border-border text-foreground min-h-[100px]" />
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox 
                              id="student-kvkk" 
                              checked={studentKvkkChecked}
                              onCheckedChange={(checked) => setStudentKvkkChecked(checked as boolean)}
                              className="mt-1"
                            />
                            <Label htmlFor="student-kvkk" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                              <span className="text-primary">AKÜ Felsefe Kulübü KVKK Aydınlatma Metni</span>&apos;ni okudum ve onaylıyorum.
                            </Label>
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!studentKvkkChecked}
                          >
                            Başvuruyu Gönder
                          </Button>
                        </form>
                      </>
                    )}
                  </DialogContent>
                </Dialog>

                {/* Sponsor Dialog */}
                <Dialog open={sponsorDialogOpen} onOpenChange={(open) => {
                  if (!open) resetSponsorDialog()
                  else setSponsorDialogOpen(true)
                }}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary gap-2">
                      <Handshake className="h-5 w-5" />
                      Sponsorluk & Akademik Destek
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-card border-border">
                    {sponsorSuccess ? (
                      <>
                        <DialogHeader>
                          <DialogTitle className="font-serif text-2xl text-foreground flex items-center gap-2">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                            Başvurunuz Alındı
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                          <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                            <p className="text-foreground leading-relaxed">
                              <strong>Sponsorluk başvurunuz başarıyla alınmıştır!</strong>
                            </p>
                            <p className="text-muted-foreground mt-3 leading-relaxed">
                              Yönetim ekibimiz en kısa sürede sizinle iletişime geçecektir.
                            </p>
                            <p className="text-primary mt-4 font-medium">
                              Desteğiniz için teşekkür ederiz!
                            </p>
                          </div>
                          <Button 
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={resetSponsorDialog}
                          >
                            Tamam
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <DialogHeader>
                          <DialogTitle className="font-serif text-2xl text-foreground">Sponsorluk Başvurusu</DialogTitle>
                          <DialogDescription className="text-muted-foreground">
                            Şenliğe sponsor veya akademik destek sağlamak için bilgilerinizi doldurun.
                          </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4 mt-4" onSubmit={handleSponsorSubmit}>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="sponsor-name" className="text-foreground">Ad</Label>
                              <Input id="sponsor-name" placeholder="Adınız" className="bg-muted border-border text-foreground" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="sponsor-surname" className="text-foreground">Soyad</Label>
                              <Input id="sponsor-surname" placeholder="Soyadınız" className="bg-muted border-border text-foreground" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sponsor-organization" className="text-foreground">Kurum/Kuruluş</Label>
                            <Input id="sponsor-organization" placeholder="Örn: ABC Şirketi veya XYZ Üniversitesi" className="bg-muted border-border text-foreground" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sponsor-email" className="text-foreground">E-posta</Label>
                            <Input id="sponsor-email" type="email" placeholder="ornek@sirket.com" className="bg-muted border-border text-foreground" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sponsor-message" className="text-foreground">Mesaj</Label>
                            <Textarea id="sponsor-message" placeholder="Destek türünüz ve detaylar..." className="bg-muted border-border text-foreground min-h-[100px]" required />
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox 
                              id="sponsor-kvkk" 
                              checked={sponsorKvkkChecked}
                              onCheckedChange={(checked) => setSponsorKvkkChecked(checked as boolean)}
                              className="mt-1"
                            />
                            <Label htmlFor="sponsor-kvkk" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                              <span className="text-primary">AKÜ Felsefe Kulübü KVKK Aydınlatma Metni</span>&apos;ni okudum ve onaylıyorum.
                            </Label>
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!sponsorKvkkChecked}
                          >
                            Başvuruyu Gönder
                          </Button>
                        </form>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>500+ Beklenen Katılımcı</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>20+ Akademisyen</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
