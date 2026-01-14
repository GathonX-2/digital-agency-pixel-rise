import { ArrowRight, BarChart3, FileText, Lightbulb, Users, TrendingUp } from 'lucide-react'

const serviceBadges = [
  { label: "Plan d'Affaires", color: 'bg-rose-50', icon: Lightbulb },
  { label: 'Produit', color: 'bg-indigo-50', icon: BarChart3 },
  { label: "Plan d'Analyse", color: 'bg-emerald-50', icon: FileText },
  { label: 'Rapports', color: 'bg-sky-50', icon: FileText },
  { label: 'Gestion', color: 'bg-blue-50', icon: Users },
  { label: 'Soumission', color: 'bg-amber-50', icon: TrendingUp },
]

const aboutServices = [
  { label: 'Stratégie Digitale', icon: '/assets/images/digitalmarketing.png' },
  { label: 'Publicité en Ligne', icon: '/assets/images/product marketing.png' },
  { label: 'Gestion des Réseaux Sociaux', icon: '/assets/images/socialmedia.png' },
  { label: 'Optimisation SEO', icon: '/assets/images/seo.png' },
]

export default function Apropos() {
  return (
    <>
      <section
        className="relative text-white overflow-hidden"
        style={{ background: "url('/assets/images/computer.jpg') no-repeat center/cover" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/70" />
        <div className="section-shell relative py-16 text-center space-y-4">
          <span className="eyebrow justify-center bg-white/10 text-white border border-white/20">
            À propos
          </span>
          <h2 className="text-4xl font-bold">À Propos</h2>
          <p className="text-white/80">
            <a href="/" className="text-white/70">Accueil</a>
            <span className="mx-2 text-white/70">|</span>
            <span className="text-white font-semibold">À Propos</span>
          </p>
        </div>
      </section>

      <section className="py-16 section-shell">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="eyebrow">À propos de notre agence</span>
            <h2 className="section-title">Transformez Votre Présence Digitale</h2>
            <h4 className="text-accent font-bold text-xl">
              Des stratégies numériques pour booster votre croissance
            </h4>
            <p className="text-slate-600">
              Chez nous, le digital n&apos;est pas une option, c&apos;est un levier essentiel pour
              atteindre vos objectifs. Notre expertise combine innovation et performance pour offrir
              des solutions sur mesure qui répondent à vos besoins.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {aboutServices.map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-xl bg-soft px-3 py-2">
                  <img src={item.icon} alt={item.label} className="w-7 h-7" />
                  <span className="text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
            <a href="/services" className="btn-primary inline-flex">
              Découvrir nos Services
            </a>
          </div>
          <div className="relative">
            <div className="absolute -z-10 -left-8 top-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
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

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="text-center mb-10 space-y-3">
            <span className="eyebrow justify-center">Que faisons-nous ?</span>
            <h2 className="section-title">Découvrez Nos Meilleurs Services</h2>
            <p className="text-slate-600">
              Le marketing digital est une composante du marketing qui utilise Internet et les
              technologies numériques basées sur les ordinateurs et autres supports pour promouvoir
              des produits et services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceBadges.map((item) => (
              <div
                key={item.label}
                className={`text-center p-4 rounded-xl ${item.color} shadow-lg shadow-slate-200/50 border border-slate-100`}
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <h6 className="font-semibold text-slate-800 text-sm">{item.label}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
