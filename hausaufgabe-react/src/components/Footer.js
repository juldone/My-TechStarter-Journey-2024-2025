// src/components/Footer.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faEnvelope, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Footer() {
  return (
    <Navbar
      className="footer-navbar mt-5"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        padding: '20px',
        color: '#fff'
      }}
    >
      <Container className="d-flex justify-content-center">
        <Nav className="footer-nav">
          <Nav.Link href="#impressum" className="footer-link mx-3">
            <FontAwesomeIcon icon={faGavel} /> Impressum
          </Nav.Link>
          <Nav.Link href="#kontakt" className="footer-link mx-3">
            <FontAwesomeIcon icon={faEnvelope} /> Kontakt
          </Nav.Link>
          <Nav.Link href="#datenschutz" className="footer-link mx-3">
            <FontAwesomeIcon icon={faShieldAlt} /> Datenschutz
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
