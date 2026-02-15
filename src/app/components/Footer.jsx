'use client';

export default function Footer({ language }) {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">TB</span>
          </div>
          <h4 className="text-2xl font-bold tracking-tight">
            {language === 'en' ? 'Travellers of Bangladesh' : 'ট্রাভেলার্স অফ বাংলাদেশ'}
          </h4>
        </div>
        <p className="text-white/60 mb-6 font-light">
          {language === 'en' 
            ? 'Inspiring journeys across the beauty of Bangladesh' 
            : 'বাংলাদেশের সৌন্দর্য জুড়ে অনুপ্রেরণাদায়ক যাত্রা'}
        </p>
        <p className="text-white/40 text-sm">
          © 2025 Travellers of Bangladesh. {language === 'en' ? 'All rights reserved.' : 'সমস্ত অধিকার সংরক্ষিত।'}
        </p>
      </div>
    </footer>
  );
}
