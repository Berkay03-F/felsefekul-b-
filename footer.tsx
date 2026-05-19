"use client"

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">
            Manifestomuz
          </h1>
          <div className="prose prose-invert max-w-none">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Biz, Afyon Kocatepe Üniversitesi Felsefe Kulübü olarak, düşüncenin sınırlarını zorlamak ve 
                sorgulamanın özgürleştirici gücüne inanıyoruz. Antik Yunan agoralarından dijital çağın 
                forumlarına uzanan bu yolculukta, felsefenin evrensel dilini konuşuyoruz.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Amacımız, eleştirel düşünceyi teşvik etmek, farklı bakış açılarını bir araya getirmek ve 
                entelektüel merakı canlı tutmaktır. Her soru, yeni bir kapı açar; her tartışma, 
                ufkumuzu genişletir.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-xl text-foreground">
                &ldquo;Felsefe yapmak, yaşamayı öğrenmektir.&rdquo;
                <footer className="text-muted-foreground text-base mt-2 not-italic">— Montaigne</footer>
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dijital Agora&apos;mızda herkes eşittir. Burada unvanlar değil, fikirler konuşur. 
                Sorgulamaktan korkmayın, çünkü sorgulamak özgürlüğe atılan ilk adımdır.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
