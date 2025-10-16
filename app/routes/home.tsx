import type { Route } from "./+types/home";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SELEB - Sistem Elektronika Cerdas Berkelanjutan" },
    { name: "description", content: "Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan - Mengembangkan teknologi elektronika yang inovatif dan berkelanjutan" },
  ];
}
// ini command
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of image URLs - slides from home-image-slider folder
  const sliderImages = [
    "/home-image-slider/slide1.webp",
    "/home-image-slider/rapat.jpeg",
    "/home-image-slider/slide2.jpeg",
    "/home-image-slider/slide3.jpeg",
  ];

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slider Background */}
        <div className="absolute inset-0 z-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`SELEB Research Background ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-6 pt-4 sm:pt-8 md:pt-12">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-green-400 scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Sustainable Intelligent Electronics
            <span className="block text-green-400">Systems</span>
          </h1>
          <div className="inline-block bg-green-500 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-full mb-6 sm:mb-8 shadow-lg mx-2">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white italic tracking-wide leading-tight">
              "SINES – Innovation in Intelligent Electronics, Sustainability in Action."
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 px-2">
            The SINES Research Group develops innovative, smart, sustainable, and
            environmentally friendly electronic technologies for a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
              Explore Research
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none">
              Contact Us
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
            <div className="animate-bounce">
              <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-0.5 h-2 sm:w-0.5 sm:h-2.5 md:w-1 md:h-3 bg-white rounded-full mt-1 sm:mt-1.5 md:mt-2"></div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About SINES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              <span className="font-bold text-green-500">SINES</span> focuses on developing intelligent,
              energy-efficient, and sustainable electronic systems that address real-world environmental and
              technological challenges. The group integrates multidisciplinary expertise in electronics,
              materials science, artificial intelligence, and green technology to design the next generation
              of smart, sustainable solutions for a better planet.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our work connects innovation with the
              <span className="font-bold text-green-500"> Sustainable Development Goals (SDGs) </span>
              to create intelligent electronic systems that minimize ecological impact and promote long-term
              sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-4">💡 Vision</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-8 leading-relaxed text-justify">
                To become a leading center of excellence in sustainable and intelligent electronics,
                driving innovation that harmonizes technology and environmental stewardship for a smarter,
                greener world.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-4">🎯 Mission</h3>
              <ol className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed list-decimal pl-5 text-justify">
                <li>Conduct high-impact research in intelligent and sustainable electronic systems.</li>
                <li>Develop eco-efficient devices and circuits through innovative design and materials.</li>
                <li>Foster collaboration between academia, industry, and government for sustainable technology solutions.</li>
                <li>Empower young researchers to contribute to a greener electronics future.</li>
              </ol>
            </div>
            
            <div className="bg-green-50 p-6 sm:p-8 rounded-2xl order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">6</div>
                  <div className="text-sm sm:text-base text-gray-700">Active Researcher</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">20+</div>
                  <div className="text-sm sm:text-base text-gray-700">Publication</div>
                </div> */}
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-sm sm:text-base text-gray-700">Research Project</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-sm sm:text-base text-gray-700">Partnership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research focus covers various fields of electronic technology 
              that are sustainable and innovative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🔋</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Eco-Devices
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Green Paltform Development; Performance Optimization; Design & Fabrication.
              </p>
              <br />
              <p className="text-sm sm:text-base text-gray-600 text-justify">
                Developing environmentally friendly electronic devices with a focus on energy efficiency
                and sustainable materials. Research includes optimizing the performance of green devices
                and fabrication techniques that reduce environmental impact.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🤖</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Electronic Circuits
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                System Design; Control; Signals & Transmission.
              </p>
              <br />
              {/* <br /> */}
              <p className="text-sm sm:text-base text-gray-600 text-justify">
                Designing and developing complex electronic systems with a focus on automatic control
                and efficient signal transmission. Research encompasses analog and digital circuit design
                for various industrial applications.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🌱</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Digitalization
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Programming & Visualization; Internet of Things; Artificial Intelligence.
              </p>
              <br />
              {/* <br /> */}
              <p className="text-sm sm:text-base text-gray-600 text-justify">
                Integrating modern digital technologies such as IoT and AI to create smart solutions.
                Research includes algorithm development, data visualization, and connected systems to
                improve operational efficiency.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">📡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Smart-EcoTronics
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Dynamics; Smart & Multi-Functions; Eco-Friendly; Real-Time Control.
              </p>
              <br />
              <p className="text-sm sm:text-base text-gray-600 text-justify">
                Developing smart multifunctional electronic systems with real-time control and environmental
                friendliness. Research focuses on system dynamics, smart function integration, and sustainable
                technologies for future applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recent News
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates on SELEB research and activities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-2">January 15, 2024</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  News Title 1
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Description Title 1
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 text-sm sm:text-base">
                  Read More →
                </a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-green-500 to-emerald-600"></div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-2">January 10, 2024</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  News Title 2
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Description Title 2
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 text-sm sm:text-base">
                  Read More →
                </a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-emerald-400 to-green-600"></div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-2">January 5, 2024</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  News Title 3
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Description Title 3
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 text-sm sm:text-base">
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
