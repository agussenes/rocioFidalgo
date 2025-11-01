// src/seo/config.js
export const site = {
  name: import.meta.env.VITE_BRAND_NAME || "Rocio Fidalgo - Personal Trainer",
  baseUrl: (import.meta.env.VITE_SITE_URL || "http://localhost:5173").replace(/\/+$/, ""),
  defaultImage: import.meta.env.VITE_DEFAULT_OG || "/og-default.jpg",
  twitterUser: "@rociofidalgo", 
  locale: "es_AR",            
};
