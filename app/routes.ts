import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home route with root layout
  index("routes/home.tsx"),
  // Other main routes with root layout
  route("tentang", "routes/tentang.tsx"),
  route("penelitian", "routes/penelitian.tsx"),
  route("tim", "routes/tim.tsx"),
  route("publikasi", "routes/publikasi.tsx"),
  route("berita", "routes/berita.tsx"),
  route("kontak", "routes/kontak.tsx"),
  route("login", "routes/login.tsx"),
] satisfies RouteConfig;
