// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  // Variable für den aktuellen Tag oder eine Begrüßung
  const greeting = 'Schönen Tag noch!';

  // Berechnung
  const sum = 5 + 3;

  return (
    <>
      {/* Header Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Meine App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Über uns</Nav.Link>
              <Nav.Link href="#services">Dienstleistungen</Nav.Link>
              <Nav.Link href="#contact">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hauptinhalt */}
      <Container className="mt-5">
        <h1>Willkommen zu meiner ersten React-App</h1>
        <h2>{greeting}</h2>
        <h3>Das Ergebnis von 5 + 3 ist: {sum}</h3>
      </Container>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;
