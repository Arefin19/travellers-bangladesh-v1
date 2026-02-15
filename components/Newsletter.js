'use client';

import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { database } from '@/lib/firebase';
import { useLanguage } from '@/lib/LanguageContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const { language, t } = useLanguage();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage(t.newsletter.error);
      return;
    }

    setStatus('loading');

    try {
      const newslettersRef = ref(database, 'newsletters');
      await push(newslettersRef, {
        email: email,
        timestamp: Date.now(),
        language: language,
      });

      setStatus('success');
      setMessage(t.newsletter.success);
      setEmail('');

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage(t.newsletter.errorSubmit);

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-bd-green-900 via-bd-green-800 to-bd-green-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t.newsletter.title}
            </h2>
            <p className="text-xl text-white/90">
              {t.newsletter.subtitle}
            </p>
          </div>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className="animate-scale-in animation-delay-200"
          >
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-sunset-orange-500/50 transition-all duration-300"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Loading...
                  </span>
                ) : (
                  t.newsletter.button
                )}
              </button>
            </div>

            {/* Status Message */}
            {message && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  status === 'success'
                    ? 'bg-green-500/20 text-green-100'
                    : 'bg-red-500/20 text-red-100'
                } animate-fade-in`}
              >
                {message}
              </div>
            )}
          </form>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center justify-center space-x-8 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>No spam</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
