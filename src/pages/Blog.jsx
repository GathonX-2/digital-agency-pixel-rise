import { Search, Tag } from 'lucide-react'
import PixelRiseBlogEmbed from '../components/PixelRiseBlogEmbed'

const categories = [
  'Services (123)',
  'Logiciels SaaS (123)',
  'Technologie (123)',
  'Planification (123)',
  'Développement (123)',
]

const popular = [
  { id: 1, title: 'La Meilleure Stratégie Marketing', date: '16 Mai 2022' },
  { id: 2, title: 'Les Changements Majeurs en Marketing', date: '16 Mai 2022' },
  { id: 3, title: 'Curabitur Ullamcorper Ultricies Nisi', date: '16 Mai 2022' },
  { id: 4, title: 'Curabitur Ullamcorper Ultricies Nisi', date: '16 Mai 2022' },
  { id: 5, title: 'Curabitur Ullamcorper Ultricies Nisi', date: '16 Mai 2022' },
]

export default function Blog() {
  return (
    <>
      <section
        className="relative text-white overflow-hidden"
        style={{ background: "url('/assets/images/laptop.jpg') no-repeat center/cover" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/70" />
        <div className="section-shell relative py-16 text-center space-y-4">
          <span className="eyebrow justify-center bg-white/10 text-white border border-white/20">
            Blog
          </span>
          <h2 className="text-4xl font-bold">Blog</h2>
          <p className="text-white/80">
            <a href="/" className="text-white/70">Accueil</a>
            <span className="mx-2 text-white/70">|</span>
            <span className="text-white font-semibold">Blog</span>
          </p>
        </div>
      </section>

      <section className="py-16 section-shell">
        <div className="grid lg:grid-cols-3 gap-8">
          <aside className="space-y-6">
            <div className="glass-card p-6">
              <h5 className="text-sm font-semibold text-primary mb-3">Recherche</h5>
              <div className="flex items-center gap-2 border border-slate-200 rounded-full px-3 py-2 bg-white/80">
                <Search className="w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Entrez un mot-clé..."
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            <div className="glass-card p-6">
              <h5 className="text-sm font-semibold text-primary mb-3">Catégories</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                {categories.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary" />
                    <a href="#" className="hover:text-primary transition-colors">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h5 className="text-sm font-semibold text-primary mb-4">Actualités Populaires</h5>
              <div className="space-y-3">
                {popular.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <img
                      src="/assets/images/popular.png"
                      alt={item.title}
                      className="w-14 h-14 rounded object-cover"
                    />
                    <div>
                      <h6 className="font-semibold text-sm text-slate-800 leading-snug">
                        {item.title}
                      </h6>
                      <p className="text-xs text-slate-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <div className="text-center mb-6 space-y-2">
              <span className="eyebrow justify-center">Flux dynamique</span>
              <h3 className="section-title">Articles dynamiques Pixel Rise</h3>
              <p className="text-slate-600">Chargement en direct via le script embed officiel.</p>
            </div>
            <div className="w-full glass-card p-4 border border-slate-100">
              <PixelRiseBlogEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
