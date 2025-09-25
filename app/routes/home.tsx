import type { Route } from "./+types/home";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SELEB - Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan" },
    { name: "description", content: "Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan - Mengembangkan teknologi elektronika yang inovatif dan berkelanjutan" },
  ];
}
// ini command
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of image URLs - first slide uses local hero.webp
  const sliderImages = [
    "/hero.webp", // Local hero image
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Green Technology
    "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80"  // Sustainable Electronics
  ];

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slider Background */}
        <div className="absolute inset-0 z-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`SELEB Research Background ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-6 pt-4 sm:pt-8 md:pt-12">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-green-400 scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Sistem Elektronika Cerdas
            <span className="block text-green-400">Berkelanjutan</span>
          </h1>
          <div className="inline-block bg-green-500 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-full mb-6 sm:mb-8 shadow-lg mx-2">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white italic tracking-wide leading-tight">
              "SELEB – Making Sustainable Intelligent Electronics a Global Star."
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 px-2">
            Kelompok Riset SELEB mengembangkan teknologi elektronika inovatif 
            yang cerdas, berkelanjutan, dan ramah lingkungan untuk masa depan yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
              Jelajahi Penelitian
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none">
              Hubungi Kami
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
            <div className="animate-bounce">
              <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-0.5 h-2 sm:w-0.5 sm:h-2.5 md:w-1 md:h-3 bg-white rounded-full mt-1 sm:mt-1.5 md:mt-2"></div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tentang SELEB
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SELEB stands for Sistem Elektronika cErdas Berkelanjutan (English: Sustainable Intelligent Electronics Systems).
              In Indonesian, “seleb” also means celebrity — a well-known, celebrated, and influential figure.
              Inspired by this, SELEB symbolizes how sustainable intelligent electronics can shine like stars:
              recognized globally, impactful in society, and guiding the path toward a greener future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Visi</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                To be a pioneering research group in sustainable intelligent electronics, 
                leading innovations that strengthen society, advance technology, and protect the environment.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Misi</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                "SELEB develops next-generation intelligent and sustainable electronic systems 
                through innovative research, interdisciplinary collaboration, and real-world applications."
              </p>
            </div>
            
            <div className="bg-green-50 p-6 sm:p-8 rounded-2xl order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">6</div>
                  <div className="text-sm sm:text-base text-gray-700">Peneliti Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">20+</div>
                  <div className="text-sm sm:text-base text-gray-700">Publikasi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-sm sm:text-base text-gray-700">Proyek Riset</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-sm sm:text-base text-gray-700">Kemitraan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Area Penelitian
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fokus penelitian kami mencakup berbagai bidang teknologi elektronika 
              yang berkelanjutan dan inovatif
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🔋</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Sistem Energi Berkelanjutan
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Pengembangan sistem manajemen energi cerdas, teknologi baterai 
                ramah lingkungan, dan sistem energi terbarukan.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🤖</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                IoT dan Sistem Cerdas
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Penelitian Internet of Things, sistem embedded cerdas, dan 
                teknologi sensor untuk aplikasi berkelanjutan.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🌱</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Elektronika Ramah Lingkungan
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Desain dan pengembangan komponen elektronik yang biodegradable 
                dan proses manufaktur yang berkelanjutan.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">📡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Komunikasi Nirkabel
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Teknologi komunikasi nirkabel efisien energi, 5G/6G, dan 
                sistem komunikasi untuk smart city.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🧠</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                AI dan Machine Learning
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Implementasi kecerdasan buatan pada sistem elektronika, 
                edge computing, dan optimasi algoritma untuk efisiensi energi.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🏭</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Industri 4.0
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Sistem otomasi industri berkelanjutan, digital twin, dan 
                teknologi manufaktur cerdas yang ramah lingkungan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Berita Terkini
            </h2>
            <p className="text-xl text-gray-600">
              Update terbaru dari penelitian dan kegiatan SELEB
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-2">15 Januari 2024</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Breakthrough dalam Teknologi Baterai Berkelanjutan
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Tim SELEB berhasil mengembangkan teknologi baterai baru yang 
                  100% dapat didaur ulang dengan kapasitas 30% lebih tinggi.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 text-sm sm:text-base">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-green-500 to-emerald-600"></div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-2">10 Januari 2024</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Kemitraan dengan Industri Global
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  SELEB menandatangani MoU dengan perusahaan teknologi terkemuka 
                  untuk pengembangan IoT berkelanjutan.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 text-sm sm:text-base">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-emerald-400 to-green-600"></div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-2">5 Januari 2024</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Publikasi di Jurnal Internasional
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Penelitian tentang sistem elektronika biodegradable berhasil 
                  dipublikasikan di Nature Electronics.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 text-sm sm:text-base">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
