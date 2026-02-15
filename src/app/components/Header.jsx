'use client';

export default function Header({ language, setLanguage }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">TB</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            {language === 'en' ? 'Travellers of Bangladesh' : 'ট্রাভেলার্স অফ বাংলাদেশ'}
          </h1>
        </div>
        
        <button
          onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
          className="px-5 py-2.5 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:scale-105"
        >
          {language === 'en' ? 'বাংলা' : 'English'}
        </button>
      </div>
    </nav>
  );
}
