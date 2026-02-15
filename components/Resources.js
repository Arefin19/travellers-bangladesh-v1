'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';

export default function Resources() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {t.resources.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.resources.subtitle}
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Travel Guides */}
          <Link
            href="/guides"
            className="group bg-gradient-to-br from-bd-green-50 to-bd-green-100 rounded-2xl p-8 shadow-lg card-hover animate-slide-up animation-delay-200"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-bd-green-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-bd-green-600 transition-colors">
                  {t.resources.guides.title}
                </h3>
                <p className="text-gray-700">
                  {t.resources.guides.description}
                </p>
                <div className="mt-4 flex items-center text-bd-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Guides</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Destination Spotlights */}
          <Link
            href="/spotlights"
            className="group bg-gradient-to-br from-sunset-orange-50 to-sunset-orange-100 rounded-2xl p-8 shadow-lg card-hover animate-slide-up animation-delay-400"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-sunset-orange-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-sunset-orange-600 transition-colors">
                  {t.resources.spotlights.title}
                </h3>
                <p className="text-gray-700">
                  {t.resources.spotlights.description}
                </p>
                <div className="mt-4 flex items-center text-sunset-orange-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Discover Places</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
