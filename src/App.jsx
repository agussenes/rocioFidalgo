import { Helmet } from "@dr.pogodin/react-helmet";
import { site } from "./seo/config";
import { useEffect } from "react";
import AOS from "aos";
import AppRoutes from "./router.jsx";
import GoogleTranslate from "./components/shareds/utils/GoogleTranslate.jsx";

import Header from "./components/shareds/header/Header.jsx";
import Footer from "./components/shareds/footer/Footer.jsx";
import WhatsAppFloating from "./components/utils/whatsapp/WhatsAppFloating.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";

import SearchProvider from "./components/shareds/search/SearchProvider.jsx";
import FullscreenSearch from "./components/shareds/search/FullscreenSearch.jsx";

import './App.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <>

      <Helmet>
        {/* ====== Básicos ====== */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{site.name}</title>
        <meta name="application-name" content={site.name} />
        <meta name="generator" content="Vite + React" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="robots" content="index,follow" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="color-scheme" content="light dark" />

        {/* ====== Tema / UI ====== */}
        {/* Theme color dinámico según esquema de color del SO */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0b0f19" />

        {/* ====== PWA / iOS ====== */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={site.name} />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* ====== Favicons & Manifest (colocá los archivos en /public) ====== */}
        <link rel="icon" href="/img/favicon.png" sizes="any" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0b5ed7" />

        {/* ====== Social defaults (globales poco intrusivos) ====== */}
        <meta property="og:site_name" content={site.name} />
        <meta property="og:locale" content={site.locale} />
        {site.twitterUser && <meta name="twitter:site" content={site.twitterUser} />}
      </Helmet>
      <GoogleTranslate />
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100 contenedorApp">
        <SearchProvider>
          <Header />
          <div className="flex-grow-1">
            <AppRoutes />
          </div>
          <FullscreenSearch />
        </SearchProvider>
        <Footer />
      </div>
      <WhatsAppFloating />
    </>
  )
}

export default App
