'use client';

import { useParams } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

export default function DestinationPage() {
  const params = useParams();
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920&q=80"
          alt="Destination"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white animate-fade-in">
            Destination Details
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              {language === 'en' ? 'About This Destination' : 'এই গন্তব্য সম্পর্কে'}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {language === 'en' 
                ? 'This is a placeholder page for destination details. In a full implementation, this would display comprehensive information about the selected destination including photos, travel tips, accommodation options, and user reviews.'
                : 'এটি গন্তব্য বিবরণের জন্য একটি প্লেসহোল্ডার পৃষ্ঠা। একটি সম্পূর্ণ বাস্তবায়নে, এটি নির্বাচিত গন্তব্য সম্পর্কে ফটো, ভ্রমণ টিপস, আবাসন বিকল্প এবং ব্যবহারকারী পর্যালোচনা সহ বিস্তৃত তথ্য প্রদর্শন করবে।'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bd-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Best Time to Visit' : 'দেখার সেরা সময়'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' ? 'October to March' : 'অক্টোবর থেকে মার্চ'}
                </p>
              </div>
              <div className="bg-sunset-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Duration' : 'সময়কাল'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' ? '2-3 days' : '২-৩ দিন'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
