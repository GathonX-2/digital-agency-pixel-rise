import { ArrowRight, CheckCircle, FileText, Lightbulb, List, MapPin } from 'lucide-react'
import { toast } from 'react-hot-toast'

const sidebarLinks = [
  'Rapports',
  'Analyse',
  'Détails Produit',
  'Développement Produit',
  'Consultation Marketing',
  'Distribution Produit',
]

const projectCards = [
  {
    title: 'Analyse Financière',
    text: 'Analyse approfondie des données financières pour des décisions stratégiques.',
    image: '/assets/images/blog6.jpg',
  },
  {
    title: 'Gestion de Projets',
    text: 'Des outils performants pour une gestion efficace des équipes et des tâches.',
    image: '/assets/images/blog14.jpg',
  },
  {
    title: 'Consultation Marketing',
    text: 'Stratégies marketing sur mesure pour atteindre vos objectifs commerciaux.',
    image: '/assets/images/blog10.jpg',
  },
  {
    title: 'Consultation Marketing',
    text: 'Stratégies marketing sur mesure pour atteindre vos objectifs commerciaux.',
    image: '/assets/images/blog6.jpg',
  },
]

const serviceBadges = [
  { label: "Plan d'Affaires", color: 'bg-rose-50', icon: Lightbulb },
  { label: 'Produit', color: 'bg-indigo-50', icon: List },
  { label: "Plan d'Analyse", color: 'bg-emerald-50', icon: FileText },
  { label: 'Rapports', color: 'bg-sky-50', icon: FileText },
  { label: 'Gestion', color: 'bg-blue-50', icon: FileText },
  { label: 'Soumission', color: 'bg-amber-50', icon: FileText },
]

const gallery = new Array(8).fill('/assets/images/services.jpg')

const whyUs = [
  {
    number: '01.',
    title: 'Technologies Modernes',
    text: 'Nous utilisons les dernières technologies pour garantir des performances optimales.',
  },
  {
    number: '02.',
    title: 'Solutions Uniques',
    text: 'Services personnalisés conçus pour répondre à vos objectifs spécifiques.',
  },
  {
    number: '03.',
    title: 'Stratégies Puissantes',
    text: 'Décisions guidées par la donnée pour accélérer votre croissance.',
  },
]

