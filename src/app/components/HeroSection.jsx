'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection({ content }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/images/sajek-valley.jpg",
      alt: "Sajek Valley",
      fallback: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920&q=80"
    },
    {
      image: "/images/sundarbans.jpg",
      alt: "Sundarbans",
      fallback: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
    },
    {
      image: "/images/tea-gardens.jpg",
      alt: "Tea Gardens",
      fallback: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=1920&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden mt-16">
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.fallback})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>
      ))}
      
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-4xl"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {content.tagline}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {content.subtitle}
          </motion.p>
          
          <motion.div
            className="flex gap-2 justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-12 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
