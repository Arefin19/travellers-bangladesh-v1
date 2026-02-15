'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';

const categories = [
  {
    id: 'group',
    icon: '👥',
    gradient: 'from-blue-500 to-blue-700',
    image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&q=80',
  },
  {
    id: 'solo',
    icon: '🎒',
    gradient: 'from-purple-500 to-purple-700',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
  },
  {
    id: 'budget',
    icon: '💰',
    gradient: 'from-green-500 to-green-700',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
  },
  {
    id: 'luxury',
    icon: '✨',
    gradient: 'from-amber-500 to-amber-700',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  },
];

export default function Categories() {
  const { t } = useLanguage();

  const getCategoryText = (id) => {
    const key = id === 'group' ? 'groupTravel' 
      : id === 'solo' ? 'soloExpeditions'
      : id === 'budget' ? 'budgetFinds'
      : 'luxuryLeisure';
    return t.categories[key];
  };

  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {t.categories.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.categories.subtitle}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const categoryText = getCategoryText(category.id);
            return (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className={`group relative overflow-hidden rounded-2xl shadow-xl card-hover h-96 animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={categoryText.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">
                      {categoryText.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {categoryText.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-8 right-8 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
