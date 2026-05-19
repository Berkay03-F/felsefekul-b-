"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MapPin, Instagram, Send, CheckCircle } from "lucide-react"

export default function IletisimPage() {
  const [kvkkChecked, setKvkkChecked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (kvkkChecked) {
      setShowSuccess(true)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            İletişim
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya işbirliği talepleriniz için bize ulaşın
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Mesaj Gönder
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <div className="p-6 bg-secondary/50 rounded-lg border border-border text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Mesajınız Gönderildi!</h3>
                    <p className="text-muted-foreground text-sm">
                      En kısa sürede size dönüş yapacağız.
                    </p>
                    <Button 
                      className="mt-4"
                      variant="outline"
                      onClick={() => {
                        setShowSuccess(false)
                        setKvkkChecked(false)
                      }}
                    >
                      Yeni Mesaj Gönder
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Adınız</Label>
                      <Input 
                        id="name"
                        placeholder="Adınız Soyadınız"
                        className="bg-muted border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="ornek@aku.edu.tr"
                        className="bg-muted border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Konu</Label>
                      <Input 
                        id="subject"
                        placeholder="Mesajınızın konusu"
                        className="bg-muted border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mesajınız</Label>
                      <Textarea 
                        id="message"
                        placeholder="Mesajınızı buraya yazın..."
                        rows={5}
                        className="bg-muted border-border resize-none"
                        required
                      />
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="contact-kvkk" 
                        checked={kvkkChecked}
                        onCheckedChange={(checked) => setKvkkChecked(checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="contact-kvkk" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                        <span className="text-primary">AKÜ Felsefe Kulübü KVKK Aydınlatma Metni</span>&apos;ni okudum ve onaylıyorum.
                      </Label>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!kvkkChecked}
                    >
                      Gönder
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                      <p className="text-muted-foreground">felsefekulubu@aku.edu.tr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                      <p className="text-muted-foreground">
                        Afyon Kocatepe Üniversitesi<br />
                        Fen-Edebiyat Fakültesi<br />
                        Felsefe Bölümü<br />
                        03200 Afyonkarahisar
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Sosyal Medya</h3>
                      <a 
                        href="https://instagram.com/akufelsefekulubu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @akufelsefekulubu
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Kulüp Odası</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Kulüp odamız Fen-Edebiyat Fakültesi B Blok, 2. Kat&apos;ta bulunmaktadır. 
                    Hafta içi 10:00-17:00 saatleri arasında ziyaret edebilirsiniz. 
                    Çay ve kahve her zaman hazır!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
