import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import MiniSearch from "minisearch";

// Contexto
const SearchCtx = createContext(null);
export const useSearch = () => useContext(SearchCtx);

/**
 * SearchProvider
 * - Carga un índice (array de docs) desde /search-index.json (o import local)
 * - Expone open/close, query, results, search()
 */
export default function SearchProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const miniRef = useRef(null);

  // Cargar índice (ajustá la ruta/estrategia)
  useEffect(() => {
    (async () => {
      // Opción A: servir un JSON estático desde /public/search-index.json
      const res = await fetch("/search-index.json", { cache: "no-store" });
      const docs = await res.json();

      // Config minisearch
      miniRef.current = new MiniSearch({
        fields: ["title", "content", "tags"],       // campos a indexar
        storeFields: ["title", "path", "snippet"],  // campos que devolvemos
        searchOptions: {
          boost: { title: 3, tags: 2, content: 1 },
          fuzzy: 0.2,
          prefix: true,
        },
      });
      miniRef.current.addAll(docs);
      setReady(true);
    })();
  }, []);

  // Buscar
  function doSearch(q) {
    setQuery(q);
    if (!q?.trim() || !miniRef.current) return setResults([]);
    const out = miniRef.current.search(q, { combineWith: "AND" })
      .slice(0, 12) // top 12
      .map(r => ({
        id: r.id,
        title: r.title,
        path: r.path,
        snippet: r.snippet,
        score: r.score,
      }));
    setResults(out);
  }

  // API pública
  const api = useMemo(() => ({
    open, setOpen,
    ready, query, setQuery,
    results, doSearch,
  }), [open, ready, query, results]);

  // Atajos: Ctrl/⌘+K para abrir; Esc para cerrar
  useEffect(() => {
    const onKey = (e) => {
      const modK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (modK) { e.preventDefault(); setOpen(true); }
      if (e.key === "Escape") { setOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return <SearchCtx.Provider value={api}>{children}</SearchCtx.Provider>;
}
