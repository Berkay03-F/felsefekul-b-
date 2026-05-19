"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Send, ChevronDown, ChevronUp } from "lucide-react"

const samplePosts = [
  {
    id: 1,
    author: "Zeynep A.",
    title: "Yapay Zeka Çağında İnsan Olmak",
    content: "Teknolojinin hızla geliştiği bu çağda, insanı insan yapan değerler nelerdir? Yapay zeka düşünebilir mi, yoksa sadece taklit mi eder? Bu soruların cevaplarını ararken, belki de kendi insanlığımızı yeniden keşfediyoruz...",
    date: "15 Ocak 2024",
    comments: [
      { author: "Mehmet D.", content: "Çok önemli bir konu. Bence bilinç, yapay zekanın asla sahip olamayacağı bir şey.", date: "16 Ocak 2024" },
      { author: "Ayşe K.", content: "Peki bilinç nedir? Onu bile tam olarak tanımlayamıyoruz.", date: "16 Ocak 2024" },
    ]
  },
  {
    id: 2,
    author: "Can B.",
    title: "Özgür İrade Yanılsaması",
    content: "Nörobilim araştırmaları, kararlarımızın bilinçli farkındalığımızdan önce beynimizde şekillendiğini gösteriyor. Peki bu durumda özgür iradeden bahsedebilir miyiz? Yoksa tüm seçimlerimiz önceden belirlenmiş mi?",
    date: "12 Ocak 2024",
    comments: [
      { author: "Deniz Y.", content: "Determinizm mi, özgürlük mü? Bu tartışma yüzyıllardır sürüyor.", date: "13 Ocak 2024" },
    ]
  },
  {
    id: 3,
    author: "Selin T.",
    title: "Dijital Çağda Yalnızlık Paradoksu",
    content: "Hiç olmadığımız kadar bağlantılıyız, ama hiç olmadığımız kadar da yalnızız. Sosyal medya bizi birbirimize yaklaştırıyor mu, yoksa gerçek ilişkilerden uzaklaştırıyor mu?",
    date: "10 Ocak 2024",
    comments: []
  },
]

export default function FikirKursusuPage() {
  const [posts, setPosts] = useState(samplePosts)
  const [expandedPost, setExpandedPost] = useState<number | null>(null)
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({})
  const [formData, setFormData] = useState({ author: "", title: "", content: "" })

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.author && formData.title && formData.content) {
      const newPost = {
        id: posts.length + 1,
        author: formData.author,
        title: formData.title,
        content: formData.content,
        date: new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }),
        comments: []
      }
      setPosts([newPost, ...posts])
      setFormData({ author: "", title: "", content: "" })
    }
  }

  const handleAddComment = (postId: number) => {
    if (newComment[postId]?.trim()) {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, {
              author: "Anonim",
              content: newComment[postId],
              date: new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
            }]
          }
        }
        return post
      }))
      setNewComment({ ...newComment, [postId]: "" })
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Fikir Kürsüsü
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Düşüncelerinizi paylaşın, tartışmalara katılın, yeni bakış açıları keşfedin
          </p>

          {/* Submission Form */}
          <Card className="bg-card border-border mb-12">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Fikirlerini Toplumla Paylaş
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitPost} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author">Yazar Adı</Label>
                    <Input 
                      id="author"
                      placeholder="Adınız..."
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="bg-muted border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Başlık</Label>
                    <Input 
                      id="title"
                      placeholder="Yazınızın başlığı..."
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Yazı İçeriği</Label>
                  <Textarea 
                    id="content"
                    placeholder="Düşüncelerinizi paylaşın..."
                    rows={5}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="bg-muted border-border resize-none"
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto">
                  Yayınla
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Posts List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Paylaşılan Yazılar</h2>
            {posts.map((post) => (
              <Card key={post.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-muted text-foreground text-sm">
                        {post.author.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">{post.author}</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{post.content}</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Tartışmaya Katıl ({post.comments.length})
                      {expandedPost === post.id ? (
                        <ChevronUp className="w-4 h-4 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-2" />
                      )}
                    </Button>

                    {expandedPost === post.id && (
                      <div className="mt-4 space-y-4">
                        {/* Comments */}
                        {post.comments.length > 0 && (
                          <div className="space-y-3 pl-4 border-l-2 border-border">
                            {post.comments.map((comment, idx) => (
                              <div key={idx} className="bg-muted/50 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-medium text-foreground">{comment.author}</span>
                                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{comment.content}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add Comment */}
                        <div className="flex gap-2">
                          <Input
                            placeholder="Yorumunuzu yazın..."
                            value={newComment[post.id] || ""}
                            onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                            className="bg-muted border-border"
                          />
                          <Button 
                            size="sm"
                            onClick={() => handleAddComment(post.id)}
                          >
                            Gönder
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
