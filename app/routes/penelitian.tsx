import type { Route } from "./+types/penelitian";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Penelitian yang Sedang Berjalan - TEKKOM UPI" },
    { name: "description", content: "Penelitian yang sedang dikerjakan oleh mahasiswa dan dosen Program Studi Teknik Komputer UPI" },
  ];
}

export default function Programs() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent">
              Penelitian yang Sedang Berjalan
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Berbagai penelitian inovatif yang sedang dikembangkan oleh mahasiswa dan dosen 
              dalam bidang teknologi komputer dan elektronika berkelanjutan
            </p>
          </div>
        </div>
      </section>



      {/* Ongoing Research */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-200/20 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Penelitian yang Sedang Berjalan
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Berbagai penelitian inovatif yang sedang dikembangkan oleh mahasiswa dan dosen 
              dalam bidang teknologi komputer dan elektronika berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-green-700 transition-colors">
                Sistem IoT untuk Monitoring Kualitas Air Berbasis Machine Learning
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Peneliti:</p>
                  <p className="text-gray-600">Ahmad Rizki Pratama</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Pembimbing:</p>
                  <p className="text-gray-600">Dr. Sari Wijayanti, M.T.</p>
                </div>
              </div>
            </div>

            {/* Research Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors">
                Pengembangan Chatbot Cerdas untuk Layanan Akademik Menggunakan NLP
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Peneliti:</p>
                  <p className="text-gray-600">Siti Nurhaliza</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Pembimbing:</p>
                  <p className="text-gray-600">Prof. Dr. Budi Santoso, M.Kom.</p>
                </div>
              </div>
            </div>

            {/* Research Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors">
                Implementasi Blockchain untuk Keamanan Data Mahasiswa
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Peneliti:</p>
                  <p className="text-gray-600">Muhammad Fajar Sidiq</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Pembimbing:</p>
                  <p className="text-gray-600">Dr. Indra Kurniawan, M.T.</p>
                </div>
              </div>
            </div>

            {/* Research Card 4 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-orange-700 transition-colors">
                Aplikasi Mobile AR untuk Pembelajaran Interaktif Teknik Komputer
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Peneliti:</p>
                  <p className="text-gray-600">Rina Kartika Sari</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Pembimbing:</p>
                  <p className="text-gray-600">Dr. Andi Suryanto, M.Kom.</p>
                </div>
              </div>
            </div>

            {/* Research Card 5 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-teal-700 transition-colors">
                Smart Farming System dengan Sensor IoT dan Analisis Data
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Peneliti:</p>
                  <p className="text-gray-600">Dedi Kurniawan</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Pembimbing:</p>
                  <p className="text-gray-600">Dr. Maya Sari, M.T.</p>
                </div>
              </div>
            </div>

            {/* Research Card 6 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-indigo-700 transition-colors">
                Game Edukasi VR untuk Pembelajaran Algoritma dan Struktur Data
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Peneliti:</p>
                  <p className="text-gray-600">Bayu Adi Nugroho</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Pembimbing:</p>
                  <p className="text-gray-600">Dr. Rini Agustina, M.Kom.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}