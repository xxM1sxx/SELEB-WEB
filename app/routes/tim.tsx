import type { Route } from "./+types/tim";
import { Link } from "react-router";
import { getAllStudentMembers, type StudentMember } from "../data/studentData";
import { getAllFacultyMembers, type FacultyMember } from "../data/facultyData";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Team - SELEB" },
    { name: "description", content: "Tim Peneliti Sistem Elektronika Cerdas Berkelanjutan - Badan Riset dan Inovasi Nasional" },
  ];
}

export default function Faculty() {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [studentMembers, setStudentMembers] = useState<StudentMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Load both faculty and student data concurrently
        const [researchers, students] = await Promise.all([
          getAllFacultyMembers(),
          getAllStudentMembers()
        ]);
        
        setFacultyMembers(researchers);
        setStudentMembers(students);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Gagal memuat data. Silakan coba lagi.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const retryLoadData = () => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Load both faculty and student data concurrently
        const [researchers, students] = await Promise.all([
          getAllFacultyMembers(),
          getAllStudentMembers()
        ]);
        
        setFacultyMembers(researchers);
        setStudentMembers(students);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Gagal memuat data. Silakan coba lagi.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  };

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

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              <p className="text-white mt-4">Memuat data...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-200 mb-4">{error}</p>
              <button 
                onClick={retryLoadData} 
                className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Coba Lagi
              </button>
            </div>
          )}

          {/* Faculty Grid */}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {facultyMembers.map((faculty, index) => (
                <div key={faculty.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                  <div className="p-4 sm:p-6">
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="w-16 h-16 sm:w-35 sm:h-35 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 overflow-hidden">
                        {faculty.image && faculty.image.startsWith('http') ? (
                          <img 
                            src={faculty.image} 
                            alt={faculty.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const nextElement = target.nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'flex';
                              }
                            }}
                          />
                        ) : faculty.image && faculty.image.startsWith('/') ? (
                          <img 
                            src={faculty.image} 
                            alt={faculty.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const nextElement = target.nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'flex';
                              }
                            }}
                          />
                        ) : (
                          <span className="text-2xl sm:text-3xl">{faculty.image || '👨‍🔬'}</span>
                        )}
                        <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-2xl sm:text-3xl">👨‍🔬</span>
                        </div>
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
                        See More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
                      {student.image && student.image.startsWith('http') ? (
                        <img 
                          src={student.image} 
                          alt={student.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const nextElement = target.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                      ) : student.image && student.image.startsWith('/') ? (
                        <img 
                          src={student.image} 
                          alt={student.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const nextElement = target.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                      ) : (
                        <span className="text-2xl sm:text-3xl">{student.image || '👨‍🎓'}</span>
                      )}
                      <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-2xl sm:text-3xl">👨‍🎓</span>
                      </div>
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
                      <p className="text-gray-600">{student.researchTopic}</p>
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
                      {student.researchLink && student.researchLink !== "-" ? (
                        <p><a className="text-gray-600 hover:text-blue-500 underline" href={`${student.researchLink}`} >
                          {student.researchLink}
                        </a></p>
                      ) : (
                        <p className="text-gray-600">{student.researchLink || "-"}</p>
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