import React from "react";
import "./Portada.css";

/**
 * Props:
 * - imageDesktop (string)
 * - imageMobile  (string)
 * - title?: string
 * - alt?: string
 * - overlay?: boolean (default true)
 * - desktopMinWidth?: number (default 992)
 * - className?: string
 * - children?: ReactNode
 */
export default function Portada({
  imageDesktop,
  imageMobile,
  title,
  bajada,
  alt = "Portada",
  overlay = true,
  desktopMinWidth = 992,
  className = "",
  children,
}) {
  return (
    <section className={`portada-fit ${className}`} aria-label={alt}>
      <picture className="portada-fit__picture">
        {/* Desktop desde el breakpoint que vos quieras */}
        <source media={`(min-width: ${desktopMinWidth}px)`} srcSet={imageDesktop} />
        {/* Fallback: mobile/tablet */}
        <img src={imageMobile} alt={alt} className="portada-fit__img" loading="eager" />
      </picture>

      {overlay && (
        <div className="portada-fit__overlay">

          <div className="container">
            {title && <div><h1 className="portada-fit__title">{title}</h1> <br /> </div>}
          {bajada && <div> <h3 className="portada-bajada">{bajada}</h3> </div>}
          {children}
          </div>
        </div>
      )}
    </section>
  );
}
