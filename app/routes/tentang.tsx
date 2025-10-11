import type { Route } from "./+types/tentang";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - SELEB" },
    { name: "description", content: "Tentang Sistem Elektronika Cerdas Berkelanjutan - BRIN Samaun Samadikun" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-emerald-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 sm:mb-6">
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent">
              SELEB
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-green-100">
              Sustainable Intelligent Electronic Systems
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed px-2">
              From Waste to Advanced and Intelligent Electronic Devices - A research group
              that integrates advanced control, navigation, and sensing technologies for
              sustainable electronic systems.
            </p>
          </div>
        </div>
      </section>

      {/* Background & Research Focus Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Research Background
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 sm:mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    🎯
                  </span>
                  Research Focus
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  The Sustainable Intelligent Electronic Systems research group focuses on the development of 
                  <span className="font-semibold text-green-700"> flexible, portable, and dynamic electronic devices</span> 
                  that meet the demands of modern and future applications across various domains such as
                  <span className="font-semibold text-green-700"> transportation, healthcare, disaster mitigation,
                    military, agriculture, marine, energy, and industry.</span>
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-4 border-emerald-500 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    ♻️
                  </span>
                  Sustainable Approach
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  With an <span className="font-semibold text-emerald-700">emphasis on sustainability</span>, 
                  the group prioritizes environmentally friendly approaches in the fabrication and
                  production of intelligent electronic systems. Our research integrates advanced control,
                  navigation, and sensing algorithms to enable electronic systems to monitor, direct,
                  and interact optimally with dynamic environments while minimizing ecological footprints
                  and enhancing long-term viability.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">🔬</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">Teknologi Canggih</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Kontrol, navigasi & sensing</p>
                  </div>
                  
                  <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">🌍</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">Ramah Lingkungan</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Minimalisir jejak ekologis</p>
                  </div>
                  
                  <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">⚡</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">Efisiensi Energi</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Optimalisasi konsumsi daya</p>
                  </div>
                  
                  <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">🚀</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">Inovasi</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Solusi masa depan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Scope Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-emerald-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-green-400 rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-emerald-300 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-teal-400 rounded-full opacity-5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Ruang Lingkup Penelitian
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-300 to-emerald-300 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed px-2">
              Penelitian kami mengintegrasikan teknologi kontrol, navigasi, dan sensing canggih untuk 
              memungkinkan sistem elektronik memantau, mengarahkan, dan berinteraksi secara optimal 
              dengan lingkungan dinamis sambil meminimalkan jejak ekologis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-xl md:text-2xl">🌱</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">Green Electronics Development</h3>
              </div>
              <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base">
                Desain dan fabrikasi perangkat elektronik ramah lingkungan menggunakan 
                material alami dan limbah lingkungan untuk menciptakan solusi berkelanjutan.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-emerald-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-xl md:text-2xl">🔧</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">Platform Engineering</h3>
              </div>
              <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base">
                Pengembangan konfigurasi elektronik 2D dan 3D dengan konduktivitas yang 
                ditingkatkan, stabilitas mekanik, dan sensitivitas untuk aplikasi canggih.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-teal-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-xl md:text-2xl">🧬</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">Biointegration</h3>
              </div>
              <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base">
                Integrasi platform elektronik dengan molekul fungsional, material, 
                dan jaringan biologis untuk aplikasi biomedis dan lingkungan.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-xl md:text-2xl">🤖</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">Multifunctional Electronic Systems</h3>
              </div>
              <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base">
                Desain sistem elektronik cerdas dengan fungsi kontrol yang dioptimalkan 
                untuk berbagai aplikasi industri dan konsumen.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-xl md:text-2xl">📡</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">IoT-Enabled Monitoring</h3>
              </div>
              <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base">
                Pengembangan teknologi sensing dan pengukuran cerdas yang terintegrasi 
                dengan IoT untuk sistem monitoring dan kontrol real-time.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-xl md:text-2xl">⚡</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">Smart EcoTronics</h3>
              </div>
              <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base">
                Sistem elektronik dinamis, multifungsi, ramah lingkungan dengan 
                kontrol real-time untuk optimalisasi kinerja dan efisiensi energi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Visualization */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Area Penelitian Terintegrasi
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Pendekatan holistik dalam pengembangan sistem elektronik berkelanjutan melalui 
              integrasi berbagai disiplin ilmu dan teknologi canggih.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative">
              {/* Circular Diagram */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl z-10">
                  <div className="text-center text-white">
                    <div className="text-lg sm:text-xl md:text-2xl mb-1">⚡</div>
                    <div className="text-xs sm:text-xs md:text-xs font-bold">Smart EcoTronics</div>
                  </div>
                </div>
                
                {/* Outer Circles */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                  <div className="text-center text-white">
                    <div className="text-sm sm:text-base md:text-lg">🌱</div>
                    <div className="text-xs font-semibold">Eco-Devices</div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                  <div className="text-center text-white">
                    <div className="text-sm sm:text-base md:text-lg">💻</div>
                    <div className="text-xs font-semibold">Digitalization</div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                  <div className="text-center text-white">
                    <div className="text-sm sm:text-base md:text-lg">🔌</div>
                    <div className="text-xs font-semibold">Electronic Circuits</div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                  <div className="text-center text-white">
                    <div className="text-sm sm:text-base md:text-lg">🎯</div>
                    <div className="text-xs font-semibold">Design & Fabrication</div>
                  </div>
                </div>
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <circle cx="192" cy="192" r="120" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                  <circle cx="192" cy="192" r="80" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3"/>
                </svg>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    🎯
                  </span>
                  Pendekatan Multidisiplin
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  Mengintegrasikan <span className="font-semibold text-green-700">desain & fabrikasi</span>, 
                  <span className="font-semibold text-blue-700"> digitalisasi</span>, 
                  <span className="font-semibold text-purple-700"> sirkuit elektronik</span>, dan 
                  <span className="font-semibold text-emerald-700"> eco-devices</span> dalam satu ekosistem penelitian.
                </p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-emerald-500 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    🔄
                  </span>
                  Sinergi Teknologi
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  Setiap area penelitian saling mendukung untuk menciptakan 
                  <span className="font-semibold text-emerald-700"> Smart EcoTronics</span> - 
                  sistem elektronik yang dinamis, multifungsi, dan berkelanjutan.
                </p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-teal-500 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    🌍
                  </span>
                  Dampak Berkelanjutan
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  Setiap inovasi dirancang untuk memberikan dampak positif jangka panjang 
                  terhadap lingkungan dan masyarakat melalui teknologi yang bertanggung jawab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-emerald-300/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Bergabunglah dalam Revolusi
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Elektronika Berkelanjutan
              </span>
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto px-2">
              Mari bersama-sama menciptakan masa depan yang lebih hijau melalui inovasi 
              teknologi elektronik yang berkelanjutan dan bertanggung jawab.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🔬</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Penelitian Kolaboratif</h3>
              <p className="text-sm sm:text-base text-green-100">Bergabung dalam proyek penelitian multidisiplin</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🌱</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Inovasi Berkelanjutan</h3>
              <p className="text-sm sm:text-base text-green-100">Kembangkan teknologi ramah lingkungan</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🤝</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Jaringan Global</h3>
              <p className="text-sm sm:text-base text-green-100">Terhubung dengan komunitas peneliti dunia</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Mulai Kolaborasi
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
          
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
            <p className="text-sm sm:text-base md:text-lg text-green-100">
              <span className="font-semibold">SELEB Research Group</span> - 
              Sustainable Intelligent Electronics Systems
            </p>
            <p className="text-sm sm:text-base text-green-200 mt-2">
              "From Wastes to Advanced and Smart Electronic Devices"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}