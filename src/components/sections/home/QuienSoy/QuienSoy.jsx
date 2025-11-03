import { Container, Row, Col } from 'react-bootstrap'

// estilo
import './QuienSoy.css'

// imagenes 
import imgQS from '../../../../assets/img/home/quienSoy.webp'

export function QuienSoy() {

    const cardInfo = [
        { icon: 'bi bi-1-circle display-5 color-font', titulo: 'Enfoque Personalizado', bajada: 'Cada plan está diseñado específicamente para tus objetivos y necesidades únicas' },
        { icon: 'bi bi-2-circle display-5 color-font', titulo: 'Resultados Rápidos', bajada: 'Metodología probada que te ayuda a ver resultados tangibles en poco tiempo.' },
        { icon: 'bi bi-3-circle display-5 color-font', titulo: 'Certificación Profesional', bajada: 'Certificado por las principales organizaciones de fitness internacionales.' },
        { icon: 'bi bi-4-circle display-5 color-font', titulo: 'Apoyo Continuo', bajada: 'Acompañamiento constante y motivación para mantener tu progreso.' },
    ]

    return (
        <>
            <Container className='py-5'>

                <Row className='align-items-center mb-5'>
                    <Col md={8} sm={12}>
                        <h2 className="color-font-2 text-uppercase fw-bold">Sobre Mí</h2>
                        <h5 className="color-font-2 ">Tu Compañera en el Camino Hacia el Éxito</h5>
                        <p className="lead">
                            Con más de 5 años de experiencia en el mundo del fitness, he ayudado a cientos de personas a transformar sus vidas. Mi enfoque combina ciencia del ejercicio, nutrición y psicología deportiva para crear programas que realmente funcionan.
                        </p>
                        <p className="lead">
                            Creo que cada persona es única y merece un plan diseñado específicamente para sus objetivos, estilo de vida y capacidades. No hay soluciones genéricas aquí, solo resultados reales.
                        </p>
                    </Col>
                    <Col md={4} sm={12}>
                        <img src={imgQS} alt="" className='img-fluid rounded' />
                    </Col>
                </Row>
                <Row className=''>
                    {cardInfo.map((inf) => (
                        <>
                            <Col lg={6} md={6} key={inf.titulo} className=' mb-3 '>

                                <div className="card gap-3 p-3 shadow border-custom">
                                    <div className="iconCardQS">
                                        <i className={inf.icon}></i>
                                    </div>
                                    <div className="titulo">
                                        <h4 className='fw-bold color-font-2'>{inf.titulo}</h4>
                                    </div>
                                    <div className="bajada">
                                        <p>
                                            {inf.bajada}
                                        </p>
                                    </div>
                                </div>

                            </Col>
                        </>
                    ))}
                </Row>

            </Container>
        </>
    )
}