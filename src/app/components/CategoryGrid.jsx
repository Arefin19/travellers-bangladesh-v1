'use client';

import { motion } from 'framer-motion';

export default function CategoryGrid({ categories, language }) {
  return (
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
          {Object.entries(categories).map(([key, cat], index) => (
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
  );
}
