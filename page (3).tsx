"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Calendar, MapPin, Clock, Users, Check } from "lucide-react"

// Gelecek etkinlikler verisi
const upcomingEvents = [
  {
    id: 1,
    category: "Film Okuması",
    categoryIcon: "🎬",
    title: "Matrix ve Simülasyon Teorisi",
    date: "26 Mayıs 2026, Salı",
    time: "15:30",
    location: "Felsefe Kulübü Odası",
    description: "Sonsuz çay ve kahve eşliğinde, Matrix filmi üzerinden gerçeklik kavramını masaya yatırıyoruz.",
    attendees: 12,
  },
  {
    id: 2,
    category: "Kavram Atölyesi",
    categoryIcon: "📖",
    title: "Spinoza ve Özgür İrade Tartışması",
    date: "28 Mayıs 2026, Perşembe",
    time: "14:00",
    location: "Amfi 2",
    description: "Spinoza'nın determinizmi ve özgür irade kavramı üzerine derinlemesine bir tartışma.",
    attendees: 8,
  },
  {
    id: 3,
    category: "Oyun Gecesi",
    categoryIcon: "🎲",
    title: "Felsefi Münazara Oyunu",
    date: "30 Mayıs 2026, Cumartesi",
    time: "19:00",
    location: "Felsefe Kulübü Odası",
    description: "Takımlar halinde felsefi argümanlarınızı savunun, en ikna edici ekip kazansın!",
    attendees: 16,
  },
  {
    id: 4,
    category: "Gezi",
    categoryIcon: "🏛️",
    title: "Afrodisias Antik Kenti Gezisi",
    date: "7 Haziran 2026, Cumartesi",
    time: "08:00",
    location: "Kampüs Ana Kapı (Otobüsle)",
    description: "Antik çağın felsefe okullarının izinde, Afrodisias'ın büyüleyici kalıntılarını keşfediyoruz.",
    attendees: 24,
  },
  {
    id: 5,
    category: "Kavram Atölyesi",
    categoryIcon: "📖",
    title: "Nietzsche: Üstinsan Kavramı",
    date: "12 Haziran 2026, Perşembe",
    time: "15:00",
    location: "Felsefe Kulübü Odası",
    description: "Nietzsche'nin en tartışmalı kavramlarından 'Übermensch' üzerine okuma ve tartışma.",
    attendees: 10,
  },
]

// Geçmiş etkinlikler verisi
const pastEvents = [
  {
    id: 101,
    title: "Yeni Yönetim Tanışma Toplantısı ve Çay Sohbeti",
    date: "14 Mayıs 2026",
    description: "2026 dönemi yönetim ekibi tanıtıldı, gelecek dönem planları paylaşıldı.",
  },
  {
    id: 102,
    title: "Platon'un Mağara Alegorisi Atölyesi",
    date: "8 Mayıs 2026",
    description: "Devlet kitabından mağara alegorisi okundu ve günümüz medyasıyla bağlantıları tartışıldı.",
  },
  {
    id: 103,
    title: "Fight Club Film Okuması",
    date: "1 Mayıs 2026",
    description: "Tüketim toplumu eleştirisi ve kimlik arayışı üzerine film analizi yapıldı.",
  },
  {
    id: 104,
    title: "Hierapolis Antik Kenti Gezisi",
    date: "20 Nisan 2026",
    description: "Pamukkale Hierapolis'te antik tiyatro ve nekropol alanı gezildi.",
  },
]

const categories = [
  { value: "all", label: "Tüm Kategoriler" },
  { value: "film", label: "Film Okuması" },
  { value: "atolye", label: "Kavram Atölyesi" },
  { value: "oyun", label: "Oyun Gecesi" },
  { value: "gezi", label: "Gezi" },
]

export default function EtkinliklerPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([])

  // Filtreleme fonksiyonu
  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === "all" || 
      (selectedCategory === "film" && event.category === "Film Okuması") ||
      (selectedCategory === "atolye" && event.category === "Kavram Atölyesi") ||
      (selectedCategory === "oyun" && event.category === "Oyun Gecesi") ||
      (selectedCategory === "gezi" && event.category === "Gezi")
    
    return matchesSearch && matchesCategory
  })

  const handleRegister = (eventId: number) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId])
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Etkinlik Takvimi
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Felsefeyi hayatın içinde tartışmak, sorgularken eğlenmek için yerinizi ayırtın.
          </p>
        </div>

        {/* Arama ve Filtreleme */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Etkinlik ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted border-border text-foreground"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px] bg-muted border-border text-foreground">
              <SelectValue placeholder="Kategoriye Göre Filtrele" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value} className="text-foreground">
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Gelecek Etkinlikler */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-primary" />
            Gelecek Etkinliklerimiz
          </h2>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>Aramanızla eşleşen etkinlik bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        {event.categoryIcon} {event.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{registeredEvents.includes(event.id) ? event.attendees + 1 : event.attendees}</span>
                      </div>
                    </div>
                    <CardTitle className="font-serif text-xl text-foreground">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </CardDescription>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <Button
                      className={`w-full ${
                        registeredEvents.includes(event.id)
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }`}
                      onClick={() => handleRegister(event.id)}
                      disabled={registeredEvents.includes(event.id)}
                    >
                      {registeredEvents.includes(event.id) ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Kaydınız Alındı!
                        </>
                      ) : (
                        "Katılacağım"
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Geçmiş Etkinlikler - Dijital Arşiv */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <span className="text-muted-foreground">📜</span>
            Neler Yaptık? (Geçmiş Etkinlikler)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="bg-muted/30 border-border/50 opacity-80 hover:opacity-100 transition-opacity">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-muted-foreground border-muted-foreground/30">
                      Tamamlandı
                    </Badge>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <CardTitle className="font-serif text-lg text-foreground/80 mt-2">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {/* Placeholder görsel alanı */}
                    <div className="w-20 h-20 bg-secondary/50 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-2xl opacity-50">📷</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
