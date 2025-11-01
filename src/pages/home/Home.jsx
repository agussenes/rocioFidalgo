import React from 'react'
import Seo from '../../seo/Seo';

// componentes UI 
import Portada from '../../components/reutilizables/portada/Portada';


// imagenes
import imgPortada from '../../assets/img/portadas/portadaHome.webp';
import imgPortadaMobile from '../../assets/img/portadas/portadaHomeMobile.webp';


function Home() {

    const bajadaPortada = (
        <>
        Soy personal trainer, coach de  <br /> crossfit y entrenadora en natación.
        </>
    )

    return (
        <>
            <Seo
                title="Inicio"
                description="Soy Rocio Fidalgo - personal trainer"
                path="/"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Soy Rocio Fidalgo - personal trainer",
                    "url": "https://dominio.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://dominio.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }}
            />
            <Portada
                title={'Soy Rocio Fidalgo'}
                bajada={bajadaPortada}
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
                overlay={true}
            />

        </>
    )
}

export default Home