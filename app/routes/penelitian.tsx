import type { Route } from "./+types/penelitian";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ongoing Research - SELEB" },
    { name: "description", content: "Penelitian yang sedang dikerjakan oleh mahasiswa dan dosen Program Studi Teknik Komputer UPI" },
  ];
}

export default function Programs() {
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
              Ongoing Research
            </h1>
            <p className="text-lg sm:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Various innovative research projects being developed by students and faculty 
              in the fields of computer technology and sustainable electronics
            </p>
          </div>
        </div>
      </section>



      {/* Ongoing Research */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-200/20 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ongoing Research
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 sm:mb-8"></div>
            {/* <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Various innovative research projects being developed by students and faculty 
              in the fields of computer technology and sustainable electronics
            </p> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Research Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-green-700 transition-colors">
                Eco-Friendly Hydrogel Strain Sensor for IoT-Enabled Muscle Strength Detection (Funded by RP-ORKES 2025)
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                    Development of a sustainable alternative muscle strength measuring device produced domestically to substitute imported electromyography (EMG) equipment, with the potential to become a leading product in the local market.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-blue-700 transition-colors">
                BNC Hydrogel-Based Plantar Sensor Integrated with FlexiForce and IoT Systems
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                    Development of a BNC hydrogel-based plantar sensor integrated with FlexiForce and IoT for real-time monitoring of pressure distribution and body balance, with applications in medical rehabilitation and health monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-purple-700 transition-colors">
                Real-Time Food Safety and Quality Monitoring Using Moisture and pH-Responsive Sensor
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                    Moisture-responsive sensor functions to detect changes in humidity within food packaging, helping to maintain storage conditions that prevent bacterial growth. The colorimetric pH-based sensor enables quick and practical monitoring of food freshness by detecting color changes that correspond to pH variations caused by bacterial growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Card 4 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-orange-700 transition-colors">
                Strain Sensor for Health Monitoring Funded by RKI International UPI
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                    Development of an eco-friendly hydrogel-based flexible sensor for wearable device applications embedded in a bionic hand or human skin.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Card 5 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-teal-700 transition-colors">
                Film-Based Sensor for Evaluation and Detection of Parkinson's Disease
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                    Development of a film-based piezoelectric finger-tapping sensor for the detection and evaluation of Parkinson's disease through its ability to record muscle mechanical responses.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Card 6 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-indigo-700 transition-colors">
                Hydrogel-based Wound Dressings for Diabetic Patients with Integrated Multifunctional Smart Monitoring System and Internet of Things
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                    Develops an intelligent hydrogel-based wound dressing for diabetic patients, integrating temperature and glucose sensors with an IoT-based smart monitoring system. Made from sustainable cellulose materials reinforced with nanocellulose, the hydrogel enables real-time monitoring of wound conditions to improve healing efficiency and reduce complications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}