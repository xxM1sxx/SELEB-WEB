import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg text-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23ffffff'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-family='Arial' font-size='30' font-weight='bold' fill='%23059669'%3ESELEB%3C/text%3E%3C/svg%3E"
                alt="SELEB Logo"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 drop-shadow-lg">SELEB</h1>
              <p className="text-sm text-gray-600 drop-shadow-md">Sistem Elektronika Cerdas Berkelanjutan</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-md ${
                    isActive
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-md"
                  }`
                }
              >
                Beranda
              </NavLink>
              <NavLink
                to="/tentang"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-md ${
                    isActive
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-md"
                  }`
                }
              >
                Tentang
              </NavLink>
              <NavLink
                to="/penelitian"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-md ${
                    isActive
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-md"
                  }`
                }
              >
                Penelitian
              </NavLink>
              <NavLink
                to="/tim"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-md ${
                    isActive
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-md"
                  }`
                }
              >
                Tim
              </NavLink>
              <NavLink
                to="/berita"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-md ${
                    isActive
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-md"
                  }`
                }
              >
                Berita
              </NavLink>
              <NavLink
                to="/publikasi"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-md ${
                    isActive
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-md"
                  }`
                }
              >
                Publikasi
              </NavLink>
              <NavLink
                to="/kontak"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-md ${
                    isActive
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-md"
                  }`
                }
              >
                Kontak
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">SELEB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SELEB</h3>
                <p className="text-gray-300 text-sm">Sistem Elektronika Cerdas Berkelanjutan</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan yang berdedikasi 
              mengembangkan teknologi elektronika inovatif dan ramah lingkungan untuk 
              masa depan yang berkelanjutan.
            </p>
            
            {/* Address Section */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-green-400">📍 Alamat</h4>
              <div className="text-gray-300 space-y-1">
                <p className="font-medium">Kawasan Sains dan Teknologi Samaun Samadikun</p>
                <p>Jl. Sangkuriang, Dago</p>
                <p>Kecamatan Coblong, Kota Bandung 40135</p>
                <p>Jawa Barat, Indonesia</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-green-400">📞 Kontak</h4>
              <div className="text-gray-300 space-y-1">
                <p>WhatsApp: +62811-1064-6794</p>
                <p>Email: orei@brin.go.id</p>
              </div>
            </div>
            
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Penelitian</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-300 hover:text-white block">Sistem Energi Berkelanjutan</a>
              <a href="#" className="text-gray-300 hover:text-white block">IoT & Sistem Cerdas</a>
              <a href="#" className="text-gray-300 hover:text-white block">Elektronika Ramah Lingkungan</a>
              <a href="#" className="text-gray-300 hover:text-white block">AI & Machine Learning</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Informasi</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-300 hover:text-white block">Publikasi</a>
              <a href="#" className="text-gray-300 hover:text-white block">Berita Riset</a>
              <a href="#" className="text-gray-300 hover:text-white block">Tim Peneliti</a>
              <a href="#" className="text-gray-300 hover:text-white block">Kemitraan</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2024 SELEB - Kelompok Riset Sistem Elektronika Cerdas Berkelanjutan
            </p>
            <p className="text-sm text-gray-400">
              Badan Riset dan Inovasi Nasional (BRIN)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
