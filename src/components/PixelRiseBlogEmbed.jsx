import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const CLIENT_ID = '4'
const PER_PAGE = 6
const COOLDOWN_MS = 2000
const ARTICLE_PUBLIC_BASE_URL = 'https://app.pixel-rise.com/blog'

const BLOG_TRANSLATIONS = {
  fr: {
    readMore: 'Lire la suite →',
    previous: '‹ Précédent',
    next: 'Suivant ›',
    page: 'Page',
    on: 'sur',
    articles: 'articles',
    noArticles: 'Aucun article disponible pour cette page.',
    noArticlesYet: 'Aucun article disponible pour le moment.',
    errorLoading: 'Erreur lors du chargement des articles.',
    seeComments: 'Voir les commentaires',
  },
  en: {
    readMore: 'Read more →',
    previous: '‹ Previous',
    next: 'Next ›',
    page: 'Page',
    on: 'of',
    articles: 'articles',
    noArticles: 'No articles available for this page.',
    noArticlesYet: 'No articles available yet.',
    errorLoading: 'Error loading articles.',
    seeComments: 'See comments',
  },
}

const DEFAULT_CONFIG = {
  baseUrl: 'https://app.pixel-rise.com',
  apiUrl: 'https://app.pixel-rise.com/api',
  articleBaseUrl: 'https://app.pixel-rise.com/blog',
  env: 'production',
}

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const HeartIcon = ({ filled }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const MessageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const ShareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
)

const slugify = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const ArticleCard = ({ article, translations, onLike, onShare, onRedirect, onViewComments, liked }) => {
  const articleSlug = article.slug || slugify(article.title)

  return (
    <article
      style={{
        width: '100%',
        minHeight: 480,
        border: '1px solid #e2e8f0',
        borderRadius: 12,
        background: 'white',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = 'translateY(-4px)'
        event.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = 'translateY(0)'
        event.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {article.image ? (
        <div style={{ width: '100%', height: 200, overflow: 'hidden' }}>
          <img
            src={article.image}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt={article.translatedTitle}
            loading="lazy"
          />
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: 200,
            background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
          }}
        />
      )}

      <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            margin: '0 0 12px 0',
            color: '#0f172a',
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: 48,
          }}
        >
          {article.translatedTitle}
        </h3>

        <p
          style={{
            margin: '0 0 16px 0',
            color: '#64748b',
            fontSize: 14,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 1,
            minHeight: 67,
          }}
        >
          {article.translatedExcerpt}
        </p>

        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16, marginTop: 'auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <div style={{ display: 'flex', gap: 12, color: '#94a3b8', fontSize: 12 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <EyeIcon /> {article.stats.views}
              </span>
              <button
                type="button"
                onClick={() => onViewComments(articleSlug)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: 12,
                  cursor: 'pointer',
                  padding: '2px 4px',
                  borderRadius: 4,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.backgroundColor = '#f0f9ff'
                  event.currentTarget.style.color = '#3b82f6'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.backgroundColor = 'transparent'
                  event.currentTarget.style.color = '#94a3b8'
                }}
                title={translations.seeComments}
              >
                <MessageIcon /> {article.stats.comments}
              </button>
            </div>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => onLike(article.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 4,
                  borderRadius: 4,
                  color: liked ? '#ef4444' : '#64748b',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.backgroundColor = '#fef2f2'
                  event.currentTarget.style.color = '#ef4444'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.backgroundColor = 'transparent'
                  event.currentTarget.style.color = liked ? '#ef4444' : '#64748b'
                }}
                aria-label="Aimer l'article"
              >
                <HeartIcon filled={liked} />
              </button>
              <span style={{ fontSize: 12, color: '#94a3b8', minWidth: 16, textAlign: 'center' }}>
                {article.stats.likes}
              </span>

              <button
                type="button"
                onClick={() => onShare(article.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 4,
                  borderRadius: 4,
                  color: '#64748b',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.backgroundColor = '#f0fdf4'
                  event.currentTarget.style.color = '#16a34a'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.backgroundColor = 'transparent'
                  event.currentTarget.style.color = '#64748b'
                }}
                aria-label="Partager l'article"
              >
                <ShareIcon />
              </button>
              <span style={{ fontSize: 12, color: '#94a3b8', minWidth: 16, textAlign: 'center' }}>
                {article.stats.shares}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onRedirect(articleSlug)}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              padding: '12px 16px',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              width: '100%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {translations.readMore}
          </button>
        </div>
      </div>
    </article>
  )
}

