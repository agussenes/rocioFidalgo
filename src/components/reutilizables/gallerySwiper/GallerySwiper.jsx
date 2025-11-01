import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./GallerySwiper.css";

/**
 * @param {Object} props
 * @param {{src:string, alt?:string, caption?:string}[]} props.items
 * @param {number} [props.perRow=4]         // cuántas miniaturas por fila en desktop (4 o 5)
 * @param {boolean} [props.lightbox=true]   // habilitar/deshabilitar lightbox
 * @param {boolean} [props.loop=true]       // loop del carrusel (solo si hay overflow)
 * @param {Object}  [props.breakpoints]     // override de breakpoints de Swiper
 * @param {string}  [props.className]       // clases extra para el wrapper
 */
export default function GallerySwiper({
    items,
    perRow = 5,
    lightbox = true,
    loop = true,
    breakpoints,
    className,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);

    // helper simple (reemplaza clsx)
    const cx = (...a) => a.filter(Boolean).join(" ");

    // 1) Breakpoints fijos según lo que pediste
    const bp = useMemo(
        () =>
            breakpoints ?? {
                0: { slidesPerView: 1, spaceBetween: 12 },   
                576: { slidesPerView: 1, spaceBetween: 12 },   
                768: { slidesPerView: 3, spaceBetween: 16 },   
                992: { slidesPerView: perRow, spaceBetween: 18 }, 
            },
        [breakpoints, perRow]
    );

    // 2) Calcular slidesPerView actual según el ancho
    const [slidesNow, setSlidesNow] = useState(1);
    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            const keys = Object.keys(bp).map(k => Number(k)).sort((a, b) => a - b);
            let found = bp[0];
            for (const k of keys) if (w >= k) found = bp[k];
            setSlidesNow(found.slidesPerView ?? 1);
        };
        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, [bp]);

    // 3) Overflow en este viewport
    const hasOverflow = (items?.length ?? 0) > slidesNow;

    const onThumbClick = (idx) => {
        if (!lightbox) return;
        setOpenIndex(idx);
        setIsOpen(true);
    };

    return (
        <div className={cx("gallery-sw", className)}>
            {/* Usamos SIEMPRE Swiper para garantizar 4 o 5 por fila exactos */}
            <Swiper
                modules={[Navigation, Pagination, Keyboard, A11y]}
                loop={hasOverflow && loop}
                navigation={hasOverflow}
                pagination={hasOverflow ? { clickable: true } : false}
                keyboard={{ enabled: true }}
                a11y={{ enabled: true }}
                breakpoints={bp}
                className="gallery-sw__swiper"
            >
                {items.map((it, i) => (
                    <SwiperSlide key={i} className="gallery-sw__slide">
                        <button
                            type="button"
                            className="gallery-sw__thumb h-100"
                            onClick={() => onThumbClick(i)}
                            aria-label={`Ver imagen ${i + 1} en grande`}
                        >
                            <img src={it.src} alt={it.alt ?? ""} />
                            {it.caption ? (
                                <span className="gallery-sw__caption"><small>{it.caption}</small></span>
                            ) : null}
                        </button>

                    </SwiperSlide>
                ))}
            </Swiper>

            {/* LIGHTBOX */}
            {lightbox && isOpen && (
                <div
                    className="gallery-sw__lightbox"
                    role="dialog"
                    aria-modal="true"
                    onClick={(e) => {
                        if (e.target.classList.contains("gallery-sw__lightbox")) setIsOpen(false);
                    }}
                >
                    <button
                        className="gallery-sw__close btn btn-light"
                        onClick={() => setIsOpen(false)}
                        aria-label="Cerrar"
                    >
                        ✕
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination, Keyboard, A11y]}
                        initialSlide={openIndex}
                        navigation
                        pagination={{ clickable: true }}
                        keyboard={{ enabled: true }}
                        a11y={{ enabled: true }}
                        className="gallery-sw__lightbox-swiper"
                    >
                        {items.map((it, i) => (
                            <SwiperSlide key={`lb-${i}`} className="gallery-sw__lightbox-slide">
                                <figure className="m-0">
                                    <img src={it.src} alt={it.alt ?? ""} />
                                    {it.caption ? <figcaption className="text-white">{it.caption}</figcaption> : null}
                                </figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

GallerySwiper.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
            caption: PropTypes.string,
        })
    ).isRequired,
    perRow: PropTypes.number,
    lightbox: PropTypes.bool,
    loop: PropTypes.bool,
    breakpoints: PropTypes.object,
    className: PropTypes.string,
};
