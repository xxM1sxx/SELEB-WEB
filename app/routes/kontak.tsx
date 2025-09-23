import type { Route } from "./+types/kontak";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kontak - SELEB Research Group" },
    { name: "description", content: "Hubungi SELEB Research Group - Sustainable Intelligent Electronic Systems" },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-green-800 text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-300/30 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Hubungi Kami
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-emerald-300 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Kami siap membantu Anda dengan informasi tentang SELEB Research Group dan 
              penelitian Sustainable Intelligent Electronic Systems. Jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-200/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Silakan isi form di bawah ini untuk mengirim pesan kepada kami. 
                Kami akan merespons dalam waktu 1x24 jam.
              </p>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Nama Depan *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                      placeholder="Masukkan nama depan"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Nama Belakang *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                      placeholder="Masukkan nama belakang"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Kategori Pertanyaan *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                  >
                    <option value="">Pilih kategori</option>
                    <option value="research">Penelitian & Kolaborasi</option>
                    <option value="publication">Publikasi & Paper</option>
                    <option value="partnership">Kemitraan Industri</option>
                    <option value="academic">Program Akademik</option>
                    <option value="facilities">Fasilitas Laboratorium</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm sm:text-base"
                    placeholder="Subjek pesan Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical text-sm sm:text-base"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-3 text-xs sm:text-sm text-gray-600">
                    Saya setuju dengan <a href="#" className="text-emerald-600 hover:text-emerald-800">kebijakan privasi</a> dan 
                    memberikan izin untuk memproses data pribadi saya. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:from-emerald-700 hover:to-green-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Informasi Kontak
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Office Address */}
                <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Alamat Kantor</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        SELEB Research Group<br />
                        Sustainable Intelligent Electronic Systems<br />
                        Fakultas Pendidikan Teknologi dan Kejuruan<br />
                        Universitas Pendidikan Indonesia<br />
                        Jl. Dr. Setiabudhi No. 229, Bandung 40154<br />
                        Jawa Barat, Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg sm:text-xl">📞</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">Telepon</h3>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <strong>Kantor:</strong> (022) 2013163<br />
                      <strong>Fax:</strong> (022) 2013651
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg sm:text-xl">📧</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">Email</h3>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <strong>Research:</strong> seleb@upi.edu<br />
                      <strong>Kolaborasi:</strong> research.seleb@upi.edu
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl">🕒</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Jam Operasional</h3>
                  </div>
                  <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                    <div className="flex justify-between">
                      <span>Senin - Kamis</span>
                      <span>08:00 - 16:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jumat</span>
                      <span>08:00 - 11:30 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu - Minggu</span>
                      <span className="text-red-500">Tutup</span>
                    </div>
                  </div>
                </div>

                {/* Research Focus */}
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl">🔬</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Fokus Penelitian</h3>
                  </div>
                  <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                    <p>• Green Electronics Development</p>
                    <p>• Platform Engineering</p>
                    <p>• Bio-inspired Systems</p>
                    <p>• Smart EcoTronics</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl">🌐</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Media Sosial</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-blue-100 text-xs sm:text-sm">
                      <span>📘</span>
                      <span>Facebook</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-600 transition-colors bg-blue-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-blue-100 text-xs sm:text-sm">
                      <span>🐦</span>
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition-colors bg-pink-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-pink-100 text-xs sm:text-sm">
                      <span>📷</span>
                      <span>Instagram</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors bg-red-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-red-100 text-xs sm:text-sm">
                      <span>📺</span>
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Lokasi Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600">
              Temukan lokasi SELEB Research Group di kampus UPI Bandung
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-emerald-100 to-green-50 flex items-center justify-center p-8 sm:p-12">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <span className="text-3xl sm:text-4xl">🗺️</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Peta Lokasi</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  SELEB Research Group<br />
                  Universitas Pendidikan Indonesia<br />
                  Jl. Dr. Setiabudhi No. 229, Bandung
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                    Buka di Google Maps
                  </button>
                  <button className="border-2 border-emerald-600 text-emerald-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                    Petunjuk Arah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600">
              Temukan jawaban untuk pertanyaan umum tentang SELEB Research Group
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 text-emerald-600 font-bold text-sm sm:text-base">Q</span>
                Apa itu SELEB Research Group?
              </h3>
              <p className="text-gray-600 leading-relaxed pl-9 sm:pl-11 text-sm sm:text-base">
                SELEB (Sustainable Intelligent Electronic Systems) adalah kelompok penelitian yang berfokus pada pengembangan sistem elektronik cerdas dan berkelanjutan di bidang teknologi komputer dan elektronika.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 text-emerald-600 font-bold text-sm sm:text-base">Q</span>
                Bagaimana cara bergabung dengan penelitian?
              </h3>
              <p className="text-gray-600 leading-relaxed pl-9 sm:pl-11 text-sm sm:text-base">
                Mahasiswa dapat bergabung melalui program magang, tugas akhir, atau sebagai asisten peneliti. Silakan hubungi kami melalui email atau datang langsung ke laboratorium untuk informasi lebih lanjut.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 text-emerald-600 font-bold text-sm sm:text-base">Q</span>
                Apa saja bidang penelitian yang tersedia?
              </h3>
              <p className="text-gray-600 leading-relaxed pl-9 sm:pl-11 text-sm sm:text-base">
                Kami fokus pada IoT, AI/Machine Learning, sistem embedded, teknologi hijau, smart systems, dan pengembangan perangkat lunak untuk aplikasi berkelanjutan.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 text-emerald-600 font-bold text-sm sm:text-base">Q</span>
                Apakah ada program kolaborasi industri?
              </h3>
              <p className="text-gray-600 leading-relaxed pl-9 sm:pl-11 text-sm sm:text-base">
                Ya, kami terbuka untuk kolaborasi dengan industri dalam bentuk penelitian bersama, konsultasi teknologi, dan pengembangan produk inovatif yang berkelanjutan.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 text-emerald-600 font-bold text-sm sm:text-base">Q</span>
                Bagaimana cara mendapatkan informasi terbaru?
              </h3>
              <p className="text-gray-600 leading-relaxed pl-9 sm:pl-11 text-sm sm:text-base">
                Ikuti media sosial kami, kunjungi website secara berkala, atau berlangganan newsletter untuk mendapatkan update terbaru tentang penelitian dan kegiatan SELEB Research Group.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}