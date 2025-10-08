import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home route with root layout
  index("routes/home.tsx"),
  // Other main routes with root layout
  route("tentang", "routes/tentang.tsx"),
  route("penelitian", "routes/penelitian.tsx"),
  route("tim", "routes/tim.tsx"),
  route("data-tim-peneliti/:name", "routes/data_tim_peneliti.tsx"),
  route("publikasi", "routes/publikasi.tsx"),
  route("berita", "routes/berita.tsx"),
  route("kontak", "routes/kontak.tsx"),
  // Admin routes
  route("admin/login", "admin/login.tsx"),
  route("admin/register", "admin/register.tsx"),
  route("admin/dashboard", "admin/dashboard.tsx"),
  // Admin content management routes
  route("admin/kelola_konten/kelola_berita", "admin/kelola_konten/kelola_berita.tsx"),
  route("admin/kelola_konten/kelola_publikasi", "admin/kelola_konten/kelola_publikasi.tsx"),
  route("admin/kelola_konten/kelola_tim", "admin/kelola_konten/kelola_tim.tsx"),
] satisfies RouteConfig;