const PaginationControls = ({ pagination, currentPage, translations, onChange }) => {
  if (!pagination || pagination.last_page <= 1) return null

  const pages = []
  let startPage = Math.max(1, currentPage - 2)
  let endPage = Math.min(pagination.last_page, currentPage + 2)

  if (endPage - startPage < 4) {
    if (startPage === 1) {
      endPage = Math.min(pagination.last_page, startPage + 4)
    } else if (endPage === pagination.last_page) {
      startPage = Math.max(1, endPage - 4)
    }
  }

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i)
  }

  const renderButton = (label, page, disabled = false, active = false) => (
    <button
      key={`${label}-${page}`}
      type="button"
      disabled={disabled}
      onClick={() => onChange(page)}
      style={{
        padding: '8px 12px',
        border: '1px solid #e2e8f0',
        background: active ? '#3b82f6' : 'white',
        color: active ? 'white' : disabled ? '#94a3b8' : '#374151',
        borderRadius: 6,
        fontSize: 14,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        minWidth: 40,
      }}
      onMouseEnter={(event) => {
        if (!active && !disabled) {
          event.currentTarget.style.backgroundColor = '#f1f5f9'
          event.currentTarget.style.borderColor = '#3b82f6'
        }
      }}
      onMouseLeave={(event) => {
        if (!active && !disabled) {
          event.currentTarget.style.backgroundColor = 'white'
          event.currentTarget.style.borderColor = '#e2e8f0'
        }
      }}
    >
      {label}
    </button>
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        padding: '20px 0',
        borderTop: '1px solid #e2e8f0',
        marginTop: 24,
        flexWrap: 'wrap',
      }}
    >
      {renderButton(translations.previous, currentPage - 1, currentPage <= 1)}

      {startPage > 1 && (
        <>
          {renderButton('1', 1)}
          {startPage > 2 && <span style={{ padding: '8px 4px', color: '#94a3b8' }}>...</span>}
        </>
      )}

      {pages.map((page) => renderButton(page, page, false, page === currentPage))}

      {endPage < pagination.last_page && (
        <>
          {endPage < pagination.last_page - 1 && <span style={{ padding: '8px 4px', color: '#94a3b8' }}>...</span>}
          {renderButton(pagination.last_page, pagination.last_page)}
        </>
      )}

      {renderButton(translations.next, currentPage + 1, currentPage >= pagination.last_page)}

      <div style={{ marginLeft: 16, color: '#64748b', fontSize: 14, padding: '8px 0' }}>
        {`${translations.page} ${currentPage} ${translations.on} ${pagination.last_page} (${pagination.total} ${translations.articles})`}
      </div>
    </div>
  )
}

