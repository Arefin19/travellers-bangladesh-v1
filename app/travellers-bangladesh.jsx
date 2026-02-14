'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TravellersOfBangladesh() {
  const [language, setLanguage] = useState('en');
  const [email, setEmail] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const content = {
    en: {
      title: "Travellers of Bangladesh",
      tagline: "Inspiration, Information, Escapism.",
      subtitle: "Discover the hidden gems of Bangladesh—from lush tea gardens to untouched beaches, ancient forests to vibrant cities.",
      categories: {
        group: { title: "Group Travel", desc: "Shared adventures, unforgettable bonds" },
        solo: { title: "Solo Expeditions", desc: "Find yourself in the journey" },
        budget: { title: "Budget Finds", desc: "Explore more, spend less" },
        luxury: { title: "Luxury Leisure", desc: "Indulge in comfort and style" }
      },
      planning: {
        title: "Planning Advice",
        subtitle: "Everything you need to know before you go",
        guides: [
          { title: "Visa & Entry", desc: "Requirements and tips" },
          { title: "Best Time to Visit", desc: "Seasonal guide" },
          { title: "Local Transport", desc: "Getting around Bangladesh" },
          { title: "Safety Tips", desc: "Travel with confidence" }
        ]
      },
      destinations: {
        title: "Featured Destinations",
        places: [
          { name: "Sajek Valley", region: "Rangamati", desc: "The roof of Rangamati" },
          { name: "Sundarbans", region: "Khulna", desc: "World's largest mangrove forest" },
          { name: "Sylhet Tea Gardens", region: "Sylhet", desc: "Rolling green landscapes" },
          { name: "Cox's Bazar", region: "Chittagong", desc: "World's longest natural beach" },
          { name: "Ratargul Swamp", region: "Sylhet", desc: "Freshwater swamp forest" },
          { name: "Saint Martin's Island", region: "Cox's Bazar", desc: "Coral paradise" }
        ]
      },
      newsletter: {
        title: "Join the Community",
        subtitle: "Get travel inspiration, insider tips, and exclusive guides delivered to your inbox.",
        placeholder: "Enter your email",
        button: "Subscribe",
        success: "Welcome to the community!",
        error: "Please enter a valid email."
      }
    },
    bn: {
      title: "ট্রাভেলার্স অফ বাংলাদেশ",
      tagline: "অনুপ্রেরণা, তথ্য, স্বপ্নের ভ্রমণ।",
      subtitle: "বাংলাদেশের লুকানো রত্নগুলি আবিষ্কার করুন—সবুজ চা বাগান থেকে অস্পৃশ্য সৈকত, প্রাচীন বন থেকে প্রাণবন্ত শহর।",
      categories: {
        group: { title: "গ্রুপ ভ্রমণ", desc: "ভাগ করা অভিযান, অবিস্মরণীয় বন্ধন" },
        solo: { title: "একক অভিযান", desc: "যাত্রায় নিজেকে খুঁজুন" },
        budget: { title: "বাজেট ভ্রমণ", desc: "বেশি ঘুরুন, কম খরচ করুন" },
        luxury: { title: "বিলাসবহুল ভ্রমণ", desc: "আরাম এবং স্টাইলে মজা করুন" }
      },
      planning: {
        title: "পরিকল্পনা পরামর্শ",
        subtitle: "যাওয়ার আগে আপনার যা জানা দরকার",
        guides: [
          { title: "ভিসা এবং প্রবেশ", desc: "প্রয়োজনীয়তা এবং টিপস" },
          { title: "ভ্রমণের সেরা সময়", desc: "ঋতু নির্দেশিকা" },
          { title: "স্থানীয় পরিবহন", desc: "বাংলাদেশে ঘুরে বেড়ানো" },
          { title: "নিরাপত্তা টিপস", desc: "আত্মবিশ্বাসের সাথে ভ্রমণ করুন" }
        ]
      },
      destinations: {
        title: "বৈশিষ্ট্যযুক্ত গন্তব্য",
        places: [
          { name: "সাজেক ভ্যালি", region: "রাঙামাটি", desc: "রাঙামাটির ছাদ" },
          { name: "সুন্দরবন", region: "খুলনা", desc: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন" },
          { name: "সিলেট চা বাগান", region: "সিলেট", desc: "ঘূর্ণায়মান সবুজ ল্যান্ডস্কেপ" },
          { name: "কক্সবাজার", region: "চট্টগ্রাম", desc: "বিশ্বের দীর্ঘতম প্রাকৃতিক সৈকত" },
          { name: "রাতারগুল জলাভূমি", region: "সিলেট", desc: "স্বাদু জলের জলাভূমি বন" },
          { name: "সেন্ট মার্টিন দ্বীপ", region: "কক্সবাজার", desc: "প্রবাল স্বর্গ" }
        ]
      },
      newsletter: {
        title: "কমিউনিটিতে যোগ দিন",
        subtitle: "ভ্রমণ অনুপ্রেরণা, ইনসাইডার টিপস এবং এক্সক্লুসিভ গাইড আপনার ইনবক্সে পান।",
        placeholder: "আপনার ইমেইল লিখুন",
        button: "সাবস্ক্রাইব করুন",
        success: "কমিউনিটিতে স্বাগতম!",
        error: "অনুগ্রহ করে একটি বৈধ ইমেইল লিখুন।"
      }
    }
  };

  const t = content[language];

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920&q=80",
      alt: "Sajek Valley"
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
      alt: "Sundarbans"
    },
    {
      image: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=1920&q=80",
      alt: "Tea Gardens"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    try {
      // Firebase Realtime Database integration with sequential numeric IDs
      const firebaseUrl = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/newsletters.json`;
      
      // First, get the current count of newsletters
      const countResponse = await fetch(firebaseUrl);
      const existingData = await countResponse.json();
      
      // Calculate the next ID number
      let nextId = 1;
      if (existingData) {
        const ids = Object.keys(existingData).map(key => parseInt(key)).filter(num => !isNaN(num));
        if (ids.length > 0) {
          nextId = Math.max(...ids) + 1;
        }
      }
      
      // Save with numeric ID
      const specificUrl = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/newsletters/${nextId}.json`;
      await fetch(specificUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          language: language
        }),
      });

      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">TB</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              {language === 'en' ? 'Travellers of Bangladesh' : 'ট্রাভেলার্স অফ বাংলাদেশ'}
            </h1>
          </div>
          
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="px-5 py-2.5 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:scale-105"
          >
            {language === 'en' ? 'বাংলা' : 'English'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
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
              style={{ backgroundImage: `url(${slide.image})` }}
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
              {t.tagline}
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {t.subtitle}
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

      {/* Categories Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              {language === 'en' ? 'Explore Your Way' : 'আপনার উপায়ে ঘুরুন'}
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(t.categories).map(([key, cat], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                    className="transform transition-transform duration-300 group-hover:translate-y-[-8px]"
                  >
                    <h4 className="text-3xl font-black text-white mb-2 tracking-tight">
                      {cat.title}
                    </h4>
                    <p className="text-white/90 text-lg font-light">
                      {cat.desc}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-white"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <span className="font-semibold">{language === 'en' ? 'Explore' : 'ঘুরে দেখুন'}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              {t.destinations.title}
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.destinations.places.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 group-hover:opacity-0 transition-opacity duration-300" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ 
                      backgroundImage: index === 0 ? `url(https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80)` :
                                       index === 1 ? `url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80)` :
                                       index === 2 ? `url(https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800&q=80)` :
                                       index === 3 ? `url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80)` :
                                       index === 4 ? `url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80)` :
                                       `url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80)`
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-emerald-700">{place.region}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {place.name}
                  </h4>
                  <p className="text-slate-600 font-light">
                    {place.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Advice */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              {t.planning.title}
            </h3>
            <p className="text-xl text-white/80 font-light">
              {t.planning.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.planning.guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">{guide.title}</h4>
                <p className="text-white/70 font-light">{guide.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              {t.newsletter.title}
            </h3>
            <p className="text-xl text-slate-600 mb-8 font-light">
              {t.newsletter.subtitle}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="flex-1 px-6 py-4 rounded-full border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 font-medium transition-colors"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (language === 'en' ? 'Subscribing...' : 'অপেক্ষা করুন...') : t.newsletter.button}
              </button>
            </form>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-emerald-600 font-semibold"
              >
                {t.newsletter.success}
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-600 font-semibold"
              >
                {t.newsletter.error}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">TB</span>
            </div>
            <h4 className="text-2xl font-bold tracking-tight">
              {language === 'en' ? 'Travellers of Bangladesh' : 'ট্রাভেলার্স অফ বাংলাদেশ'}
            </h4>
          </div>
          <p className="text-white/60 mb-6 font-light">
            {language === 'en' 
              ? 'Inspiring journeys across the beauty of Bangladesh' 
              : 'বাংলাদেশের সৌন্দর্য জুড়ে অনুপ্রেরণাদায়ক যাত্রা'}
          </p>
          <p className="text-white/40 text-sm">
            © 2025 Travellers of Bangladesh. {language === 'en' ? 'All rights reserved.' : 'সমস্ত অধিকার সংরক্ষিত।'}
          </p>
        </div>
      </footer>
    </div>
  );
}