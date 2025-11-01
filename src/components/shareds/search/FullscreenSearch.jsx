import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "./SearchProvider";
import "./search.css";

export default function FullscreenSearch() {
  const { open, setOpen, ready, query, setQuery, results, doSearch } = useSearch();
  const inputRef = useRef(null);
  const wasOpen = useRef(false);

  // Focus al abrir
  useEffect(() => {
    if (open && !wasOpen.current) {
      wasOpen.current = true;
      setTimeout(() => inputRef.current?.focus(), 0);
    }
    if (!open) wasOpen.current = false;
  }, [open]);

  // Bloquear scroll del body al abrir
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  return (
    <div className="gs-overlay" role="dialog" aria-modal="true" aria-label="Búsqueda">
      <button className="gs-close" aria-label="Cerrar" onClick={() => setOpen(false)}>
        ✕
      </button>

      <div className="gs-inner">
        <p className="gs-title">START TYPING AND PRESS ENTER TO SEARCH</p>

        <div className="gs-input-wrap">
          <i className="bi bi-search" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            placeholder={ready ? "Buscar…" : "Cargando índice…"}
            value={query}
            onChange={(e) => doSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && results?.[0]) {
                // Enter → ir al primer resultado
                setOpen(false);
              }
            }}
            disabled={!ready}
          />
        </div>

        {/* Resultados */}
        <div className="gs-results">
          {query && results.length === 0 && (
            <div className="gs-empty">Sin resultados para “{query}”.</div>
          )}
          {results.map((r) => (
            <Link key={r.id} to={r.path} className="gs-item" onClick={() => setOpen(false)}>
              <div className="gs-item-title">{r.title}</div>
              {r.snippet && <div className="gs-item-snippet">{r.snippet}</div>}
            </Link>
          ))}
        </div>

        <div className="gs-help">
          <span><kbd>Esc</kbd> cerrar</span>
          <span><kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> abrir</span>
        </div>
      </div>
    </div>
  );
}
