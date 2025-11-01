// src/components/GoogleTranslate.jsx
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Evitar cargar dos veces
    if (document.getElementById("gtranslate-script")) return;

    // Callback global para init
    window.googleTranslateElementInit = function googleTranslateElementInit() {
      /* global google */
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "es,en,pt",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Cargar el script de Google
    const s = document.createElement("script");
    s.id = "gtranslate-script";
    s.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.defer = true;
    document.body.appendChild(s);

    return () => {
      // Si desmontás el componente, opcionalmente podés remover el script
      // document.getElementById("gtranslate-script")?.remove();
    };
  }, []);

  return null;
}
