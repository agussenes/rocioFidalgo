// src/seo/utils.js
import { site } from "./config";

export function absoluteUrl(path = "/") {
  if (!path) return site.baseUrl;
  const clean = path.startsWith("http") ? path : `${site.baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  return clean.replace(/(?<!:)\/{2,}/g, "/").replace(":/", "://");
}

export function absoluteImage(src) {
  if (!src) return absoluteUrl(site.defaultImage);
  return src.startsWith("http") ? src : absoluteUrl(src);
}

export function buildTitle(title) {
  if (!title) return site.name;
  return `${title} | ${site.name}`;
}
