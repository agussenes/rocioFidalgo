import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// estilo 

// imagenes 
import imgQS from '../../../../assets/img/home/quienSoy.webp'


export function PlanesEnHome() {

    return (
        <>
            <Container className='py-5'>
                <div className="text-center">
                    <h5 className="color-font-2 ">Planes de Entrenamiento</h5>
                    <h2 className="color-font-2 fw-bold text-uppercase">Elige el Plan Perfecto Para Ti</h2>
                    <p className="lead">
                        Todos los planes incluyen acceso completo a mi método de entrenamiento probado. <br className='ocultarEnMobile' />
                        Elige el que mejor se adapte a tus objetivos y compromiso.
                    </p>
                </div>
                <Row className='d-flex justify-content-center'>
                    <Col lg={4} md={6}>
                        <div className="card gap-3 p-3 shadow border-custom">
                            <div className="imgPlanes">
                                <img src={imgQS} alt="" className='img-fluid rounded' />
                            </div>
                            <h4 className='fw-bold color-font-2'>plan 1</h4>
                            <p>Como tu coach personal, trabajaremos en
                                conjunto para llevar a cabo tu objetivo
                                tomando la planificación como punto clave
                                para tu evolución física, avancemos juntos
                                a tu próximo nivel.</p>
                                <div className="d-flex justify-content-start">
                                <Link to='/planes' className='boton-web'>Ver más</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="card gap-3 p-3 shadow border-custom">
                            <div className="imgPlanes">
                                <img src={imgQS} alt="" className='img-fluid rounded' />
                            </div>
                            <h4 className='fw-bold color-font-2'>plan 2</h4>
                            <p>Como tu coach personal, trabajaremos en
                                conjunto para llevar a cabo tu objetivo
                                tomando la planificación como punto clave
                                para tu evolución física, avancemos juntos
                                a tu próximo nivel.</p>
                            <div className="d-flex justify-content-start">
                                <Link to='/planes' className='boton-web'>Ver más</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="card gap-3 p-3 shadow border-custom">
                            <div className="imgPlanes">
                                <img src={imgQS} alt="" className='img-fluid rounded' />
                            </div>
                            <h4 className='fw-bold color-font-2'>plan 3</h4>
                            <p>Como tu coach personal, trabajaremos en
                                conjunto para llevar a cabo tu objetivo
                                tomando la planificación como punto clave
                                para tu evolución física, avancemos juntos
                                a tu próximo nivel.</p>
                                <div className="d-flex justify-content-start">
                                <Link to='/planes' className='boton-web'>Ver más</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center py-4">
                    <Link to='/planes' className='boton-web'>Ver todos los planes</Link>
                </div>
            </Container>
        </>
    )
}