export default function Services() {
  const handleNewsletter = (event) => {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email')
    toast.success(`Merci pour votre inscription${email ? `, ${email}` : ''} !`)
    event.currentTarget.reset()
  }

  return (
    <>
      <section
        className="relative text-white overflow-hidden"
        style={{
          background: "url('/assets/images/office.jpg') no-repeat center/cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/70" />
        <div className="section-shell relative py-16 text-center space-y-4">
          <span className="eyebrow justify-center bg-white/10 text-white border border-white/20">
            Nos services
          </span>
          <h2 className="text-4xl font-bold">Services</h2>
          <p className="text-white/80">
            <a href="/" className="text-white/70">
              Accueil
            </a>
            <span className="mx-2 text-white/70">|</span>
            <span className="text-white font-semibold">Services</span>
          </p>
        </div>
      </section>

      <section className="py-16 section-shell grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <img
            src="/assets/images/team-meeting.jpg"
            alt="Réunion d'équipe"
            className="w-full h-full object-cover relative"
          />
        </div>
        <div className="glass-card p-6">
          <h3 className="text-2xl font-bold text-primary border-b border-slate-100 pb-3 mb-4">
            Services
          </h3>
          <ul className="divide-y divide-slate-200">
            {sidebarLinks.map((link) => (
              <li key={link} className="py-3 flex items-center justify-between">
                <span className="text-slate-700">{link}</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="text-center mb-12 space-y-3">
            <span className="eyebrow justify-center">Nos Service</span>
            <h2 className="section-title">Nos Service</h2>
            <p className="text-slate-600">
              Découvrez quelques-uns de nos services récents qui mettent en avant notre expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {projectCards.map((project) => (
              <div
                key={project.title}
                className="relative group rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
              >
                <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end text-left p-5">
                  <h4 className="text-white font-semibold text-lg">{project.title}</h4>
                  <p className="text-white/80 text-sm mt-2">{project.text}</p>
                  <button className="mt-3 px-3 py-1 rounded-full bg-white text-primary text-sm font-semibold inline-flex items-center gap-1">
                    Voir Plus »
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-shell">
        <div className="grid lg:grid-cols-1 gap-10">
          <div className="space-y-4 glass-card p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Aperçu</h2>
            <p className="text-slate-600 leading-relaxed">
              Le marketing digital est une composante essentielle des services modernes qui utilise
              Internet et les technologies numériques telles que les ordinateurs, les smartphones et
              d'autres plateformes numériques pour promouvoir des produits et des services.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Notre Stratégie</h2>
            <p className="text-slate-600 leading-relaxed">
              Notre stratégie repose sur des solutions innovantes telles que l'optimisation SEO, la
              gestion des réseaux sociaux, la publicité en ligne et l'analyse des données afin
              d'aider nos clients à maximiser leur impact et atteindre leurs objectifs commerciaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="text-center mb-10">
            <span className="eyebrow justify-center">Que faisons-nous ?</span>
            <h2 className="section-title">Découvrez Nos Meilleurs Services</h2>
            <p className="text-slate-600">
              Le marketing digital est une composante du marketing qui utilise Internet et les
              technologies numériques.
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

      <section className="py-16 section-shell grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-primary">
            Exécution de Plan d'Affaires & Marketing
          </h2>
          <p className="text-slate-600 leading-relaxed">
            L'un des principaux changements survenus dans le marketing traditionnel a été
            l'émergence du "marketing digital".
          </p>
        </div>
        <div className="text-center">
          <img
            src="/assets/images/service-thumb1.png"
            alt="Plan Marketing"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="text-center mb-10">
            <span className="eyebrow justify-center">Galerie</span>
            <h2 className="section-title">Notre Galerie de Services</h2>
            <p className="text-slate-600">
              Découvrez nos produits et services exclusifs conçus pour répondre à vos besoins.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="rounded-2xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50"
              >
                <img src={src} alt={`Service ${idx + 1}`} className="w-full h-44 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary">
            Pourquoi Choisir Nos Services Digitaux ?
          </h2>
          <p className="text-slate-600">
            Nos solutions numériques innovantes répondent aux besoins des entreprises en leur
            offrant des outils modernes pour réussir dans un monde digitalisé.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {whyUs.map((item) => (
            <div key={item.number} className="p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-green-600 font-bold text-xl">{item.number}</h3>
              <h4 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-3xl font-bold text-primary">
              Transformation Digitale & Stratégies Marketing
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Nous utilisons des technologies innovantes pour développer des stratégies marketing
              personnalisées, adaptées à vos besoins spécifiques.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> Optimisation des plateformes digitales
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> Analyse des données et décisions guidées
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> Stratégies créatives orientées résultats
              </div>
            </div>
          </div>
          <div className="text-center">
            <img
              src="/assets/images/service-thumb1.png"
              alt="Plan Marketing"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-3">
            <h6 className="text-primary font-semibold">RESTONS CONNECTÉS</h6>
            <h2 className="text-3xl font-bold text-primary">Abonnez-vous à notre Newsletter</h2>
            <form className="flex flex-col sm:flex-row gap-3 mt-3" onSubmit={handleNewsletter}>
              <input
                type="email"
                name="email"
                className="flex-1 rounded-full border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Entrez votre email"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-white font-semibold shadow-md shadow-rose-200 hover:-translate-y-0.5 transition-transform"
              >
                Envoyer <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-slate-600 text-sm">
              Le marketing digital est une composante du marketing qui utilise Internet et les
              technologies numériques pour promouvoir des produits et services.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/assets/images/subscribe-thumb.png"
              alt="Newsletter"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  )
}
