'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-bd-green-600 to-bd-green-800 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span
              className={`font-display font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {language === 'en' ? 'Travellers BD' : 'ভ্রমণকারী'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-300 hover:text-sunset-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/destinations"
              className={`font-medium transition-colors duration-300 hover:text-sunset-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.nav.destinations}
            </Link>
            <Link
              href="/planning"
              className={`font-medium transition-colors duration-300 hover:text-sunset-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.nav.planning}
            </Link>
            <Link
              href="/community"
              className={`font-medium transition-colors duration-300 hover:text-sunset-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.nav.community}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-bd-green-600 text-white hover:bg-bd-green-700'
                  : 'bg-white/90 text-bd-green-700 hover:bg-white'
              }`}
            >
              {t.nav.language}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container-custom py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-sunset-orange-500 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/destinations"
              className="block py-2 text-gray-700 hover:text-sunset-orange-500 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.destinations}
            </Link>
            <Link
              href="/planning"
              className="block py-2 text-gray-700 hover:text-sunset-orange-500 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.planning}
            </Link>
            <Link
              href="/community"
              className="block py-2 text-gray-700 hover:text-sunset-orange-500 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.community}
            </Link>
            <button
              onClick={toggleLanguage}
              className="w-full py-2 px-4 bg-bd-green-600 text-white rounded-lg font-semibold hover:bg-bd-green-700"
            >
              {t.nav.language}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
