import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SELEB - Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan" },
    { name: "description", content: "Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan - Mengembangkan teknologi elektronika yang inovatif dan berkelanjutan" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-700">
        {/* Background Image - No overlay */}
        <img
          src="/hero.webp"
          alt="SELEB Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={(e) => {
            console.log('Image failed to load, using gradient fallback');
            e.currentTarget.style.display = 'none';
          }}
          onLoad={(e) => {
            console.log('Image loaded successfully');
            // Make sure image is visible
            e.currentTarget.style.opacity = '1';
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            <span className="block text-white">SELEB</span>
            <span className="block text-2xl md:text-3xl font-normal text-white mt-2">
              Sistem Elektronika Cerdas Berkelanjutan
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Making Sustainable Intelligent Electronics a Global Star
          </p>
          <div className="space-x-4">
            <a href="/about" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl inline-block">
              Pelajari Lebih Lanjut
            </a>
            <a href="/programs" className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl inline-block">Lihat Penelitian</a>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To be a pioneering research group in sustainable intelligent electronics, 
                leading innovations that strengthen society, advance technology, and protect the environment.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Misi</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "SELEB develops next-generation intelligent and sustainable electronic systems 
                through innovative research, interdisciplinary collaboration, and real-world applications."
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">6</div>
                  <div className="text-gray-700">Peneliti Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
                  <div className="text-gray-700">Publikasi</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-700">Proyek Riset</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-gray-700">Kemitraan</div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sistem Energi Berkelanjutan
              </h3>
              <p className="text-gray-600">
                Pengembangan sistem manajemen energi cerdas, teknologi baterai 
                ramah lingkungan, dan sistem energi terbarukan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                IoT dan Sistem Cerdas
              </h3>
              <p className="text-gray-600">
                Penelitian Internet of Things, sistem embedded cerdas, dan 
                teknologi sensor untuk aplikasi berkelanjutan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Elektronika Ramah Lingkungan
              </h3>
              <p className="text-gray-600">
                Desain dan pengembangan komponen elektronik yang biodegradable 
                dan proses manufaktur yang berkelanjutan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Komunikasi Nirkabel
              </h3>
              <p className="text-gray-600">
                Teknologi komunikasi nirkabel efisien energi, 5G/6G, dan 
                sistem komunikasi untuk smart city.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI dan Machine Learning
              </h3>
              <p className="text-gray-600">
                Implementasi kecerdasan buatan pada sistem elektronika, 
                edge computing, dan optimasi algoritma untuk efisiensi energi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Industri 4.0
              </h3>
              <p className="text-gray-600">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="text-sm text-green-600 font-medium mb-2">15 Januari 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Breakthrough dalam Teknologi Baterai Berkelanjutan
                </h3>
                <p className="text-gray-600 mb-4">
                  Tim SELEB berhasil mengembangkan teknologi baterai baru yang 
                  100% dapat didaur ulang dengan kapasitas 30% lebih tinggi.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600"></div>
              <div className="p-6">
                <div className="text-sm text-green-600 font-medium mb-2">10 Januari 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kemitraan dengan Industri Global
                </h3>
                <p className="text-gray-600 mb-4">
                  SELEB menandatangani MoU dengan perusahaan teknologi terkemuka 
                  untuk pengembangan IoT berkelanjutan.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-green-600"></div>
              <div className="p-6">
                <div className="text-sm text-green-600 font-medium mb-2">5 Januari 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Publikasi di Jurnal Internasional
                </h3>
                <p className="text-gray-600 mb-4">
                  Penelitian tentang sistem elektronika biodegradable berhasil 
                  dipublikasikan di Nature Electronics.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700">
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
