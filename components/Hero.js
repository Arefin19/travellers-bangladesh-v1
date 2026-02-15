'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const heroImages = [
  {
    url: '/images/sajek-valley.jpg',
    alt: 'Sajek Valley',
    fallback: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920&q=80'
  },
  {
    url: '/images/sundarbans.jpg',
    alt: 'Sundarbans Mangrove Forest',
    fallback: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80'
  },
  {
    url: '/images/sylhet-tea.jpg',
    alt: 'Sylhet Tea Gardens',
    fallback: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=1920&q=80'
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.fallback}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-sunset-orange-400 font-display italic mb-4 animate-slide-down animation-delay-200">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 animate-slide-up animation-delay-400">
            {t.hero.description}
          </p>
          <button
            onClick={scrollToCategories}
            className="btn-primary animate-scale-in animation-delay-600"
          >
            {t.hero.cta}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-sunset-orange-500 w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
