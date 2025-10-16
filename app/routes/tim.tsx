import type { Route } from "./+types/tim";
import { Link } from "react-router";
import { facultyMembers } from "../data/facultyData";
import { studentMembers } from "../data/studentData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Team - SELEB" },
    { name: "description", content: "Tim Peneliti Sistem Elektronika Cerdas Berkelanjutan - Badan Riset dan Inovasi Nasional" },
  ];
}

export default function Faculty() {

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
              SELEB Research Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              SELEB Research Team consists of experienced researchers dedicated to 
              developing sustainable electronic technologies
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Researchers
            </h2>
            <p className="text-base sm:text-lg text-white">
              SELEB Research Team consists of experienced researchers dedicated to 
              developing sustainable electronic technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                <div className="p-4 sm:p-6">
                  <div className="text-center mb-3 sm:mb-4">
                    {/* <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl">{faculty.image}</span> */}
                    <div className="w-16 h-16 sm:w-35 sm:h-35 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 overflow-hidden">
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
                  
                  <div className="space-y-2 text-xs sm:text-sm mb-4">
                    <div>
                      <span className="font-medium text-gray-700">Specialization:</span>
                      <p className="text-gray-600">{faculty.specialization}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Education:</span>
                      <p className="text-gray-600">{faculty.education}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Email:</span>
                      <p className="text-gray-600 break-all">{faculty.email}</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <Link 
                      to={`/data-tim-peneliti/${encodeURIComponent(faculty.name)}`}
                      className="text-green-600 hover:text-green-800 text-base font-medium underline"
                    >
                      See More
                    </Link>
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
              Postdoctoral Fellow and Students
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              SELEB Research Team consists of postdoctoral fellow and students currently pursuing research 
              in sustainable electronic technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {studentMembers.map((student, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-4 sm:p-6">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 overflow-hidden">
                      {student.image.startsWith('/') ? (
                        <img 
                          src={student.image} 
                          alt={student.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl sm:text-3xl">{student.image}</span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1">
                      {student.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2">
                      {student.position}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="">
                      <span className="font-medium text-black">Research Topic:</span>
                      <p className="text-gray-600">{student.topik_riset}</p>
                    </div>
                    <div>
                      <span className="font-medium text-black">Education:</span>
                      <p className="text-gray-600">{student.education}</p>
                    </div>
                    <div>
                      <span className="font-medium text-black">Supervisor:</span>
                      <p className="text-gray-600">{student.supervisor}</p>
                    </div>
                    <div>
                      <span className="font-medium text-black">Publication Link:</span>
                      {student.link_penelitian && student.link_penelitian !== "-" ? (
                        <p><a className="text-gray-600 hover:text-blue-500 underline" href={`${student.link_penelitian}`} >
                          {student.link_penelitian}
                        </a></p>
                      ) : (
                        <p className="text-gray-600">{student.link_penelitian || "-"}</p>
                      )}
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