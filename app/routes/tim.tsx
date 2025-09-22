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
      name: "Athanasia Amanda Septevani, PhD",
      position: "Professor Researcher",
      specialization: "Sustainable Electronics, Green Materials",
      education: "PhD Materials Science",
      email: "atha001@brin.go.id",
      image: "👩‍🔬"
    },
    {
      name: "Prof. Dr. Yusuf Nur Wijayanto, S.T., M.Eng.",
      position: "Professor Researcher",
      specialization: "Smart Grid, Power Electronics",
      education: "PhD Electrical Engineering",
      email: "yusu008@brin.go.id",
      image: "👨‍🔬"
    },
    {
      name: "Swasmi Purwajanti, S.T., M.Sc., Ph.D",
      position: "Senior Researcher",
      specialization: "IoT Systems, Sensor Networks",
      education: "PhD Computer Engineering",
      email: "swas002@brin.go.id",
      image: "👩‍🔬"
    },
    {
      name: "Yohanes Susanto Ridwan, M.Si",
      position: "Senior Researcher",
      specialization: "Environmental Electronics, Data Analytics",
      education: "M.Si Physics",
      email: "yoha006@brin.go.id",
      image: "👨‍🔬"
    },
    {
      name: "Nanda Nagara, S.T.,M.Eng",
      position: "Junior Researcher",
      specialization: "Embedded Systems, Microcontroller Design",
      education: "M.Eng Electrical Engineering",
      email: "nand010@brin.go.id",
      image: "👨‍🔬"
    },
    {
      name: "Dr. Nur Rohmah",
      position: "Junior Researcher",
      specialization: "Smart Sensors, AI Applications",
      education: "PhD Computer Science",
      email: "nurr003@brin.go.id",
      image: "👩‍🔬"
    }
  ];

  const studentMembers = [
    {
      name: "Ahmad Fajar Pratama",
      position: "Mahasiswa S2",
      specialization: "IoT untuk Smart Agriculture",
      education: "S2 Teknik Elektro UPI",
      supervisor: "Dr. Sari Elektronika, S.T., M.T.",
      image: "👨‍🎓"
    },
    {
      name: "Siti Nurhaliza Putri",
      position: "Mahasiswa S2",
      specialization: "AI untuk Optimasi Energi",
      education: "S2 Teknik Informatika UPI",
      supervisor: "Dr. Maya Cerdas, S.T., M.T.",
      image: "👩‍🎓"
    },
    {
      name: "Rizky Dwi Saputra",
      position: "Mahasiswa S1",
      specialization: "Sensor Lingkungan Berkelanjutan",
      education: "S1 Teknik Elektro UPI",
      supervisor: "Dr. Lisa Pintar, S.Kom., M.T.",
      image: "👨‍🎓"
    }
  ];

  const staffMembers = [
    {
      name: "Hendra Teknologi, S.T.",
      position: "Kepala Laboratorium",
      responsibility: "Pengelolaan Lab Elektronika Berkelanjutan",
      image: "👨‍💼"
    },
    {
      name: "Dewi Inovasi, S.T.",
      position: "Teknisi Senior",
      responsibility: "Maintenance Peralatan Riset Canggih",
      image: "👩‍💼"
    },
    {
      name: "Rudi Riset, S.Kom.",
      position: "Admin Penelitian",
      responsibility: "Administrasi Proyek & Publikasi",
      image: "👨‍💼"
    },
    {
      name: "Siti Kolaborasi, S.E.",
      position: "Koordinator Kemitraan",
      responsibility: "Kerjasama Industri & Internasional",
      image: "👩‍💼"
    }
  ];

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
              Tim Peneliti SELEB
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Tim peneliti berpengalaman yang berdedikasi untuk mengembangkan 
              teknologi elektronika cerdas berkelanjutan
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Peneliti
            </h2>
            <p className="text-lg text-white">
              Tim peneliti berkualitas dengan keahlian dalam elektronika berkelanjutan dan teknologi hijau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">{faculty.image}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {faculty.name}
                    </h3>
                    <p className="text-green-600 font-medium text-sm mb-2">
                      {faculty.position}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
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
                      <p className="text-gray-600">{faculty.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mahasiswa
            </h2>
            <p className="text-lg text-gray-600">
              Mahasiswa yang sedang menempuh penelitian dalam bidang elektronika berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentMembers.map((student, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">{student.image}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {student.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">
                      {student.position}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Topik Penelitian:</span>
                      <p className="text-gray-600">{student.specialization}</p>
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
    </div>
  );
}