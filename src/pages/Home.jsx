import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Boxes,
  FileText,
  Lightbulb,
  Upload,
  Users,
} from 'lucide-react'

const featureCards = [
  {
    title: 'Marketing Digital',
    text: 'Réactions des consommateurs devenant moins prévisibles, besoin de changement majeur.',
    color: 'from-rose-50 to-white',
  },
  {
    title: 'Marketing des Médias',
    text: 'Mieux capter les audiences et optimiser les budgets multi-canal.',
    color: 'from-indigo-50 to-white',
  },
  {
    title: 'Marketing SEO',
    text: 'Optimisation continue pour un trafic organique durable.',
    color: 'from-emerald-50 to-white',
  },
]

const serviceGrid = [
  { label: "Plan d'Affaires", icon: Lightbulb, bg: 'from-rose-100 to-white' },
  { label: 'Produit', icon: Boxes, bg: 'from-indigo-100 to-white' },
  { label: "Plan d'Analyse", icon: BarChart3, bg: 'from-emerald-50 to-white' },
  { label: 'Rapports', icon: FileText, bg: 'from-sky-50 to-white' },
  { label: 'Gestion', icon: Users, bg: 'from-blue-50 to-white' },
  { label: 'Soumission', icon: Upload, bg: 'from-amber-50 to-white' },
]

const stats = [
  { label: "Membres de l'Équipe", value: 150 },
  { label: 'Projets Réalisés', value: 1000 },
  { label: 'Clients Satisfaits', value: 500 },
  { label: 'Récompenses', value: 50 },
]

const testimonials = [
  {
    name: 'Jean Dupont',
    quote:
      'Un service exceptionnel ! Leur expertise en marketing digital a transformé notre entreprise.',
  },
  {
    name: 'Marie Lemoine',
    quote:
      'Une équipe professionnelle et réactive. Je recommande fortement cette agence !',
  },
  {
    name: 'Paul Martin',
    quote:
      'Des solutions innovantes et des résultats impressionnants en un temps record.',
  },
]

const team = [
  { name: 'Glenn Maxwell', role: 'Responsable Marketing', image: '/assets/images/team1.png' },
  { name: 'David Cover', role: 'Directeur Général', image: '/assets/images/team2.png' },
  { name: 'Suraiya Nesa', role: 'Responsable Marketing', image: '/assets/images/team3.png' },
  { name: 'John Donne', role: 'Fondateur ABC', image: '/assets/images/team4.png' },
]

const blogPosts = [
  {
    title: 'La Meilleure Stratégie Marketing Pour Chaque Entreprise',
    date: '01 Juillet 2022',
    image: '/assets/images/blog2.png',
  },
  {
    title: 'La Meilleure Stratégie Marketing Pour Chaque Entreprise',
    date: '01 Juillet 2022',
    image: '/assets/images/blog2.png',
  },
  {
    title: 'La Meilleure Stratégie Marketing Pour Chaque Entreprise',
    date: '01 Juillet 2022',
    image: '/assets/images/blog2.png',
  },
]

