"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Plus, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const sampleQuestions = [
  {
    id: 1,
    question: "Zaman bir illüzyon mudur?",
    author: "Emre K.",
    date: "18 Ocak 2024",
    answers: [
      { author: "Aylin S.", content: "Einstein'a göre zaman görecelidir. Algıladığımız zaman, fiziksel gerçeklikten farklı olabilir. Belki de 'şimdi' diye bir şey yoktur.", date: "18 Ocak 2024" },
      { author: "Burak T.", content: "Zaman algımız bilinçle bağlantılı. Sıkıldığımızda yavaş, eğlendiğimizde hızlı geçer. Bu da onun subjektif bir deneyim olduğunu gösterir.", date: "19 Ocak 2024" },
    ]
  },
  {
    id: 2,
    question: "Yapay zekanın ahlaki sorumluluğu var mıdır?",
    author: "Defne Y.",
    date: "16 Ocak 2024",
    answers: [
      { author: "Kaan M.", content: "Ahlaki sorumluluk bilinç gerektirir. Yapay zeka bilinçli değilse, sorumluluk onu programlayanlara aittir.", date: "17 Ocak 2024" },
    ]
  },
  {
    id: 3,
    question: "Mutluluk bir seçim midir, yoksa koşullara mı bağlıdır?",
    author: "Cem A.",
    date: "14 Ocak 2024",
    answers: [
      { author: "Sude N.", content: "Stoacılara göre mutluluk tamamen içsel bir durumdur ve iradeye bağlıdır. Dış koşullar sadece tercihlerimizdir.", date: "14 Ocak 2024" },
      { author: "Onur B.", content: "Ama temel ihtiyaçlar karşılanmadan mutluluktan bahsetmek zor. Maslow'un ihtiyaçlar hiyerarşisini düşünün.", date: "15 Ocak 2024" },
      { author: "Ela D.", content: "Belki de ikisi de doğrudur. Koşullar bir zemin oluşturur, ama o zemin üzerinde ne yapacağımız bize kalmış.", date: "15 Ocak 2024" },
    ]
  },
  {
    id: 4,
    question: "Bilgi güç müdür, yoksa sorumluluk mu?",
    author: "Yusuf H.",
    date: "12 Ocak 2024",
    answers: []
  },
]

export default function AklinaTakilanlarPage() {
  const [questions, setQuestions] = useState(sampleQuestions)
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)
  const [newAnswer, setNewAnswer] = useState<{ [key: number]: string }>({})
  const [newQuestion, setNewQuestion] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  const filteredQuestions = questions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAskQuestion = () => {
    if (newQuestion.trim()) {
      const question = {
        id: questions.length + 1,
        question: newQuestion,
        author: "Anonim",
        date: new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }),
        answers: []
      }
      setQuestions([question, ...questions])
      setNewQuestion("")
      setDialogOpen(false)
    }
  }

  const handleAddAnswer = (questionId: number) => {
    if (newAnswer[questionId]?.trim()) {
      setQuestions(questions.map(q => {
        if (q.id === questionId) {
          return {
            ...q,
            answers: [...q.answers, {
              author: "Anonim",
              content: newAnswer[questionId],
              date: new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
            }]
          }
        }
        return q
      }))
      setNewAnswer({ ...newAnswer, [questionId]: "" })
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Aklına Takılanlar
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Merak ettiğin felsefi soruları sor, topluluktan cevaplar al
          </p>

          {/* Search and Ask */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Soru ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg bg-card border-border"
              />
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="h-14 px-8">
                  <Plus className="w-5 h-5 mr-2" />
                  Soru Sor
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle>Yeni Soru Sor</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="question">Sorunuz</Label>
                    <Textarea
                      id="question"
                      placeholder="Aklınıza takılan felsefi soruyu yazın..."
                      rows={4}
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      className="bg-muted border-border resize-none"
                    />
                  </div>
                  <Button onClick={handleAskQuestion} className="w-full">
                    Soruyu Yayınla
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {filteredQuestions.map((q) => (
              <Card key={q.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">?</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {q.question}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{q.author}</span>
                        <span>•</span>
                        <span>{q.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {q.answers.length} Cevap
                      {expandedQuestion === q.id ? (
                        <ChevronUp className="w-4 h-4 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-2" />
                      )}
                    </Button>

                    {expandedQuestion === q.id && (
                      <div className="mt-4 space-y-4">
                        {/* Answers */}
                        {q.answers.length > 0 ? (
                          <div className="space-y-3">
                            {q.answers.map((answer, idx) => (
                              <div key={idx} className="flex gap-3 pl-4 border-l-2 border-primary/30">
                                <Avatar className="w-8 h-8 flex-shrink-0">
                                  <AvatarFallback className="bg-muted text-foreground text-xs">
                                    {answer.author.split(" ").map(n => n[0]).join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium text-foreground">{answer.author}</span>
                                    <span className="text-xs text-muted-foreground">{answer.date}</span>
                                  </div>
                                  <p className="text-muted-foreground text-sm leading-relaxed">{answer.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground text-sm italic pl-4">
                            Henüz cevap yok. İlk cevaplayan sen ol!
                          </p>
                        )}

                        {/* Add Answer */}
                        <div className="flex gap-2 mt-4">
                          <Input
                            placeholder="Cevabınızı yazın..."
                            value={newAnswer[q.id] || ""}
                            onChange={(e) => setNewAnswer({ ...newAnswer, [q.id]: e.target.value })}
                            className="bg-muted border-border"
                          />
                          <Button 
                            size="sm"
                            onClick={() => handleAddAnswer(q.id)}
                          >
                            Cevapla
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredQuestions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Aramanızla eşleşen soru bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
