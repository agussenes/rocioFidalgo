// src/components/LanguageSwitcher.jsx
import { useEffect, useState } from "react";

function setGTranslateLang(lang) {
  const value = `/auto/${lang}`;
  document.cookie = `googtrans=${value};domain=${window.location.hostname};path=/`;
  document.cookie = `googtrans=${value};path=/`;
  // recargar para aplicar
  window.location.reload();
}

function getCurrentLang() {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!m) return "es";
  const parts = decodeURIComponent(m[1]).split("/");
  return parts[2] || "es";
}

export default function LanguageSwitcher() {
  const [active, setActive] = useState(getCurrentLang());
  useEffect(() => {
    const id = setInterval(() => setActive(getCurrentLang()), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="btn-group">
      <button
        className={`btn btn-sm ${active.startsWith("es") ? "btn-light" : "btn-outline-light"}`}
        onClick={() => setGTranslateLang("es")}
      >
        ES
      </button>
      <button
        className={`btn btn-sm ${active.startsWith("en") ? "btn-light" : "btn-outline-light"}`}
        onClick={() => setGTranslateLang("en")}
      >
        EN
      </button>
      <button
        className={`btn btn-sm ${active.startsWith("pt") ? "btn-light" : "btn-outline-light"}`}
        onClick={() => setGTranslateLang("pt")}
      >
        PT
      </button>
    </div>
  );
}