export default function Home() {
  const [statValues, setStatValues] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 800
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      setStatValues(stats.map((item) => Math.floor(progress * item.value) || 0))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh-rose">
        <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-white via-soft to-white" />
        <div className="section-shell relative z-10 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="eyebrow">Agence Digitale</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              Meilleure Plateforme{' '}
              <span className="text-accent">
                pour le Marketing et le Réseautage d&apos;Entreprise
              </span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Le marketing digital est une composante du marketing qui utilise Internet et les
              technologies numériques, comme les ordinateurs, les mobiles et d&apos;autres médias
              numériques, pour promouvoir des produits et services.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#services" className="btn-primary">
                En savoir plus
              </a>
              <a href="#services" className="btn-outline">
                Services Populaires
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src="/assets/images/author1.png"
                    alt="Client"
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-primary">+500 clients satisfaits</p>
                <p className="text-slate-500">Marketing, SEO, Réseaux sociaux</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 -left-10 -top-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -right-6 top-10 w-52 h-52 bg-primary/10 rounded-full blur-3xl" />
            <div className="glass-card p-6">
              <img
                src="/assets/images/banner-thumb.png"
                alt="Illustration de marketing"
                className="w-full max-w-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services & Fonctionnalités */}
      <section id="services" className="bg-white">
        <div className="section-shell py-16">
          <div className="text-center mb-12 space-y-3">
            <span className="eyebrow justify-center">Services & Fonctionnalités</span>
            <h2 className="section-title">Découvrez Nos Fonctionnalités</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Le marketing digital est une composante du marketing qui utilise Internet et les
              technologies numériques basées sur les ordinateurs, les mobiles et autres supports
              numériques pour promouvoir des produits et services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featureCards.map((card, idx) => (
              <div
                key={card.title}
                className={`p-6 text-center rounded-2xl border border-slate-100 bg-gradient-to-br ${card.color} shadow-xl shadow-slate-200/60 card-fade`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm text-primary font-semibold mb-4">
                  {card.title[0]}
                </div>
                <h5 className="font-bold text-lg text-primary">{card.title}</h5>
                <p className="text-slate-600 mt-3 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="bg-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-indigo opacity-80 pointer-events-none" />
        <div className="section-shell relative py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-5">
            <span className="eyebrow">À propos de l&apos;entreprise</span>
            <h2 className="section-title">Découvrez notre agence</h2>
            <h4 className="text-accent font-bold text-xl">
              Un marketing qui crée de la richesse pour chaque entreprise et pour votre business
            </h4>
            <p className="text-slate-600 leading-relaxed">
              L&apos;un des principaux changements survenus dans le marketing traditionnel a été
              &quot;l&apos;émergence du marketing digital&quot;. Cela a conduit à la réinvention des
              stratégies marketing afin de s&apos;adapter à ce changement majeur.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: 'Marketing Digital', icon: '/assets/images/digitalmarketing.png' },
                { label: 'Marketing de Produit', icon: '/assets/images/product marketing.png' },
                { label: 'Marketing Réseaux Sociaux', icon: '/assets/images/socialmedia.png' },
                { label: 'Solution SEO', icon: '/assets/images/seo.png' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 shadow-sm">
                  <img src={item.icon} alt={item.label} className="w-6 h-6" />
                  <span className="text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
            <a href="/services" className="btn-primary inline-flex">
              En savoir plus
            </a>
          </div>
          <div className="relative">
            <div className="absolute -z-10 -left-6 -top-6 w-52 h-52 bg-white/50 blur-3xl rounded-full" />
            <div className="glass-card p-6">
              <img
                src="/assets/images/about-thumb1.png"
                alt="Illustration agence"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grille services */}
      <section className="bg-white">
        <div className="section-shell py-16">
          <div className="text-center mb-12 space-y-3">
            <span className="eyebrow justify-center">Que faisons-nous ?</span>
            <h2 className="section-title">Découvrez Nos Meilleurs Services</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Le marketing digital est une composante du marketing qui utilise Internet et les
              technologies numériques basées sur les ordinateurs et autres supports pour promouvoir
              des produits et services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceGrid.map((service, idx) => (
              <div
                key={service.label}
                className="rounded-2xl bg-white/80 p-4 border border-slate-100 shadow-lg shadow-slate-200/40 hover:-translate-y-1 transition-transform card-fade"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${service.bg} p-3 mb-3 shadow-sm`}
                >
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-slate-800 text-sm">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exécution / plan marketing */}
      <section className="bg-soft">
        <div className="section-shell py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="eyebrow">Exécution</span>
            <h2 className="section-title">Exécution de Plan d&apos;Affaires & Marketing</h2>
            <p className="text-slate-600 leading-relaxed">
              L&apos;un des principaux changements survenus dans le marketing traditionnel a été
              l&apos;émergence du &quot;marketing digital&quot;. Cela a conduit à la réinvention des
              stratégies marketing pour s&apos;adapter à ce changement majeur.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -z-10 right-0 top-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="glass-card p-6">
              <img
                src="/assets/images/service-thumb1.png"
                alt="Plan Marketing"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="section-shell py-16">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <div
                key={item.label}
                className={`p-6 rounded-2xl border ${
                  idx === 1 ? 'bg-gradient-to-br from-primary to-indigo-800 text-white border-0' : 'border-slate-100'
                } shadow-lg shadow-slate-200/60 card-fade`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <h2 className="text-3xl font-bold">{statValues[idx]}+</h2>
                <p className={`mt-2 ${idx === 1 ? 'text-white/80' : 'text-slate-600'}`}>
                  <strong>{item.label}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-soft">
        <div className="section-shell py-16 text-center">
          <div className="mb-10 space-y-3">
            <span className="eyebrow justify-center">Témoignages</span>
            <h2 className="section-title">Ce que disent nos clients</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Découvrez les retours de nos clients satisfaits sur leurs expériences avec notre
              agence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl bg-white/90 border border-slate-100 shadow-lg shadow-slate-200/60 card-fade"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <img
                  src="/assets/images/author1.png"
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow"
                />
                <h5 className="font-semibold text-primary">{t.name}</h5>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white">
        <div className="section-shell py-16">
          <div className="text-center mb-12 space-y-3">
            <span className="eyebrow justify-center">Équipe</span>
            <h2 className="section-title">Découvrez Notre Équipe</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Le marketing digital est une composante du marketing qui utilise Internet et les
              technologies numériques pour promouvoir des produits et services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 text-center hover:-translate-y-1 transition-transform card-fade"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-28 h-28 mx-auto mb-3 shadow-sm"
                />
                <h5 className="font-semibold text-primary">{member.name}</h5>
                <p className="text-accent text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-soft">
        <div className="section-shell py-16">
          <div className="text-center mb-12 space-y-3">
            <span className="eyebrow justify-center">Nos derniers blog</span>
            <h2 className="section-title">Découvrez Nos Articles</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Tenez-vous informé des dernières tendances et stratégies en matière de marketing
              digital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <div
                key={`${post.title}-${idx}`}
                className="rounded-2xl bg-white/90 border border-slate-100 shadow-lg shadow-slate-200/60 overflow-hidden hover:-translate-y-1 transition-transform card-fade"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/5 text-primary">
                      Blog
                    </span>
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <span>Par Admin</span>
                  </div>
                  <h5 className="font-bold text-primary leading-snug">{post.title}</h5>
                  <p className="text-slate-600 text-sm">
                    L&apos;un des principaux changements survenus dans le marketing traditionnel a
                    été l&apos;émergence du marketing digital.
                  </p>
                  <button className="text-accent font-semibold text-sm inline-flex items-center gap-1">
                    Lire Plus &raquo;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white">
        <div className="section-shell py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="eyebrow">Restons connectés</span>
            <h2 className="section-title">Abonnez-vous à notre Newsletter</h2>
            <form className="flex flex-col sm:flex-row gap-3 mt-3">
              <input
                type="email"
                name="email"
                className="flex-1 rounded-full border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Entrez votre email"
                required
              />
              <button className="btn-primary px-6">Envoyer</button>
            </form>
          </div>
          <div className="text-center">
            <img
              src="/assets/images/subscribe-thumb.png"
              alt="Newsletter Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  )
}
