"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const teamMembers = [
  {
    role: "Kulüp Başkanı",
    name: "Berkay Şahin",
    motto: "Sorgulamak özgürlüğe atılan ilk adımdır.",
    initials: "BŞ",
  },
  {
    role: "Başkan Yardımcısı",
    name: "Pırlantı Sağanak Zeyrek",
    motto: "Anlamak, sevmektir.",
    initials: "PSZ",
  },
  {
    role: "Genel Sekreter",
    name: "Sudenaz Şahan",
    motto: "Bilgi, paylaşıldıkça çoğalır.",
    initials: "SŞ",
  },
  {
    role: "Site Sorumlusu",
    name: "İbrahim Berkay Açıkgöz",
    motto: "En iyiyi görüyorum, beğeniyorum; fakat en kötüyü yapıyorum.",
    initials: "İBA",
  },
]

export default function YonetimimizPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Yönetimimiz
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Afyon Kocatepe Üniversitesi Felsefe Kulübü&apos;nün değerli yönetim kadrosu
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Avatar className="w-28 h-28 mx-auto border-2 border-border group-hover:border-primary/50 transition-colors">
                      <AvatarFallback className="bg-muted text-foreground text-2xl font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {member.role}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {member.name}
                  </h3>
                  
                  <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                    &ldquo;{member.motto}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
