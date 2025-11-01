import { Link, NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import LanguageSwitcher from "../utils/LanguageSwitcher";
import { useSearch } from "../search/SearchProvider";
import "./Header.css";

export default function Header() {
  const { setOpen } = useSearch();

  // --- controlar el collapse ---
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  // cerrar al cambiar de ruta (por navegación SPA)
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  const closeMenu = () => setExpanded(false);

  return (
    <header className="header ">
      <nav className="container-fluid p-0">

        {/* BLOQUE 3 — NAVBAR DARK */}
        <div className="container-fluid bloque-3 p-0">
          <Navbar
            expand="lg"
            variant="dark"
            data-bs-theme="dark"
            className="bg-custom border-top mb-0"
            expanded={expanded}
            onToggle={setExpanded}
          >
            <Container className="d-flex justify-content-between ">
              <div className="logoRo">
                <img src="/img/logoWhite.webp" alt="" height={60} />
              </div>

              <div>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/" onClick={closeMenu}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/quien-soy" onClick={closeMenu}>Quien soy</Nav.Link>
                    <Nav.Link as={NavLink} to="/quien-soy" onClick={closeMenu}>Planes</Nav.Link>
                    <Nav.Link as={NavLink} to="/contacto" onClick={closeMenu}>Contacto</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
              {/* Acciones derecha */}
              <div className="d-flex align-items-center gap-3 ms-lg-3">

                <div className="contenedorBusqueda">
                  <button type="button" className="btn-search" onClick={() => setOpen(true)}>
                    <i className="bi bi-search" />
                  </button>
                </div>
                <LanguageSwitcher />
              </div>
            </Container>
          </Navbar>
        </div>
      </nav>
    </header>
  );
}
