'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import DestinationsGrid from './components/DestinationsGrid';
import PlanningAdvice from './components/PlanningAdvice';
import NewsletterSection from './components/NewsletterSection';
import { content } from './config/content';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const t = content[language];

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif" }}>
      <Header language={language} setLanguage={setLanguage} />
      
      <HeroSection content={t} />
      
      <CategoryGrid categories={t.categories} language={language} />
      
      <DestinationsGrid destinations={t.destinations} />
      
      <PlanningAdvice planning={t.planning} />
      
      <NewsletterSection newsletter={t.newsletter} language={language} />
      
      <Footer language={language} />
    </div>
  );
}
