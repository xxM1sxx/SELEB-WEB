import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SELEB - Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan" },
    { name: "description", content: "Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan - Mengembangkan teknologi elektronika yang inovatif dan berkelanjutan" },
  ];
}
// ini command
export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.webp"
            alt="SELEB Research Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            }}
            onLoad={(e) => {
              e.currentTarget.parentElement!.style.background = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sistem Elektronika Cerdas
            <span className="block text-green-400">Berkelanjutan</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Kelompok Riset SELEB mengembangkan teknologi elektronika inovatif 
            yang cerdas, berkelanjutan, dan ramah lingkungan untuk masa depan yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
              Jelajahi Penelitian
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto">
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
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
              Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan (SELEB) adalah 
              pusat penelitian yang fokus pada pengembangan teknologi elektronika 
              yang inovatif, cerdas, dan ramah lingkungan.
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
