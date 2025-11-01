// src/seo/Seo.jsx
import { Helmet } from "@dr.pogodin/react-helmet";
import JsonLD from "./JsonLD";
import { absoluteUrl, absoluteImage, buildTitle } from "./utils";
import { site } from "./config";

/**
 * Props comunes por página:
 * - title: string
 * - description: string
 * - path: string (ej: "/about") -> genera <link rel="canonical">
 * - image: string (ruta o absoluta)
 * - imageAlt: string
 * - type: 'website' | 'article' | etc (OG)
 * - noindex: boolean
 * - jsonld: object | object[] (Schema.org)
 */
export default function Seo({
  title,
  description,
  path = "/",
  image,
  imageAlt = site.name,
  type = "website",
  noindex = false,
  jsonld,
  children,
}) {
  const fullTitle = buildTitle(title);
  const canonical = absoluteUrl(path);
  const ogImg = absoluteImage(image);

  return (
    <>
      <Helmet prioritizeSeoTags defaultTitle={site.name} titleTemplate={`%s | ${site.name}`}>
        {/* Básicos */}
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={canonical} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        {noindex && <meta name="robots" content="noindex, nofollow" />}

        {/* Open Graph */}
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={site.locale} />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:alt" content={imageAlt} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        {site.twitterUser && <meta name="twitter:site" content={site.twitterUser} />}
        <meta name="twitter:title" content={fullTitle} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={ogImg} />
        <meta name="twitter:image:alt" content={imageAlt} />
      </Helmet>

      {/* JSON-LD opcional */}
      {jsonld && <JsonLD data={jsonld} />}

      {/* Permite inyectar tags extra desde la página (por ejemplo, <meta name="keywords" .../> ) */}
      {children}
    </>
  );
}
