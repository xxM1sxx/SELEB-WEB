import type { Route } from "./+types/tim";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tim Peneliti - SELEB BRIN" },
    { name: "description", content: "Tim Peneliti Sistem Elektronika Cerdas Berkelanjutan - Badan Riset dan Inovasi Nasional" },
  ];
}

export default function Faculty() {
  const facultyMembers = [
    {
      name: "Athanasia Amanda Septevani, Ph.D",
      position: "Professor Researcher",
      // specialization: "Sustainable Electronics, Green Materials",
      specialization: "Keahlian",
      education: "PhD in Material Engineering",
      email: "atha001@brin.go.id",
      image: "/foto1.jpeg"
      // image: "👩‍🔬"
    },
    {
      name: "Prof. Dr. Yusuf Nur Wijayanto, S.T., M.Eng.",
      position: "Professor Researcher",
      specialization: "Keahlian",
      education: "Pendidikan",
      email: "yusu008@brin.go.id",
      image: "👨‍🔬"
    },
    {
      name: "Swasmi Purwajanti, S.T., M.Sc., Ph.D",
      position: "Senior Researcher",
      specialization: "Keahlian",
      education: "Pendidikan",
      email: "swas002@brin.go.id",
      image: "👩‍🔬"
    },
    {
      name: "Yohanes Susanto Ridwan, M.Si",
      position: "Senior Researcher",
      specialization: "Keahlian",
      education: "Pendidikan",
      email: "yoha006@brin.go.id",
      image: "👨‍🔬"
    },
    {
      name: "Nanda Nagara, S.T.,M.Eng",
      position: "Junior Researcher",
      specialization: "Keahlian",
      education: "Pendidikan",
      email: "nand010@brin.go.id",
      image: "👨‍🔬"
    },
    {
      name: "Dr. Nur Rohmah",
      position: "Junior Researcher",
      specialization: "Keahlian",
      education: "Pendidikan",
      email: "nurr003@brin.go.id",
      image: "👩‍🔬"
    }
  ];

  const studentMembers = [
    {
      name: "Fatih Nurrobi Alanshori",
      position: "MBKM",
      topik_riset: "Penerapan Artificial Intelligence untuk Kontrol Suhu dan Kelembapan pada cooler box berbasis Internet of Things",
      education: "S1 - Teknik Komputer - Universitas Pendidikan Indonesia",
      supervisor: "Nanda Nagara, S.T.,M.Eng",
      image: "👨‍🎓"
    },
    {
      name: "Muhammad Bilal Mardhiyyano Azizi",
      position: "MBKM",
      topik_riset: "Penerapan Artificial Intelligence untuk Kontrol Suhu dan Kelembapan pada cooler box berbasis Internet of Things",
      education: "S1 - Teknik Komputer - Universitas Pendidikan Indonesia",
      supervisor: "Nanda Nagara, S.T.,M.Eng",
      image: "👩‍🎓"
    },
    {
      name: "Nama",
      position: "Posisi",
      topik_riset: "Keahlian", 
      education: "Pendidikan",
      supervisor: "Pembimbing",
      image: "👨‍🎓"
    }
  ];

  const staffMembers = [
    {
      name: "Nama",
      position: "Posisi",
      responsibility: "Penanggung Jawab",
      image: "👨‍💼"
    },
    {
      name: "Nama",
      position: "Posisi",
      responsibility: "Penanggung Jawab",
      image: "👩‍💼"
    },
    {
      name: "Nama",
      position: "Posisi",
      responsibility: "Penanggung Jawab",
      image: "👨‍💼"
    },
    {
      name: "Nama",
      position: "Posisi",
      responsibility: "Penanggung Jawab",
      image: "👩‍💼"
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
            <div className="inline-block mb-4 sm:mb-6">
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent">
              Tim Peneliti SELEB
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Tim peneliti berpengalaman yang berdedikasi untuk mengembangkan 
              teknologi elektronika cerdas berkelanjutan
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Peneliti
            </h2>
            <p className="text-base sm:text-lg text-white">
              Tim peneliti berkualitas dengan keahlian dalam elektronika berkelanjutan dan teknologi hijau
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-4 sm:p-6">
                  <div className="text-center mb-3 sm:mb-4">
                    {/* <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl">{faculty.image}</span> */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 overflow-hidden">
                      {faculty.image.startsWith('/') ? (
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl sm:text-3xl">{faculty.image}</span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1">
                      {faculty.name}
                    </h3>
                    <p className="text-green-600 font-medium text-xs sm:text-sm mb-2">
                      {faculty.position}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Bidang Keahlian:</span>
                      <p className="text-gray-600">{faculty.specialization}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Pendidikan:</span>
                      <p className="text-gray-600">{faculty.education}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Email:</span>
                      <p className="text-gray-600 break-all">{faculty.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Mahasiswa
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Mahasiswa yang sedang menempuh penelitian dalam bidang elektronika berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {studentMembers.map((student, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-4 sm:p-6">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl">{student.image}</span>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1">
                      {student.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2">
                      {student.position}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Topik Penelitian:</span>
                      <p className="text-gray-600">{student.topik_riset}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Program Studi:</span>
                      <p className="text-gray-600">{student.education}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Pembimbing:</span>
                      <p className="text-gray-600">{student.supervisor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Staf Pendukung
            </h2>
            <p className="text-base sm:text-lg text-white">
              Tim staf profesional yang mendukung operasional dan administrasi penelitian
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {staffMembers.map((staff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-4 sm:p-6">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl">{staff.image}</span>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1">
                      {staff.name}
                    </h3>
                    <p className="text-purple-600 font-medium text-xs sm:text-sm mb-2">
                      {staff.position}
                    </p>
                  </div>
                  
                  <div className="text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Tanggung Jawab:</span>
                      <p className="text-gray-600">{staff.responsibility}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}