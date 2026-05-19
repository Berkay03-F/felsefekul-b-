"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Menu, X, User, LogIn, CheckCircle } from "lucide-react"

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/manifestomuz", label: "Manifestomuz" },
  { href: "/fikir-kursusu", label: "Fikir Kürsüsü" },
  { href: "/aklina-takilanlar", label: "Aklına Takılanlar" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/senlik-2026", label: "Şenlik 2026" },
  { href: "/yonetimimiz", label: "Yönetimimiz" },
  { href: "/iletisim", label: "İletişim" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const [loginKvkkChecked, setLoginKvkkChecked] = useState(false)
  const [registerKvkkChecked, setRegisterKvkkChecked] = useState(false)
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false)

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (registerKvkkChecked) {
      setShowRegistrationSuccess(true)
    }
  }

  const handleCloseDialog = () => {
    setAuthDialogOpen(false)
    setShowRegistrationSuccess(false)
    setLoginKvkkChecked(false)
    setRegisterKvkkChecked(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="AKÜ Felsefe Kulübü Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="hidden sm:block">
            <span className="font-serif text-lg font-semibold text-foreground">AKÜ Felsefe Kulübü</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50 rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Button & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Auth Dialog */}
          <Dialog open={authDialogOpen} onOpenChange={handleCloseDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2 border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary">
                <LogIn className="h-4 w-4" />
                Giriş Yap / Üye Ol
              </Button>
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <User className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-card border-border">
              {showRegistrationSuccess ? (
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
                        <strong>Üyelik ön başvurunuz başarıyla alınmıştır!</strong>
                      </p>
                      <p className="text-muted-foreground mt-3 leading-relaxed">
                        Kulüp standartlarımız gereği, verdiğiniz öğrenci e-postasına resmi onay ve tanışma maili 
                        yönetim ekibimiz tarafından manuel olarak gönderilecektir.
                      </p>
                      <p className="text-primary mt-4 font-medium">
                        Dijital Agora&apos;mıza gösterdiğiniz ilgi için teşekkür ederiz.
                      </p>
                    </div>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={handleCloseDialog}
                    >
                      Tamam
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-foreground">Dijital Agora&apos;ya Hoş Geldin</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      Felsefi tartışmalara katılmak için giriş yap veya üye ol.
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs defaultValue="login" className="mt-4">
                    <TabsList className="grid w-full grid-cols-2 bg-secondary">
                      <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Giriş Yap</TabsTrigger>
                      <TabsTrigger value="register" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Kayıt Ol</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email" className="text-foreground">Öğrenci E-postası</Label>
                        <Input id="login-email" type="email" placeholder="ornek@ogr.aku.edu.tr" className="bg-muted border-border text-foreground" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="login-password" className="text-foreground">Şifre</Label>
                        <Input id="login-password" type="password" placeholder="••••••••" className="bg-muted border-border text-foreground" />
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="login-kvkk" 
                          checked={loginKvkkChecked}
                          onCheckedChange={(checked) => setLoginKvkkChecked(checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor="login-kvkk" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                          <span className="text-primary">AKÜ Felsefe Kulübü KVKK Aydınlatma Metni</span>&apos;ni okudum ve onaylıyorum.
                        </Label>
                      </div>
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!loginKvkkChecked}
                      >
                        Giriş Yap
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        Şifreni mi unuttun?{" "}
                        <button className="text-primary hover:underline">
                          Sıfırla
                        </button>
                      </p>
                    </TabsContent>
                    <TabsContent value="register" className="mt-4 space-y-4">
                      <form onSubmit={handleRegisterSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="register-name" className="text-foreground">Ad Soyad</Label>
                          <Input id="register-name" placeholder="Adınız Soyadınız" className="bg-muted border-border text-foreground" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-email" className="text-foreground">Öğrenci E-postası</Label>
                          <Input id="register-email" type="email" placeholder="ornek@ogr.aku.edu.tr" className="bg-muted border-border text-foreground" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-password" className="text-foreground">Şifre</Label>
                          <Input id="register-password" type="password" placeholder="••••••••" className="bg-muted border-border text-foreground" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-password-confirm" className="text-foreground">Şifre Tekrar</Label>
                          <Input id="register-password-confirm" type="password" placeholder="••••••••" className="bg-muted border-border text-foreground" required />
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox 
                            id="register-kvkk" 
                            checked={registerKvkkChecked}
                            onCheckedChange={(checked) => setRegisterKvkkChecked(checked as boolean)}
                            className="mt-1"
                          />
                          <Label htmlFor="register-kvkk" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                            <span className="text-primary">AKÜ Felsefe Kulübü KVKK Aydınlatma Metni</span>&apos;ni okudum ve onaylıyorum.
                          </Label>
                        </div>
                        <Button 
                          type="submit"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={!registerKvkkChecked}
                        >
                          Kayıt Ol
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card border-border">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border pt-4 mt-4">
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      setIsOpen(false)
                      setAuthDialogOpen(true)
                    }}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Giriş Yap / Üye Ol
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
