import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <>
      <section
        className="contenedorNotFound container-fluid m-0 p-0 py-4 d-flex align-items-center flex-column"
        data-aos="fade-in"                // anima el contenedor completo
        data-aos-offset="0"
      >
        <Container className="d-flex justify-content-center py-4" data-aos="zoom-in" data-aos-delay="50">
          <img
            src="/img/notFound.webp"
            alt="imagen de pagina no encontrado"
            height={400}
          />
        </Container>

        <Container className="d-flex justify-content-center py-4" data-aos="fade-up" data-aos-delay="150">
          <h1 className="colorTextNT tituloNT">Página no encontrada</h1>
        </Container>

        <Container className="d-flex justify-content-center py-4 contenedorBotonNT" data-aos="fade-up" data-aos-delay="250">
          <Link to="/" className="botonNotFound btn btn-lg rounded-pill">
            <i className="bi bi-arrow-left"></i> Volver
          </Link>
        </Container>
      </section>
    </>
  );
}

export default NotFound;
