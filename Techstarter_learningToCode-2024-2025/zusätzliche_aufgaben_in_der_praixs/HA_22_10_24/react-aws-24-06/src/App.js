import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import ContentFooter from "./components/layout/navbar/ContentFooter"; // Neue Komponente importieren
import CustomTextField from "./components/layout/navbar/CustomTextField";

function App() {
  // State und Event-Handler definieren
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="main-container">
      {/* Navbar bleibt oben */}
      <Navbar />

      {/* Main-Bereich für Inhalte */}
      <main className="main-content">
        <h1>Trage hier ein was dir einfällt:</h1>
        <CustomTextField
          label="Your Name:"
          placeholder="Enter your name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>You typed: {inputValue}</p>
      </main>

      {/* Footer bleibt unten */}
      <ContentFooter /> {/* Neue Komponente hier */}
    </div>
  );
}

export default App;
