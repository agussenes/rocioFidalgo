import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Footer.css'

function Footer() {
  return (
    <>
      <section className="d-flex-container-fluid bg-custom py-4 contenedorGenFooter">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col sm={12} md={6} lg={4} className="p-2 ">
              <img src="/img/logoWhite.webp" alt="" loading="lazy" className="imgFooter img-fluid" />

            </Col>
            <Col sm={12} md={6} lg={4} className="p-2 text-center">
              <h6 className=" text-uppercase  tituloFooter ">Soy Rocio Fidalgo</h6>

              <p className="lead text-light">
                argentina y graduada en la facultad de Educación Física Quality Isad, mi orientación esta basada en el entrenamiento físico y deportivo.</p>
            </Col>


            <Col sm={12} md={6} lg={4} className="p-2 d-flex flex-column align-items-center ">
              <h6 className=" text-uppercase  tituloFooter mb-3">Seguime en mis redes</h6>
              <div className="d-flex justify-content-center gap-4 ">
                <a href="http://" className="sciFooter"><i className="bi bi-instagram"></i></a>
                <a href="http://" className="sciFooter"><i className="bi bi-linkedin"></i></a>
                <a href="http://" className="sciFooter"><i className="bi bi-twitter-x"></i></a>
              </div>

            </Col>
          </Row>

        </Container>
      </section>
      <section className="d-flex-container-fluid bg-custom py-2">

        <Container>
          <hr className="border  border-white opacity-50 " />

          <Row className="d-flex justify-content-center">
            <Col lg={12}>
              <ul className="list-unstyled d-flex gap-4 justify-content-center ">
                <li ><Link to="/politica-de-privacidad" className="text-decoration-none linksFooterW"><small>Política de privacidad</small></Link></li>
                <li className="text-decoration-none linksFooterW">|</li>
                <li><Link to="/terminos-de-uso" className="text-decoration-none linksFooterW"><small>Términos de uso</small></Link></li>

              </ul>

            </Col>

            <Col lg={12} className="d-flex justify-content-center ">

              <p className="text-light"><small>Desarrollado por <a href="https://senestraridev.com/"> <img src="/img/logoSenestrariDev.webp" alt="logo de Usina Creativa, agencia de comunicacion acordo del desarrollo de esta web" height={25} className="mb-1" /></a> &copy; 2025 Rocio Fidalgo - Todos los derechos reservados</small> </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer