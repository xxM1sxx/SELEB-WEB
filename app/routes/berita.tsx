import type { Route } from "./+types/berita";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "News & Announcements - SELEB" },
    { name: "description", content: "Berita terbaru dan pengumuman Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan (SELEB)" },
  ];
}

export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: "Tim SELEB Raih Penghargaan Best Paper di Konferensi Internasional",
      excerpt: "Penelitian tentang sistem energi berkelanjutan berhasil meraih penghargaan best paper di IEEE International Conference on Sustainable Electronics 2024.",
      date: "15 Januari 2024",
      category: "Prestasi",
      image: "🏆",
      featured: true
    },
    {
      id: 2,
      title: "Kerjasama Riset: MOU dengan Samsung Electronics",
      excerpt: "SELEB menandatangani MOU dengan Samsung Electronics untuk penelitian bersama dalam pengembangan teknologi elektronika ramah lingkungan.",
      date: "10 Januari 2024",
      category: "Kerjasama",
      image: "🤝",
      featured: true
    }
  ];

  const recentNews = [
    {
      id: 3,
      title: "Workshop Green Electronics Design untuk Peneliti Muda",
      excerpt: "Workshop intensif selama 3 hari tentang desain elektronika ramah lingkungan menggunakan material berkelanjutan.",
      date: "8 Januari 2024",
      category: "Workshop",
      image: "🔧"
    },
    {
      id: 4,
      title: "Seminar Internasional: Sustainable Smart Electronics",
      excerpt: "Seminar internasional dengan tema elektronika cerdas berkelanjutan, dihadiri 300+ peneliti dari berbagai negara.",
      date: "5 Januari 2024",
      category: "Seminar",
      image: "🎓"
    },
    {
      id: 5,
      title: "Breakthrough: Baterai Biodegradable dengan Kapasitas Tinggi",
      excerpt: "Tim SELEB berhasil mengembangkan baterai yang dapat terurai secara alami dengan kapasitas 30% lebih tinggi dari baterai konvensional.",
      date: "3 Januari 2024",
      category: "Penelitian",
      image: "🔬"
    },
    {
      id: 6,
      title: "Publikasi di Nature Electronics: Circular Economy in Electronics",
      excerpt: "Penelitian tentang ekonomi sirkular dalam industri elektronika berhasil dipublikasikan di jurnal Nature Electronics.",
      date: "2 Januari 2024",
      category: "Publikasi",
      image: "📝"
    },
    {
      id: 7,
      title: "Kuliah Tamu: Future of Sustainable Technology",
      excerpt: "Kuliah tamu dari CEO Tesla Energy membahas masa depan teknologi berkelanjutan dan peran elektronika cerdas.",
      date: "28 Desember 2023",
      category: "Kuliah Tamu",
      image: "🏭"
    },
    {
      id: 8,
      title: "Kompetisi Inovasi Elektronika Berkelanjutan 2024",
      excerpt: "Kompetisi nasional untuk mahasiswa dan peneliti muda dengan tema inovasi elektronika berkelanjutan, hadiah total 50 juta rupiah.",
      date: "25 Desember 2023",
      category: "Kompetisi",
      image: "💻"
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Call for Papers: SELEB International Conference 2024",
      date: "20 Januari 2024",
      urgent: true
    },
    {
      id: 2,
      title: "Pendaftaran Program Riset Kolaboratif SELEB",
      date: "18 Januari 2024",
      urgent: true
    },
    {
      id: 3,
      title: "Beasiswa Penelitian Elektronika Berkelanjutan",
      date: "15 Januari 2024",
      urgent: false
    },
    {
      id: 4,
      title: "Grant Penelitian dari Kementerian Riset dan Teknologi",
      date: "12 Januari 2024",
      urgent: false
    },
    {
      id: 5,
      title: "Rekrutmen Peneliti Post-Doctoral SELEB",
      date: "10 Januari 2024",
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent">
              News & Announcements
            </h1>
            <p className="text-lg sm:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and research highlights 
              of the SELEB group.
            </p>
          </div>
        </div>
      </section>

      {/* Recent News & Announcements */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Recent News */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Recent News
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {recentNews.map((news) => (
                  <article key={news.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg sm:text-xl">{news.image}</span>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-2 space-y-1 sm:space-y-0">
                          <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium sm:mr-2">
                            {news.category}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500">{news.date}</span>
                        </div>
                        
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
                          {news.title}
                        </h3>
                        
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
                          {news.excerpt}
                        </p>
                        
                        <button className="text-green-600 text-xs sm:text-sm font-medium hover:text-green-800 transition-colors">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              <div className="text-center mt-6 sm:mt-8">
                <button className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm sm:text-base">
                  View All News
                </button>
              </div>
            </div>

            {/* Announcements Sidebar */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Announcements
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className={`p-3 sm:p-4 rounded-lg border-l-4 ${
                      announcement.urgent 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-green-500 bg-green-50'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-1">
                            {announcement.title}
                          </h4>
                          <p className="text-xs text-gray-500">{announcement.date}</p>
                        </div>
                        {announcement.urgent && (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium ml-2 flex-shrink-0">
                            Penting
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
                  <button className="w-full text-green-600 text-xs sm:text-sm font-medium hover:text-green-800 transition-colors">
                    View All Announcements →
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Quick Links
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  <a href="#" className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    Research Portal
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    Publications Database
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    Research Collaboration
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    Virtual Laboratories
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    Data Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}