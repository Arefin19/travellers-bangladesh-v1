'use client';

import { useParams } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';

const categoryData = {
  group: {
    destinations: [
      { id: 1, name: 'Cox\'s Bazar', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80' },
      { id: 2, name: 'Sajek Valley', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80' },
      { id: 3, name: 'Rangamati', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80' },
    ],
  },
  solo: {
    destinations: [
      { id: 4, name: 'Sylhet Tea Gardens', image: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800&q=80' },
      { id: 5, name: 'Old Dhaka', image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=800&q=80' },
      { id: 6, name: 'Paharpur', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80' },
    ],
  },
  budget: {
    destinations: [
      { id: 7, name: 'Kuakata Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80' },
      { id: 8, name: 'Bandarban', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
      { id: 9, name: 'Jaflong', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' },
    ],
  },
  luxury: {
    destinations: [
      { id: 10, name: 'Sundarbans Luxury Cruise', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80' },
      { id: 11, name: 'Srimangal Tea Resorts', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
      { id: 12, name: 'Saint Martin Island Resorts', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const { t } = useLanguage();
  const categoryId = params.id;

  const getCategoryTitle = () => {
    const key = categoryId === 'group' ? 'groupTravel' 
      : categoryId === 'solo' ? 'soloExpeditions'
      : categoryId === 'budget' ? 'budgetFinds'
      : 'luxuryLeisure';
    return t.categories[key];
  };

  const category = getCategoryTitle();
  const destinations = categoryData[categoryId] || { destinations: [] };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-bd-green-900 to-bd-green-700">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-in">
            {category.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            {category.description}
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.destinations.map((destination, index) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.id}`}
                className={`group relative overflow-hidden rounded-2xl shadow-xl card-hover h-96 animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="gradient-overlay" />
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-display font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-sunset-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-semibold">Explore</span>
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
