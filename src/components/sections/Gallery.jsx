import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from 'react-icons/fi'
import { gallery } from '../../data/schoolData'
import { Item, Stagger } from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems =
    activeCategory === 'All'
      ? gallery.items
      : gallery.items.filter((item) => item.category === activeCategory)

  // Navigate lightbox
  const currentIndex = selectedImage
    ? filteredItems.findIndex((item) => item.id === selectedImage.id)
    : -1

  const handleNext = useCallback(
    (e) => {
      e?.stopPropagation()
      if (currentIndex < filteredItems.length - 1) {
        setSelectedImage(filteredItems[currentIndex + 1])
      } else {
        setSelectedImage(filteredItems[0])
      }
    },
    [currentIndex, filteredItems]
  )

  const handlePrev = useCallback(
    (e) => {
      e?.stopPropagation()
      if (currentIndex > 0) {
        setSelectedImage(filteredItems[currentIndex - 1])
      } else {
        setSelectedImage(filteredItems[filteredItems.length - 1])
      }
    },
    [currentIndex, filteredItems]
  )

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedImage, handleNext, handlePrev])

  return (
    <section id="gallery" className="py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading title={gallery.title} text={gallery.subtitle} />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {gallery.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-pill px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-forest text-mist shadow-sm scale-105'
                    : 'bg-sage/40 text-muted hover:bg-sage hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Controlled balanced card sizes */}
        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <Item
              as="article"
              key={item.id}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-frame bg-sage shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-forest"
            >
              {/* Image with constrained height */}
              <div className="h-64 w-full overflow-hidden bg-forest/10">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay and Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-mist flex flex-col justify-end">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block rounded-pill bg-saffron/90 px-2.5 py-0.5 text-xs font-bold text-ink">
                    {item.category}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-pill bg-white/20 text-xs backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <FiMaximize2 />
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-white line-clamp-1">{item.title}</h3>
                <p className="mt-1 text-xs text-mist/80 line-clamp-2">{item.desc}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            {/* Modal Dialog Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-card bg-forest text-mist shadow-2xl border border-mist/20"
            >
              {/* Header Bar */}
              <div className="relative z-20 flex shrink-0 items-center justify-between border-b border-mist/10 bg-forest px-5 py-3.5 sm:px-6 sm:py-4">
                <div className="flex items-center gap-3 min-w-0 pr-4">
                  <span className="shrink-0 rounded-pill bg-saffron px-3 py-1 text-xs font-bold text-ink">
                    {selectedImage.category}
                  </span>
                  <h4 className="truncate text-base sm:text-lg font-bold text-mist">{selectedImage.title}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="shrink-0 rounded-pill bg-mist/10 p-2 text-mist hover:bg-mist/25 hover:text-white transition-colors"
                  aria-label="Close image viewer"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Main Image Stage - Strict containment */}
              <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/50 p-4 sm:p-6">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[50vh] sm:max-h-[55vh] max-w-full w-auto h-auto object-contain rounded-frame shadow-xl select-none"
                />

                {/* Left navigation button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 rounded-pill bg-forest/80 p-2.5 sm:p-3 text-white shadow-md hover:bg-forest hover:scale-110 transition-all backdrop-blur-sm border border-mist/20"
                  aria-label="Previous photo"
                >
                  <FiChevronLeft className="text-xl sm:text-2xl" />
                </button>

                {/* Right navigation button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 rounded-pill bg-forest/80 p-2.5 sm:p-3 text-white shadow-md hover:bg-forest hover:scale-110 transition-all backdrop-blur-sm border border-mist/20"
                  aria-label="Next photo"
                >
                  <FiChevronRight className="text-xl sm:text-2xl" />
                </button>
              </div>

              {/* Footer Details */}
              <div className="relative z-20 flex shrink-0 flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-mist/10 bg-forest px-5 py-3.5 sm:px-6 sm:py-4">
                <p className="text-xs sm:text-sm text-sage line-clamp-2 max-w-lg">{selectedImage.desc}</p>
                <div className="shrink-0 text-xs font-semibold text-saffron">
                  {currentIndex + 1} of {filteredItems.length} photos
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