export default function PixelRiseBlogEmbed() {
  const [articles, setArticles] = useState([])
  const [pagination, setPagination] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [lang, setLang] = useState('fr')
  const [toast, setToast] = useState(null)
  const [likedArticles, setLikedArticles] = useState({})

  const translationCache = useRef({})
  const cooldownsRef = useRef({})
  const toastTimeoutRef = useRef(null)

  const detectConfig = useCallback(() => {
    if (typeof window !== 'undefined' && window.EMBED_CONFIG) {
      return {
        baseUrl: window.EMBED_CONFIG.baseUrl,
        apiUrl: window.EMBED_CONFIG.apiUrl,
        articleBaseUrl: window.EMBED_CONFIG.articleBaseUrl,
        env: window.EMBED_CONFIG.environment || 'production',
      }
    }
    return DEFAULT_CONFIG
  }, [])

  const config = useMemo(() => detectConfig(), [detectConfig])
  const translations = BLOG_TRANSLATIONS[lang] || BLOG_TRANSLATIONS.fr

  const triggerToast = useCallback((message, type = 'success') => {
    setToast({ message, type })
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
    toastTimeoutRef.current = setTimeout(() => setToast(null), 3000)
  }, [])

  const getEmbedToken = useCallback(() => {
    if (typeof window === 'undefined') return ''
    return btoa(`${CLIENT_ID}:${Date.now()}`).substring(0, 32)
  }, [])

  const callPixelRiseAPI = useCallback(
    async (endpoint, method = 'GET', data) => {
      const response = await fetch(`${config.apiUrl}${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Embed-Token': getEmbedToken(),
          'X-Client-ID': CLIENT_ID,
        },
        credentials: 'omit',
        body: method !== 'GET' ? JSON.stringify(data || {}) : undefined,
      })
      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status}`)
      }
      return response.json()
    },
    [config.apiUrl, getEmbedToken],
  )

  const translateText = useCallback(async (text, targetLang) => {
    if (targetLang === 'fr') return text
    const cacheKey = `${text}_${targetLang}`
    if (translationCache.current[cacheKey]) return translationCache.current[cacheKey]
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=${targetLang}&dt=t&q=${encodeURIComponent(
          text,
        )}`,
      )
      const data = await response.json()
      if (Array.isArray(data) && data[0]) {
        const translation = data[0].map((chunk) => chunk[0]).join('')
        translationCache.current[cacheKey] = translation
        return translation
      }
    } catch (err) {
      console.warn('Traduction échouée:', err)
    }
    return text
  }, [])

  const enrichArticle = useCallback(
    async (article) => {
      const translatedTitle = await translateText(article.title, lang)
      const translatedExcerpt = await translateText(article.excerpt, lang)
      return {
        ...article,
        translatedTitle,
        translatedExcerpt,
        stats: {
          views: article.stats?.views ?? 0,
          comments: article.stats?.comments ?? 0,
          likes: article.stats?.likes ?? 0,
          shares: article.stats?.shares ?? 0,
        },
      }
    },
    [lang, translateText],
  )

  const loadPage = useCallback(
    async (page) => {
      setIsLoading(true)
      setError(null)
      setCurrentPage(page)
      try {
        const response = await fetch(
          `${config.apiUrl}/embed/blogs?client_id=${CLIENT_ID}&page=${page}&per_page=${PER_PAGE}&lang=${lang}`,
          { cache: 'no-store' },
        )
        const data = await response.json()
        if (data.success && data.data.articles.length > 0) {
          const translatedArticles = await Promise.all(data.data.articles.map(enrichArticle))
          setArticles(translatedArticles)
          setPagination(data.data.pagination ?? null)
        } else {
          setArticles([])
          setPagination(null)
          setError(translations.noArticles)
        }
      } catch (err) {
        console.warn('Erreur de chargement des articles:', err)
        setError(translations.errorLoading)
        setArticles([])
        setPagination(null)
      } finally {
        setIsLoading(false)
      }
    },
    [config.apiUrl, enrichArticle, lang, translations.errorLoading, translations.noArticles],
  )

  const recordView = useCallback(
    async (articleId) => {
      if (config.env === 'local') return
      try {
        await callPixelRiseAPI('/interactions/view', 'POST', {
          post_type: 'blog',
          post_id: articleId,
        })
      } catch {
        // ignore
      }
    },
    [callPixelRiseAPI, config.env],
  )

  const redirectToArticle = useCallback((slug) => {
    const articleUrl = `${ARTICLE_PUBLIC_BASE_URL}/${slug}`
    if (typeof window !== 'undefined') {
      window.location.href = articleUrl
    }
  }, [])

  const handleLike = useCallback(
    async (articleId) => {
      const cooldownKey = `like_${articleId}`
      const now = Date.now()
      if (cooldownsRef.current[cooldownKey] && now - cooldownsRef.current[cooldownKey] < COOLDOWN_MS) return
      cooldownsRef.current[cooldownKey] = now
      try {
        const result = await callPixelRiseAPI('/interactions/embed/like', 'POST', {
          post_type: 'blog',
          post_id: articleId,
        })
        setArticles((prev) =>
          prev.map((article) =>
            article.id === articleId ? { ...article, stats: { ...article.stats, likes: result.data.new_count } } : article,
          ),
        )
        setLikedArticles((prev) => ({ ...prev, [articleId]: result.data.action === 'added' }))
        triggerToast(result.data.action === 'added' ? '❤️ Article ajouté aux favoris !' : '💔 Like retiré')
      } catch (err) {
        console.warn('Interaction like échouée:', err)
        triggerToast("❌ Impossible d'aimer cet article pour le moment", 'error')
      }
    },
    [callPixelRiseAPI, triggerToast],
  )

  const handleShare = useCallback(
    async (articleId) => {
      const cooldownKey = `share_${articleId}`
      const now = Date.now()
      if (cooldownsRef.current[cooldownKey] && now - cooldownsRef.current[cooldownKey] < COOLDOWN_MS) return
      cooldownsRef.current[cooldownKey] = now
      try {
        const result = await callPixelRiseAPI('/interactions/embed/share', 'POST', {
          post_type: 'blog',
          post_id: articleId,
        })
        setArticles((prev) =>
          prev.map((article) =>
            article.id === articleId ? { ...article, stats: { ...article.stats, shares: result.data.shares } } : article,
          ),
        )
        const article = articles.find((item) => item.id === articleId)
        const articleSlug = article?.slug || (article ? slugify(article.title) : '')
        const articleUrl = `${ARTICLE_PUBLIC_BASE_URL}/${articleSlug}`

        const shareSucceeded = await (async () => {
          if (typeof navigator !== 'undefined' && navigator.share) {
            try {
              await navigator.share({ title: article?.title ?? 'Blog', url: articleUrl })
              return true
            } catch (error) {
              if (error?.name !== 'AbortError') console.warn('Partage annulé:', error)
            }
          }
          if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(articleUrl)
            return true
          }
          if (typeof document !== 'undefined') {
            const textarea = document.createElement('textarea')
            textarea.value = articleUrl
            textarea.style.position = 'fixed'
            textarea.style.opacity = '0'
            document.body.appendChild(textarea)
            textarea.select()
            try {
              document.execCommand('copy')
              return true
            } catch (error) {
              console.warn('Copie échouée:', error)
            } finally {
              document.body.removeChild(textarea)
            }
          }
          return false
        })()

        triggerToast(shareSucceeded ? '📋 Lien copié dans le presse-papier !' : '🔗 Partage enregistré', 'success')
      } catch (err) {
        console.warn('Interaction share échouée:', err)
        triggerToast('❌ Impossible de partager cet article pour le moment', 'error')
      }
    },
    [articles, callPixelRiseAPI, triggerToast],
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const storedLang = localStorage.getItem('selectedLanguage')
    if (storedLang === 'en' || storedLang === 'fr') setLang(storedLang)
    const handleStorage = (event) => {
      if (event.key === 'selectedLanguage') {
        const value = event.newValue === 'en' ? 'en' : 'fr'
        setLang(value)
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const handleClick = () => {
      const newLang = localStorage.getItem('selectedLanguage')
      if (newLang === 'en' || newLang === 'fr') setLang(newLang)
    }
    const buttons = Array.from(document.querySelectorAll('[data-lang-switch]'))
    buttons.forEach((button) => button.addEventListener('click', handleClick))
    return () => buttons.forEach((button) => button.removeEventListener('click', handleClick))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
    loadPage(1)
  }, [lang, loadPage])

  useEffect(() => {
    if (!articles.length) return
    const timers = articles.map((article) => setTimeout(() => recordView(article.id), 1000))
    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [articles, recordView])

  useEffect(
    () => () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
    },
    [],
  )

  return (
    <section id="latest-episode" className="w-full" style={{ paddingTop: 40, paddingBottom: 40, overflowX: 'hidden' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 16px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 32,
            opacity: isLoading ? 0.6 : 1,
            pointerEvents: isLoading ? 'none' : 'auto',
          }}
        >
          {!isLoading && !articles.length && !error && (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                color: '#64748b',
                padding: 40,
              }}
            >
              {translations.noArticlesYet}
            </div>
          )}

          {error && (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                color: '#ef4444',
                padding: 40,
              }}
            >
              {error}
            </div>
          )}

          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              translations={translations}
              onLike={handleLike}
              onShare={handleShare}
              onRedirect={redirectToArticle}
              onViewComments={redirectToArticle}
              liked={!!likedArticles[article.id]}
            />
          ))}
        </div>

        {pagination && (
          <PaginationControls
            pagination={pagination}
            currentPage={currentPage}
            translations={translations}
            onChange={(page) => {
              if (!isLoading && page !== currentPage) loadPage(page)
            }}
          />
        )}
      </div>

      {toast && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            background: toast.type === 'success' ? '#22c55e' : '#ef4444',
            color: 'white',
            padding: '12px 20px',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 9999,
            fontSize: 14,
            fontWeight: 500,
            animation: 'slideIn 0.3s ease-out',
            transition: 'opacity 0.3s ease-out',
          }}
        >
          {toast.message}
        </div>
      )}
    </section>
  )
}
