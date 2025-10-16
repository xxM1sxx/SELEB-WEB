import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home route with root layout
  index("routes/home.tsx"),
  // Other main routes with root layout
  route("tentang", "routes/tentang.tsx"),
  route("penelitian", "routes/penelitian.tsx"),
  route("tim", "routes/tim.tsx"),
  route("data-tim-peneliti/:name", "routes/data_tim_peneliti.tsx"),
  // route("publikasi", "routes/publikasi.tsx"),
  route("berita", "routes/berita.tsx"),
  route("kontak", "routes/kontak.tsx"),
  // Admin routes
  route("admin/login", "admin/login.tsx"),
  route("admin/register", "admin/register.tsx"),
  route("admin/dashboard", "admin/dashboard.tsx"),
  // Admin content management routes
  route("admin/kelola_konten/kelola_berita", "admin/kelola_konten/kelola_berita.tsx"),
  route("admin/kelola_konten/kelola_publikasi", "admin/kelola_konten/kelola_publikasi.tsx"),
  route("admin/kelola_konten/kelola_peneliti", "admin/kelola_konten/kelola_peneliti.tsx"),
  route("admin/kelola_konten/kelola_student", "admin/kelola_konten/kelola_student.tsx"),
  // CRUD routes for kelola_peneliti
  route("admin/kelola_konten/crud_kelola_peneliti/tambah_peneliti", "admin/kelola_konten/crud_kelola_peneliti/tambah_peneliti.tsx"),
  route("admin/kelola_konten/crud_kelola_peneliti/edit_peneliti/:id", "admin/kelola_konten/crud_kelola_peneliti/edit_peneliti.tsx"),
  // CRUD routes for kelola_student
  route("admin/kelola_konten/crud_kelola_student/tambah_data_student", "admin/kelola_konten/crud_kelola_student/tambah_data_student.tsx"),
  route("admin/kelola_konten/crud_kelola_student/edit_data_student/:id", "admin/kelola_konten/crud_kelola_student/edit_data_student.tsx"),
] satisfies RouteConfig;
