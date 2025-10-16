import type { Route } from "./+types/data_tim_peneliti";
import { Link } from "react-router";
import { facultyMembers } from "../data/facultyData";

export function meta({ params }: Route.MetaArgs) {
  const facultyName = decodeURIComponent(params.name || "");
  return [
    { title: `${facultyName} - Data Tim Peneliti - SELEB BRIN` },
    { name: "description", content: `Profil lengkap ${facultyName} - Tim Peneliti Sistem Elektronika Cerdas Berkelanjutan` },
  ];
}

export default function DataTimPeneliti({ params }: Route.ComponentProps) {
  const facultyName = decodeURIComponent(params.name || "");
  
  // Cari data fakultas berdasarkan nama
  const faculty = facultyMembers.find(f => f.name === facultyName);

  if (!faculty) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Data tidak ditemukan</h1>
          <Link to="/tim" className="text-green-600 hover:text-green-800 underline">
            Kembali ke halaman Tim
          </Link>
        </div>
      </div>
    );
  }

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
              <Link 
                to="/tim" 
                className="text-green-200 hover:text-white text-sm underline mb-4 inline-block"
              >
                ← Kembali ke Tim Peneliti
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent">
              Data Tim - Peneliti
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Profil lengkap peneliti Sistem Elektronika Cerdas Berkelanjutan
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Detail Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Information */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Photo and Basic Info */}
                <div className="lg:col-span-1">
                  <div className="text-center">
                    <div className="w-55 h-55 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                      {faculty.image.startsWith('/') ? (
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-8xl">{faculty.image}</span>
                      )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {faculty.name}
                    </h2>
                    <p className="text-lg text-green-600 font-medium">
                      {faculty.position}
                    </p>
                  </div>
                </div>

                {/* Right Column - Detailed Information */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialization</h3>
                      <p className="text-gray-700 leading-relaxed">{faculty.specialization}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
                      <p className="text-gray-700 leading-relaxed">{faculty.education}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Link</h3>
                      <a 
                        href={faculty.linkPenelitian} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 underline"
                      >
                        {faculty.linkPenelitian}
                      </a>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <a 
                        href={`mailto:${faculty.email}`}
                        className="text-green-600 hover:text-green-800 underline"
                      >
                        {faculty.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bibliography Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bibliography</h3>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                {faculty.bibliography}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}