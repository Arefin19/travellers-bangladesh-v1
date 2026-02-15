'use client';

import { motion } from 'framer-motion';

export default function DestinationsGrid({ destinations }) {
  const destinationImages = {
    0: { local: "/images/sajek-valley.jpg", fallback: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80" },
    1: { local: "/images/sundarbans.jpg", fallback: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
    2: { local: "/images/tea-gardens.jpg", fallback: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800&q=80" },
    3: { local: "/images/coxs-bazar.jpg", fallback: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80" },
    4: { local: "/images/ratargul.jpg", fallback: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80" },
    5: { local: "/images/saint-martin.jpg", fallback: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80" }
  };

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {destinations.title}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.places.map((place, index) => (
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
                    backgroundImage: `url(${destinationImages[index].fallback})`
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
  );
}
