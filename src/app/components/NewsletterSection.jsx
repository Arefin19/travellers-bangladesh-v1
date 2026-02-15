'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection({ newsletter, language }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {newsletter.title}
          </h3>
          <p className="text-xl text-slate-600 mb-8 font-light">
            {newsletter.subtitle}
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder}
              className="flex-1 px-6 py-4 rounded-full border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 font-medium transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (language === 'en' ? 'Subscribing...' : 'অপেক্ষা করুন...') : newsletter.button}
            </button>
          </form>

          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-emerald-600 font-semibold"
            >
              {newsletter.success}
            </motion.p>
          )}

          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-600 font-semibold"
            >
              {newsletter.error}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
