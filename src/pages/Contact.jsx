import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Send } from 'lucide-react'
import { toast } from 'react-hot-toast'

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/exemple', color: 'text-primary' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/exemple', color: 'text-rose-500' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/exemple', color: 'text-red-500' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/exemple', color: 'text-blue-600' },
]

const faqs = [
  {
    q: 'Quels sont les avantages du marketing digital ?',
    a: 'Touchez une audience ciblée, mesurez en temps réel et maximisez le ROI avec des campagnes personnalisées.',
  },
  {
    q: "Qu'est-ce que le SEO et pourquoi est-il important ?",
    a: "Le SEO optimise vos contenus pour les moteurs de recherche et améliore votre visibilité organique.",
  },
  {
    q: 'Comment les réseaux sociaux contribuent-ils à une stratégie digitale ?',
    a: 'Ils engagent votre audience, renforcent la notoriété et génèrent des leads via des contenus pertinents.',
  },
  {
    q: 'Quels outils utilisez-vous pour analyser les performances digitales ?',
    a: 'Google Analytics, SEMrush, HubSpot pour suivre, identifier les opportunités et optimiser les campagnes.',
  },
]

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    toast.success(`Message envoyé${name ? `, merci ${name}` : ''} !`)
    event.currentTarget.reset()
  }

  return (
    <>
      <section
        className="relative text-white overflow-hidden"
        style={{ background: "url('/assets/images/call.jpg') no-repeat center/cover" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/70" />
        <div className="section-shell relative py-16 text-center space-y-4">
          <span className="eyebrow justify-center bg-white/10 text-white border border-white/20">
            Contact
          </span>
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-white/80">
            <a href="/" className="text-white/70">Accueil</a>
            <span className="mx-2 text-white/70">|</span>
            <span className="text-white font-semibold">Contact</span>
          </p>
        </div>
      </section>

      <section className="py-16 section-shell">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-bold text-primary">Contactez-nous</h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 glass-card border border-white/50 p-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Votre Nom</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Nom *"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Email *"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Sujet</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Sujet *"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Votre Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Écrivez votre message"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-white font-semibold shadow-md shadow-rose-200 hover:-translate-y-0.5 transition-transform"
              >
                <Send className="w-4 h-4" /> Envoyer Maintenant
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-5 space-y-3">
              <h5 className="text-accent font-bold">Adresse Email</h5>
              <p className="text-slate-600">contact@islandmanager.com</p>
              <p className="text-slate-600">support@islandmanager.com</p>
              <h5 className="text-accent font-bold mt-4">WhatsApp</h5>
              <p className="text-slate-600">(+261 32 00 000 00)</p>
              <p className="text-slate-600">(+261 33 00 000 00)</p>
            </div>
            <div className="glass-card p-5 space-y-3">
              <h5 className="text-accent font-bold">Réseaux Sociaux</h5>
              <ul className="space-y-3">
                {socialLinks.map((s) => (
                  <li key={s.label} className="flex items-center gap-3">
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                    <a href={s.href} target="_blank" className="text-slate-700 hover:text-primary transition-colors">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-5 space-y-3">
              <h5 className="text-accent font-bold">Adresse</h5>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Hell-Ville, Nosy-Be, DIANA, MADAGASCAR</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@islandmanager.com" className="hover:text-primary transition-colors">
                  info@islandmanager.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+2613200000000" className="hover:text-primary transition-colors">
                  +261 (32) 00 000 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="section-shell">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31050.039046486985!2d48.24682445761919!3d-13.396538117093629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2213c7bb16b69c5b%3A0x76e3391191f9e286!2sHell-Ville!5e0!3m2!1sen!2smg!4v1732108626422!5m2!1sen!2smg"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </section>

      <section className="py-16 section-shell">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -z-10 -left-6 top-0 w-52 h-52 bg-primary/10 rounded-full blur-3xl" />
            <div className="glass-card p-6">
              <img
                src="/assets/images/faq.png"
                alt="FAQ Digital"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Questions Fréquemment Posées</h3>
            <p className="text-slate-600 mb-6">
              Nous répondons aux questions les plus fréquentes pour vous aider à mieux comprendre nos
              services digitaux et à tirer le meilleur parti de nos solutions.
            </p>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="group rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
                  <summary className="flex items-center justify-between cursor-pointer text-slate-800 font-semibold">
                    {item.q}
                    <span className="text-primary">+</span>
                  </summary>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
